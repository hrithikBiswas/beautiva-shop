'use client';

import { MinusIcon, PlusIcon, WishlistIcon } from '@/components/SVG';
import useProduct from '@/hooks/useProduct';
import { Button } from '@heroui/react';
import React, { use, useEffect, useState } from 'react';

const SingleProductPage = ({ params }) => {
    const { productId } = use(params);
    const { singleProduct } = useProduct();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await singleProduct(productId);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [singleProduct, productId]);

    // Loading state
    if (loading) return <p className="container py-20">Loading...</p>;

    // If no product found
    if (!product) {
        return (
            <p className="container py-20 text-red-600 text-lg">
                Product not found.
            </p>
        );
    }

    // Quantity handlers
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="container">
            <div className="grid grid-cols-6 gap-20 py-24">
                {/* Left: Image Section */}
                <div className="col-span-2 flex flex-col gap-4">
                    <div className="rounded-lg max-h-[400px]">
                        <img
                            className="rounded-lg max-h-[400px] w-full object-cover"
                            src={product?.image || '/placeholder.jpg'}
                            alt={product?.name}
                        />
                    </div>

                    {/* Thumbnail images (optional) */}
                    <div className="flex gap-4">
                        <button className="w-28 h-28 rounded-lg">
                            <img
                                className="rounded-lg w-28 h-28 object-cover"
                                src={product?.image}
                                alt={product?.name}
                            />
                        </button>
                        <button className="w-28 h-28 rounded-lg">
                            <img
                                className="rounded-lg w-28 h-28 object-cover"
                                src={product?.hoverImage}
                                alt={product?.name}
                            />
                        </button>
                    </div>
                </div>

                {/* Right: Details Section */}
                <div className="col-span-4 flex flex-col gap-8 px-4">
                    <h2 className="text-3xl font-semibold capitalize">
                        {product?.name}
                    </h2>

                    <p className="text-lg">{product?.description}</p>

                    {/* Product Info */}
                    <table className="max-w-[400px]">
                        <tbody>
                            <tr>
                                <td className="py-2 w-[150px] font-semibold text-lg tracking-wide">
                                    Price:
                                </td>
                                <td className="py-2 text-lg">
                                    ${product?.price || 0}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 font-semibold text-lg tracking-wide">
                                    Stock:
                                </td>
                                <td className="py-2 text-lg">
                                    {product?.stock || 0}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 font-semibold text-lg tracking-wide">
                                    Category:
                                </td>
                                <td className="py-2 text-lg">
                                    {product?.category || '-'}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Add to Cart Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center space-x-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                    onClick={decrement}
                                    className="p-3 rounded-s-lg hover:bg-gray-200 cursor-pointer"
                                >
                                    <MinusIcon className="w-6 h-6 text-gray-600 dark:text-white" />
                                </button>

                                <input
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    max={product?.stock}
                                    readOnly
                                    className="w-14 text-center text-lg border-0 outline-none focus:ring-0"
                                />

                                <button
                                    onClick={increment}
                                    className="p-3 rounded-e-lg hover:bg-gray-200 cursor-pointer"
                                >
                                    <PlusIcon className="w-6 h-6 text-gray-600 dark:text-white" />
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <Button
                                size="lg"
                                color="secondary"
                                radius="sm"
                                className="flex-1 text-white font-semibold py-3 px-6"
                            >
                                Add to Cart
                            </Button>

                            {/* Wishlist */}

                            <Button
                                color="danger"
                                radius="sm"
                                variant="flat"
                                className="min-w-fit h-fit p-2"
                            >
                                <WishlistIcon />
                            </Button>
                        </div>

                        {/* Buy Now */}
                        <Button
                            radius="sm"
                            size="lg"
                            className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-6"
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
