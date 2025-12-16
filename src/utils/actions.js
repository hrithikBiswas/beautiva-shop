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

export const isExistCategory = async (categoryName) => {
    const trimmedName = categoryName.trim();
    return prisma.category.findFirst({ where: { name: trimmedName } });
};

// ------------------ POST ------------------
export const addPost = async (post) => {
    try {
        await prisma.post.create({
            data: {
                productName: post.productName,
                title: post.title || '',
                slug: post.slug,
                content: post.content,
                image: post.image,
                published: post.published || true,
                userId: post.userId,
            },
        });
    } catch (error) {
        console.error('Error adding post:', error);
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

export const uploadPostImage = async (file) => {
    if (!file) return null;
    try {
        const supabase = await createClient();

        const ext = file.name.split('.').pop();
        const fileName = `post-${Date.now()}.${ext}`;

        const { error } = await supabase.storage
            .from('posts')
            .upload(fileName, file);

        if (error) throw error;

        const { data: urlData } = supabase.storage
            .from('posts')
            .getPublicUrl(fileName);

        return urlData.publicUrl;
    } catch (error) {
        console.error('Upload error:', error);
        return null;
    }
};

// ------------------ FETCHERS ------------------
export const getUsers = async () => await prisma.user.findMany();
