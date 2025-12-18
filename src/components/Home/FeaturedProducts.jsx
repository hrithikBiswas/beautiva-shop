import React from 'react';
import Title from '@/components/common/Title';
import FeatureProductSlider from '@/components/slider/FeatureProductSlider';

const FeaturedProducts = () => {
    return (
        <div className="mt-10 sm:mt-14 lg:mt-24">
            <Title
                title="Featured Products"
                subtitle="Get the skin you want to feel"
            />
            <FeatureProductSlider />
        </div>
    );
};

export default FeaturedProducts;
