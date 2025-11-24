// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Geist, Geist_Mono } from "next/font/google";



// Metadata (Server Component compatible)
export const metadata = {
  title: "RedLife",
  description: "Donot blood save life",
};

// RootLayout is a Server Component
export default function RootLayout({ children }) {
  return (
    <html data-theme="mycustomtheme" lang="en">
      <body>
        {/* Client Components */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
