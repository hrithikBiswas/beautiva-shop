import { ThemeProvider } from 'next-themes';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme="system"
                    enableSystem
                    storageKey="preferred-theme" // custom localStorage key
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
