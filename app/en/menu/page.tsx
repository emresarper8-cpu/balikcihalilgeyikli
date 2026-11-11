
import Image from "next/image";
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

type MenuItem = {
  name: string;
  turkish: string;
  price: string;
  portion?: string;
  calories?: string;
  allergens?: string[];
  image?: string;
};

const categories: {
  title: string;
  items: MenuItem[];
}[] = [
  {
    title: "🍳 Pan Fried (Tava)",
    items: [
      {
        name: "Sardines",
        turkish: "sardalya",
        price: "300₺",
        portion: "250 g, boneless",
        calories: "600–800 kcal",
        allergens: ["Fish", "Gluten (wheat)", "Egg"],
        image: "/sardalye.jpg",
      },
      {
        name: "Horse Mackerel",
        turkish: "istavrit",
        price: "350₺",
        portion: "400 g, raw, with bones, flour-coated",
        calories: "500–700 kcal",
        allergens: ["Fish", "Gluten (wheat)"],
        image: "/balik.jpg",
      },
      {
        name: "Whiting",
        turkish: "mezgit",
        price: "450₺",
        portion: "200 g, boneless, with special sauce",
        calories: "350–500 kcal",
        allergens: ["Fish", "Gluten (wheat)", "Egg"],
      },
      {
        name: "Sole",
        turkish: "dil balığı",
        price: "400₺",
        portion: "200 g, boneless, with special sauce",
        calories: "350–500 kcal",
        allergens: ["Fish", "Gluten (wheat)", "Egg"],
      },
      {
        name: "Red Porgy",
        turkish: "mercan",
        price: "450₺",
        portion: "400 g, raw, with bones, flour-coated",
        calories: "450–650 kcal",
        allergens: ["Fish", "Gluten (wheat)"],
      },
      {
        name: "Anchovies",
        turkish: "hamsi",
        price: "350₺",
        portion: "350–400 g,  with bones, flour-coated",
        calories: "500–700 kcal",
        allergens: ["Fish", "Gluten (wheat)"],
      },
      {
        name: "Bonito",
        turkish: "palamut",
        price: "300₺",
        portion: "250 g, with bones, flour-coated",
        calories: "400–550 kcal",
        allergens: ["Fish", "Gluten (wheat)"],
      },
      {
        name: "Turkish Meatballs",
        turkish: "köfte",
        price: "500₺",
        portion: "200 g raw weight, pan-cooked without added oil",
        calories: "Approx. 450 kcal",
        allergens: ["Gluten"],
      },
      {
        name: "Fried Mussels",
        turkish: "midye tava",
        price: "350₺",
        portion: "15 pieces, served on 5 skewers",
        calories: "Approx. 525 kcal",
        allergens: ["Molluscs", "Gluten (wheat)", "Egg"],
      },
    ],
  },
  {
    title: "🦐 Hot Starters (Ara Sıcak)",
    items: [
      {
        name: "Calamari",
        turkish: "kalamar",
        price: "700₺",
        portion: "200 g, specially marinated, flour-coated and fried",
        allergens: ["Molluscs", "Gluten (wheat)"],
      },
      {
        name: "French Fries",
        turkish: "patates cips",
        price: "200₺",
        portion: "2 medium potatoes",
      },
    ],
  },
  {
    title: "🥪 Fish Sandwiches (Ekmek Arası)",
    items: [
      {
        name: "Sardine Sandwich",
        turkish: "sardalya ekmek",
        price: "200₺",
        portion: "11–12 fish, half loaf of bread, rocket and onion",
        allergens: ["Fish", "Gluten"],
      },
      {
        name: "Whiting Sandwich",
        turkish: "mezgit ekmek",
        price: "300₺",
        portion: "100 g fish, half loaf of bread, rocket and onion",
        allergens: ["Fish", "Gluten"],
      },
      {
        name: "Sole Sandwich",
        turkish: "dil balığı ekmek",
        price: "300₺",
        portion: "100 g fish, half loaf of bread, rocket and onion",
        allergens: ["Fish", "Gluten"],
      },
    ],
  },
  {
    title: "🥗 Salads (Salatalar)",
    items: [
      {
        name: "Turkish Shepherd's Salad",
        turkish: "çoban salatası",
        price: "200–300₺",
        portion: "Approx. 100 g, with olive oil",
      },
      {
        name: "Green Salad",
        turkish: "yeşil salata",
        price: "200–300₺",
        portion: "Approx. 100 g, with olive oil",
      },
    ],
  },
  {
    title: "🔥 Grilled Fish (Izgara)",
    items: [
      {
        name: "Grilled Sardines",
        turkish: "ızgara sardalya",
        price: "350₺",
        portion: "350–400 g, whole, no added oil",
        allergens: ["Fish"],
        image: "/sardalye.jpg",
      },
      {
        name: "Grilled Sea Bream",
        turkish: "ızgara çipura",
        price: "500₺",
        portion: "400–450 g, whole, no added oil",
        allergens: ["Fish"],
        image: "/cipura.jpg",
      },
      {
        name: "Grilled Sea Bass",
        turkish: "ızgara levrek",
        price: "600₺",
        portion: "400–450 g, whole, no added oil",
        allergens: ["Fish"],
      },
      {
        name: "Grilled Bonito",
        turkish: "ızgara palamut",
        price: "400₺",
        portion: "Whole fish, weight varies daily, no added oil",
        allergens: ["Fish"],
      },
    ],
  },
  {
    title: "🥗 Aegean Meze (Mezeler)",
    items: [
      {
        name: "Octopus",
        turkish: "ahtapot",
        price: "550₺",
        portion: "Approx. 100 g",
        allergens: ["Molluscs"],
        image: "/ahtapot.jpg",
      },
      {
        name: "Shrimp",
        turkish: "karides",
        price: "500₺",
        portion: "Approx. 100 g",
        allergens: ["Crustaceans"],
        image: "/karides.jpg",
      },
      {
        name: "Lakerda (Cured Bonito)",
        turkish: "lakerda",
        price: "450₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
        image: "/lakerda.jpg",
      },
      {
        name: "Marinated Sea Bass",
        turkish: "levrek marin",
        price: "550₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
      },
      {
        name: "Marinated Anchovies",
        turkish: "hamsi marin",
        price: "200₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
      },
      {
        name: "Marinated Sardines",
        turkish: "sardalya marin",
        price: "300₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
      },
      {
        name: "Sea Fennel",
        turkish: "deniz börülcesi",
        price: "200₺",
        portion: "Approx. 100 g",
      },
      {
        name: "Yogurt Meze",
        turkish: "yoğurtlu",
        price: "200₺",
        portion: "Approx. 100 g",
        allergens: ["Milk"],
      },
    ],
  },
  {
    title: "🥤 Drinks (İçecekler)",
    items: [
      {
        name: "Canned Soft Drinks",
        turkish: "kutu meşrubat",
        price: "70₺",
        portion: "330 ml",
        calories: "Approx. 140 kcal",
      },
      {
        name: "Homemade Lemonade",
        turkish: "limonata",
        price: "70₺",
        portion: "330 ml",
        calories: "Approx. 130–160 kcal",
      },
      {
        name: "Turkish Turnip Juice",
        turkish: "şalgam suyu",
        price: "65₺",
        portion: "300 ml",
        calories: "Approx. 20–30 kcal",
      },
      {
        name: "Pickle Juice",
        turkish: "turşu suyu",
        price: "70₺",
        portion: "250 ml",
        calories: "Approx. 5–15 kcal",
      },
      {
        name: "Water",
        turkish: "su",
        price: "20₺",
        portion: "500 ml",
        calories: "0 kcal",
      },
      {
        name: "Mineral Water",
        turkish: "soda",
        price: "40₺",
        portion: "200 ml",
        calories: "0 kcal",
      },
      {
        name: "Bottled Soft Drinks",
        turkish: "şişe meşrubat",
        price: "60₺",
        portion: "250 ml",
        calories: "Approx. 105 kcal",
      },
    ],
  },
];

