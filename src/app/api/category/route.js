import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
    try {
        const categoryData = await prisma.category.findMany();

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Category loaded successfully.',
            categoryData,
        });
    } catch (error) {
        console.error('API /api/category error:', error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load categoryData',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
