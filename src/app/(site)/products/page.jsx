'use client';

import Breadcrumb from '@/components/common/Breadcrumb';
import ProductCard from '@/components/common/ProductCard';
import CategorySkeleton from '@/components/skeleton/CategorySkeleton';
import ProductSkeleton from '@/components/skeleton/ProductSkeleton';
import useProduct from '@/hooks/useProduct';
import { Slider, CheckboxGroup, Checkbox, Pagination } from '@heroui/react';
import Link from 'next/link';
import { useState, useMemo } from 'react';

const ProductsPage = () => {
    const [page, setPage] = useState(1);
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

    const productsPerPage = 6;
    const pages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginateProducts = useMemo(() => {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;

        return filteredProducts.slice(start, end);
    }, [page, filteredProducts]);

    const categoryCount = useMemo(() => {
        const countMap = {};
        products.forEach((product) => {
            countMap[product.category] = (countMap[product.category] || 0) + 1;
        });
        return countMap;
    }, [products]);

    return (
        <div className="container mt-6 sm:mt-8 md:mt-14">
            <Breadcrumb currentPage="Products" />
            <div className="flex flex-col md:flex-row">
                <aside className="w-full md:w-xs mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold mb-1 sm:mb-2 md:mb-4">
                        Price
                    </h2>

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

                    <h2 className="text-2xl font-semibold mb-1 sm:mb-2 md:mb-4 mt-4 md:mt-10">
                        Category
                    </h2>

                    <CheckboxGroup
                        label="Select categories"
                        onChange={setSelectedCategories}
                        classNames={{
                            wrapper: 'flex flex-row md:flex-col',
                        }}
                    >
                        {categories.length === 0 && <CategorySkeleton />}
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

                                <span className="hidden md:inline dark:text-white">
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

                        {paginateProducts.length === 0 && (
                            <p className="text-xl text-gray-600">
                                Not found products.
                            </p>
                        )}
                        {paginateProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="flex w-full justify-center mt-10">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            radius="sm"
                            size="lg"
                            color="secondary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                            classNames={{
                                base: '',
                                wrapper: 'text-4xl cursor-pointer',
                                item: 'text-xl dark:bg-zinc-800 dark:text-white data-hover:!rounded-md dark:data-hover:!bg-zinc-700 ',
                                next: 'text-xl dark:bg-zinc-800 dark:text-white dark:data-hover:!bg-zinc-700',
                                prev: 'text-xl dark:bg-zinc-800 dark:text-white dark:data-hover:!bg-zinc-700',
                            }}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductsPage;
