"use client";

import useProduct from "@/hooks/useProduct";
import ProductCard from "@/components/common/ProductCard";

export default function CollectionProduct() {
    const { products, loading } = useProduct();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-y-8">
            {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
