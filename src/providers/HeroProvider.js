'use client';

import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from '@heroui/toast';

export default function HeroProvider({ children }) {
    return (
        <HeroUIProvider>
            <ToastProvider placement="top-right" />
            {children}
        </HeroUIProvider>
    );
}
