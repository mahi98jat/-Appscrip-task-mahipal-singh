import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customizable Mobile App Solutions for Businesses | Appscrip",
  description:
    "Empower your business with Appscrip’s ready-to-launch mobile app solutions. Tailored for industries like ecommerce, dating, and social networking, our platform offers scalable, feature-rich applications designed to drive growth and enhance user engagement. Explore our solutions today and transform your business idea into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
