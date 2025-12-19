import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    NavbarItem,
} from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarIcon } from '@/components/SVG';
import { navMenu } from '@/constant/navData';
import Search from './Search';
import Wishlist from './Wishlist';
import Cart from './Cart';
import UserDropdown from '../UserDropdown';

export default function MobileMenu({
    user,
    signOut,
    selectedTheme,
    handleThemeChange,
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const pathname = usePathname().split('/')[1];

    return (
        <div className="flex md:hidden">
            <button className="" onClick={onOpen}>
                <BarIcon />
            </button>
            <Drawer
                size="xs"
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
                            <DrawerBody className="mt-14">
                                {navMenu.map(({ name, path }, index) => (
                                    <NavbarItem
                                        key={index}
                                        onClick={onClose}
                                        className="py-1"
                                    >
                                        <Link
                                            href={path}
                                            className={`${
                                                path.split('/')[1] === pathname
                                                    ? 'after:w-full'
                                                    : 'after:w-0'
                                            }  relative text-xl text-foreground dark:text-background after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-foreground dark:after:bg-gray-100 after:transition-all after:duration-200 hover:after:w-full`}
                                        >
                                            {name}
                                        </Link>
                                    </NavbarItem>
                                ))}
                            </DrawerBody>
                            
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}
