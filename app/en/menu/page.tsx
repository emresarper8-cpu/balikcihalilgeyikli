
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Menu | Balıkçı Halil Geyikli",
  description:
    "Fresh fish, seafood, grilled fish and Aegean meze in Geyikli, Çanakkale.",
  alternates: {
    canonical: "/en/menu",
    languages: {
      "tr-TR": "/menu",
      "en-US": "/en/menu",
      "x-default": "/menu",
    },
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
  desc: string;
};

const categories: { title: string; items: MenuItem[] }[] = [
  {
    title: "🍳 Pan Fried Fish",
    items: [
      {
        name: "Sardines",
        turkish: "Sardalya",
        price: "300₺",
        portion: "250 g, boneless",
        calories: "600–800 kcal",
        allergens: ["Fish", "Gluten", "Egg"],
        image: "/menu/sardalye.jpg.png",
        desc: "Aegean's traditional fish delicacy",
      },
      {
        name: "Horse Mackerel",
        turkish: "İstavrit",
        price: "350₺",
        portion: "400 g, with bones",
        allergens: ["Fish", "Gluten"],
        desc: "Freshly prepared and pan-fried",
      },
      {
        name: "Whiting",
        turkish: "Mezgit",
        price: "450₺",
        portion: "200 g, boneless",
        allergens: ["Fish", "Gluten", "Egg"],
        desc: "Crispy golden fried whiting",
      },
      {
        name: "Sole",
        turkish: "Dil balığı",
        price: "400₺",
        portion: "200 g",
        allergens: ["Fish", "Gluten", "Egg"],
        image: "/menu/dil.jpg.png",
        desc: "Delicately prepared fried sole",
      },
      {
        name: "Red Porgy",
        turkish: "Mercan",
        price: "450₺",
        portion: "400 g, with bones",
        allergens: ["Fish", "Gluten"],
        desc: "Fresh seasonal fish",
      },
      {
        name: "Anchovies",
        turkish: "Hamsi",
        price: "350₺",
        portion: "350–400 g",
        allergens: ["Fish", "Gluten"],
        image: "/menu/hamsi.jpg.png",
        desc: "Traditional crispy fried anchovies",
      },
      {
        name: "Bonito",
        turkish: "Palamut",
        price: "300₺",
        portion: "250 g",
        allergens: ["Fish", "Gluten"],
        image: "/menu/palamut.jpg.png",
        desc: "Freshly prepared bonito",
      },
      {
        name: "Turkish Meatballs",
        turkish: "Köfte",
        price: "500₺",
        portion: "200 g raw weight",
        allergens: ["Gluten"],
        desc: "Traditional Turkish-style meatballs",
      },
      {
        name: "Fried Mussels",
        turkish: "Midye Tava",
        price: "350₺",
        portion: "15 pieces",
        allergens: ["Molluscs", "Gluten", "Egg"],
        image: "/menu/midye-tava.jpg.png",
        desc: "Golden fried mussels",
      },
    ],
  },
  {
    title: "🦐 Hot Starters",
    items: [
      {
        name: "Calamari",
        turkish: "Kalamar",
        price: "700₺",
        portion: "200 g",
        allergens: ["Molluscs", "Gluten"],
        image: "/menu/kalamar.jpg.png",
        desc: "Served with homemade special tarator sauce",
      },
      {
        name: "French Fries",
        turkish: "Patates Cips",
        price: "200₺",
        portion: "2 medium potatoes",
        image: "/menu/patates.jpg.png",
        desc: "Freshly fried crispy potatoes",
      },
    ],
  },
  {
    title: "🥪 Fish Sandwiches",
    items: [
      {
        name: "Sardine Sandwich",
        turkish: "Sardalya Ekmek",
        price: "200₺",
        portion: "11–12 fish, half loaf",
        allergens: ["Fish", "Gluten"],
        image: "/menu/sardalya-ekmek.jpg.png",
        desc: "Served with rocket and onion",
      },
      {
        name: "Whiting Sandwich",
        turkish: "Mezgit Ekmek",
        price: "300₺",
        portion: "100 g fish, half loaf",
        allergens: ["Fish", "Gluten"],
        desc: "Served with rocket and onion",
      },
      {
        name: "Sole Sandwich",
        turkish: "Dil Balığı Ekmek",
        price: "300₺",
        portion: "100 g fish, half loaf",
        allergens: ["Fish", "Gluten"],
        desc: "Served with rocket and onion",
      },
    ],
  },
  {
    title: "🥗 Salads",
    items: [
      {
        name: "Turkish Shepherd's Salad",
        turkish: "Çoban Salatası",
        price: "200–300₺",
        portion: "Approx. 100 g",
        image: "/menu/salata.jpg.png",
        desc: "Fresh seasonal vegetables with olive oil",
      },
      {
        name: "Green Salad",
        turkish: "Yeşil Salata",
        price: "200–300₺",
        portion: "Approx. 100 g",
        image: "/menu/salata.jpg.png",
        desc: "Fresh greens with olive oil",
      },
    ],
  },
  {
    title: "🔥 Grilled Fish",
    items: [
      {
        name: "Grilled Sardines",
        turkish: "Izgara Sardalya",
        price: "350₺",
        portion: "350–400 g",
        allergens: ["Fish"],
        image: "/menu/izgara-sardalya.jpg.png",
        desc: "Fresh sardines grilled over charcoal",
      },
      {
        name: "Grilled Sea Bream",
        turkish: "Izgara Çipura",
        price: "500₺",
        portion: "400–450 g",
        allergens: ["Fish"],
        image: "/menu/çipura.jpg.png",
        desc: "Daily fresh sea bream grilled over charcoal",
      },
      {
        name: "Grilled Sea Bass",
        turkish: "Izgara Levrek",
        price: "600₺",
        portion: "400–450 g",
        allergens: ["Fish"],
        desc: "Fresh sea bass grilled over charcoal",
      },
      {
        name: "Grilled Bonito",
        turkish: "Izgara Palamut",
        price: "400₺",
        portion: "Whole fish",
        allergens: ["Fish"],
        image: "/menu/palamut.jpg.png",
        desc: "Fresh bonito grilled over charcoal",
      },
    ],
  },
  {
    title: "🥗 Aegean Meze",
    items: [
      {
        name: "Octopus Salad",
        turkish: "Ahtapot Salatası",
        price: "550₺",
        portion: "Approx. 100 g",
        allergens: ["Molluscs"],
        image: "/menu/ahtapot-marin.jpg.png",
        desc: "With a special olive oil dressing",
      },
      {
        name: "Shrimp",
        turkish: "Karides",
        price: "500₺",
        portion: "Approx. 100 g",
        allergens: ["Crustaceans"],
        image: "/menu/karides.jpg.png",
        desc: "Fresh daily shrimp",
      },
      {
        name: "Lakerda",
        turkish: "Lakerda",
        price: "450₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
        image: "/menu/lakerda.jpg.png",
        desc: "Prepared using traditional methods",
      },
      {
        name: "Marinated Sea Bass",
        turkish: "Levrek Marin",
        price: "550₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
        image: "/menu/levrek-marin.jpg.png",
        desc: "Traditional marinated sea bass",
      },
      {
        name: "Marinated Anchovies",
        turkish: "Hamsi Marin",
        price: "200₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
        image: "/menu/hamsi-marin.jpg.png",
        desc: "Fresh marinated anchovies",
      },
      {
        name: "Marinated Sardines",
        turkish: "Sardalya Marin",
        price: "300₺",
        portion: "Approx. 100 g",
        allergens: ["Fish"],
        image: "/menu/sardalye-marin.jpg.png",
        desc: "Aegean-style marinated sardines",
      },
      {
        name: "Sea Fennel",
        turkish: "Deniz Börülcesi",
        price: "200₺",
        portion: "Approx. 100 g",
        image: "/menu/deniz-borulcesi.jpg.png",
        desc: "Aegean sea fennel with olive oil",
      },
      {
        name: "Yogurt Meze",
        turkish: "Yoğurtlu",
        price: "200₺",
        portion: "Approx. 100 g",
        allergens: ["Milk"],
        image: "/menu/yogurtlu.jpg.png",
        desc: "Traditional yogurt-based meze",
      },
    ],
  },
  {
    title: "🥤 Drinks",
    items: [
      {
        name: "Canned Soft Drinks",
        turkish: "Kutu Meşrubat",
        price: "70₺",
        portion: "330 ml",
        image: "/menu/kutu-meşrubatlar.jpg.png",
        desc: "Chilled canned drinks",
      },
      {
        name: "Homemade Lemonade",
        turkish: "Limonata",
        price: "70₺",
        portion: "330 ml",
        image: "/menu/limonata.jpg.png",
        desc: "Refreshing homemade lemonade",
      },
      {
        name: "Turkish Turnip Juice",
        turkish: "Şalgam Suyu",
        price: "65₺",
        portion: "300 ml",
        image: "/menu/şalgam-suyu.jpg.png",
        desc: "Traditional Turkish turnip juice",
      },
      {
        name: "Pickle Juice",
        turkish: "Turşu Suyu",
        price: "70₺",
        portion: "250 ml",
        image: "/menu/turşu suyu.jpg.png",
        desc: "Traditional pickle juice",
      },
      {
        name: "Water",
        turkish: "Su",
        price: "20₺",
        portion: "500 ml",
        image: "/menu/su.jpg.png",
        desc: "Bottled drinking water",
      },
      {
        name: "Mineral Water",
        turkish: "Soda",
        price: "40₺",
        portion: "200 ml",
        image: "/menu/soda.jpg.png",
        desc: "Sparkling mineral water",
      },
      {
        name: "Bottled Soft Drinks",
        turkish: "Şişe Meşrubat",
        price: "60₺",
        portion: "250 ml",
        image: "/menu/şişe-meşrubat.jpg.png",
        desc: "Chilled bottled drinks",
      },
    ],
  },
];

