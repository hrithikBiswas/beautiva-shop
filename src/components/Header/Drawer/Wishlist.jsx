import { useEffect, useState } from 'react';
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
import { WishlistIcon } from '@/components/SVG';
import useProduct from '@/hooks/useProduct';

export default function Wishlist() {
    const [isInvisible, setIsInvisible] = useState(false);
    const [totalWishlist, setTotalWishlist] = useState(0);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { totalWishlistItem } = useProduct();

    console.log('count:', totalWishlist);

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
                            <DrawerHeader className="flex flex-col gap-1">
                                Custom Motion Drawer
                            </DrawerHeader>
                            <DrawerBody>
                                <p>
                                    This drawer has custom enter/exit
                                    animations.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
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
        </div>
    );
}
