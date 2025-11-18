'use server';

import { prisma } from './prisma';

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

export const getUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // or throw error if you want to handle it outside
    }
};
