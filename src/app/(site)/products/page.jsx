'use client';

import ProductCard from '@/components/common/ProductCard';
import ProductSkeleton from '@/context/skeleton/ProductSkeleton';
import useProduct from '@/hooks/useProduct';
import { Slider, CheckboxGroup, Checkbox } from '@heroui/react';
import { useState, useMemo } from 'react';

const ProductsPage = () => {
    const [priceRange, setPriceRange] = useState([0, 150]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const { products, loading, categories } = useProduct();

    const [minPrice, maxPrice] = priceRange;
    const hasCategoryFilter = selectedCategories.length > 0;

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const inPriceRange =
                product.price >= minPrice && product.price <= maxPrice;

            const inSelectedCategory =
                !hasCategoryFilter ||
                selectedCategories.includes(product.category);

            return inPriceRange && inSelectedCategory;
        });
    }, [products, minPrice, maxPrice, selectedCategories, hasCategoryFilter]);

    const categoryCount = useMemo(() => {
        const countMap = {};
        products.forEach((product) => {
            countMap[product.category] = (countMap[product.category] || 0) + 1;
        });
        return countMap;
    }, [products]);

    return (
        <div className="container py-14">
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-xs">
                    <h2 className="text-2xl font-semibold mb-4">Price</h2>

                    <div className="flex flex-col gap-2 w-full pr-6">
                        <Slider
                            className="max-w-md"
                            label="Select a budget"
                            minValue={0}
                            maxValue={200}
                            step={10}
                            value={priceRange}
                            formatOptions={{
                                style: 'currency',
                                currency: 'USD',
                            }}
                            onChangeEnd={setPriceRange}
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mb-4 mt-10">
                        Category
                    </h2>

                    <CheckboxGroup
                        label="Select categories"
                        onChange={setSelectedCategories}
                    >
                        {categories.map((category) => (
                            <Checkbox
                                key={category.id}
                                value={category.name}
                                classNames={{
                                    base: 'max-w-full',
                                    label: 'flex w-full',
                                }}
                            >
                                <span className="flex-1 dark:text-white">
                                    {category.name}
                                </span>

                                <span className="dark:text-white">
                                    {categoryCount[category.name] || 0}
                                </span>
                            </Checkbox>
                        ))}
                    </CheckboxGroup>
                </aside>

                {/* Product Grid */}
                <main className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8">
                        {loading &&
                            Array.from({ length: 6 }).map((_, index) => (
                                <ProductSkeleton key={index} />
                            ))}

                        {filteredProducts.length === 0 && (
                            <p className="text-xl text-gray-600">
                                Not found products.
                            </p>
                        )}
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductsPage;
