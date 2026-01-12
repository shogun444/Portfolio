import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar/navbar";
import { ViewTransitions } from "next-view-transitions";



const inter = Inter({
  subsets : ["latin"],
  weight : ["100","200","300","400" , "500","600","700","800"]
})

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
     
      <body className={`${inter.className} antialiased bg-neutral-50 dark:bg-neutral-200`}>
        <Navbar/>
        <ViewTransitions>
        {children}
        </ViewTransitions>
      </body>
    </html>

  );
}
