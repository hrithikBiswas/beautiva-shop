import { ThemeProvider } from "next-themes";
import AuthProvider from "@/context/AuthContext";
import HeroProvider from "@/providers/HeroProvider";
import "./globals.css";

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
                        <HeroProvider>{children}</HeroProvider>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
