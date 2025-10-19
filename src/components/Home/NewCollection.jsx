'use client';
import { Button, Image } from '@heroui/react';
import React from 'react';

const NewCollection = () => {
    return (
        <div className="mt-14 sm:mt-24">
            <div className="relative w-full">
                <Image
                    src="/bg-other-01.jpg"
                    alt="new-collection"
                    className="w-full min-h-[275px] sm:min-h-[430px] object-cover"
                    classNames={{ wrapper: '!max-w-none' }}
                    radius="none"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 z-10 grid grid-cols-1 sm:grid-cols-2">
                    <div className="sm:col-start-2 flex items-center ps-12 sm:ps-24">
                        <div className="flex flex-col items-start gap-y-4 sm:gap-y-5">
                            <h3 className="uppercase text-xl text-black">
                                new Collection
                            </h3>
                            <h1 className="capitalize text-3xl text-black tracking-wide sm:text-4xl font-semibold leading-10">
                                Get The Skin You <br /> Want To Feel
                            </h1>
                            <Button
                                className="bg-white hover:bg-[#4E7661] hover:text-white rounded-sm text-medium tracking-wide px-8 mt-2 hover:!opacity-100 transition-all duration-200"
                                size="lg"
                            >
                                Explore More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;
