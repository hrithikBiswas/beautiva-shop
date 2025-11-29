'use client';

import { usePathname } from 'next/navigation';
import {
    DashborardIcon,
    ProductIcon,
    SettingIcon,
    StoreIcon,
    TagIcon,
    UsersIcon,
} from '@/components/SVG';
import Link from 'next/link';

const Header = () => {
    const pathName = usePathname().split('/')[2];

    return (
        <div className="w-64 bg-indigo-800 text-white min-h-screen p-4">
            <div className="flex items-center space-x-2 pb-4 border-b border-indigo-700">
                <StoreIcon />
                <h1 className="text-xl font-bold">Admin Panel</h1>
            </div>
            <nav className="py-4">
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/admin"
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
                            href="/admin/category"
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
                            className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-700"
                        >
                            <UsersIcon />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-700"
                        >
                            <SettingIcon />
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
