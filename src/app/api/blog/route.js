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

export async function POST(req) {
    try {
        const { payload } = await req.json();

        const post = await prisma.post.create({
            data: {
                productName: payload.productName,
                title: payload.title || '',
                slug: payload.slug,
                content: payload.content,
                image: payload.image,
                published: payload.publised || true,
                userId: payload.userId,
            },
        });

        return NextResponse.json({
            success: true,
            status: 201,
            message: 'Post added successfully!',
            post,
        });
    } catch (error) {
        console.error('Error creating post:', error.message);

        return NextResponse.json({
            successe: false,
            status: 500,
            message: 'Internal server error',
            error: error.message,
        });
    }
}
