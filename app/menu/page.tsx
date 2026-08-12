import type { Metadata } from "next";
import FullMenu from "../components/FullMenu";

export const metadata: Metadata = {
  title: "Menü | Balık, Meze ve Deniz Ürünleri",
  description:
    "Balıkçı Halil Geyikli menüsü. Günlük taze balıklar, deniz ürünleri, Ege mezeleri, balık ekmek, kalamar ve ızgara seçenekleri.",

  alternates: {
    canonical: "/menu",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Balıkçı Halil Geyikli Menü | Balık, Meze ve Deniz Ürünleri",
    description:
      "Geyikli'de Balıkçı Halil'in güncel menüsü. Taze balık, deniz ürünleri ve Ege mezeleri.",
    url: "/menu",
    siteName: "Balıkçı Halil Geyikli",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Balıkçı Halil Geyikli Menü",
    description:
      "Geyikli'de taze balık, deniz ürünleri ve Ege mezeleri.",
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#08253f] text-white">
      <div className="py-10">
        <FullMenu />
      </div>
    </main>
  );
}