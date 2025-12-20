'use client';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import Link from 'next/link';

const Breadcrumb = ({ currentPage }) => {
    return (
        <div className="mb-3 sm:mb-6 md:mb-8 lg:mb-10">
            <Breadcrumbs size="lg">
                <BreadcrumbItem
                    classNames={{
                        item: 'dark:text-zinc-400',
                        separator: 'dark:text-zinc-400',
                    }}
                >
                    <Link href="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem
                    classNames={{
                        item: 'dark:text-zinc-100',
                    }}
                >
                    {currentPage}
                </BreadcrumbItem>
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;
