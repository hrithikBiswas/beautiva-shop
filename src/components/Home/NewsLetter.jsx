'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FacebookIcon, InstagramIcon } from '../SVG';
import { motion } from 'motion/react';

const NewsLetter = () => {
    return (
        <div className="mt-10 sm:mt-14 lg:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
                <motion.div
                    className="flex flex-col items-start sm:items-center gap-3 sm:gap-5 md:border-r md:border-r-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-2xl sm:text-3xl font-semibold">
                        Follow Us on
                    </h1>
                    <p className="text-gray-400 tracking-wide max-w-lg text-start sm:text-center">
                        Shapes and proportions are for your intellect. I’ve
                        treated the waistcoat as if it were a corset.
                    </p>
                    <ul className="flex gap-2 sm:gap-5">
                        <li>
                            <Link href="#">
                                <FacebookIcon className="w-8 h-8 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <InstagramIcon className="w-8 h-8 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <FacebookIcon className="w-8 h-8 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <InstagramIcon className="w-8 h-8 text-gray-800 dark:text-white" />
                            </Link>
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className="flex flex-col items-start sm:items-center gap-3 sm:gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-2xl sm:text-3xl font-semibold">
                        Lets Stay in Thouch
                    </h1>
                    <p className="text-gray-400 tracking-wide max-w-lg text-center">
                        We will shout you $110 off your first order.
                    </p>
                    <div className="flex w-full sm:px-16">
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="w-full text-black dark:text-white text-lg outline-none border border-gray-200 dark:border-gray-600 focus:border-black dark:focus:border-gray-200 px-4 rounded-s-sm"
                        />
                        <Button
                            className="min-w-0 rounded-e-sm bg-black dark:bg-white text-white dark:text-black hover-[#4E7661] px-12"
                            radius="none"
                            size="lg"
                        >
                            Subscribe
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NewsLetter;
