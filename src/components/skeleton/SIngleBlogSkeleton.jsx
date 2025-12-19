import React from 'react';

const SIngleBlogSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col gap-3 lg:gap-6">
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-sm h-5 max-w-[220px] lg:max-w-[220px]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-sm h-8 w-3/4 lg:w-[50%]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-sm h-5 max-w-[220px]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-lg h-[160px] sm:h-[320px] md:h-[400px] lg:h-[450px] w-full lg:max-w-[900px]"></div>
        </div>
    );
};

export default SIngleBlogSkeleton;
