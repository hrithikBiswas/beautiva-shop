import React from 'react';

const SingleProductSkeleton = () => {
    return (
        <>
            <div className="animate-pulse grid grid-cols-1 sm:grid-cols-6 gap-20 py-14">
                <div className="sm:col-span-2 flex flex-col items-center sm:items-start gap-4">
                    <div className="rounded-lg max-w-[300px] min-h-[400px] w-full bg-zinc-200 dark:bg-zinc-700"></div>

                    <div className="flex gap-4">
                        <div className="w-28 h-28 px-0 rounded-lg bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="w-28 h-28 px-0 rounded-lg bg-zinc-200 dark:bg-zinc-700"></div>
                    </div>
                </div>

                <div className="sm:col-span-4 flex flex-col gap-12 px-4">
                    <h2 className="w-[400px] h-8 rounded-sm bg-zinc-200 dark:bg-zinc-700"></h2>

                    <div className="flex flex-col gap-6 max-w-[250px]">
                        <div className="bg-zinc-200 dark:bg-zinc-700 h-5 rounded-sm"></div>
                        <div className="bg-zinc-200 dark:bg-zinc-700 h-5 rounded-sm"></div>
                        <div className="bg-zinc-200 dark:bg-zinc-700 h-5 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex space-x-4">
                            <div className="h-12 w-[140px] bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
                            <div className="h-12 flex-1 bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
                            <div className="h-12 w-12 bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
                        </div>

                        <div className="h-12 bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
                    </div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default SingleProductSkeleton;
