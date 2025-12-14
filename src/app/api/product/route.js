import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
    try {
        const productData = await prisma.product.findMany();

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Products loaded successfully.',
            productData,
        });
    } catch (error) {
        console.error('API /api/products error:', error);

        // Return JSON (not HTML) on failure
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load productData',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
