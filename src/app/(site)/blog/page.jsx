'use client';
import { useMemo, useState } from 'react';
import BlogCard from '@/components/common/BlogCard';
import Breadcrumb from '@/components/common/Breadcrumb';
import BlogSkeleton from '@/components/skeleton/BlogSkeleton';
import useProduct from '@/hooks/useProduct';
import { Pagination } from '@heroui/react';

const BlogPage = () => {
    const [page, setPage] = useState(1);
    const { blogs } = useProduct();

    const blogsPerPage = 6;
    const pages = Math.ceil(blogs.length / blogsPerPage);

    const paginateBlogs = useMemo(() => {
        const start = (page - 1) * blogsPerPage;
        const end = start + blogsPerPage;

        return blogs.slice(start, end);
    }, [page, blogs]);

    return (
        <div className="container mt-6 sm:mt-8 md:mt-14">
            <Breadcrumb currentPage="Blogs" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {blogs.length === 0 &&
                    Array.from({ length: 6 }).map((_, i) => (
                        <BlogSkeleton key={i} />
                    ))}
                {paginateBlogs.map((blog, index) => (
                    <BlogCard blog={blog} key={blog.id} index={index} />
                ))}
            </div>
            <div className="flex w-full justify-center mt-10">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    radius="sm"
                    size="lg"
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                    classNames={{
                        base: '',
                        wrapper: 'text-4xl cursor-pointer',
                        item: 'text-xl dark:bg-zinc-800 dark:text-white data-hover:!rounded-md dark:data-hover:!bg-zinc-700 ',
                        next: 'text-xl dark:bg-zinc-800 dark:text-white dark:data-hover:!bg-zinc-700',
                        prev: 'text-xl dark:bg-zinc-800 dark:text-white dark:data-hover:!bg-zinc-700',
                    }}
                />
            </div>
        </div>
    );
};

export default BlogPage;
