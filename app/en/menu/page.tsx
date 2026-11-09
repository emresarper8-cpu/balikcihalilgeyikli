import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Menu | Fish, Seafood & Meze",
  description:
    "English menu of Balıkçı Halil Geyikli. Fresh fish, seafood, fish sandwiches, grilled fish, Aegean meze and drinks in Geyikli, Çanakkale.",
  alternates: {
    canonical: "/en/menu",
    languages: {
      "tr-TR": "/menu",
      "en-US": "/en/menu",
      "x-default": "/menu",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Balıkçı Halil Geyikli | English Menu",
    description:
      "Fresh fish, seafood, fish sandwiches, grilled fish and Aegean meze in Geyikli, Çanakkale.",
    url: "/en/menu",
    siteName: "Balıkçı Halil Geyikli",
    locale: "en_US",
    type: "website",
  },
};

const categories = [
  {
    title: "🍳 Pan Fried",
    items: [
      ["Sardines", "300₺"],
      ["Horse Mackerel", "350₺"],
      ["Whiting", "450₺"],
      ["Sole", "400₺"],
      ["Red Porgy", "450₺"],
      ["Turkish Meatballs", "500₺"],
      ["Pan Fried Mussels", "350₺"],
    ],
  },
  {
    title: "🦐 Hot Starters",
    items: [
      ["Calamari", "700₺"],
      ["Fish Bone Crisps", "150₺"],
      ["French Fries", "200₺"],
    ],
  },
  {
    title: "🥪 Fish Sandwich",
    items: [
      ["Sardine Sandwich", "200₺"],
      ["Whiting Sandwich", "300₺"],
      ["Sole Sandwich", "300₺"],
    ],
  },
  {
    title: "🥗 Salads",
    items: [
      ["Shepherd's Salad", "200–300₺"],
    ],
  },
  {
    title: "🔥 Grilled Fish",
    items: [
      ["Grilled Sardines", "350₺"],
      ["Grilled Sea Bream", "500₺"],
      ["Grilled Sea Bass", "600₺"],
    ],
  },
  {
    title: "🥗 Aegean Meze",
    items: [
      ["Octopus", "550₺"],
      ["Shrimp", "500₺"],
      ["Lakerda – Cured Bonito", "450₺"],
      ["Marinated Sea Bass", "550₺"],
      ["Marinated Anchovies", "200₺"],
      ["Marinated Sardines", "300₺"],
      ["Sea Fennel", "200₺"],
      ["Yogurt Meze", "200₺"],
    ],
  },
  {
    title: "🥤 Drinks",
    items: [
      ["Soft Drinks", "70₺"],
      ["Homemade Lemonade", "70₺"],
      ["Turkish Turnip Juice", "65₺"],
      ["Pickle Juice", "70₺"],
      ["Water", "20₺"],
      ["Mineral Water", "40₺"],
      ["Bottled Soft Drink", "60₺"],
    ],
  },
];

export default function EnglishMenu() {
  return (
    <main className="min-h-screen bg-[#08253f] text-white">

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
              🇹🇷 TR
            </a>

          </div>
        </div>
      </header>

      <section className="bg-[#08253f] py-24 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-cyan-300 text-sm font-semibold tracking-[4px]">
              BALIKÇI HALİL GEYİKLİ
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              English Menu
            </h1>

            <p className="text-center text-gray-300 text-lg mt-5 max-w-3xl mx-auto">
              Fresh fish, seafood, fish sandwiches, grilled fish and
              traditional Aegean meze in Geyikli, Çanakkale.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >

                <h2 className="text-2xl font-bold mb-6 text-cyan-300">
                  {category.title}
                </h2>

                <div className="space-y-4">

                  {category.items.map(([name, price]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"
                    >

                      <span className="text-lg">
                        {name}
                      </span>

                      <span className="text-lg font-bold text-white whitespace-nowrap">
                        {price}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

          <div className="text-center mt-12">

            <p className="text-cyan-300 text-sm">
              🌊 Fresh from the sea – Enjoy your meal! 🌊
            </p>

            <p className="text-gray-400 text-sm mt-4">
              Prices may vary depending on the daily catch and seasonal
              products.
            </p>

          </div>

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