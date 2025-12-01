'use client';

import { useEffect, useState, useCallback, use } from 'react';
import Image from 'next/image';
import { Button, Spinner, Tooltip } from '@heroui/react';
import { useDebouncedCallback } from 'use-debounce';
import useProduct from '@/hooks/useProduct';
import { getCartItems, getWishlistItems } from '@/utils/actions';
import {
    WatchIcon,
    CartIcon,
    WishlistIcon,
    CheckIcon,
    FillWishlistIcon,
} from '@/components/SVG';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const { addToCart, addToWishlist, cartLoadingId, wishlistLoadingId } =
        useProduct();

    const { id, name, price, image, hoverImage } = product;

    const isAlreadyInCart = cartItems.some((item) => item.productId === id);
    const isAlreadyInWishlist = wishlistItems.some(
        (item) => item.productId === id
    );

    const debouncedAddToWishlist = useDebouncedCallback(
        (productId) => addToWishlist(productId),
        400
    );

    const debouncedAddToCart = useDebouncedCallback(
        (productId) => addToCart(productId),
        400
    );

    const fetchCartItems = useCallback(async () => {
        const items = await getCartItems();
        setCartItems(items);
    }, []);

    const fetchWishlistItems = useCallback(async () => {
        const items = await getWishlistItems();
        setWishlistItems(items);
    }, []);

    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems, addToCart]);

    useEffect(() => {
        fetchWishlistItems();
    }, [fetchWishlistItems, addToWishlist]);

    const tooltipClasses = {
        base: [''],
        content: ['py-2 px-4 rounded-lg'],
    };

    const imageClasses =
        'w-[220px] h-[293px] md:w-[280px] md:h-[370px] rounded-md absolute transition-all duration-700';

    return (
        <div className="group flex flex-col items-center justify-center">
            <div className="relative rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer">
                <Link href={`products/${id}`} className="">
                    <Image
                        src={image}
                        alt={String(id)}
                        height={370}
                        width={280}
                        className={`${imageClasses} group-hover:scale-105 group-hover:opacity-0`}
                    />
                    <Image
                        src={hoverImage}
                        alt={String(id)}
                        height={370}
                        width={280}
                        className={`${imageClasses} opacity-0 group-hover:opacity-100 hover:scale-105`}
                    />
                </Link>

                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center gap-3 transition-all duration-500">
                    <Tooltip
                        closeDelay={0}
                        content="View Product"
                        showArrow
                        classNames={tooltipClasses}
                    >
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                    </Tooltip>

                    <Tooltip
                        closeDelay={0}
                        content={
                            isAlreadyInWishlist
                                ? 'Already wishlisted'
                                : 'Add to wishlist'
                        }
                        showArrow
                        classNames={tooltipClasses}
                    >
                        <Button
                            className={`min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800`}
                            isDisabled={
                                isAlreadyInWishlist || !!wishlistLoadingId
                                    ? true
                                    : false
                            }
                            onPress={() => debouncedAddToWishlist(id)}
                        >
                            {wishlistLoadingId === id ? (
                                <Spinner
                                    classNames={{
                                        label: 'text-foreground mt-4',
                                        wrapper:
                                            'translate-y-0 justify-center items-center',
                                    }}
                                    variant="dots"
                                    color="danger"
                                />
                            ) : isAlreadyInWishlist ? (
                                <FillWishlistIcon />
                            ) : (
                                <WishlistIcon />
                            )}
                        </Button>
                    </Tooltip>

                    <Tooltip
                        closeDelay={0}
                        content={
                            isAlreadyInCart ? 'Already added' : 'Add to cart'
                        }
                        showArrow
                        classNames={tooltipClasses}
                    >
                        <Button
                            className={`min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800`}
                            isDisabled={
                                isAlreadyInCart || !!cartLoadingId
                                    ? true
                                    : false
                            }
                            onPress={() => debouncedAddToCart(id)}
                        >
                            {cartLoadingId === id ? (
                                <Spinner
                                    classNames={{
                                        label: 'text-foreground mt-4',
                                        wrapper:
                                            'translate-y-0 justify-center items-center',
                                    }}
                                    variant="dots"
                                    color="danger"
                                />
                            ) : isAlreadyInCart ? (
                                <CheckIcon />
                            ) : (
                                <CartIcon />
                            )}
                        </Button>
                    </Tooltip>
                </div>
            </div>

            <div className="text-center mt-5">
                <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                    <span>${price}</span>
                </h4>
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
