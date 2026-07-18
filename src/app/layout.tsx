import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEET — AI Hospitality Reputation Intelligence",
  description:
    "SEET is an AI-powered Hospitality Reputation Intelligence Platform for restaurant groups, hotel chains, resorts, cafés, and multi-brand hospitality organizations across Egypt and the MENA region.",
  keywords: [
    "reputation management",
    "hospitality AI",
    "restaurant reviews",
    "hotel reviews",
    "sentiment analysis",
    "MENA hospitality",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#FFFDF9] text-[#2D241C] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
