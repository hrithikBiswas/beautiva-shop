'use client';
import React from 'react';
import Title from '@/components/common/Title';
import { Button, Image } from '@heroui/react';
import Link from 'next/link';

const BlogSection = () => {
    return (
        <div className="mt-24">
            <Title
                title="From Our Blog"
                subtitle="Our bundles were designed to conveniently package your tanning essentials while saving you money."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="flex flex-col gap-2 sm:gap-3">
                    <Image
                        src="/blog-1.jpg"
                        className="hover:scale-105 max-h-[235px]"
                        classNames={{ wrapper: 'overflow-hidden' }}
                        radius="none"
                    />
                    <div className="uppercase text-base tracking-wider font-medium text-gray-400">
                        {/* tag */}
                        <Link
                            href="#"
                            className="hover:text-gray-950 transition-colors duration-200"
                        >
                            Natural cleansers
                        </Link>{' '}
                        {' | '}
                        <span>JAN 10, 2025</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold leading-6 md:leading-7 lg:leading-8">
                        Tips & Procedure To Apply Luxury Beauty Cosmetic Cream
                    </h2>
                </div>
                <div className="flex flex-col gap-3">
                    <Image
                        src="/blog-2.jpg"
                        className="hover:scale-105 max-h-[235px]"
                        classNames={{ wrapper: 'overflow-hidden' }}
                        radius="none"
                    />
                    <div className="uppercase text-base tracking-wider font-medium text-gray-400">
                        {/* tag */}
                        <Link
                            href="#"
                            className="hover:text-gray-950 transition-colors duration-200"
                        >
                            Natural cleansers
                        </Link>{' '}
                        {' | '}
                        <span>JAN 10, 2025</span>
                    </div>
                    <h2 className="text-xl font-semibold">
                        Tips & Procedure To Apply Luxury Beauty Cosmetic Cream
                    </h2>
                </div>
                <div className="flex flex-col gap-3">
                    <Image
                        src="/blog-3.jpg"
                        className="hover:scale-105 max-h-[235px]"
                        classNames={{ wrapper: 'overflow-hidden' }}
                        radius="none"
                    />
                    <div className="uppercase text-base tracking-wider font-medium text-gray-400">
                        {/* tag */}
                        <Link
                            href="#"
                            className="hover:text-gray-950 transition-colors duration-200"
                        >
                            Natural cleansers
                        </Link>{' '}
                        {' | '}
                        <span>JAN 10, 2025</span>
                    </div>
                    <h2 className="text-xl font-semibold">
                        Tips & Procedure To Apply Luxury Beauty Cosmetic Cream
                    </h2>
                </div>
            </div>
            <div className="flex justify-center mt-8 sm:mt-14">
                <Button
                    className=" bg-white border-2 border-gray-200 hover:bg-black hover:text-white rounded-sm text-medium tracking-wide px-8 hover:!opacity-100 transition-all duration-200"
                    size="lg"
                >
                    View All Posts
                </Button>
            </div>
        </div>
    );
};

export default BlogSection;
