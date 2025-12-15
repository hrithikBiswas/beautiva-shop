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
            return NextResponse.json({
                message: 'productId and userId are required',
                status: 400,
            });
        }

        if (qty <= 0) {
            return NextResponse.json({
                message: 'Quantity must be greater than 0',
                status: 400,
            });
        }

        const cartItem = await prisma.cartItem.upsert({
            where: {
                userId_productId: { userId, productId },
            },
            update: {
                quantity: {
                    increment: qty,
                },
            },
            create: {
                quantity: qty,
                productId,
                userId,
            },
        });

        const isNew = cartItem.quantity === qty;

        return NextResponse.json({
            message: isNew
                ? 'Product added to cart successfully'
                : 'Cart updated successfully',
            cartItem,
            status: isNew ? 201 : 200,
        });
    } catch (error) {
        console.error('Error updating cartItem:', error);
        return NextResponse.json({
            message: 'Internal server error',
            error: error.message,
            status: 500,
        });
    }
}

export async function PATCH(req) {
    try {
        const { cartId, userId, quantity } = await req.json();

        if (!cartId || !userId) {
            return NextResponse.json({
                message: 'cartId and userId are required',
                status: 400,
            });
        }

        if (quantity === 0) {
            await prisma.cartItem.delete({
                where: {
                    id: cartId,
                    userId: userId,
                },
            });

            return NextResponse.json({
                message: 'Product removed from cart successfully',
                status: 200,
            });
        }

        const cartItem = await prisma.cartItem.update({
            where: {
                id: cartId,
                userId: userId,
            },
            data: {
                quantity: quantity,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'Cart updated successfully',
            cartItem,
            status: 200,
        });
    } catch (error) {
        console.error('Error updating cart quantity:', error);

        if (error.code === 'P2025') {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Cart item not found',
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to update quantity',
                error:
                    process.env.NODE_ENV === 'development'
                        ? error.message
                        : 'Internal server error',
            },
            { status: 500 }
        );
    }
}
