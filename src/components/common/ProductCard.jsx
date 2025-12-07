'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Spinner, Tooltip } from '@heroui/react';
import { useDebouncedCallback } from 'use-debounce';
import useProduct from '@/hooks/useProduct';
import {
    WatchIcon,
    CartIcon,
    WishlistIcon,
    CheckIcon,
    FillWishlistIcon,
    FillCartIcon,
} from '@/components/SVG';

const ProductCard = ({ product }) => {
    const {
        addToCart,
        addToWishlist,
        cartLoadingId,
        wishlistLoadingId,
        isAlreadyInCart,
        isAlreadyInWishlist,
    } = useProduct();

    const { id, name, price, image, hoverImage } = product;

    // Debounced actions
    const debouncedAddToWishlist = useDebouncedCallback(() => {
        addToWishlist(id);
        isAlreadyInWishlist(id);
    }, 400);

    const debouncedAddToCart = useDebouncedCallback(() => addToCart(id), 400);

    const imageClasses =
        'w-[220px] h-[293px] md:w-[280px] md:h-[370px] rounded-md absolute transition-all duration-700';

    const tooltipClasses = {
        content: ['py-2 px-4 rounded-lg'],
    };

    return (
        <div className="group flex flex-col items-center justify-center">
            <div className="relative rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer">
                <Link href={`products/${id}`}>
                    <Image
                        src={image}
                        alt={name}
                        height={370}
                        width={280}
                        className={`${imageClasses} group-hover:scale-105 group-hover:opacity-0`}
                    />

                    <Image
                        src={hoverImage}
                        alt={name}
                        height={370}
                        width={280}
                        className={`${imageClasses} opacity-0 group-hover:opacity-100 hover:scale-105`}
                    />
                </Link>

                {/* Buttons */}
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center gap-3 transition-all duration-500">
                    {/* View Product */}
                    <Tooltip
                        content="View Product"
                        showArrow
                        classNames={tooltipClasses}
                    >
                        <Link href={`products/${id}`}>
                            <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                                <WatchIcon />
                            </Button>
                        </Link>
                    </Tooltip>

                    {/* Wishlist */}
                    <Tooltip
                        content={
                            isAlreadyInWishlist(id)
                                ? 'Already Wishlisted'
                                : 'Add to Wishlist'
                        }
                        showArrow
                        classNames={tooltipClasses}
                    >
                        <Button
                            className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                            isDisabled={
                                isAlreadyInWishlist(id) ||
                                wishlistLoadingId === id
                            }
                            onPress={debouncedAddToWishlist}
                        >
                            {wishlistLoadingId === id ? (
                                <Spinner variant="dots" color="danger" />
                            ) : isAlreadyInWishlist(id) ? (
                                <FillWishlistIcon />
                            ) : (
                                <WishlistIcon />
                            )}
                        </Button>
                    </Tooltip>

                    {/* Cart */}
                    <Tooltip
                        content={
                            isAlreadyInCart(id)
                                ? 'Already Added'
                                : 'Add to Cart'
                        }
                        showArrow
                        classNames={tooltipClasses}
                    >
                        <Button
                            className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                            isDisabled={
                                isAlreadyInCart(id) || cartLoadingId === id
                            }
                            onPress={debouncedAddToCart}
                        >
                            {cartLoadingId === id ? (
                                <Spinner variant="dots" color="danger" />
                            ) : isAlreadyInCart(id) ? (
                                // <CheckIcon />
                                <FillCartIcon />
                            ) : (
                                <CartIcon />
                            )}
                        </Button>
                    </Tooltip>
                </div>
            </div>

            {/* Product Info */}
            <div className="text-center mt-5">
                <h4 className="text-lg md:text-xl mb-1">${price}</h4>
                <Link
                    href={`products/${id}`}
                    className="text-lg md:text-xl capitalize hover:underline"
                >
                    {name}
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
