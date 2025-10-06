import { NavbarItem } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NavLinks = ({ links }) => (
    <>
        {links.map(({ name, path }, index) => (
            <NavbarItem key={index}>
                <Link
                    href={path}
                    className="text-xl text-foreground dark:text-background"
                >
                    {name}
                </Link>
            </NavbarItem>
        ))}
    </>
);

export default NavLinks;
