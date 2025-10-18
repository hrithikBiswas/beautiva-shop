'use client';
import React from 'react';
import CollectionProduct from '@/components/slider/CollectionProduct';
import { Button } from '@heroui/react';

const ShopCollection = () => {
    return (
        <div className="mt-24">
            <div className="max-w-2xl text-center mx-auto mb-8">
                <h2 className="text-xl uppercase mb-5">shop by collections</h2>
                <h1 className="text-3xl md:text-4xl font-semibold leading-9 md:leading-11">
                    Because You Need Time for Yourself. Blend Beauty in You{' '}
                </h1>
            </div>
            <div className="">
                <CollectionProduct />
                <div className="flex justify-center mt-8 sm:mt-14">
                    <Button
                        className=" bg-white border-2 border-gray-200 hover:bg-black hover:text-white rounded-sm text-medium tracking-wide px-8 hover:!opacity-100 transition-all duration-200"
                        size="lg"
                    >
                        Shop All Products
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ShopCollection;
