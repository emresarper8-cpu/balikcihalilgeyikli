import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balikcihalilgeyikli.com"),
  title: {
    default: "Balıkçı Halil Geyikli | Balık Restoranı",
    template: "%s | Balıkçı Halil Geyikli",
  },
  description:
    "Balıkçı Halil Geyikli – Geyikli'de günlük taze balık, deniz ürünleri ve Ege mezeleri. Geyikli'nin sevilen balık restoranında lezzetli bir balık sofrası.",
  keywords: [
    "Balıkçı Halil Geyikli",
    "Geyikli balıkçı",
    "