import "../styles/globals.css";
import "../styles/style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Home from "../pages/home";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flavor Craft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#f9c9e4] ${inter.className}`}>
        <Home />
        {children}
      </body>
    </html>
  );
}
