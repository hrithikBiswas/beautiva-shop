'use client';
import { Spinner } from '@heroui/react';

const LoadingAnimation = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-full w-full flex items-center justify-center bg-white dark:bg-black">
            <Spinner color="success" variant="gradient" size="lg" />
        </div>
    );
};

export default LoadingAnimation;
