import { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Button,
    useDisclosure,
    Badge,
} from '@heroui/react';
import { FillWishlistIcon, WishlistIcon } from '@/components/SVG';
import useProduct from '@/hooks/useProduct';

export default function Wishlist() {
    const [isInvisible, setIsInvisible] = useState(false);
    const [totalWishlist, setTotalWishlist] = useState(0);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { totalWishlistItem } = useProduct();

    useEffect(() => {
        (async () => {
            const count = await totalWishlistItem();
            setTotalWishlist(count);
        })();
    }, [totalWishlistItem, totalWishlist]);

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
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg">
                                    <div className="w-[90px] h-[90px] rounded-lg">
                                        <img
                                            className="w-[90px] h-[90px] object-cover rounded-lg"
                                            src="/feature-product1.jpg"
                                            alt="feature-product1"
                                        />
                                    </div>
                                    <div className="flex-1 h-[-webkit-fill-available]">
                                        <h3 className="font-semibold text-medium text-gray-700">
                                            Natural coconut cleansing oil
                                        </h3>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                price:
                                            </span>
                                            <span className="text-sm">
                                                {' '}
                                                $45
                                            </span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span className="text-sm font-semibold text-gray-600">
                                                In-Stock:
                                            </span>
                                            <span className="text-sm"> 5</span>
                                        </div>
                                    </div>
                                    <Button
                                        color="danger"
                                        radius="full"
                                        variant="flat"
                                        className="min-w-fit h-fit p-2 me-2"
                                    >
                                        <FillWishlistIcon />
                                    </Button>
                                </div>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}