export default function EnglishMenu() {
  return (
    <main className="min-h-screen bg-[#08253f] text-white">
      <header className="bg-[#061a2e] border-b border-cyan-400/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <a href="/en" className="font-bold text-xl">
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
              href="/menu"
              className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition font-bold"
            >
              🇹🇷 TR
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#08253f] py-16 sm:py-24 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Balıkçı Halil
            </h1>
            <p className="text-cyan-300 mt-3 text-lg">
              English Menu
            </p>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-bold text-cyan-300 mb-5 border-b border-white/20 pb-3">
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={`${category.title}-${item.name}-${index}`}
                      className="flex gap-3 sm:gap-5 bg-white rounded-xl p-2 sm:p-3 border border-cyan-100/30 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="relative w-24 h-24 sm:w-36 sm:h-32 shrink-0 overflow-hidden rounded-lg bg-[#eaf2f7]">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 96px, 144px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#08253f] text-xs font-semibold text-center p-2">
                            Photo coming soon
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between py-2">
                        <div>
                          <h3 className="text-base sm:text-xl font-bold text-[#08253f]">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-400 mt-0.5">
                            ({item.turkish})
                          </p>

                          {item.portion && (
                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                              {item.portion}
                            </p>
                          )}
                        </div>

                        <div className="border-t border-[#dce6ed] pt-2 flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm text-gray-500">
                            Balıkçı Halil
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-[#08253f] whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>

                        {(item.calories || item.portion || item.allergens) && (
                          <details className="mt-2 text-sm text-[#08253f]">
                            <summary className="cursor-pointer font-semibold text-cyan-700">
                              Nutrition & allergen information
                            </summary>

                            <div className="mt-2 space-y-1 text-gray-600">
                              {item.portion && (
                                <p>Portion: {item.portion}</p>
                              )}
                              {item.calories && (
                                <p>Energy: {item.calories}</p>
                              )}
                              {item.allergens && (
                                <p>
                                  <span className="font-semibold text-[#08253f]">
                                    Allergens:
                                  </span>{" "}
                                  {item.allergens.join(" · ")}
                                </p>
                              )}
                            </div>
                          </details>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-cyan-300 mt-14 text-sm">
            🌊 Fresh from the sea – Enjoy your meal! 🌊
          </p>

          <div className="mt-5 space-y-2 text-center">
            <p className="text-white/60 text-xs leading-relaxed">
              * Nutritional and energy values are estimates. They may vary
              depending on portion size and preparation method.
            </p>
            <p className="text-white/60 text-xs leading-relaxed">
              Allergen Notice: Our dishes may contain various allergens.
              Please inform our staff before ordering if you have any
              allergies or food sensitivities. Cross-contact may occur
              during food preparation.
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
