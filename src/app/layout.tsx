// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { NavbarProvider } from "@/contexts/NavbarContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "BoundlessFlight",
    description: "The ultimate aircraft maintenance tracker",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
        <NavbarProvider>
            <Navbar pageTitle="Home" />
            {children}
        </NavbarProvider>
        </body>
        </html>
    );
}
