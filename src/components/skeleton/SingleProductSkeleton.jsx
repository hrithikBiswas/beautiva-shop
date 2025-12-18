import React from 'react';

const SingleProductSkeleton = () => {
    return (
        <>
            <div className="animate-pulse grid grid-cols-1 md:grid-cols-6 gap-x-20 gap-y-8 py-14">
                <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
                    <div className="rounded-lg max-w-[300px] min-h-[400px] w-full bg-zinc-200 dark:bg-zinc-700"></div>

                    <div className="flex gap-4">
                        <div className="w-28 h-28 px-0 rounded-lg bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="w-28 h-28 px-0 rounded-lg bg-zinc-200 dark:bg-zinc-700"></div>
                    </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-4 md:gap-12 px-4">
                    <h2 className="w-[250px] h-8 rounded-sm bg-zinc-200 dark:bg-zinc-700"></h2>

                    <div className="flex flex-col gap-2 md:gap-6 max-w-[200px]">
                        <div className="bg-zinc-200 dark:bg-zinc-700 h-5 rounded-sm"></div>
                        <div className="bg-zinc-200 dark:bg-zinc-700 h-5 rounded-sm"></div>
                        <div className="bg-zinc-200 dark:bg-zinc-700 h-5 rounded-sm"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex space-x-4">
                            <div className="h-12 w-[100px] md:w-[140px] bg-zinc-200 dark:bg-zinc-700 rounded-md"></div>
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
