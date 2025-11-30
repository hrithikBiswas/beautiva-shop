'use client';

import { useEffect, useState, useCallback } from 'react';
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

const ProductCard = ({ product }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const { addToCart, addToWishlist, wishlistLoading, cartLoading } =
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

    // Fetch Cart Items
    const fetchCartItems = useCallback(async () => {
        const items = await getCartItems();
        setCartItems(items);
    }, []);

    // Fetch Wishlist Items
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
            <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer">
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

                <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                    {/* View */}
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
                            className={`min-w-fit h-fit p-2 rounded-full ${
                                isAlreadyInWishlist
                                    ? 'bg-gray-100'
                                    : 'bg-white hover:bg-gray-100'
                            } dark:bg-gray-950 dark:hover:bg-gray-800`}
                            disabled={isAlreadyInWishlist}
                            onPress={() => debouncedAddToWishlist(id)}
                        >
                            {wishlistLoading ? (
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
                            className={`min-w-fit h-fit p-2 rounded-full ${
                                isAlreadyInCart
                                    ? 'bg-gray-100'
                                    : 'bg-white hover:bg-gray-100'
                            } dark:bg-gray-950 dark:hover:bg-gray-800`}
                            disabled={isAlreadyInCart}
                            onPress={() => debouncedAddToCart(id)}
                        >
                            {cartLoading ? (
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
                <h4 className="text-lg md:text-xl capitalize">{name}</h4>
            </div>
        </div>
    );
};

export default ProductCard;
