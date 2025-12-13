'use client';

import { usePathname } from 'next/navigation';
import {
    DashborardIcon,
    LeftArrowIcon,
    ProductIcon,
    SettingIcon,
    StoreIcon,
    TagIcon,
    UsersIcon,
} from '@/components/SVG';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const pathName = usePathname().split('/')[2];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Toggle Button - Hidden on desktop */}
            <button
                className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-800 text-white rounded-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isMobileMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            <div
                className={`
                fixed sm:relative
                w-full sm:w-64 bg-indigo-800 text-white min-h-screen p-4
                transform transition-transform duration-300 ease-in-out z-40
                ${
                    isMobileMenuOpen
                        ? 'translate-x-0'
                        : '-translate-x-full sm:translate-x-0'
                }
            `}
            >
                <div className="flex flex-col justify-between min-h-screen">
                    <div>
                        <div className="flex items-center space-x-2 pb-4 border-b border-indigo-700">
                            <StoreIcon />
                            <h1 className="text-xl font-bold">Admin Panel</h1>
                        </div>
                        <nav className="py-4">
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/admin"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={`flex items-center space-x-2 p-2 rounded ${
                                            pathName === undefined
                                                ? 'bg-indigo-900'
                                                : 'hover:bg-indigo-700'
                                        } `}
                                    >
                                        <DashborardIcon />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin/product"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={`flex items-center space-x-2 p-2 rounded ${
                                            pathName === 'product'
                                                ? 'bg-indigo-900'
                                                : 'hover:bg-indigo-700'
                                        } `}
                                    >
                                        <ProductIcon />
                                        <span>Products</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin/post"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={`flex items-center space-x-2 p-2 rounded ${
                                            pathName === 'post'
                                                ? 'bg-indigo-900'
                                                : 'hover:bg-indigo-700'
                                        } `}
                                    >
                                        <ProductIcon />
                                        <span>posts</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin/category"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={`flex items-center space-x-2 p-2 rounded ${
                                            pathName === 'category'
                                                ? 'bg-indigo-900'
                                                : 'hover:bg-indigo-700'
                                        } `}
                                    >
                                        <TagIcon />
                                        <span>Categories</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-700"
                                    >
                                        <UsersIcon />
                                        <span>Users</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-700"
                                    >
                                        <SettingIcon />
                                        <span>Settings</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Link
                        className="flex items-center gap-1.5 py-2 px-3 rounded hover:bg-indigo-700 mb-16"
                        href="/"
                    >
                        <LeftArrowIcon /> Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
