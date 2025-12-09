import { NextResponse } from 'next/server';
import { getProducts } from '@/utils/actions';

export async function GET() {
    try {
        const products = await getProducts();

        return NextResponse.json(
            { success: true, data: products },
            { status: 200 }
        );
    } catch (error) {
        console.error('API /api/products error:', error);

        // Return JSON (not HTML) on failure
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to load products',
                error: error?.message || 'Unknown error',
            },
            { status: 500 }
        );
    }
}
