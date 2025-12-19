'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

import { useTheme } from 'next-themes';
import { useAuth } from '@/hooks';
import { LoginIcon } from '../SVG';

import Search from './Drawer/Search';
import Wishlist from './Drawer/Wishlist';
import Cart from './Drawer/Cart';
import MobileMenu from './Drawer/MobileMenu';
import { navMenu } from '@/constant/navData';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserDropdown from './UserDropdown';
import LoadingAnimation from '../Loader/LoadingAnimation';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { signOut, user } = useAuth();

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    useEffect(() => setMounted(true), []);
    if (!mounted) return <LoadingAnimation />;

    return (
        <Navbar
            className="bg-white dark:bg-gray-950"
            classNames={{
                base: 'dark:border-gray-700',
            }}
            shouldHideOnScroll
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            height="80px"
        >
            {/* Mobile Logo */}
            <NavbarContent className="md:hidden" justify="start">
                <NavbarBrand className="cursor-pointer">
                    <Logo className="w-[120px] h-auto sm:w-[140px]" />
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Logo + NavLinks */}
            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <NavbarBrand className="mr-4 cursor-pointer">
                    <Logo />
                </NavbarBrand>
                {user && <NavLinks links={navMenu} />}
            </NavbarContent>

            {/* Right side - Auth / User */}
            <NavbarContent
                as="div"
                className="items-center gap-0.5 sm:gap-6"
                justify="end"
            >
                {!user ? (
                    <NavbarItem className="cursor-pointer">
                        <Link href="/login">
                            <LoginIcon />
                        </Link>
                    </NavbarItem>
                ) : (
                    <>
                        <Search />
                        <Wishlist />
                        <Cart />
                        <UserDropdown
                            user={user}
                            signOut={signOut}
                            selectedTheme={theme}
                            handleThemeChange={handleThemeChange}
                        />
                        <MobileMenu />
                    </>
                )}
            </NavbarContent>
        </Navbar>
    );
}
