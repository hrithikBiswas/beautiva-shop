import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
    try {
        const blogData = await prisma.post.findMany();

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Blogs loaded successfully.',
            blogData,
        });
    } catch (error) {
        console.error('API /api/blog error:', error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load blogData',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
