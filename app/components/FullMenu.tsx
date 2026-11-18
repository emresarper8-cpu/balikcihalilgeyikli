
import Image from "next/image";

type MenuItem = {
  name: string;
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
    title: "🍳 Tava",
    items: [
      {
        name: "Sardalya",
        price: "300₺",
        portion: "250 g, kılçıksız",
        calories: "600–800 kcal",
        allergens: ["Balık", "Gluten", "Yumurta"],
        image: "/menu/sardalye.jpg.png",
      },
      {
        name: "İstavrit",
        price: "350₺",
        portion: "400 g, çiğ, kılçıklı, unlu",
        calories: "500–700 kcal",
        allergens: ["Balık", "Gluten"],
      },
      {
        name: "Mezgit",
        price: "450₺",
        portion: "200 g, kılçıksız, özel soslu",
        calories: "350–500 kcal",
        allergens: ["Balık", "Gluten", "Yumurta"],
      },
      {
        name: "Dil Balığı",
        price: "400₺",
        portion: "200 g, kılçıksız, özel soslu",
        calories: "350–500 kcal",
        allergens: ["Balık", "Gluten", "Yumurta"],
        image: "/menu/dil.jpg.png",
      },
      {
        name: "Mercan",
        price: "450₺",
        portion: "400 g, çiğ, kılçıklı, unlu",
        calories: "450–650 kcal",
        allergens: ["Balık", "Gluten"],
      },
      {
        name: "Hamsi",
        price: "350₺",
        portion: "350–400 g, çiğ, temizlenmemiş, kılçıklı, unlu",
        calories: "500–700 kcal",
        allergens: ["Balık", "Gluten"],
        image: "/menu/hamsi.jpg.png",
      },
      {
        name: "Palamut",
        price: "300₺",
        portion: "250 g, kılçıklı, unlu",
        calories: "400–550 kcal",
        allergens: ["Balık", "Gluten"],
        image: "/menu/palamut.jpg.png",
      },
      {
        name: "Köfte",
        price: "500₺",
        portion: "200 g, çiğ ağırlık, yağsız tavada",
        calories: "Yaklaşık 450 kcal",
        allergens: ["Gluten"],
      },
      {
        name: "Midye Tava",
        price: "350₺",
        portion: "5 şiş, toplam 15 adet",
        calories: "Yaklaşık 525 kcal",
        allergens: ["Yumuşakçalar", "Gluten", "Yumurta"],
        image: "/menu/midye-tava.jpg.png",
      },
    ],
  },
  {
    title: "🦐 Ara Sıcak",
    items: [
      {
        name: "Kalamar",
        price: "700₺",
        portion: "200 g, özel marine, unlu kızartma",
        calories: "Tahmini hesaplanacak",
        allergens: ["Yumuşakçalar", "Gluten"],
        image: "/menu/kalamar.jpg.png",
      },
      {
        name: "Patates Cips",
        price: "200₺",
        portion: "2 orta boy patates",
        calories: "Tahmini hesaplanacak",
        image: "/menu/patates.jpg.png",
      },
    ],
  },
  {
    title: "🥪 Ekmek Arası",
    items: [
      {
        name: "Sardalya",
        price: "200₺",
        portion: "11–12 adet, yarım somun, roka ve soğan",
        allergens: ["Balık", "Gluten", "Yumurta"],
        image: "/menu/sardalya-ekmek.jpg.png",
      },
      {
        name: "Mezgit",
        price: "300₺",
        portion: "100 g balık, yarım somun, roka ve soğan",
        allergens: ["Balık", "Gluten", "Yumurta"],
      },
      {
        name: "Dil Balığı",
        price: "300₺",
        portion: "100 g balık, yarım somun, roka ve soğan",
        allergens: ["Balık", "Gluten", "Yumurta"],
      },
    ],
  },
  {
    title: "🥗 Salatalar",
    items: [
      {
        name: "Çoban Salatası",
        price: "200–300₺",
        portion: "Yaklaşık 100 g, zeytinyağlı",
        image: "/menu/salata.jpg.png",
      },
      {
        name: "Yeşil Salata",
        price: "200–300₺",
        portion: "Yaklaşık 100 g, zeytinyağlı",
        image: "/menu/salata.jpg.png",
      },
    ],
  },
  {
    title: "🔥 Izgara",
    items: [
      {
        name: "Sardalya",
        price: "350₺",
        portion: "350–400 g, bütün, yağ eklenmeden",
        allergens: ["Balık"],
        image: "/menu/izgara-sardalya.jpg.png",
      },
      {
        name: "Çipura",
        price: "500₺",
        portion: "400–450 g, bütün, yağ eklenmeden",
        allergens: ["Balık"],
        image: "/menu/çipura.jpg.png",
      },
      {
        name: "Levrek",
        price: "600₺",
        portion: "400–450 g, bütün, yağ eklenmeden",
        allergens: ["Balık"],
      
      },
      {
        name: "Palamut",
        price: "400₺",
        portion: "Günlük değişken, bütün, yağ eklenmeden",
        allergens: ["Balık"],
        image: "/menu/palamut.jpg.png",
      },
    ],
  },
  {
    title: "🥗 Mezeler",
    items: [
      {
        name: "Ahtapot",
        price: "550₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Yumuşakçalar"],
        image: "/menu/ahtapot-marin.jpg.png",
      },
      {
        name: "Karides",
        price: "500₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Kabuklular"],
        image: "/menu/karides.jpg.png",
      },
      {
        name: "Lakerda",
        price: "450₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/lakerda.jpg.png",
      },
      {
        name: "Levrek Marin",
        price: "550₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/levrek-marin.jpg.png",
      },
      {
        name: "Hamsi Marin",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/hamsi-marin.jpg.png",
      },
      {
        name: "Sardalya Marin",
        price: "300₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/menu/sardalye-marin.jpg.png",
      },
      {
        name: "Deniz Börülcesi",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        image: "/menu/deniz-borulcesi.jpg.png",
      },
      {
        name: "Yoğurtlu",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Süt"],
        image: "/menu/yogurtlu.jpg.png",
      },
    ],
  },
  {
    title: "🥤 İçecekler",
    items: [
      {
        name: "Kutu Meşrubatlar",
        price: "70₺",
        portion: "330 ml kutu",
        calories: "Yaklaşık 140 kcal",
        image: "/menu/kutu-meşrubatlar.jpg.png",
      },
      {
        name: "Limonata",
        price: "70₺",
        portion: "330 ml",
        calories: "Yaklaşık 130–160 kcal",
        image: "/menu/limonata.jpg.png",
      },
      {
        name: "Şalgam Suyu",
        price: "65₺",
        portion: "300 ml · Acılı veya tatlı",
        calories: "Yaklaşık 20–30 kcal",
        image: "/menu/şalgam-suyu.jpg.png",
      },
      {
        name: "Turşu Suyu",
        price: "70₺",
        portion: "330 ml",
        calories: "Yaklaşık 5–15 kcal",
        image: "/menu/turşu%20suyu.jpg.png",
      },
      {
        name: "Su",
        price: "20₺",
        portion: "500 ml",
        calories: "0 kcal",
        image: "/menu/su.jpg.png",
      },
      {
        name: "Soda",
        price: "40₺",
        portion: "200 ml",
        calories: "0 kcal",
        image: "/menu/soda.jpg.png",
      },
      {
        name: "Şişe Meşrubat",
        price: "60₺",
        portion: "250 ml",
        calories: "Yaklaşık 105 kcal",
        image: "/menu/şişe-meşrubat.jpg.png",
      },
    ],
  },
];

