import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import { Navbar, NavbarFallback } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer | Experiencias para vivir el mundo",
  description:
    "Descubre experiencias locales únicas, desde aventuras al aire libre hasta cultura y gastronomía.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <FavoritesProvider>
          <Suspense fallback={<NavbarFallback />}>
            <Navbar />
          </Suspense>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
