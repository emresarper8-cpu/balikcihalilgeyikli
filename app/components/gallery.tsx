import Image from "next/image";

const images = [
  "/cipura.jpg",
  "/kalamar.jpg",
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
  "/meze.jpg",
  "/teras.jpg",
  "/teras1.jpg",
  

];

export default function Gallery() {
  return (
    <section className="bg-[#071826] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Galeri
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Balıkçı Halil'den lezzet kareleri
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group shadow-2xl"
            >
              <Image
                src={img}
                width={600}
                height={400}
                alt=""
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}