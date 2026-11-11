
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
        image: "/sardalye.jpg",
      },
      {
        name: "İstavrit",
        price: "350₺",
        portion: "400 g, çiğ, kılçıklı, unlu",
        calories: "500–700 kcal",
        allergens: ["Balık", "Gluten"],
        image: "/balik.jpg",
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
      },
      {
        name: "Palamut",
        price: "300₺",
        portion: "250 g, kılçıklı, unlu",
        calories: "400–550 kcal",
        allergens: ["Balık", "Gluten"],
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
      },
      {
        name: "Patates Cips",
        price: "200₺",
        portion: "2 orta boy patates",
        calories: "Tahmini hesaplanacak",
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
      },
      {
        name: "Yeşil Salata",
        price: "200–300₺",
        portion: "Yaklaşık 100 g, zeytinyağlı",
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
        image: "/sardalye.jpg",
      },
      {
        name: "Çipura",
        price: "500₺",
        portion: "400–450 g, bütün, yağ eklenmeden",
        allergens: ["Balık"],
        image: "/cipura.jpg",
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
        image: "/ahtapot.jpg",
      },
      {
        name: "Karides",
        price: "500₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Kabuklular"],
        image: "/karides.jpg",
      },
      {
        name: "Lakerda",
        price: "450₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
        image: "/lakerda.jpg",
      },
      {
        name: "Levrek Marin",
        price: "550₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
      },
      {
        name: "Hamsi Marin",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
      },
      {
        name: "Sardalya Marin",
        price: "300₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Balık"],
      },
      {
        name: "Deniz Börülcesi",
        price: "200₺",
        portion: "Yaklaşık 100 g",
      },
      {
        name: "Yoğurtlu",
        price: "200₺",
        portion: "Yaklaşık 100 g",
        allergens: ["Süt"],
      },
    ],
  },
  {
    title: "🥤 İçecekler",
    items: [
      {
        name: "Meşrubatlar",
        price: "70₺",
        portion: "330 ml kutu",
        calories: "Yaklaşık 140 kcal",
      },
      {
        name: "Limonata",
        price: "70₺",
        portion: "330 ml",
        calories: "Yaklaşık 130–160 kcal",
      },
      {
        name: "Şalgam Suyu",
        price: "65₺",
        portion: "300 ml",
        calories: "Yaklaşık 20–30 kcal",
      },
      {
        name: "Turşu Suyu",
        price: "70₺",
        portion: "250 ml",
        calories: "Yaklaşık 5–15 kcal",
      },
      {
        name: "Su",
        price: "20₺",
        portion: "500 ml",
        calories: "0 kcal",
      },
      {
        name: "Soda",
        price: "40₺",
        portion: "200 ml",
        calories: "0 kcal",
      },
      {
        name: "Şişe Meşrubat",
        price: "60₺",
        portion: "250 ml",
        calories: "Yaklaşık 105 kcal",
      },
    ],
  },
];

export default function FullMenu() {
  return (
    <section className="bg-[#08253f] py-16 sm:py-24 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Balıkçı Halil
          </h2>

          <p className="text-cyan-300 mt-3 text-lg">
            Dijital Menü
          </p>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-cyan-300 mb-5 border-b border-white/20 pb-3">
                {category.title}
              </h3>

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
                          Fotoğraf yakında
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between py-2">
                      <div>
                        <h4 className="text-base sm:text-xl font-bold text-[#08253f]">
                          {item.name}
                        </h4>

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
                            Besin ve alerjen bilgisi
                          </summary>

                          <div className="mt-2 space-y-1 text-gray-600">
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-cyan-300 mt-14 text-sm">
          🌊 Denizden Gelen Tazelik - Afiyet Olsun! 🌊
        </p>

        <div className="mt-5 space-y-2 text-center">
          <p className="text-white/70 text-xs leading-relaxed">
            * Besin ve enerji değerleri tahminidir. Porsiyon miktarı ve
            hazırlanma şekline göre değişiklik gösterebilir.
          </p>

          <p className="text-white/70 text-xs leading-relaxed">
            Alerjen Uyarısı: Ürünlerimiz çeşitli alerjenler içerebilir.
            Alerjiniz veya gıda hassasiyetiniz varsa sipariş öncesinde
            lütfen personelimize bilgi veriniz. Aynı mutfakta hazırlık
            yapılması nedeniyle çapraz bulaşma riski bulunabilir.
          </p>
        </div>
      </div>
    </section>
  );
}
