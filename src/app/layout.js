import { ThemeProvider } from 'next-themes';
import AuthProvider from '@/context/AuthContext';
import HeroProvider from '@/providers/HeroProvider';
import './globals.css';
import ProductProvider from '@/context/ProductContext';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased dark:bg-gray-950! dark:text-white`}>
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme="system"
                    enableSystem
                    storageKey="preferred-theme"
                >
                    <AuthProvider>
                        <ProductProvider>
                            <HeroProvider>{children}</HeroProvider>
                        </ProductProvider>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
