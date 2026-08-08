"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

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
              onClick={() => setSelectedIndex(index)}
              className="overflow-hidden rounded-3xl group shadow-2xl cursor-pointer"
            >
              <Image
                src={img}
                width={600}
                height={400}
                alt="Balıkçı Halil"
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>

      {/* BÜYÜK FOTOĞRAF */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >

          {/* Kapat */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-6 text-white text-4xl z-50 hover:text-gray-300"
          >
            ×
          </button>

          {/* Önceki */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 text-white text-5xl z-50 hover:text-gray-300"
          >
            ‹
          </button>

          {/* Fotoğraf */}
          <div
            className="relative w-full max-w-5xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt="Balıkçı Halil"
              fill
              className="object-contain"
            />
          </div>

          {/* Sonraki */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 text-white text-5xl z-50 hover:text-gray-300"
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
}