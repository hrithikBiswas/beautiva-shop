import React from 'react';

const CategorySkeleton = () => {
    return (
        <div className="animate-pulse flex flex-row flex-wrap md:flex-col gap-4">
            <div className="h-5 w-[60px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 w-[80px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 w-[50px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 w-[55px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 w-[40px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 w-[90px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 w-[76px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 w-[65px] md:w-full rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
        </div>
    );
};

export default CategorySkeleton;
