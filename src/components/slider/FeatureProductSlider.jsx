'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useProduct from '@/hooks/useProduct';
import ProductCard from '@/components/common/ProductCard';

export default function FeatureProductSlider() {
    const { products, loading } = useProduct();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    426: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    641: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[]}
                className="mySwiper"
            >
                {products
                    .filter((product) => product.featured)
                    .map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <ProductCard
                                    product={product}
                                    loading={loading}
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </>
    );
}
