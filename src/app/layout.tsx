import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";     
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Admatrix Digital | Next-Gen Performance DSP",
  description: "...",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}