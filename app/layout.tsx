import "@/app/ui/global.scss";
import { jet } from "@/app/ui/fonts";
import type { Metadata } from "next";
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer/footer";

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
      <body
        className={`${jet.className} relative flex min-h-screen flex-col bg-black antialiased`}
      >
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
