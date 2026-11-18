
export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/bahce.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-yellow-300 tracking-[8px] text-lg">
          SINCE 1999
        </h2>

        <h1 className="text-7xl font-extrabold mt-4 drop-shadow-xl text-white">
          Balıkçı <span className="text-cyan-400">Halil</span>
        </h1>

        <h3 className="text-3xl text-cyan-300 mt-3">
          Geyikli
        </h3>

        <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-200">
          Fresh fish, delicious Aegean meze and a warm atmosphere
          in the heart of Geyikli.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="/en/menu"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full text-lg font-semibold text-white transition"
          >
            View Our Menu
          </a>

          <a
            href="/en#contact"
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
