'use server';

import { prisma } from './prisma';
import { createClient } from './supabase/server';

export const addUser = async (user) => {
    // console.log(user);

    try {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: {
                id: user.id,
                email: user.email,
                name: user.user_metadata.full_name,
                image: user.user_metadata.avatar_url,
            },
        });
    } catch (error) {
        console.error('Error syncing user:', error);
    }
};
export const addProduct = async (product) => {
    const {
        productName,
        description,
        price,
        image,
        hoverImage,
        stock,
        category,
        userId,
        featured,
    } = product;
    try {
        await prisma.product.create({
            data: {
                name: productName,
                description,
                price,
                image,
                hoverImage,
                stock,
                category,
                featured,
                userId,
            },
        });
    } catch (error) {
        console.error('Error syncing user:', error);
    }
};
export const addCategory = async (category) => {
    const { name, slug, description } = category;
    try {
        await prisma.category.create({
            data: {
                name,
                slug,
                description,
            },
        });
    } catch (error) {
        console.error('Error syncing user:', error);
    }
};
export const addCartItem = async (productId, userId, qty) => {
    const product = await prisma.cartItem.findFirst({
        where: {
            productId: productId,
        },
    });

    if (product) {
        const totalQty = product.quantity + qty;
        const updateCart = await prisma.cartItem.update({
            where: {
                userId_productId: {
                    userId,
                    productId,
                },
            },
            data: {
                quantity: totalQty,
            },
        });
        console.log(updateCart);

        return { updateCart, message: 'Cart updated successfully' };
    }

    try {
        const addCart = await prisma.cartItem.create({
            data: {
                quantity: qty || 1,
                productId,
                userId,
            },
        });

        return { addCart, message: 'Product added to cart successfully' };
    } catch (error) {
        console.error('Error syncing cartItem:', error);
    }
    // try {
    //     await prisma.cartItem.create({
    //         data: {
    //             productId,
    //             userId,
    //         },
    //     });
    // } catch (error) {
    //     console.error('Error syncing cartItem:', error);
    // }
};
export const addWishlist = async (productId, userId) => {
    try {
        await prisma.wishlist.create({
            data: {
                productId,
                userId,
            },
        });
    } catch (error) {
        console.error('Error syncing wishlist:', error);
    }
};

export const isExistCategory = async (categoryName) => {
    const category = await prisma.category.findFirst({
        where: {
            name: categoryName.trim(),
        },
    });
    return category ? true : false;
};

export const uploadProductImage = async (file) => {
    const supabase = await createClient();
    if (!file) return null;

    const fileExt = file.name.split('.').pop();
    const fileName = `product-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
        .from('products')
        .upload(filePath, file);

    if (error) {
        console.error('Upload error:', error);
        return null;
    }

    const { data: urlData } = supabase.storage
        .from('products')
        .getPublicUrl(filePath);

    return urlData.publicUrl;
};

export const getUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // or throw error if you want to handle it outside
    }
};
export const getCategories = async () => {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; // or throw error if you want to handle it outside
    }
};

export const getProducts = async () => {
    try {
        const products = await prisma.product.findMany();

        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
export const getCartItems = async () => {
    try {
        const cartItems = await prisma.cartItem.findMany();

        return cartItems;
    } catch (error) {
        console.error('Error fetching cartItems:', error);
        throw error;
    }
};
export const getWishlistItems = async () => {
    try {
        const wishlistItems = await prisma.wishlist.findMany();

        return wishlistItems;
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        throw error;
    }
};
export const getWishlistProduct = async (userId) => {
    try {
        const products = await prisma.wishlist.findMany({
            where: {
                userId: userId, // logged-in user
            },
            include: {
                product: true,
            },
        });

        return products;
    } catch (error) {
        console.error('Error fetching wishlist product:', error);
        throw error;
    }
};
export const getSingleProduct = async (productId) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
        });

        return product;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};
export const deleteWishlist = async (wishlistId) => {
    try {
        const deleteData = await prisma.wishlist.delete({
            where: {
                id: wishlistId,
            },
        });

        console.log('success delete:', deleteData);

        return deleteData;
    } catch (error) {
        console.error('Error deleting wishlist:', error);
        throw error;
    }
};
