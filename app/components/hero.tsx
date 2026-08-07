export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/bahce.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-yellow-300 tracking-[8px] text-lg">
          SINCE 1999
        </h2>

        <h1 className="text-7xl font-extrabold mt-4 drop-shadow-xl">
          Balıkçı Halil
        </h1>

        <h3 className="text-3xl text-cyan-300 mt-3">
          Geyikli
        </h3>

        <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-200">
          Günlük taze balıklar, Ege mezeleri ve huzurlu bahçemizde
          unutulmaz bir lezzet deneyimi.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full text-lg font-semibold transition">
            🍽️ Menüyü İncele
          </button>

          <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition">
            📍 Bize Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
}{/* En Sevilen Lezzetler */}
<section id="menu" className="bg-white text-black py-24">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center">
      En Sevilen Lezzetler
    </h2>

    <p className="text-center text-gray-500 mt-4 mb-16">
      Günlük taze deniz ürünleri ve Ege'nin eşsiz mezeleri.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/cipura.jpg"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Izgara Çipura</h3>
          <p className="mt-2 text-gray-600">
            Odun kömüründe pişirilmiş günlük taze çipura.
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/kalamar.jpg"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Kalamar Tava</h3>
          <p className="mt-2 text-gray-600">
            Özel sosumuz eşliğinde çıtır kalamar.
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/sardalya.jpg"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Izgara Sardalya</h3>
          <p className="mt-2 text-gray-600">
            Geyikli'nin vazgeçilmez lezzeti.
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/lakerda.jpg"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Torik Lakerda</h3>
          <p className="mt-2 text-gray-600">
            Ev yapımı özel lakerda.
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/ahtapot.jpg"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Ahtapot Salatası</h3>
          <p className="mt-2 text-gray-600">
            Zeytinyağı ve limon sosuyla hazırlanır.
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/karides.jpg"
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Karides</h3>
          <p className="mt-2 text-gray-600">
            Günlük taze Ege karidesi.
          </p>
        </div>
      </div>

    </div>

  </div>

</section>