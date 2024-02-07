import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Winward",
  description: "Developer Portfolio for John Winward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-20 sticky top-0 bg-blue-900">
          <div className="w-max container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <ul className="hidden md:flex gap-x-20 text-white">
                <li>
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/esu">
                    <p>ESU</p>
                  </Link>
                </li>
                <li>
                  <Link href="/experience">
                    <p>Work Experience</p>
                  </Link>
                </li>
                <li>
                  <Link href="/johnball">
                    <p>Game Development</p>
                  </Link>
                </li>
                <li>
                  <Link href="/frc">
                    <p>FIRST Robotics</p>
                  </Link>
                </li>
                <li>
                  <Link href="/hobbies">
                    <p>Hobbies</p>
                  </Link>
                </li>
              </ul>
              {/* Place mobile navigation button here */}
            </div>
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
