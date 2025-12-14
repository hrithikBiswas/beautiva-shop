import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(request, { params }) {
    const { id } = await params;

    try {
        const singleProductData = await prisma.product.findUnique({
            where: { id: id },
        });

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Single Product loaded successfully.',
            singleProductData,
        });
    } catch (error) {
        console.error(`API /api/product/${id} error:`, error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load single product',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
