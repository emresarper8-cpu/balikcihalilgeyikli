import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balıkçı Halil Geyikli | Fish & Seafood Restaurant",
  description:
    "Balıkçı Halil Geyikli is a fish and seafood restaurant in Geyikli, Çanakkale. Enjoy fresh fish, seafood, traditional Aegean meze and fish sandwiches.",
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
    title: "Balıkçı Halil Geyikli | Fish & Seafood Restaurant",
    description:
      "Fresh fish, seafood and traditional Aegean meze in Geyikli, Çanakkale.",
    url: "/en",
    siteName: "Balıkçı Halil Geyikli",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#061a2e]/95 backdrop-blur-md border-b border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <a href="/en" className="font-bold text-xl">
            Balıkçı <span className="text-cyan-400">Halil</span>
          </a>

          <nav className="flex items-center gap-4 text-sm font-semibold">

            <a
              href="/en"
              className="text-cyan-300 hover:text-cyan-200 transition"
            >
              Home
            </a>

            <a
              href="/en/menu"
              className="hover:text-cyan-300 transition"
            >
              Menu
            </a>

            <a
              href="#location"
              className="hover:text-cyan-300 transition"
            >
              Contact
            </a>

            <a
              href="/"
              className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition"
            >
              🇹🇷 TR
            </a>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/bahce.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl mx-auto pt-20">

          <p className="text-yellow-300 tracking-[5px] text-sm md:text-base font-semibold">
            SINCE 1999
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-5 leading-tight">
            Balıkçı <span className="text-cyan-400">Halil</span> Geyikli
          </h1>

          <h2 className="text-2xl md:text-4xl text-cyan-300 mt-4 font-semibold">
            Fish & Seafood Restaurant
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Fresh fish, seafood and traditional Aegean meze in Geyikli,
            Çanakkale.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a
              href="/en/menu"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg"
            >
              View Our Menu
            </a>

            <a
              href="tel:+905433450017"
              className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              Call Us
            </a>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6 bg-[#071c2d]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
            FRESH FROM THE SEA
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            A Taste of Geyikli
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed text-lg">
            At Balıkçı Halil Geyikli, we serve daily fresh fish, seafood and
            homemade Aegean meze. Enjoy a traditional Turkish fish dinner in
            our relaxed garden atmosphere.
          </p>

        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-20 px-6 bg-[#061a2e]">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Our Specialties
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Fresh seafood and traditional Aegean flavors
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* SARDINES */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-[#0b2538]">

            <img
              src="/sardalye.jpg"
              alt="Fresh sardines at Balıkçı Halil Geyikli"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Fresh Sardines
              </h3>

              <p className="text-gray-400 mt-2">
                Daily fresh sardines prepared with care.
              </p>

            </div>
          </div>

          {/* SHRIMP */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-[#0b2538]">

            <img
              src="/karides.jpg"
              alt="Shrimp at Balıkçı Halil Geyikli"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Shrimp
              </h3>

              <p className="text-gray-400 mt-2">
                A fresh seafood favorite with an Aegean touch.
              </p>

            </div>
          </div>

          {/* LAKERDA */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-[#0b2538]">

            <img
              src="/lakerda.jpg"
              alt="Traditional lakerda at Balıkçı Halil Geyikli"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Lakerda
              </h3>

              <p className="text-gray-400 mt-2">
                A traditional Turkish fish specialty.
              </p>

            </div>
          </div>

        </div>

        <div className="text-center mt-12">

          <a
            href="/en/menu"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-bold transition"
          >
            View Full Menu
          </a>

        </div>

      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="py-20 px-6 bg-[#071c2d]"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
            VISIT US IN GEYİKLİ
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Where to Find Us
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed text-lg">
            Balıkçı Halil Geyikli is located in the center of Geyikli,
            Çanakkale. We welcome both local guests and visitors exploring
            the Geyikli and Bozcaada area.
          </p>

          <div className="mt-8 text-gray-300">

            <p>
              <strong className="text-white">Address:</strong>{" "}
              Cumhuriyet, Vatan Sk. 5, 17610 Geyikli,
              Ezine, Çanakkale, Türkiye
            </p>

            <p className="mt-3">
              <strong className="text-white">Phone:</strong>{" "}
              +90 543 345 00 17
            </p>

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Balikci+Halil+Geyikli"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-bold transition"
            >
              📍 Open in Google Maps
            </a>

            <a
              href="tel:+905433450017"
              className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition"
            >
              📞 Call Us
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#061a2e] border-t border-white/10 text-center">

        <p className="text-gray-400">
          © {new Date().getFullYear()} Balıkçı Halil Geyikli
        </p>

        <p className="text-gray-500 text-sm mt-2">
          Fish & Seafood Restaurant in Geyikli, Çanakkale
        </p>

      </footer>

    </main>
  );
}