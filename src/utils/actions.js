'use server';

import { prisma } from './prisma';
import { createClient } from './supabase/server';

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
