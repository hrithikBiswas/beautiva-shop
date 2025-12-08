'use server';

import { prisma } from './prisma';
import { createClient } from './supabase/server';

// ------------------ USER ------------------
export const addUser = async (user) => {
    try {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: {
                id: user.id,
                email: user.email,
                name: user.user_metadata?.full_name || '',
                image: user.user_metadata?.avatar_url || '',
            },
        });
    } catch (error) {
        console.error('Error syncing user:', error);
        throw error;
    }
};

// ------------------ PRODUCT ------------------
export const addProduct = async (product) => {
    try {
        await prisma.product.create({
            data: {
                name: product.productName,
                description: product.description || '',
                price: product.price,
                image: product.image,
                hoverImage: product.hoverImage,
                stock: product.stock || 0,
                category: product.category || '',
                featured: product.featured || false,
                userId: product.userId,
            },
        });
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// ------------------ CATEGORY ------------------
export const addCategory = async ({ name, slug, description }) => {
    try {
        await prisma.category.create({
            data: { name, slug, description },
        });
    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }
};

export const isExistCategory = async (categoryName) => {
    const trimmedName = categoryName.trim();
    return prisma.category.findFirst({ where: { name: trimmedName } });
};

// ------------------ CART ------------------
export const addCartItem = async (productId, userId, qty = 1) => {
    try {
        const existing = await prisma.cartItem.findUnique({
            where: { userId_productId: { userId, productId } },
        });

        if (existing) {
            const updated = await prisma.cartItem.update({
                where: { userId_productId: { userId, productId } },
                data: { quantity: existing.quantity + qty },
            });
            return { message: 'Cart updated successfully', updated };
        }

        const created = await prisma.cartItem.create({
            data: { quantity: qty, productId, userId },
        });

        return { message: 'Product added to cart successfully', created };
    } catch (error) {
        console.error('Error updating cartItem:', error);
        throw error;
    }
};

export const updateProductQtyInCart = async (cartId, userId, quantity) => {
    try {
        const safeQty = Math.max(1, quantity); // prevent 0 or negative

        const updated = await prisma.cartItem.update({
            where: { id: cartId, userId: userId },
            data: { quantity: safeQty },
        });

        return updated;
    } catch (error) {
        console.error('Error updating cart quantity:', error);
        return null;
    }
};

export const deleteCart = async (cartId) => {
    try {
        return await prisma.cartItem.delete({
            where: { id: cartId },
        });
    } catch (error) {
        console.error('Error deleting cart:', error);
        throw error;
    }
};

// ------------------ WISHLIST ------------------
export const addWishlist = async (productId, userId) => {
    try {
        return await prisma.wishlist.create({
            data: { productId, userId },
        });
    } catch (error) {
        console.error('Error adding wishlist:', error);
        throw error;
    }
};

export const deleteWishlist = async (wishlistId) => {
    try {
        return await prisma.wishlist.delete({
            where: { id: wishlistId },
        });
    } catch (error) {
        console.error('Error deleting wishlist:', error);
        throw error;
    }
};

// ------------------ SUPABASE IMAGE UPLOAD ------------------
export const uploadProductImage = async (file) => {
    if (!file) return null;
    try {
        const supabase = await createClient();

        const ext = file.name.split('.').pop();
        const fileName = `product-${Date.now()}.${ext}`;

        const { error } = await supabase.storage
            .from('products')
            .upload(fileName, file);

        if (error) throw error;

        const { data: urlData } = supabase.storage
            .from('products')
            .getPublicUrl(fileName);

        return urlData.publicUrl;
    } catch (error) {
        console.error('Upload error:', error);
        return null;
    }
};

// ------------------ FETCHERS ------------------
export const getUsers = async () => await prisma.user.findMany();
export const getCategories = async () => await prisma.category.findMany();
export const getProducts = async () => await prisma.product.findMany();
export const getCartItems = async () => await prisma.cartItem.findMany();
export const getWishlistItems = async () => await prisma.wishlist.findMany();

export const getWishlistProduct = async (userId) => {
    return await prisma.wishlist.findMany({
        where: { userId },
        include: { product: true },
        orderBy: { createdAt: 'desc' },
    });
};

export const getCartProduct = async (userId) => {
    return await prisma.cartItem.findMany({
        where: { userId },
        include: { product: true },
        orderBy: { createdAt: 'desc' },
    });
};

export const getSingleProduct = async (productId) => {
    return await prisma.product.findUnique({ where: { id: productId } });
};
