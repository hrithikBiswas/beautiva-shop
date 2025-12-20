import React from 'react';
import CollectionProduct from '@/components/Home/CollectionProduct';
import Link from 'next/link';
import Title from '@/components/common/Title';

const ShopCollection = () => {
    return (
        <div className="mt-14 sm:mt-14 lg:mt-24">
            <Title
                title="shop by collections"
                subtitle="Because You Need Time for Yourself. Blend Beauty in You"
            />
            <div className="">
                <CollectionProduct />
                <div className="flex justify-center mt-8 sm:mt-14">
                    <Link
                        href="/products"
                        className=" bg-white dark:bg-black border-2 border-gray-200 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-sm text-medium tracking-wide py-2.5 px-8 hover:!opacity-100 transition-all duration-200"
                        size="lg"
                    >
                        Shop All Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCollection;
