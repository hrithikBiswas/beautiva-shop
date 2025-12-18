'use client';
import { Image } from '@heroui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="mt-10 sm:mt-14 lg:mt-24">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper max-w-5xl"
                loop="true"
            >
                <SwiperSlide>
                    <div className="flex flex-col gap-5 sm:gap-8 items-center px-6 max-w-[300px] sm:max-w-2xl md:max-w-3xl mx-auto">
                        <Image src="/testimonials-1.jpg" radius="full" />
                        <h1 className="text-3xl sm:text-4xl text-[#4E7661] leading-10 md:leading-15 text-center tracking-wide">
                            “Amazing product. The results are so transformative
                            in texture and my face feels plump and healthy.“
                        </h1>
                        <h2 className="text-lg text-gray-500 font-semibold uppercase">
                            Jennifer c.
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-5 sm:gap-8 items-center px-6 max-w-[300px] sm:max-w-2xl md:max-w-3xl mx-auto">
                        <Image src="/testimonials-2.jpg" radius="full" />
                        <h1 className="text-3xl sm:text-4xl text-[#4E7661] leading-10 md:leading-15 text-center tracking-wide">
                            “Amazing product. The results are so transformative
                            in texture and my face feels plump and healthy.“
                        </h1>
                        <h2 className="text-lg text-gray-500 font-semibold uppercase">
                            Jennifer c.
                        </h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;
