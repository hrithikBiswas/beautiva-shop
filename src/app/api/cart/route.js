import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
    try {
        const cartData = await prisma.cartItem.findMany();

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'cartData loaded successfully.',
            cartData,
        });
    } catch (error) {
        console.error('API /api/cart error:', error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load cartData',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const { productId, userId, qty = 1 } = await req.json();

        if (!productId || !userId) {
            return NextResponse.json(
                { message: 'productId and userId are required' },
                { status: 400 }
            );
        }

        if (qty <= 0) {
            return NextResponse.json(
                { message: 'Quantity must be greater than 0' },
                { status: 400 }
            );
        }
    } catch (error) {}
}
