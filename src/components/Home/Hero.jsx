'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '@/constant/sliderData';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <div className="mt-4 sm:mt-14">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                speed={500}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="mySwiper"
            >
                {sliderData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-[450px] md:h-[550px] rounded-md overflow-hidden">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover object-left"
                            />

                            <div className="relative z-10 text-black h-full flex flex-col justify-center items-start gap-4 sm:gap-5 max-w-96 md:max-w-xl px-6 md:px-8 lg:px-16 w-fit">
                                <motion.h1
                                    className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {slide.title}{' '}
                                </motion.h1>
                                <motion.h1
                                    className="text-xl tracking-wide text-neutral-500 text-justify"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    {slide.subtitle}
                                </motion.h1>
                                <motion.h2
                                    className="text-xl font-semibold tracking-wide my-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                >
                                    {slide.price}
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-black text-white rounded-sm text-base px-7"
                                    >
                                        {slide.buttonText}
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
