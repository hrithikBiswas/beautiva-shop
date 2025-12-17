'use client';
import { Card, Skeleton } from '@heroui/react';

const ProductSkeleton = () => {
    return (
        <Card
            className="flex flex-col items-center justify-center overflow-hidden shadow-none dark:bg-black"
            radius="sm"
        >
            <Skeleton className="rounded-sm">
                <div className="w-[220px] h-[293px] md:w-[280px] md:h-[370px] rounded-sm bg-default-300" />
            </Skeleton>

            <Skeleton className="mt-5 rounded-sm">
                <div className="h-6 w-[120px] rounded-sm mb-1 bg-default-300" />
            </Skeleton>
            <Skeleton className="mt-2 rounded-sm">
                <div className="h-6 w-[200px] md:w-[250px] rounded-sm mb-1 bg-default-300" />
            </Skeleton>
        </Card>
    );
};

export default ProductSkeleton;
