import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PickleInstructions — Learn From the Pros",
  description:
    "World-class pickleball instructionals from the top players in the game. Master your dink, drive, serve, and strategy. Launching soon.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "PickleInstructions — Learn From the Pros",
    description:
      "World-class pickleball instructionals from the top players in the game.",
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
