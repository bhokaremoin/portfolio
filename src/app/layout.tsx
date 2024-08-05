import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/app/providers'
import { GlobalContextProvider } from '@/context/global'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moin Codes",
  description: "Portfolio Website of Moin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <GlobalContextProvider>
            <Navbar />
            {children}</GlobalContextProvider>
      </Providers>
      </body>
    </html>
  );
}
