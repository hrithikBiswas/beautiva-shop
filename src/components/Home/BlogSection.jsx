'use client';
import React from 'react';
import Title from '@/components/common/Title';
import Link from 'next/link';
import useProduct from '@/hooks/useProduct';
import BlogCard from '@/components/common/BlogCard';

const BlogSection = () => {
    const { blogs } = useProduct();
    return (
        <div className="mt-10 sm:mt-14 lg:mt-24">
            <Title
                title="From Our Blog"
                subtitle="Our bundles were designed to conveniently package your tanning essentials while saving you money."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {blogs.slice(0, 3).map((blog) => (
                    <BlogCard blog={blog} key={blog.id} />
                ))}
            </div>
            <div className="flex justify-center mt-8 sm:mt-14">
                <Link
                    href="/blog"
                    className=" bg-white dark:bg-black border-2 border-gray-200 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-sm text-medium tracking-wide py-2.5 px-8 hover:!opacity-100 transition-all duration-200"
                    size="lg"
                >
                    View All Posts
                </Link>
            </div>
        </div>
    );
};

export default BlogSection;
