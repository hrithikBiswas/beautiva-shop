const ProductSkeleton = () => {
    return (
        <div className="animate-pulse rounded-sm flex flex-col items-center justify-center overflow-hidden shadow-none dark:bg-black">
            <div className="rounded-sm">
                <div className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] rounded-sm bg-zinc-200 dark:bg-zinc-700" />
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
