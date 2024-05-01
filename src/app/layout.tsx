import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JAM NOTE",
  description: "This Interllignet Note Taking App",
};

const myFont = localFont({
  src: "/fonts/myFont.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={myFont.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
