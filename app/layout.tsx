import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balıkçı Halil Geyikli",
  description:
    "Balıkçı Halil Geyikli | Günlük taze balıklar, Ege mezeleri ve deniz ürünleri.",
  keywords: [
    "Balıkçı Halil",
    "Geyikli",
    "Balık Restoranı",
    "Çanakkale",
    "Deniz Ürünleri",
    "Ege Mezeleri",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geist.className} bg-[#08253f] text-white`}>
        {children}
      </body>
    </html>
  );
}