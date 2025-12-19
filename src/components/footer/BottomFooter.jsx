'use client';
import React from 'react';
import { FacebookIcon, InstagramIcon } from '../SVG';
import Link from 'next/link';
import { Image } from '@heroui/react';

const BottomFooter = () => {
    return (
        <div className="mt-4 sm:mt-8 md:mt-18 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-0">
                <div className="flex items-center">
                    <h5 className="text-gray-500 dark:text-gray-300 text-sm">
                        © Glowing 2025 |{' '}
                    </h5>
                    <ul className="flex gap-2 md:gap-5">
                        <li>
                            <Link href="#">
                                <FacebookIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <InstagramIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <FacebookIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <InstagramIcon className="w-6 h-6 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:inline">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        className="max-w-[150px]"
                    />
                </div>
                <ul className="flex gap-4">
                    <li>
                        <Image
                            src={'/payment1.png'}
                            alt="payment"
                            radius="none"
                            className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <Image
                            src={'/payment2.png'}
                            alt="payment"
                            radius="none"
                            className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <Image
                            src={'/payment3.png'}
                            alt="payment"
                            radius="none"
                            className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <Image
                            src={'/payment4.png'}
                            alt="payment"
                            radius="none"
                            className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <Image
                            src={'/payment5.png'}
                            alt="payment"
                            radius="none"
                            className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <Image
                            src={'/payment6.png'}
                            alt="payment"
                            radius="none"
                            className="cursor-pointer"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BottomFooter;
