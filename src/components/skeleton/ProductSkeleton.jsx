const ProductSkeleton = () => {
    return (
        <div className="animate-pulse rounded-sm flex flex-col items-center justify-center overflow-hidden shadow-none dark:bg-black">
            <div className="rounded-sm">
                <div className="w-[280px] h-[380px] md:w-[220px] md:h-[300px] lg:w-[220px] lg:h-[300px] xl:w-[280px] xl:h-[370px] rounded-sm bg-zinc-200 dark:bg-zinc-700" />
            </div>

            <div className="mt-5 rounded-sm">
                <div className="h-6 w-[120px] rounded-sm mb-1 bg-zinc-200 dark:bg-zinc-700" />
            </div>
            <div className="mt-2 rounded-sm">
                <div className="h-6 w-[200px] md:w-[250px] rounded-sm mb-1 bg-zinc-200 dark:bg-zinc-700" />
            </div>
        </div>
    );
};

export default ProductSkeleton;
