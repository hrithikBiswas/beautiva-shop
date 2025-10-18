'use client';

import Image from 'next/image';
import { WatchIcon, CartIcon, WishlistIcon } from '@/components/SVG';
import { Button } from '@heroui/react';

export default function CollectionProduct() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 sm:gap-y-8">
            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product1.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product1.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>

            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product2.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product2.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>

            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product3.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product3.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>

            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product4.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product4.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>

            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product5.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product5.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>
            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product3.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product3.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>

            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product4.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product4.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>

            <div className="group flex flex-col items-center justify-center">
                <div className="relative flex justify-center rounded-md overflow-hidden w-[220px] h-[293px] md:w-[280px] md:h-[370px] cursor-pointer ro</div>unded-md">
                    <Image
                        src="/feature-product5.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute group-hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-0"
                    />
                    <Image
                        src="/feature-hover-product5.jpg"
                        alt="feature-product1"
                        height={370}
                        width={280}
                        className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] absolute opacity-0 hover:scale-105 transition-all duration-700 rounded-md group-hover:opacity-100"
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 flex justify-center gap-3 transition-all duration-500">
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WatchIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <WishlistIcon />
                        </Button>
                        <Button className="min-w-fit h-fit p-2 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                            <CartIcon />
                        </Button>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h4 className="flex gap-2 justify-center text-lg md:text-xl mb-1">
                        <del className="text-gray-400">$60.00</del>
                        <span>$41.00</span>
                    </h4>
                    <h4 className="text-lg md:text-xl">
                        Scalp Moisturizing Cream
                    </h4>
                </div>
            </div>
        </div>
    );
}
