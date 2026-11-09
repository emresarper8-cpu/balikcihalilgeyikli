
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Geyikli",
  description:
    "Discover the ancient cities, historical landmarks and natural beauty around Geyikli, Çanakkale, with Balıkçı Halil's local travel guide.",
  alternates: {
    canonical: "/en/explore",
    languages: {
      "tr-TR": "/kesfet",
      "en-US": "/en/explore",
      "x-default": "/kesfet",
    },
  },
  openGraph: {
    title: "Discover Geyikli | Balıkçı Halil Geyikli",
    description:
      "Explore ancient cities, historical sites and natural wonders around Geyikli, Çanakkale.",
    url: "/en/explore",
    siteName: "Balıkçı Halil Geyikli",
    locale: "en_US",
    type: "website",
  },
};

const places = [
  {
    number: "01",
    category: "ANCIENT CITY",
    title: "Neandria Ancient City",
    location: "Mount Çığrı · Ezine",
    description:
      "Located high on Mount Çığrı, Neandria offers a glimpse into the ancient history of the Troad through its stone walls and archaeological remains.",
    href: "/en/explore/neandria",
  },
  {
    number: "02",
    category: "WORLD HERITAGE",
    title: "Troy Ancient City",
    location: "Tevfikiye · Çanakkale",
    description:
      "Discover thousands of years of settlement history and the legendary stories associated with Homer's Iliad at one of the world's most famous archaeological sites.",
    href: "/en/explore/troy",
  },
  {
    number: "03",
    category: "ANCIENT CITY",
    title: "Alexandria Troas",
    location: "Dalyan · Ezine",
    description:
      "Explore the remains of an important ancient port city, including its impressive city walls and traces of its former grandeur.",
    href: "/en/explore/alexandria-troas",
  },
  {
    number: "04",
    category: "ANCIENT SANCTUARY",
    title: "Apollon Smintheus",
    location: "Gülpınar · Ayvacık",
    description:
      "Visit the sanctuary dedicated to Apollo Smintheus and discover the religious world of the ancient Troad.",
    href: "/en/explore/apollon-smintheus",
  },
  {
    number: "05",
    category: "ANCIENT CITY",
    title: "Assos Ancient City",
    location: "Behramkale · Ayvacık",
    description:
      "With its Temple of Athena, ancient harbour and historic stone streets, Assos is where history meets the Aegean Sea.",
    href: "/en/explore/assos",
  },
  {
    number: "06",
    category: "NATURAL BEAUTY",
    title: "Heart Lake",
    location: "Dalyan · Ezine",
    description:
      "Known for its distinctive shape and changing colours, Heart Lake offers a remarkable natural landscape near Geyikli.",
    href: "/en/explore/kalpli-gol",
  },
  {
    number: "07",
    category: "NATURE & ADVENTURE",
    title: "Mount Ida (Kaz Mountains)",
    location: "Çanakkale · Balıkesir",
    description:
      "Explore the forests, waterfalls, mountain landscapes and legends of one of the most remarkable natural regions of the North Aegean.",
    href: "/en/explore/kaz-daglari",
  },
  {
    number: "08",
    category: "HISTORY & CULTURE",
    title: "Koçali",
    location: "Ezine · Çanakkale",
    description:
      "Discover the stone quarries, historic structures and cultural traces of this lesser-known settlement in the region.",
    href: "/en/explore/kocali",
  },
  {
    number: "09",
    category: "HISTORY & THE SEA",
    title: "Babakale",
    location: "Ayvacık · Çanakkale",
    description:
      "Explore its historic castle, harbour and traditional knife-making culture at the westernmost point of mainland Asia.",
    href: "/en/explore/babakale",
  },
  {
    number: "10",
    category: "NATURAL BEAUTY",
    title: "Kestanbol Thermal Springs",
    location: "Ezine · Çanakkale",
    description:
      "With a history reaching back to antiquity, Kestanbol is known for its thermal waters and its connection to the ancient history of the region.",
    href: "/en/explore/kestanbol-kaplicalari",
  },
];

export default function EnglishExplorePage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-40 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(8,145,178,0.24),_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-[6px] text-cyan-300">
            PRESENTED BY BALIKÇI HALİL GEYİKLİ
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Discover <span className="text-cyan-400">Geyikli</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            More than just a seaside destination… Discover the history,
            ancient cities, natural beauty and local stories of Geyikli
            and its surroundings.
          </p>

          <a
            href="#explore-places"
            className="mt-9 inline-flex rounded-full bg-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-cyan-400"
          >
            Start Exploring ↓
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-cyan-400/10 bg-[#0a263b] px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">
              LOCAL STORIES
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              The Spirit of Geyikli
            </h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              Odunluk Harbour, fishing traditions, olive groves and stories
              passed down through generations.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">
              ANCIENT HISTORY
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Our Ancient Neighbours
            </h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              From Troy to Neandria, discover the thousands of years of
              cultural heritage of the Troad.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">
              NATURE & ROUTES
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Around Geyikli
            </h2>
            <p className="mt-3 leading-relaxed text-gray-400">
              Coastlines, villages, natural landscapes and local experiences
              waiting to be discovered.
            </p>
          </div>
        </div>
      </section>

      {/* PLACES */}
      <section id="explore-places" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-[5px] text-cyan-300">
              EXPLORE THE REGION
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Places to Discover Around Geyikli
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
              From ancient heritage to natural wonders, explore the
              region through our local travel guides.
            </p>

            <p className="mt-5 text-sm font-semibold text-cyan-300">
              {places.length} places to discover
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
                  <span>Read the travel guide</span>
                  <span className="text-lg transition group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-[#0b3552] to-[#0b2538] p-8 text-center md:p-12">
          <p className="font-semibold tracking-[4px] text-cyan-300">
            DISCOVER GEYİKLİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Every journey tells a story.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-300">
            Join us as we explore the history, nature and culture
            of Geyikli and the surrounding region.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/en"
              className="inline-block rounded-full border border-white/30 px-7 py-3 font-semibold transition hover:bg-white/10"
            >
              Back to Home
            </a>

            <a
              href="/kesfet"
              className="inline-block rounded-full bg-cyan-500 px-7 py-3 font-semibold transition hover:bg-cyan-400"
            >
              🇹🇷 Türkçe
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-900/50 px-6 py-8 text-center text-sm text-gray-500">
        Balıkçı Halil Geyikli · Discover Geyikli
      </footer>
    </main>
  );
}
