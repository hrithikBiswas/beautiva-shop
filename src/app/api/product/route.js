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

export async function POST(req) {
    try {
        const { payload } = await req.json();

        const product = await prisma.product.create({
            data: {
                name: payload.productName,
                description: payload.description || '',
                price: payload.price,
                image: payload.image,
                hoverImage: payload.hoverImage,
                stock: payload.stock || 0,
                category: payload.category || '',
                featured: payload.featured || false,
                userId: payload.userId,
            },
        });

        return NextResponse.json({
            success: true,
            status: 201,
            message: 'Product added successfully',
            product,
        });
    } catch (error) {
        console.error('Error creating product:', error.message);

        return NextResponse.json({
            successe: false,
            status: 500,
            message: 'Internal server error',
            error: error.message,
        });
    }
}
