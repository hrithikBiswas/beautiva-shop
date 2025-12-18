'use client';

import useProduct from '@/hooks/useProduct';
import ProductCard from '@/components/common/ProductCard';
import ProductSkeleton from '@/components/skeleton/ProductSkeleton';

export default function CollectionProduct() {
    const { products, loading } = useProduct();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-y-8">
            {loading &&
                Array.from({ length: 8 }).map((_, index) => (
                    <ProductSkeleton key={index} />
                ))}
            {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
