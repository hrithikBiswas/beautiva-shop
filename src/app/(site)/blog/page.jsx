'use client';
import BlogCard from '@/components/common/BlogCard';
import BlogSkeleton from '@/components/skeleton/BlogSkeleton';
import useProduct from '@/hooks/useProduct';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';

const BlogPage = () => {
    const { blogs, loading } = useProduct();

    return (
        <div className="container pt-14">
            <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <Breadcrumbs size="lg">
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/blog">Blogs</BreadcrumbItem>
                </Breadcrumbs>
            </div>
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
