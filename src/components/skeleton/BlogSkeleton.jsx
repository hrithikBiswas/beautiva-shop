import React from 'react';

const BlogSkeleton = () => {
    return (
        <div className="animate-pulse flex flex-col gap-4">
            <div className="bg-zinc-200 dark:bg-zinc-700 h-[240px]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 h-5 rounded-sm w-1/2"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 h-7 rounded-sm"></div>
        </div>
    );
};

export default BlogSkeleton;
