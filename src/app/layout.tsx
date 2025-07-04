import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Restaurant - Wyjątkowa kuchnia w sercu miasta",
  description: "Doświadcz wyjątkowej podróży kulinarnej w Premium Restaurant. Każde danie to arcydzieło sztuki gastronomicznej. Rezerwuj stolik już dziś.",
  keywords: "restauracja, premium, kuchnia, Warszawa, rezerwacje, fine dining",
  authors: [{ name: "Premium Restaurant" }],
  openGraph: {
    title: "Premium Restaurant - Wyjątkowa kuchnia w sercu miasta",
    description: "Doświadcz wyjątkowej podróży kulinarnej w Premium Restaurant. Każde danie to arcydzieło sztuki gastronomicznej.",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Restaurant - Wyjątkowa kuchnia w sercu miasta",
    description: "Doświadcz wyjątkowej podróży kulinarnej w Premium Restaurant.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
