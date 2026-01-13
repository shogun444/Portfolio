import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar/navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "./Components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sayan's Portfolio",
  description: "Wecome! This is my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-50 antialiased dark:bg-neutral-200`}
      >
        <Navbar />
        <ViewTransitions>
          <div className="flex-col">
            {children}
            <Footer />
          </div>
        </ViewTransitions>
      </body>
    </html>
  );
}
