import React from 'react';
import Title from '@/components/common/Title';
import FeatureProductSlider from '@/components/slider/FeatureProductSlider';

const FeaturedProducts = () => {
    return (
        <div className="my-24">
            <Title
                title="Our Featured Products"
                subtitle="Get the skin you want to feel"
            />
            <FeatureProductSlider />
        </div>
    );
};

export default FeaturedProducts;
