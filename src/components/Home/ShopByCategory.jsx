'use client';
import React from 'react';
import Title from '@/components/common/Title';
import { Image } from '@heroui/react';

const ShopByCategory = () => {
    return (
        <div>
            <Title
                title="Shop by Categories"
                subtitle="Our products are designed for everyone."
            />
            <div className="grid grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-7 md:gap-8">
                <div className="overflow-hidden row-span-1 sm:row-span-2 col-span-4 md:col-span-2">
                    <Image
                        className="hover:scale-110 w-full sm:h-[330px] md:h-auto object-cover"
                        classNames={{
                            wrapper: 'max-w-none!',
                        }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category1.jpg"
                    />
                </div>
                <div className="overflow-hidden row-span-1 sm:row-auto col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        className="hover:scale-110 w-full"
                        classNames={{ wrapper: 'max-w-none!' }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category2.jpg"
                    />
                </div>
                <div className="overflow-hidden row-span-1 sm:row-auto col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        className="hover:scale-110 w-full"
                        classNames={{ wrapper: 'max-w-none!' }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category3.jpg"
                    />
                </div>
                <div className="overflow-hidden row-span-1 sm:row-auto col-span-4 md:col-span-2">
                    <Image
                        className="hover:scale-110 sm:w-full object-cover h-full"
                        classNames={{ wrapper: 'max-w-none! h-full' }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category4.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;
