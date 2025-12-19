'use client';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import Link from 'next/link';

const Breadcrumb = ({ currentPage }) => {
    return (
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <Breadcrumbs size="lg">
                <BreadcrumbItem>
                    <Link href="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>{currentPage}</BreadcrumbItem>
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;
