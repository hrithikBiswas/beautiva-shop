'use client';
import React from 'react';
import Title from '@/components/common/Title';
import { Button, Image } from '@heroui/react';

const ShopByCategory = () => {
    return (
        <div className="mt-24">
            <Title
                title="Shop by Categories"
                subtitle="Our products are designed for everyone."
            />
            <div className="grid grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-7 md:gap-8">
                <div className="group relative overflow-hidden row-span-1 sm:row-span-2 col-span-4 md:col-span-2">
                    <Image
                        className="group-hover:scale-110 w-full sm:h-[330px] md:h-auto object-cover"
                        classNames={{
                            wrapper: 'max-w-none!',
                        }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category1.jpg"
                    />
                    <Button
                        className="absolute bottom-8 z-10 left-1/2 -translate-x-1/2 bg-white hover:bg-[#4E7661] hover:text-white rounded-sm text-medium tracking-wide px-8 hover:!opacity-100 transition-all duration-200"
                        size="lg"
                    >
                        Skincare
                    </Button>
                </div>
                <div className="group relative overflow-hidden row-span-1 sm:row-auto col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        className="group-hover:scale-110 w-full"
                        classNames={{ wrapper: 'max-w-none!' }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category2.jpg"
                    />
                    <Button
                        className="absolute bottom-8 z-10 left-1/2 -translate-x-1/2 bg-white hover:bg-[#4E7661] hover:text-white rounded-sm text-medium tracking-wide px-8 hover:!opacity-100 transition-all duration-200"
                        size="lg"
                    >
                        Bodycare
                    </Button>
                </div>
                <div className="group relative overflow-hidden row-span-1 sm:row-auto col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        className="group-hover:scale-110 w-full"
                        classNames={{ wrapper: 'max-w-none!' }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category3.jpg"
                    />
                    <Button
                        className="absolute bottom-8 z-10 left-1/2 -translate-x-1/2 bg-white hover:bg-[#4E7661] hover:text-white rounded-sm text-medium tracking-wide px-8 hover:!opacity-100 transition-all duration-200"
                        size="lg"
                    >
                        Accessories
                    </Button>
                </div>
                <div className="group relative overflow-hidden row-span-1 sm:row-auto col-span-4 md:col-span-2">
                    <Image
                        className="group-hover:scale-110 sm:w-full object-cover h-full"
                        classNames={{ wrapper: 'max-w-none! h-full' }}
                        radius="none"
                        alt="shop-by-category"
                        src="/shop-by-category4.jpg"
                    />
                    <Button
                        className="absolute bottom-8 z-10 left-1/2 -translate-x-1/2 bg-white hover:bg-[#4E7661] hover:text-white rounded-sm text-medium tracking-wide px-8 hover:!opacity-100 transition-all duration-200"
                        size="lg"
                    >
                        Haircare
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;
