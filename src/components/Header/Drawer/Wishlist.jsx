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
    const [isInvisible, setIsInvisible] = useState(false);
    const [totalWishlist, setTotalWishlist] = useState(0);
    const [wishlistProducts, setWishlistProduct] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        totalWishlistItem,
        wishlistItems,
        wishlistProduct,
        removeWishlist,
        removeWishlistLoadingId,
    } = useProduct();

    useEffect(() => {
        (async () => {
            const count = await totalWishlistItem();
            setTotalWishlist(count);
        })();
    }, [totalWishlistItem, totalWishlist]);

    useEffect(() => {
        (async () => {
            const data = await wishlistProduct();
            setWishlistProduct(data);
        })();
    }, [wishlistProduct, removeWishlist]);

    return (
        <div className="hidden md:block">
            <Button
                onPress={onOpen}
                className="min-w-6 min-h-6 p-0 bg-transparent overflow-visible"
            >
                <Badge
                    color="danger"
                    content={totalWishlist}
                    isInvisible={isInvisible}
                    shape="circle"
                    className="cursor-pointer"
                >
                    <WishlistIcon />
                </Badge>
            </Button>
            <Drawer
                backdrop="blur"
                isOpen={isOpen}
                motionProps={{
                    variants: {
                        enter: {
                            opacity: 1,
                            x: 0,
                            duration: 0.3,
                        },
                        exit: {
                            x: 100,
                            opacity: 0,
                            duration: 0.3,
                        },
                    },
                }}
                onOpenChange={onOpenChange}
            >
                <DrawerContent className="bg-white text-black dark:bg-gray-950 dark:text-white">
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex justify-center flex-col gap-1">
                                <h2 className="font-semibold text-3xl py-3 text-center border-b-1 border-gray-400">
                                    My Wishlist
                                </h2>
                            </DrawerHeader>
                            <DrawerBody className="pb-6">
                                {wishlistProducts.map((wishlistProduct) => {
                                    const { id: wishlistId, product } =
                                        wishlistProduct;
                                    return (
                                        <div
                                            key={product?.id}
                                            className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg"
                                        >
                                            <div className="w-[90px] h-[90px] rounded-lg">
                                                <Image
                                                    className="w-[90px] h-[90px] object-cover rounded-lg"
                                                    src={product?.image}
                                                    alt="feature-product1"
                                                />
                                            </div>
                                            <div className="flex-1 h-[-webkit-fill-available]">
                                                <h3 className="font-semibold text-medium text-gray-700">
                                                    {product?.name}
                                                </h3>
                                                <div className="text-gray-700">
                                                    <span className="text-sm font-semibold text-gray-600">
                                                        price:
                                                    </span>
                                                    <span className="text-sm">
                                                        {' '}
                                                        {product?.price}
                                                    </span>
                                                </div>
                                                <div className="text-gray-700">
                                                    <span className="text-sm font-semibold text-gray-600">
                                                        In-Stock:
                                                    </span>
                                                    <span className="text-sm">
                                                        {' '}
                                                        {product?.stock}
                                                    </span>
                                                </div>
                                            </div>
                                            <Button
                                                color="danger"
                                                radius="full"
                                                variant="flat"
                                                className="min-w-fit h-fit p-2 me-2"
                                                isDisabled={
                                                    removeWishlistLoadingId
                                                        ? true
                                                        : false
                                                }
                                                onPress={() =>
                                                    removeWishlist(wishlistId)
                                                }
                                            >
                                                {removeWishlistLoadingId ===
                                                wishlistId ? (
                                                    <Spinner
                                                        classNames={{
                                                            label: 'text-foreground mt-4',
                                                            wrapper:
                                                                'translate-y-0 justify-center items-center',
                                                        }}
                                                        variant="dots"
                                                        color="danger"
                                                    />
                                                ) : (
                                                    <FillWishlistIcon />
                                                )}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}
