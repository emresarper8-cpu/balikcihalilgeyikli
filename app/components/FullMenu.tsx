export default function FullMenu() {
  const categories = [
    {
      title: "🐟 Izgara",
      items: [
        ["Sardalya", "350₺"],
        ["Çipura", "500₺"],
        ["Levrek", "600₺"],
      ],
    },
    {
      title: "🍳 Tava",
      items: [
        ["Sardalya", "300₺"],
        ["İstavrit", "350₺"],
        ["Mezgit", "450₺"],
        ["Dil Balığı", "400₺"],
        ["Mercan", "450₺"],
        ["Köfte", "500₺"],
        ["Midye Tava", "350₺"],
      ],
    },
    {
      title: "🦐 Ara Sıcak",
      items: [
        ["Kalamar", "700₺"],
        ["Kılçık Cips", "150₺"],
        ["Patates Cips", "200₺"],
      ],
    },
    {
      title: "🐙 Deniz Ürünleri",
      items: [
        ["Ahtapot", "550₺"],
        ["Karides", "500₺"],
      ],
    },
    {
      title: "🌿 Ege Mezeleri",
      items: [
        ["Lakerda", "450₺"],
        ["Levrek Marin", "550₺"],
        ["Hamsi Marin", "200₺"],
        ["Sardalya Marin", "300₺"],
        ["Deniz Börülcesi", "200₺"],
        ["Yoğurtlu", "200₺"],
      ],
    },
    {
      title: "🥪 Ekmek Arası",
      items: [
        ["Sardalya", "200₺"],
        ["Mezgit", "300₺"],
        ["Dil Balığı", "300₺"],
      ],
    },
    {
      title: "🥗 Salatalar",
      items: [
        ["Çoban Salatası", "200–300₺"],
      ],
    },
    {
      title: "🥤 İçecekler",
      items: [
        ["Meşrubatlar", "70₺"],
        ["Limonata", "70₺"],
        ["Şalgam Suyu", "65₺"],
        ["Turşu Suyu", "70₺"],
        ["Su", "20₺"],
        ["Soda", "40₺"],
        ["Şişe Meşrubat", "60₺"],
      ],
    },
  ];

  return (
    <section className="bg-[#08253f] py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Balıkçı Halil
        </h2>

        <p className="text-center text-cyan-300 text-lg mb-12">
          Dijital Menü
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between border-b border-white/10 pb-3"
                  >
                    <span className="text-lg">{name}</span>
                    <span className="text-lg font-bold text-white">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-cyan-300 mt-12 text-sm">
          🌊 Denizden Gelen Tazelik - Afiyet Olsun! 🌊
        </p>
      </div>
    </section>
  );
}