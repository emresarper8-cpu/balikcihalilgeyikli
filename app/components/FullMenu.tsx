export default function FullMenu() {
  const categories = [
    {
      title: "🐟 Izgara",
      items: [
        ["Çipura", "700₺"],
        ["Levrek", "750₺"],
        ["Sardalya", "450₺"],
        ["Mezgit", "450₺"],
      ],
    },
    {
      title: "🦑 Deniz Ürünleri",
      items: [
        ["Kalamar Tava", "650₺"],
        ["Karides", "650₺"],
        ["Ahtapot Salatası", "650₺"],
      ],
    },
    {
      title: "🥗 Ege Mezeleri",
      items: [
        ["Deniz Börülcesi", "250₺"],
        ["Lakerda", "350₺"],
        ["Haydari", "250₺"],
        ["Atom", "250₺"],
        ["Girit Ezmesi", "250₺"],
      ],
    },
    {
      title: "🥤 İçecekler",
      items: [
        ["Kola", "80₺"],
        ["Fanta", "80₺"],
        ["Ayran", "70₺"],
        ["Su", "30₺"],
      ],
    },
  ];

  return (
    <section className="bg-[#08253f] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Dijital Menü
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#10304f] rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                {cat.title}
              </h3>

              {cat.items.map(([name, price]) => (
                <div
                  key={name}
                  className="flex justify-between border-b border-cyan-800 py-4"
                >
                  <span>{name}</span>
                  <span className="font-bold text-yellow-300">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}