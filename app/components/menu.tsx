import Image from "next/image";

export default function Menu() {
  const items = [
    {
      title: "Izgara Çipura",
      image: "/cipura.jpg",
      desc: "Kömür ızgarasında günlük taze çipura",
    },
    {
      title: "Kalamar Tava",
      image: "/kalamar.jpg",
      desc: "Ev yapımı özel tarator sosuyla",
    },
    {
      title: "Sardalya Izgara",
      image: "/sardalye.jpg",
      desc: "Ege'nin vazgeçilmez lezzeti",
    },
    {
      title: "Lakerda",
      image: "/lakerda.jpg",
      desc: "Geleneksel usulle hazırlanır",
    },
    {
      title: "Ahtapot Salatası",
      image: "/ahtapot.jpg",
      desc: "Zeytinyağlı özel sos ile",
    },
    {
      title: "Karides",
      image: "/karides.jpg",
      desc: "Günlük taze karides",
    },
  ];

  return (
    <section id="menu" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#08253f]">
          Menümüz
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Günlük taze ürünlerimiz
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 bg-white"
            >

              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#08253f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}