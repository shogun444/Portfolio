import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../Components/navbar/navbar";
import Container from "../Components/container";
import { ViewTransitions } from "next-view-transitions";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ViewTransitions>
    <Container className="prose py-20 px-7 ">
      {children}
    </Container>
    </ViewTransitions>
  );
}
