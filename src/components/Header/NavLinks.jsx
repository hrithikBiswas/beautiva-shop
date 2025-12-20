'use client';
import { NavbarItem } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ links }) => {
    const pathname = usePathname().split('/')[1];
    return (
        <>
            {links.map(({ name, path }, index) => (
                <NavbarItem key={index}>
                    <Link
                        href={path}
                        className={`${
                            path.split('/')[1] === pathname
                                ? 'after:w-full'
                                : 'after:w-0'
                        }  relative text-xl text-foreground dark:text-background after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gray-700 after:transition-all after:duration-200 hover:after:w-full`}
                    >
                        {name}
                    </Link>
                </NavbarItem>
            ))}
        </>
    );
};

export default NavLinks;
