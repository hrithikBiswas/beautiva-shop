import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Badge,
} from '@heroui/react';
import { CartIcon, FillWishlistIcon } from '@/components/SVG';
import useProduct from '@/hooks/useProduct';

export default function Cart() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { totalCartItem } = useProduct();

    return (
        <>
            <Button
                onPress={onOpen}
                className="min-w-6 min-h-6 p-0 bg-transparent overflow-visible"
            >
                <Badge
                    color="danger"
                    content={totalCartItem}
                    shape="circle"
                    className="cursor-pointer"
                >
                    <CartIcon />
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
                                <h2 className="font-semibold text-3xl py-3 text-center border-b border-gray-400">
                                    My Cart
                                </h2>
                            </DrawerHeader>
                            <DrawerBody className="pb-6 space-y-4">
                                <div className="flex items-center gap-3 ring ring-gray-200 shadow-md rounded-lg p-2">
                                    {/* Image */}
                                    <Image
                                        src="/feature-product2.jpg"
                                        alt="product2"
                                        className="w-[90px] h-[90px] object-cover rounded-lg"
                                    />

                                    {/* Info */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-700">
                                            body wash
                                        </h3>

                                        <p className="text-gray-700 text-sm">
                                            <span className="font-semibold">
                                                Price:
                                            </span>{' '}
                                            $45
                                        </p>

                                        <p className="text-gray-700 text-sm">
                                            <span className="font-semibold">
                                                Stock:
                                            </span>{' '}
                                            5
                                        </p>
                                    </div>

                                    {/* Remove Button */}
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
                            <DrawerFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
