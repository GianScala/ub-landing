import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SK Labs | Voice AI for European Healthcare",
  description: "AI voice agents that answer calls, book appointments, and speak your patients' language. Built for European healthcare clinics with full data sovereignty.",
  keywords: ["voice AI", "healthcare", "European", "GDPR", "diagnostic clinics", "AI call center", "medical", "appointments"],
  authors: [{ name: "SK Labs" }],
  openGraph: {
    title: "SK Labs | Voice AI for European Healthcare",
    description: "Your front desk, never misses a call. AI voice agents built for European healthcare.",
    type: "website",
    locale: "en_EU",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Labs | Voice AI for European Healthcare",
    description: "Your front desk, never misses a call. AI voice agents built for European healthcare.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}