import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Menu | Fish & Seafood",
  description:
    "English menu of Balıkçı Halil Geyikli. Fresh fish, seafood, calamari, shrimp, meze and grilled dishes in Geyikli, Çanakkale.",
  alternates: {
    canonical: "/en/menu",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Balıkçı Halil Geyikli | English Menu",
    description:
      "Fresh fish, seafood, meze and grilled dishes in Geyikli, Çanakkale.",
    url: "/en/menu",
    siteName: "Balıkçı Halil Geyikli",
    locale: "en_US",
    type: "website",
  },
};

const menuSections = [
  {
    title: "Fish",
    items: [
      "Sardines",
      "Sea Bass",
      "Sea Bream",
      "Mullet",
      "Anchovies",
    ],
  },
  {
    title: "Seafood",
    items: [
      "Calamari",
      "Shrimp",
      "Mixed Seafood",
    ],
  },
  {
    title: "Meze",
    items: [
      "Aegean Meze",
      "Marinated Fish",
      "Lakerda",
      "Seasonal Meze",
    ],
  },
  {
    title: "Grill",
    items: [
      "Grilled Fish",
      "Grilled Meatballs",
    ],
  },
];

export default function EnglishMenu() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">

      <header className="bg-[#061a2e] border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <a
            href="/en"
            className="font-bold text-xl"
          >
            Balıkçı <span className="text-cyan-400">Halil</span> Geyikli
          </a>

          <div className="flex items-center gap-3">

            <a
              href="/en"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              Home
            </a>

            <a
              href="/"
              className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition font-bold"
            >
              TR
            </a>

          </div>

        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-14">

          <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
            BALIKÇI HALİL GEYİKLİ
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            English Menu
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-5 text-lg">
            Fresh fish, seafood and traditional Aegean meze in Geyikli,
            Çanakkale.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {menuSections.map((section) => (
            <section
              key={section.title}
              className="bg-[#0b2538] rounded-3xl p-7 shadow-xl border border-white/5"
            >
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">
                {section.title}
              </h2>

              <div className="space-y-4">

                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 pb-3"
                  >
                    <span className="text-lg">
                      {item}
                    </span>

                    <span className="text-gray-500">
                      —
                    </span>
                  </div>
                ))}

              </div>
            </section>
          ))}

        </div>

        <div className="text-center mt-14">

          <p className="text-gray-400 mb-6">
            Prices may vary depending on the daily catch and seasonal products.
          </p>

          <a
            href="tel:+905433450017"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-bold transition"
          >
            📞 Call Balıkçı Halil
          </a>

        </div>

      </section>

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