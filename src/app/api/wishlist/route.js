import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
    try {
        const wishlistData = await prisma.wishlist.findMany();

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Wishlist loaded successfully.',
            wishlistData,
        });
    } catch (error) {
        console.error('API /api/wishlist error:', error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load wishlistData',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
