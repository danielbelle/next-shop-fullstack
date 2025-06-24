import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import SiteFooter from "@/app/layout/SiteFooter";
import SiteHeader from "@/app/layout/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loja -",
  description: "Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`min-h-screen bg-background font-sans antialiased ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
