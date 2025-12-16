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

export async function POST(req) {
    try {
        const { productId, userId } = await req.json();

        const wishlist = await prisma.wishlist.create({
            data: { productId, userId },
        });

        return NextResponse.json({
            success: true,
            status: 201,
            message: 'Added to wishlist',
            wishlist,
        });
    } catch (error) {
        console.error('Error adding wishlist:', error.message);

        return NextResponse.json({
            successe: false,
            status: 500,
            message: 'Internal server error',
            error: error.message,
        });
    }
}

export async function DELETE(req) {
    try {
        const { wishlistId, userId } = await req.json();

        const removeWishlist = await prisma.wishlist.delete({
            where: {
                id: wishlistId,
                userId,
            },
        });

        return NextResponse.json({
            success: true,
            status: 410,
            message: 'Product removed from wishlist',
            removeWishlist,
        });
    } catch (error) {
        console.error('Error deleting wishlist:', error.message);

        return NextResponse.json({
            successe: false,
            status: 500,
            message: 'Internal server error',
            error: error.message,
        });
    }
}
