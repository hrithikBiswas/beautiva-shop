import React from 'react';

const Title = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            <h1 className="text-3xl tracking-wider sm:text-4xl md:text-5xl text-gray-800 font-semibold mb-2 sm:mb-4">
                {title}
            </h1>
            <h3 className="text-gray-400 text-xl tracking-wider leading-6 sm:leading-7">
                {subtitle}
            </h3>
        </div>
    );
};

export default Title;
