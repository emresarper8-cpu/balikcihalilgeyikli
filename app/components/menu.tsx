
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menümüz | Balıkçı Halil Geyikli",
  description:
    "Geyikli, Çanakkale'de günlük taze balık, deniz ürünleri, ızgara balık ve Ege mezeleri.",
  alternates: {
    canonical: "/menu",
    languages: {
      "tr-TR": "/menu",
      "en-US": "/en/menu",
      "x-default": "/menu",
    },
  },
};

type MenuItem = {
  name: string;
  price: string;
  portion?: string;
  calories?: string;
  allergens?: string[];
  image?: string;
  desc: string;
};

const categories: { title: string; items: MenuItem[] }[] = [
  {
    title: "🍳 Tava Balıklar",
    items: [
      {
        name: "Sardalya",
        price: "300₺",
        portion: "250 g, kılçıksız",
        calories: "600–800 kcal",
        allergens: ["Balık", "Gluten", "Yumurta"],
        image: "/menu/sardalye.jpg.png",
        desc: "Ege'nin geleneksel balık lezzeti",
      },
      {
        name: "İstavrit",
        price: "350₺",
        portion: "400 g, çiğ, kılçıklı, unlu",
        allergens: ["Balık", "Gluten"],
        desc: "Günlük hazırlanır ve tavada kızartılır",
      },
      {
        name: "Mezgit",
        price: "450₺",
        portion: "200 g, kılçıksız",
        allergens: ["Balık", "Gluten", "Yumurta"],
        desc: "Çıtır çıtır kızarmış mezgit",
      },
      {
        name: "Dil Balığı",
        price: "400₺",
        portion: "200 g",
        allergens: ["Balık", "Gluten", "Yumurta"],
        image: "/menu/dil.jpg.png",
        desc: "Özenle hazırlanmış kızarmış dil balığı",
      },
      {
        name: "Mercan",
        price: "450₺",
        portion: "400 g, kılçıklı",
        allergens: ["Balık", "Gluten"],
        desc: "Mevsimin taze balığı",
      },
      {
        name: "Hamsi",
        price: "350₺",
        portion: "350–400 g",
        allergens: ["Balık", "Gluten"],
        image: "/menu/hamsi.jpg.png",
        desc: "Geleneksel çıtır kızarmış hamsi",
      },
      {
        name: "Palamut",
        price: "300₺",
        portion: "250 g",
        allergens: ["Balık", "Gluten"],
        image: "/menu/palamut.jpg.png",
        desc: "Günlük hazırlanan taze palamut",
      },
      {
        name: "Köfte",
        price: "500₺",
        portion: "200 g çiğ ağırlık",
        allergens: ["Gluten"],
        desc: "Geleneksel usul Türk köftesi",
      },
      {
        name: "Midye Tava",
        price: "350₺",
        portion: "15 adet",
        allergens: ["Yumuşakçalar", "Gluten", "Yumurta"],
        image: "/menu/midye-tava.jpg.png",
        desc: "Altın renginde kızarmış midye",
      },
    ],
  },
  {
    title: "🦐 Ara Sıcaklar",
    items: [
      {
        name: "Kalamar",
        price: "700₺",
        portion: "200 g",
        allergens: ["Yumuşakçalar", "Gluten"],
        image: "/menu/kalamar.jpg.png",
        desc: "Ev yapımı özel tarator sosuyla servis edilir",
      },
      {
        name: "Patates Cips",
        price: "200₺",
        portion: "2 orta boy patates",
        image: "/menu/patates.jpg.png",
        desc: "Taze kızarmış çıtır patates",
      },
    ],
  },
  {
    title: "🥪 Ekmek Arası",
    items: [
      {
        name: "Sardalya Ekmek",
        price: "200₺",
        portion: "11–12 adet balık, yarım somun",
        allergens: ["Balık", "Gluten"],
        image: "/menu/sardalya-ekmek.jpg.png",
        desc: "Roka ve soğan ile servis edilir",
      },
      {
        name: "Mezgit Ekmek",
        price: "300₺",
        portion: "100 g balık, yarım somun",
        allergens: ["Balık", "Gluten"],
        desc: "Roka ve soğan ile servis edilir",
      },
      {
        name: "Dil Balığı Ekmek",
        price: "300₺",
        portion: "100 g balık, yarım somun",
        allergens: ["Balık", "Gluten"],
        desc: "Roka ve soğan ile servis edilir",
      },
    ],
  },
  {
    title: "🥗 Salatalar",
    items: [
      {
        name: "Çoban Salatası",
        price: "200–300₺",
        portion: "Yaklaşık 100 g",
        image: "/menu/salata.jpg.png",
        desc: "Zeytinyağlı mevsim sebzeleri",
      },
      {
        name: "Yeşil Salata",
        price: "200–300₺",
        portion: "Yaklaşık 100 g",
        image: "/menu/salata.jpg.png",
        desc: "Zeytinyağlı taze yeşillikler",
      },
    ],
  },
  {
    title: "🔥 Izgara Balıklar",
    items: [
      {
        name: "Izgara Sardalya",
        price: "350₺",
        portion: "350–400 g",
        allergens: ["Balık"],
        image: "/menu/izgara-sardalya.jpg.png",
        desc: "Kömür ateşinde taze sardalya",
      },
      {
        name: "Izgara Çipura",
        price: "500₺",
        portion: "400–450 g",
        allergens: ["Balık"],
        image: "/menu/çipura.jpg.png",
        desc: "Kömür ateşinde günlük taze çipura",
      },
      {
        name: "Izgara Levrek",
        price: "600₺",
        portion: "400–450 g",
        allergens: ["Balık"],
        desc: "Kömür ateşinde taze levrek",
      },
      {
        name: "Izgara Palamut",
        price: "400₺",
        portion: "Bütün balık",
        allergens: ["Balık"],
        image: "/menu/palamut.jpg.png",
        desc: "Kömür ateşinde taze palamut",
      },
    ],
  },
  {
    title: "🥗 Ege Mezeleri",
    items: [
      {
        name: "Ahtapot Salatası",
        price: "550₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Yumuşakçalar"],
        image: "/menu/ahtapot-marin.jpg.png",
        desc: "Özel zeytinyağlı sos ile",
      },
      {
        name: "Karides",
        price: "500₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Kabuklular"],
        image: "/menu/karides.jpg.png",
        desc: "Günlük taze karides",
      },
      {
        name: "Lakerda",
        price: "450₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/lakerda.jpg.png",
        desc: "Geleneksel yöntemlerle hazırlanır",
      },
      {
        name: "Levrek Marin",
        price: "550₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/levrek-marin.jpg.png",
        desc: "Geleneksel usul marine levrek",
      },
      {
        name: "Hamsi Marin",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/hamsi-marin.jpg.png",
        desc: "Taze marine hamsi",
      },
      {
        name: "Sardalya Marin",
        price: "300₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/sardalye-marin.jpg.png",
        desc: "Ege usulü marine sardalya",
      },
      {
        name: "Deniz Börülcesi",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        image: "/menu/deniz-borulcesi.jpg.png",
        desc: "Zeytinyağlı Ege deniz börülcesi",
      },
      {
        name: "Yoğurtlu Meze",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Süt"],
        image: "/menu/yogurtlu.jpg.png",
        desc: "Geleneksel yoğurtlu meze",
      },
    ],
  },
  {
    title: "🥤 İçecekler",
    items: [
      {
        name: "Kutu Meşrubat",
        price: "70₺",
        portion: "330 ml",
        image: "/menu/kutu-meşrubatlar.jpg.png",
        desc: "Soğuk kutu içecekler",
      },
      {
        name: "Limonata",
        price: "70₺",
        portion: "330 ml",
        image: "/menu/limonata.jpg.png",
        desc: "Ferahlatıcı ev yapımı limonata",
      },
      {
        name: "Şalgam Suyu",
        price: "65₺",
        portion: "300 ml",
        image: "/menu/şalgam-suyu.jpg.png",
        desc: "Geleneksel Türk şalgamı",
      },
      {
        name: "Turşu Suyu",
        price: "70₺",
        portion: "250 ml",
        image: "/menu/turşu suyu.jpg.png",
        desc: "Geleneksel turşu suyu",
      },
      {
        name: "Su",
        price: "20₺",
        portion: "500 ml",
        image: "/menu/su.jpg.png",
        desc: "Şişe içme suyu",
      },
      {
        name: "Soda",
        price: "40₺",
        portion: "200 ml",
        image: "/menu/soda.jpg.png",
        desc: "Doğal mineralli maden suyu",
      },
      {
        name: "Şişe Meşrubat",
        price: "60₺",
        portion: "250 ml",
        image: "/menu/şişe-meşrubat.jpg.png",
        desc: "Soğuk şişe içecekler",
      },
    ],
  },
];

