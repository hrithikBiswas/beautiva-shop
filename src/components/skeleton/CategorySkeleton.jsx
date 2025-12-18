import React from 'react';

const CategorySkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col gap-4">
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="h-5 rounded-sm bg-zinc-200 dark:bg-zinc-700"></div>
        </div>
    );
};

export default CategorySkeleton;
