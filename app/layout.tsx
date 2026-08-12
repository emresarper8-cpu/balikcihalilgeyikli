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
    "Geyikli balık restoranı",
    "Geyikli balık",
    "Geyikli restoran",
    "Geyikli taze balık",
    "Geyikli deniz ürünleri",
    "Geyikli'de balık nerede yenir",
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
    title: "Balıkçı Halil Geyikli | Balık Restoranı",
    description:
      "Geyikli'de günlük taze balık, deniz ürünleri ve Ege mezeleri. Denizin Bereketi, Geyikli'nin Lezzeti.",
    url: "/",
    siteName: "Balıkçı Halil Geyikli",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Balıkçı Halil Geyikli",
    description:
      "Geyikli'de günlük taze balık, deniz ürünleri ve Ege mezeleri.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://balikcihalilgeyikli.com/#restaurant",
  name: "Balıkçı Halil Geyikli",
  url: "https://balikcihalilgeyikli.com/",
  telephone: "+905433450017",
  priceRange: "₺₺",
  servesCuisine: [
    "Balık",
    "Deniz ürünleri",
    "Ege mutfağı",
  ],
  menu: "https://balikcihalilgeyikli.com/menu",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Vatan Sk. 5",
    addressLocality: "Geyikli",
    addressRegion: "Çanakkale",
    postalCode: "17610",
    addressCountry: "TR",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "22:30",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}