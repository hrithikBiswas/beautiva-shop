'use client';
import BlogCard from '@/components/common/BlogCard';
import Breadcrumb from '@/components/common/Breadcrumb';
import BlogSkeleton from '@/components/skeleton/BlogSkeleton';
import useProduct from '@/hooks/useProduct';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
import Link from 'next/link';

const BlogPage = () => {
    const { blogs, loading } = useProduct();

    return (
        <div className="container mt-6 sm:mt-8 md:mt-14">
            <Breadcrumb currentPage="Blogs" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {loading &&
                    Array.from({ length: 6 }).map((_, i) => (
                        <BlogSkeleton key={i} />
                    ))}
                {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.id} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
