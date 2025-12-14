import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(request, { params }) {
    const { userId } = await params;

    try {
        const cartProductData = await prisma.cartItem.findMany({
            where: { userId },
            include: { product: true },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Cart Product loaded successfully.',
            cartProductData,
        });
    } catch (error) {
        console.error(`API /api/product/cart/${userId} error:`, error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load Cart Product',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
