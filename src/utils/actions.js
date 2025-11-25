import { cookies } from 'next/headers';
import prisma from './prisma';
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
                stock,
                category,
                userId,
                featured,
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
    'use server';
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error; // or throw error if you want to handle it outside
    }
};

export const getProducts = async () => {
    'use server';
    try {
        const products = await prisma.product.findMany();

        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const setUserCookie = async (user) => {
    console.log(user);

    const cookieStore = await cookies();
    return cookieStore.set('user', user);
};
