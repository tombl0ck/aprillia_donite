import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aprillia donite - Homemade Bakery & Pastry",
  description: "Cita rasa homemade dengan kualitas premium. Menyediakan Cake, Kue Kering, dan Jajan Khas Indonesia untuk setiap momen spesial Anda.",
  keywords: ["aprillia donite", "donite", "bakery", "pastry", "kue kering", "cake", "homemade"],
  authors: [{ name: "aprillia donite" }],
  
  openGraph: {
    title: "aprillia donite",
    description: "Cita rasa homemade dengan kualitas premium untuk momen spesial Anda.",
    url: "https://aprillia-donite.netlify.app/",
    siteName: "aprillia donite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "aprillia donite",
    description: "Cita rasa homemade dengan kualitas premium.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
