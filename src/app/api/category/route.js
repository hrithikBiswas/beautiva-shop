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

export async function POST(req) {
    try {
        const { values } = await req.json();
        const { name, slug, description } = values;

        if (!name || !slug) {
            return NextResponse.json({
                success: false,
                status: 204,
                message: 'Name and slug required',
            });
        }

        const category = await prisma.category.create({
            data: { name, slug, description },
        });

        return NextResponse.json({
            success: true,
            status: 201,
            message: 'category added successfully',
            category,
        });
    } catch (error) {
        console.error('Error adding category:', error);
        return NextResponse.json({
            message: 'Internal server error',
            error: error.message,
            status: 500,
        });
    }
}
