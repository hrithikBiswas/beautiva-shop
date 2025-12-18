import React from 'react';

const SIngleBlogSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col gap-6">
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-sm h-5 max-w-[220px]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-sm h-8 w-[50%]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-sm h-4 max-w-[220px]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-lg h-[450px] max-w-[900px]"></div>
        </div>
    );
};

export default SIngleBlogSkeleton;
