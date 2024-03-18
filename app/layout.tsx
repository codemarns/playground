import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/layout/header/Header";
import { Drawer } from "@/layout/drawer/Drawer";
import { Sidebar } from "@/layout/sidebar/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playground",
  description: "Created by Marnien Cueba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth text-base">
      <body className={inter.className}>
        <Header />
        <main className="h-auto w-full">
          <div className="h-auto w-full max-w-7xl mx-auto px-4 flex">
            <Sidebar />
            <div className="h-auto flex-1 p-8">{children}</div>
            <Drawer />
          </div>
        </main>
      </body>
    </html>
  );
}
