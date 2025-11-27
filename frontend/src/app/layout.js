// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "RedLife",
  description: "Donate blood, save lives",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mycustomtheme" lang="en">
      <body suppressHydrationWarning={true}>
          <Navbar />
          <main className="min-h-screen">
            {children}
            <ToastContainer />
          </main>
          <Footer />
      </body>
    </html>
  );
}