export default function EnglishMenu() {
  return (
    <main className="min-h-screen bg-white text-[#08253f]">
      <header className="bg-[#061a2e] text-white py-5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/en" className="font-bold text-xl">
            Balıkçı <span className="text-cyan-400">Halil</span> Geyikli
          </a>

          <div className="flex gap-3">
            <a href="/en" className="px-4 py-2 rounded-full bg-white/10">
              Home
            </a>
            <a href="/menu" className="px-4 py-2 rounded-full bg-cyan-500 font-bold">
              🇹🇷 TR
            </a>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-[#08253f]">
            Our Menu
          </h1>

          <p className="text-center text-gray-500 mt-4 mb-14">
            Fresh daily products from the Aegean
          </p>

          {categories.map((category) => (
            <section key={category.title} className="mb-16">
              <h2 className="text-3xl font-bold text-[#08253f] mb-8 border-b pb-4">
                {category.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 bg-white border border-gray-100"
                  >
                    <div className="relative aspect-square w-full bg-white">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-3"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                          Balıkçı Halil
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#08253f]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        ({item.turkish})
                      </p>

                      <p className="mt-3 text-gray-600">{item.desc}</p>

                      {item.portion && (
                        <p className="mt-2 text-sm text-gray-500">
                          Portion: {item.portion}
                        </p>
                      )}

                      <div className="mt-5 pt-4 border-t flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          Balıkçı Halil
                        </span>

                        <span className="text-2xl font-bold text-[#08253f]">
                          {item.price}
                        </span>
                      </div>

                      {(item.calories || item.allergens) && (
                        <details className="mt-3 text-sm">
                          <summary className="cursor-pointer font-semibold text-cyan-700">
                            Nutrition & allergen information
                          </summary>

                          <div className="mt-2 text-gray-600 space-y-1">
                            {item.calories && (
                              <p>Energy: {item.calories}</p>
                            )}

                            {item.allergens && (
                              <p>
                                Allergens: {item.allergens.join(" · ")}
                              </p>
                            )}
                          </div>
                        </details>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <p className="text-center text-[#08253f] mt-12">
            🌊 Fresh from the sea – Enjoy your meal! 🌊
          </p>

          <p className="text-center text-gray-400 text-xs mt-4">
            Nutritional values are estimates. Please inform our staff about
            any allergies or food sensitivities.
          </p>
        </div>
      </section>

      <footer className="py-8 bg-[#061a2e] text-center text-gray-400">
        <p>© {new Date().getFullYear()} Balıkçı Halil Geyikli</p>
        <p className="text-sm mt-2">
          Fish & Seafood Restaurant in Geyikli, Çanakkale
        </p>
      </footer>
    </main>
  );
}
