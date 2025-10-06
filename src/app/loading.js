'use client';

import { useAuth } from '@/context/AuthContext';
import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    // const { loading } = useAuth();
    // console.log(loading);

    // if (loading)
    //     return (
    //         <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-full w-full flex items-center justify-center bg-red-500">
    //             <Spinner size="lg" />
    //         </div>
    //     );
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-full w-full flex items-center justify-center bg-red-500">
            <Spinner size="lg" />
        </div>
    );
};

export default loading;
