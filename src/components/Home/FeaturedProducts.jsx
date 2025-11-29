import React from "react";
import Title from "@/components/common/Title";
import FeatureProductSlider from "@/components/slider/FeatureProductSlider";

const FeaturedProducts = ({ products }) => {
    return (
        <div className="mt-14 sm:mt-24">
            <Title
                title="Our Featured Products"
                subtitle="Get the skin you want to feel"
            />
            <FeatureProductSlider products={products} />
        </div>
    );
};

export default FeaturedProducts;
