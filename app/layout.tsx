import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <div className="invisible md:visible container mx-auto inset-x-0 top-0 flex justify-between font-mono">
          <Link href="/">Home</Link>
          <Link href="/esu">ESU</Link>
          <Link href="/experience">Work Experience</Link>
          <Link href="/johnball">Game Development</Link>
          <Link href="/frc">FIRST Robotics</Link>
          <Link href="/hobbies">Hobbies</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