export default function Menu() {
  return (
    <main className="min-h-screen bg-white text-[#08253f]">
      <header className="bg-[#061a2e] text-white py-5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="font-bold text-xl">
            Balıkçı <span className="text-cyan-400">Halil</span> Geyikli
          </a>

          <div className="flex gap-3">
            <a href="/" className="px-4 py-2 rounded-full bg-white/10">
              Ana Sayfa
            </a>
            <a
              href="/en/menu"
              className="px-4 py-2 rounded-full bg-cyan-500 font-bold"
            >
              EN
            </a>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-[#08253f]">
            Menümüz
          </h1>

          <p className="text-center text-gray-500 mt-4 mb-14">
            Ege'den günlük taze lezzetler
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

                      <p className="mt-3 text-gray-600">{item.desc}</p>

                      {item.portion && (
                        <p className="mt-2 text-sm text-gray-500">
                          Porsiyon: {item.portion}
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
                            Besin ve alerjen bilgisi
                          </summary>

                          <div className="mt-2 text-gray-600 space-y-1">
                            {item.calories && (
                              <p>Enerji: {item.calories}</p>
                            )}

                            {item.allergens && (
                              <p>
                                Alerjenler: {item.allergens.join(" · ")}
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
            🌊 Denizden sofranıza, afiyet olsun! 🌊
          </p>

          <p className="text-center text-gray-400 text-xs mt-4">
            Besin değerleri tahminidir. Lütfen alerjiniz veya gıda
            hassasiyetiniz varsa personelimizi bilgilendiriniz.
          </p>
        </div>
      </section>

      <footer className="py-8 bg-[#061a2e] text-center text-gray-400">
        <p>© {new Date().getFullYear()} Balıkçı Halil Geyikli</p>
        <p className="text-sm mt-2">
          Geyikli, Çanakkale Balık ve Deniz Ürünleri
        </p>
      </footer>
    </main>
  );
}
