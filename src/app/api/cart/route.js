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
