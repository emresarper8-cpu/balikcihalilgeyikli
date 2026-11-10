
import type { Metadata } from "next";

import EnglishNavbar from "./components/navbar";
import About from "./components/about";
import Gallery from "./components/gallery";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import WhatsApp from "./components/whatsapp";
import Footer from "./components/footer";
import Stats from "./components/stats";
import CTA from "./components/cta";

export const metadata: Metadata = {
  title: "Balıkçı Halil Geyikli | Fish Restaurant in Geyikli",
  description:
    "Discover fresh fish, seafood and traditional Aegean meze at Balıkçı Halil in Geyikli, Çanakkale. A family tradition since 1999.",
  alternates: {
    canonical: "/en",
    languages: {
      "tr-TR": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Balıkçı Halil Geyikli | Fish Restaurant",
    description:
      "Fresh fish, seafood and Aegean meze in Geyikli, Çanakkale. Since 1999.",
    url: "/en",
    siteName: "Balıkçı Halil Geyikli",
    locale: "en_US",
    type: "website",
  },
};

const featuredDishes = [
  {
    name: "Sardines",
    image: "/sardalye.jpg",
    description: "Fresh sardines prepared with care.",
  },
  {
    name: "Shrimp",
    image: "/karides.jpg",
    description: "Delicious seafood from the Aegean.",
  },
  {
    name: "Lakerda",
    image: "/lakerda.jpg",
    description: "A traditional cured bonito speciality.",
  },
];

export default function EnglishHomePage() {
  return (
    <main className="bg-[#071826] text-white">

      <EnglishNavbar />

      {/* HERO */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bahce.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#04192d]/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">

          <p className="text-cyan-300 tracking-[6px] font-semibold text-sm">
            SINCE 1999
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Balıkçı Halil Geyikli
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200 mt-5">
            Fish & Seafood Restaurant
          </p>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Fresh fish, delicious Aegean meze and a warm atmosphere
            in the heart of Geyikli.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <a
              href="/en/menu"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-bold"
            >
              🍽️ View Our Menu
            </a>

            <a
              href="#gallery"
              className="border border-white hover:bg-white hover:text-[#071826] transition px-8 py-4 rounded-full font-bold"
            >
              📸 View Gallery
            </a>

          </div>

        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="bg-[#08253f] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-cyan-400 tracking-[4px] text-sm font-semibold">
              FROM THE AEGEAN SEA
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Fresh Fish & Seafood in Geyikli
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="bg-[#10304f] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {dish.name}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <a
              href="/en/menu"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-bold"
            >
              Explore Our Menu →
            </a>
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#071826] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-cyan-400 tracking-[4px] text-sm font-semibold">
            FISH RESTAURANT IN GEYİKLİ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            From the Sea to Your Table
          </h2>

          <p className="text-gray-300 leading-8 text-lg mt-8">
            Enjoy fresh fish, seafood and traditional Aegean meze
            at Balıkçı Halil. With our peaceful garden and welcoming
            atmosphere, we invite you to share a memorable meal
            with your loved ones.
          </p>

          <a
            href="/en/explore"
            className="inline-block mt-8 text-cyan-400 hover:text-cyan-300 font-semibold transition"
          >
            Explore Geyikli & Its Surroundings →
          </a>

        </div>
      </section>

      {/* GEYIKLI & SURROUNDINGS GUIDE */}
      <section className="bg-[#0b2538] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-cyan-400 tracking-[4px] text-sm font-semibold">
            DISCOVER THE AEGEAN
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Geyikli & Surroundings Guide
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Discover the history, natural beauty and hidden gems
            of Geyikli and its surroundings. Explore historic
            landmarks, old photographs, coastal villages and
            beautiful places worth visiting.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-[#10304f] rounded-2xl p-8">
              <div className="text-4xl">🏛️</div>
              <h3 className="text-xl font-bold mt-4">
                Historical Places
              </h3>
              <p className="text-gray-400 mt-3">
                Discover the history and cultural heritage of the region.
              </p>
            </div>

            <div className="bg-[#10304f] rounded-2xl p-8">
              <div className="text-4xl">📷</div>
              <h3 className="text-xl font-bold mt-4">
                Old Photographs
              </h3>
              <p className="text-gray-400 mt-3">
                Take a look at Geyikli and its surroundings through the years.
              </p>
            </div>

            <div className="bg-[#10304f] rounded-2xl p-8">
              <div className="text-4xl">📍</div>
              <h3 className="text-xl font-bold mt-4">
                Places to Visit
              </h3>
              <p className="text-gray-400 mt-3">
                Find beautiful coastal spots and places to explore.
              </p>
            </div>

          </div>

          <a
            href="/en/explore"
            className="inline-block mt-12 bg-cyan-500 hover:bg-cyan-600 transition px-9 py-4 rounded-full font-bold shadow-lg"
          >
            Explore the Guide →
          </a>

        </div>
      </section>

      {/* STATS */}
      <Stats />

      {/* ABOUT */}
      <About />

      {/* GALLERY */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* REVIEWS */}
      <Reviews />

      {/* CTA */}
      <CTA />

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>

      <WhatsApp />
      <Footer />

    </main>
  );
}
