'use client';
import Breadcrumb from '@/components/common/Breadcrumb';
import SIngleBlogSkeleton from '@/components/skeleton/SIngleBlogSkeleton';
import useProduct from '@/hooks/useProduct';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';

const SingleBlog = ({ params }) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const { blogId } = use(params);

    const { getSinglePost } = useProduct();

    const date = new Date(blog?.createdAt);

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const data = await getSinglePost(blogId);
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };

        if (blogId) {
            fetchBlog();
        }
    }, [blogId]);

    return (
        <div className="container mt-6 sm:mt-8 md:mt-14">
            <Breadcrumb currentPage="Blog" />
            {loading && <SIngleBlogSkeleton />}
            {blog && (
                <article className="">
                    <div className="mb-4 md:mb-8">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-1 md:mb-2 ">
                            Product Name: {blog?.productName}
                        </p>
                        <h1 className="max-w-6xl text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-7 sm:leading-8 lg:leading-tight mb-2 md:mb-4">
                            {blog?.title}
                        </h1>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-200 space-x-4">
                            <span>By {blog?.user.name}</span>
                            <span className="text-gray-300">•</span>
                            <span>{formattedDate}</span>
                            <span className="text-gray-300">•</span>
                            <span>{blog?.readTime || '5 min read'}</span>
                        </div>
                    </div>

                    <div className="mb-4 sm:mb-6 md:mb-10 overflow-hidden rounded-lg">
                        <img
                            src={blog?.image}
                            alt={blog?.name}
                            className="w-full lg:max-w-[900px] h-auto rounded-lg object-cover transform"
                        />
                    </div>

                    <div className="article-content text-lg text-justify">
                        {blog?.content}
                    </div>
                </article>
            )}
        </div>
    );
};

export default SingleBlog;
