import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

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
      <body className={jet.className}>{children}</body>
    </html>
  );
}
