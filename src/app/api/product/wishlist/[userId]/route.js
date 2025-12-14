import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(request, { params }) {
    const { userId } = await params;

    try {
        const wishlistProductData = await prisma.wishlist.findMany({
            where: { userId },
            include: { product: true },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Wishlist Product loaded successfully.',
            wishlistProductData,
        });
    } catch (error) {
        console.error(`API /api/wishlist/${userId} error:`, error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load Wishlist Product',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
