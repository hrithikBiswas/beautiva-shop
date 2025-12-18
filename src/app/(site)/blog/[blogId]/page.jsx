'use client';
import SIngleBlogSkeleton from '@/components/skeleton/SIngleBlogSkeleton';
import useProduct from '@/hooks/useProduct';
import { use, useEffect, useState } from 'react';

const SingleBlog = ({ params }) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                setError(null);
                const data = await getSinglePost(blogId);
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (blogId) {
            fetchBlog();
        }
    }, [blogId]); // Only depend on blogId

    return (
        <div className="container py-14">
            {loading && <SIngleBlogSkeleton />}
            {blog && (
                <article className="">
                    <div className="mb-8">
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                            Product Name: {blog?.productName}
                        </p>
                        <h1 className="max-w-6xl text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            {blog?.title}
                        </h1>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <span>By {blog?.user.name}</span>
                            <span className="text-gray-300">•</span>
                            <span>{formattedDate}</span>
                            <span className="text-gray-300">•</span>
                            <span>{blog?.readTime || '5 min read'}</span>
                        </div>
                    </div>

                    <div className="mb-10 overflow-hidden">
                        <img
                            src={blog?.image}
                            alt={blog?.name}
                            className="max-w-[900px] h-auto rounded-lg object-cover transform"
                        />
                    </div>

                    <div className="article-content text-lg">
                        {blog?.content}
                    </div>
                </article>
            )}
        </div>
    );
};

export default SingleBlog;
