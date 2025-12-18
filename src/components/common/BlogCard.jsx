'use client';
import { Image } from '@heroui/react';
import Link from 'next/link';

const BlogCard = ({ blog }) => {
    const { id, productName, title, image, createdAt } = blog;

    const date = new Date(createdAt);

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <div className="flex flex-col gap-2 sm:gap-3">
            <Link href={`/blog/${id}`}>
                <Image
                    src={image}
                    className="hover:scale-105 max-h-[235px]"
                    classNames={{ wrapper: 'overflow-hidden' }}
                    radius="none"
                />
            </Link>
            <div className="uppercase text-base tracking-wider font-medium text-gray-400">
                <Link
                    href={`/blog/${id}`}
                    className="hover:text-gray-950 transition-colors duration-200"
                >
                    {productName}
                </Link>{' '}
                {' | '}
                <span>{formattedDate}</span>
            </div>
            <Link
                href={`/blog/${id}`}
                className="text-lg text-gray-800 dark:text-gray-100 sm:text-xl font-semibold leading-6 md:leading-7 lg:leading-8"
            >
                {title}
            </Link>
        </div>
    );
};

export default BlogCard;
