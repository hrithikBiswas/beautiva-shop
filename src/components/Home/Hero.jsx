'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '@/constant/sliderData';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Button } from '@heroui/react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="mt-6">
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
                        <div className="relative h-[450px] sm:h-[550px] rounded-md overflow-hidden">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover object-left"
                            />
                            <div className="relative z-10 text-black h-full flex flex-col justify-center items-start gap-4 sm:gap-5 max-w-96 md:max-w-xl px-4 md:px-8 lg:px-16 w-fit">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-xl tracking-wide text-neutral-500">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-xl font-semibold tracking-wide my-2">
                                    {slide.price}
                                </h2>
                                <Button
                                    size="lg"
                                    className="bg-black text-white rounded-sm text-base px-7"
                                >
                                    {slide.buttonText}
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
