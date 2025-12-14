import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET(request, { params }) {
    const { id } = await params;

    try {
        const singlePostData = await prisma.post.findUnique({
            where: { id },
            include: { user: true },
        });

        return NextResponse.json({
            success: true,
            status: 200,
            message: 'Single post loaded successfully.',
            singlePostData,
        });
    } catch (error) {
        console.error(`API /api/blog/${id} error:`, error.message);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load single post',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
