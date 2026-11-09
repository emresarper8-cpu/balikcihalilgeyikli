
import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Geyikli'yi Keşfet",
  description:
    "Geyikli'nin tarihini, antik kentlerini, doğal güzelliklerini ve çevresindeki keşif rotalarını Balıkçı Halil Geyikli rehberinde keşfedin.",
  alternates: {
    canonical: "/kesfet",
    languages: { "tr-TR": "/kesfet", "en-US": "/en/explore" },
  },
};

const places = [
  {
    number: "01",
    category: "ANTİK KENT",
    title: "Neandria Antik Kenti",
    location: "Çığrı Dağı · Ezine",
    description:
      "Çığrı Dağı'nın yükseklerinde, taş surları ve kent kalıntılarıyla Troas'ın geçmişine açılan etkileyici bir durak.",
    href: "/kesfet/neandria",
  },
  {
    number: "02",
    category: "DÜNYA MİRASI",
    title: "Troya Antik Kenti",
    location: "Tevfikiye · Merkez",
    description:
      "Binlerce yıllık yerleşim katmanları ve Homeros'un İlyada'sıyla anılan efsaneleriyle dünya tarihinin önemli duraklarından biri.",
    href: "/kesfet/truva",
  },
  {
    number: "03",
    category: "ANTİK KENT",
    title: "Aleksandria Troas",
    location: "Dalyan · Ezine",
    description:
      "Bir zamanların büyük liman kentinden günümüze ulaşan kalıntıları ve uzun kent surlarıyla keşfedilmeyi bekliyor.",
    href: "/kesfet/alexandria-troas",
  },
  {
    number: "04",
    category: "KUTSAL ALAN",
    title: "Apollon Smintheus",
    location: "Gülpınar · Ayvacık",
    description:
      "Apollon kültüne adanmış tapınağıyla antik Troas'ın inanç dünyasını tanıtan özel bir arkeolojik alan.",
    href: "/kesfet/apollon-smintheus",
  },
  {
    number: "05",
    category: "ANTİK KENT",
    title: "Assos Antik Kenti",
    location: "Behramkale · Ayvacık",
    description:
      "Athena Tapınağı, antik limanı ve taş sokaklarıyla tarih ile denizin buluştuğu etkileyici bir kent.",
    href: "/kesfet/assos",
  },
  {
    number: "06",
    category: "DOĞAL GÜZELLİK",
    title: "Kalpli Göl",
    location: "Dalyan · Ezine",
    description:
      "Rengi ve kendine özgü şekliyle dikkat çeken, doğanın oluşturduğu özel manzaralardan biri.",
    href: "/kesfet/kalpli-gol",
  },
  {
    number: "07",
    category: "DOĞA VE KEŞİF",
    title: "Kaz Dağları",
    location: "Çanakkale · Balıkesir",
    description:
      "Şelaleleri, ormanları, yaylaları ve efsaneleriyle Kuzey Ege'nin en özel doğal alanlarından biri.",
    href: "/kesfet/kaz-daglari",
  },
  {
    number: "08",
    category: "TARİH VE KÜLTÜR",
    title: "Koçali",
    location: "Ezine · Çanakkale",
    description:
      "Taş ocakları, tarihî yapıları ve çevresindeki kültürel izleriyle keşfedilmeyi bekleyen bir yerleşim.",
    href: "/kesfet/kocali",
  },
  {
    number: "09",
    category: "TARİH VE DENİZ",
    title: "Babakale",
    location: "Ayvacık · Çanakkale",
    description:
      "Tarihî kalesi, limanı ve geleneksel bıçakçılık kültürüyle Anadolu'nun batı ucundaki özel bir durak.",
    href: "/kesfet/babakale",
  },
  {
    number: "10",
    category: "DOĞAL GÜZELLİK",
    title: "Kestanbol Kaplıcaları",
    location: "Ezine · Çanakkale",
    description:
      "Antik dönemden günümüze uzanan geçmişi ve termal kaynaklarıyla bölgenin dikkat çeken noktalarından biri.",
    href: "/kesfet/kestanbol-kaplicalari",
  },
];

export default function KesfetPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-40 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(8,145,178,0.24),_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-[6px] text-cyan-300">
            BALIKÇI HALİL GEYİKLİ SUNAR
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Geyikli'yi <span className="text-cyan-400">Keşfet</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Bir sahil kasabasından çok daha fazlası… Geyikli'nin hafızasını,
            antik kentlerini, doğasını ve çevresindeki keşif rotalarını tanıyın.
          </p>

          <a
            href="#kesif-noktalari"
            className="mt-9 inline-flex rounded-full bg-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-cyan-400"
          >
            Keşfe başla ↓
          </a>
        </div>
      </section>

      {/* TANITIM */}
      <section className="border-y border-cyan-400/10 bg-[#0a263b] px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">
              YEREL HİKÂYELER
            </p>
            <h2 className="mt-3 text-2xl font-bold">Geyikli'nin Hafızası</h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              Odunluk İskelesi, balıkçılık, zeytinlikler ve kuşaktan kuşağa
              aktarılan yaşam hikâyeleri.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">
              TARİHİN İZİNDE
            </p>
            <h2 className="mt-3 text-2xl font-bold">Antik Komşularımız</h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              Troya'dan Neandria'ya, Troas bölgesinin binlerce yıllık kültürel
              mirası.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">
              DOĞA VE ROTALAR
            </p>
            <h2 className="mt-3 text-2xl font-bold">Geyikli Çevresinde</h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              Kıyılar, köyler, doğal güzellikler ve çevreyi tanımak için gezi
              önerileri.
            </p>
          </div>
        </div>
      </section>

      {/* KEŞİF KARTLARI */}
      <section id="kesif-noktalari" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-[5px] text-cyan-300">
              KEŞİF REHBERİ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Geyikli ve çevresinde keşfedilecek yerler
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
              Tarihî miraslardan doğal güzelliklere kadar bölgenin öne çıkan
              duraklarını hazırladığımız gezi rehberleriyle tanıyın.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-300">
              {places.length} keşif noktası
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {places.map((place) => (
              <a
                key={place.number}
                href={place.href}
                className="group block rounded-3xl border border-cyan-400/15 bg-[#0b2538] p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#0d2d43]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold tracking-[3px] text-cyan-300">
                    {place.category}
                  </span>

                  <span className="text-3xl font-black text-white/15 transition group-hover:text-cyan-400/50">
                    {place.number}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold transition group-hover:text-cyan-300">
                  {place.title}
                </h3>

                <p className="mt-2 text-sm text-cyan-200/80">
                  ⌖ {place.location}
                </p>

                <p className="mt-5 min-h-20 leading-relaxed text-gray-300">
                  {place.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-cyan-300">
                  <span>Gezi rehberini incele</span>
                  <span className="text-lg transition group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ALT BÖLÜM */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-[#0b3552] to-[#0b2538] p-8 text-center md:p-12">
          <p className="font-semibold tracking-[4px] text-cyan-300">
            GEYİKLİ'Yİ KEŞFET
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Her yolculuk yeni bir hikâye.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-300">
            Geyikli'nin ve çevresinin tarihini, doğasını ve kültürünü
            keşfederken bize eşlik edin.
          </p>

          <a
            href="/"
            className="mt-8 inline-block rounded-full border border-white/30 px-7 py-3 font-semibold transition hover:bg-white/10"
          >
            Balıkçı Halil ana sayfasına dön
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-900/50 px-6 py-8 text-center text-sm text-gray-500">
        Balıkçı Halil Geyikli · Geyikli'yi Keşfet
      </footer>
    </main>
  );
}
