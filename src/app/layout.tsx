import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PickleInstructions — Master Your Pickleball Game",
  description:
    "Premium pickleball instructionals from the world's top pros. Learn strategy, technique, and mental game from the best in the sport.",
  openGraph: {
    title: "PickleInstructions — Master Your Pickleball Game",
    description:
      "Premium pickleball instructionals from the world's top pros.",
    url: "https://pickleinstructions.com",
    siteName: "PickleInstructions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
