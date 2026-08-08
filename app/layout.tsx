import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://balikcihalilgeyikli-mby9.vercel.app"
  ),

  title: {
    default: "Balıkçı Halil Geyikli | Taze Balık & Ege Mezeleri",
    template: "%s | Balıkçı Halil Geyikli",
  },

  description:
    "Balıkçı Halil Geyikli – Geyikli'de günlük taze balıklar, Ege mezeleri ve deniz ürünleri. Ezine ve Çanakkale'de lezzetli bir balık sofrası.",

  keywords: [
    "Balıkçı Halil Geyikli",
    "Geyikli balık restoranı",
    "Geyikli balıkçı",
    "Geyikli restoran",
    "Geyikli taze balık",
    "Geyikli deniz ürünleri",
    "Ezine balık restoranı",
    "Çanakkale balık restoranı",
    "Ege mezeleri",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Balıkçı Halil Geyikli | Taze Balık & Ege Mezeleri",
    description:
      "Geyikli'de günlük taze balıklar, Ege mezeleri ve deniz ürünleri. Denizin Bereketi, Geyikli'nin Lezzeti.",
    url: "/",
    siteName: "Balıkçı Halil Geyikli",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Balıkçı Halil Geyikli",
    description:
      "Geyikli'de günlük taze balıklar, Ege mezeleri ve deniz ürünleri.",
  },
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