export default function FullMenu() {
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <article
                    key={`${category.title}-${item.name}-${index}`}
                    className="rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 bg-white border border-gray-100"
                  >
                    <div className="relative aspect-square w-full bg-white">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                      {item.portion && (
                        <p className="mt-3 text-gray-600">
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

                      {(item.calories || item.allergens || item.portion) && (
                        <details className="mt-3 text-sm">
                          <summary className="cursor-pointer font-semibold text-cyan-700">
                            Besin ve alerjen bilgisi
                          </summary>

                          <div className="mt-2 text-gray-600 space-y-1">
                            {item.portion && (
                              <p>Porsiyon: {item.portion}</p>
                            )}

                            {item.calories && (
                              <p>Enerji: {item.calories}</p>
                            )}

                            {item.allergens && (
                              <p>
                                <span className="font-semibold text-[#08253f]">
                                  Alerjen:
                                </span>{" "}
                                {item.allergens.join(" · ")}
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
            🌊 Denizden Gelen Tazelik - Afiyet Olsun! 🌊
          </p>

          <div className="text-center text-gray-400 text-xs mt-4 space-y-2">
            <p>
              Besin ve enerji değerleri tahminidir. Porsiyon miktarı ve
              hazırlanma şekline göre değişiklik gösterebilir.
            </p>

            <p>
              Alerjen Uyarısı: Ürünlerimiz çeşitli alerjenler içerebilir.
              Alerjiniz veya gıda hassasiyetiniz varsa sipariş öncesinde
              lütfen personelimize bilgi veriniz. Aynı mutfakta hazırlık
              yapılması nedeniyle çapraz bulaşma riski bulunabilir.
            </p>
          </div>
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
