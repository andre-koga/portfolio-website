import Header from "@/components/Header";
import "./globals.scss";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";

const jet = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andre Koga",
  description: "Everything Koga has done so far",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jet.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
