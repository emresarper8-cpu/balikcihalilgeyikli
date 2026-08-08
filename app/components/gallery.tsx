export default function Gallery() {
  const images = [
    "/cipura.jpg",
    "/sardalye.jpg",
    "/lakerda.jpg",
    "/karides.jpg",
    "/ahtapot.jpg",
    "/bahce.jpg",
    "/bahce1.jpg",
    "/bahce2.jpg",
    "/balık.jpg",
    "/balık1.jpg",
    "/kapı.jpg",
    "/teras.jpg",
    "/teras1.jpg",
  ];

  return (
    <section id="galeri" className="bg-[#071826] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Galeri
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Balıkçı Halil'den lezzet ve huzur kareleri
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-2xl group"
            >
              <img
                src={img}
                alt="Balıkçı Halil"
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}