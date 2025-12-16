import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
    try {
        const users = await prisma.user.findMany();

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'UserData loaded successfully.',
            users,
        });
    } catch (error) {
        console.error('API /api/user error:', error.message);

        return NextResponse.json({
            success: false,
            status: 500,
            message: 'Failed to load user',
            error: error?.message || 'Unknown error',
        });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { user } = body;

        if (!user || !user.email || !user.id) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Invalid user data: email and id are required',
                },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Invalid email format',
                },
                { status: 400 }
            );
        }

        const upsertedUser = await prisma.user.upsert({
            where: {
                email: user.email,
            },
            update: {
                name: user.user_metadata?.full_name || user.name || '',
                image: user.user_metadata?.avatar_url || user.image || '',
            },
            create: {
                id: user.id,
                email: user.email,
                name: user.user_metadata?.full_name || user.name || '',
                image: user.user_metadata?.avatar_url || user.image || '',
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'User synchronized successfully',
                user: {
                    id: upsertedUser.id,
                    email: upsertedUser.email,
                    name: upsertedUser.name,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error syncing user:', error);

        if (error.code === 'P2002') {
            return NextResponse.json(
                {
                    success: false,
                    message: 'User with this email already exists',
                },
                { status: 409 }
            );
        }

        if (error.code === 'P2003') {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Foreign key constraint failed',
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to sync user',
                error:
                    process.env.NODE_ENV === 'development'
                        ? error.message
                        : 'Internal server error',
            },
            { status: 500 }
        );
    }
}
