'use client';
import BlogCard from '@/components/common/BlogCard';
import useProduct from '@/hooks/useProduct';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';

const BlogPage = () => {
    const { blogs } = useProduct();

    return (
        <div className="container pt-10">
            <div className="mb-10">
                <Breadcrumbs size="lg">
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/blog">Blogs</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.id} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
