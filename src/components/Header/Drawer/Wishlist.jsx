'use client';

import { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Button,
    useDisclosure,
    Badge,
    Image,
    Spinner,
} from '@heroui/react';
import { FillWishlistIcon, WishlistIcon } from '@/components/SVG';
import useProduct from '@/hooks/useProduct';

export default function Wishlist() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const {
        totalWishlistItem,
        wishlistProduct,
        removeWishlist,
        removeWishlistLoadingId,
    } = useProduct();

    const [wishlistProducts, setWishlistProducts] = useState([]);

    // Fetch wishlist products once and after removal
    useEffect(() => {
        (async () => {
            const data = await wishlistProduct();
            setWishlistProducts(data);
        })();
    }, [removeWishlist]);

    return (
        <div className="hidden md:block">
            {/* Wishlist Icon */}
            <Button
                onPress={onOpen}
                className="min-w-6 min-h-6 p-0 bg-transparent overflow-visible"
            >
                <Badge
                    color="danger"
                    content={wishlistProducts.length}
                    shape="circle"
                    className="cursor-pointer"
                >
                    <WishlistIcon />
                </Badge>
            </Button>

            {/* Drawer */}
            <Drawer
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: { opacity: 1, x: 0, duration: 0.3 },
                        exit: { opacity: 0, x: 100, duration: 0.3 },
                    },
                }}
            >
                <DrawerContent className="bg-white text-black dark:bg-gray-950 dark:text-white">
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex justify-center flex-col gap-1">
                                <h2 className="font-semibold text-3xl py-3 text-center border-b border-gray-400">
                                    My Wishlist
                                </h2>
                            </DrawerHeader>

                            <DrawerBody className="pb-6 space-y-4">
                                {wishlistProducts.length === 0 && (
                                    <p className="text-xl text-gray-500">
                                        No products found in your wishlist!
                                    </p>
                                )}
                                {wishlistProducts.map(
                                    ({ id: wishlistId, product }) => (
                                        <div
                                            key={wishlistId}
                                            className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg p-2"
                                        >
                                            {/* Image */}
                                            <Image
                                                src={product?.image}
                                                alt={product?.name}
                                                className="w-[90px] h-[90px] object-cover rounded-lg"
                                            />

                                            {/* Info */}
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-700">
                                                    {product?.name}
                                                </h3>

                                                <p className="text-gray-700 text-sm">
                                                    <span className="font-semibold">
                                                        Price:
                                                    </span>{' '}
                                                    {product?.price}
                                                </p>

                                                <p className="text-gray-700 text-sm">
                                                    <span className="font-semibold">
                                                        Stock:
                                                    </span>{' '}
                                                    {product?.stock}
                                                </p>
                                            </div>

                                            {/* Remove Button */}
                                            <Button
                                                color="danger"
                                                radius="full"
                                                variant="flat"
                                                className="min-w-fit h-fit p-2 me-2"
                                                isDisabled={
                                                    removeWishlistLoadingId ===
                                                    wishlistId
                                                }
                                                onPress={() =>
                                                    removeWishlist(wishlistId)
                                                }
                                            >
                                                {removeWishlistLoadingId ===
                                                wishlistId ? (
                                                    <Spinner
                                                        variant="dots"
                                                        color="danger"
                                                    />
                                                ) : (
                                                    <FillWishlistIcon />
                                                )}
                                            </Button>
                                        </div>
                                    )
                                )}
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}
