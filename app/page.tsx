import Navbar from "./components/navbar";
import About from "./components/about";
import Gallery from "./components/gallery";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import WhatsApp from "./components/whatsapp";
import Footer from "./components/footer";
import Stats from "./components/stats";
import CTA from "./components/cta";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/bahce.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-4xl mx-auto pt-20">
          <p className="text-yellow-300 tracking-[7px] text-sm md:text-base font-semibold">
            SINCE 1999
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mt-5 leading-tight">
            Balıkçı <span className="text-cyan-400">Halil</span> Geyikli
          </h1>

          <h2 className="text-2xl md:text-4xl text-cyan-300 mt-3 font-semibold">
            Balık Restoranı
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="/menu"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg"
            >
              🍽️ Dijital Menüyü Gör
            </a>

            <a
              href="#galeri"
              className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              📸 Galeriyi Gör
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          ↓ Keşfet
        </div>
      </section>

      {/* MENÜDEN */}
      <section className="py-20 px-6 bg-[#071c2d]">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Geyikli'de Taze Balık ve Deniz Lezzetleri
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Balıkçı Halil Geyikli menüsünden günlük taze balıklar, deniz ürünleri
          ve Ege mezeleri
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/sardalye.jpg"
              alt="Balıkçı Halil Geyikli taze sardalye"
              className="w-full h-72 object-cover"
            />
            <div className="p-5 bg-[#0b2538]">
              <h3 className="text-2xl font-bold text-white">Sardalye</h3>
              <p className="text-gray-400 mt-2">
                Geyikli'de günlük taze sardalye
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/karides.jpg"
              alt="Balıkçı Halil Geyikli karides"
              className="w-full h-72 object-cover"
            />
            <div className="p-5 bg-[#0b2538]">
              <h3 className="text-2xl font-bold text-white">Karides</h3>
              <p className="text-gray-400 mt-2">
                Ege'den taze deniz lezzeti
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/lakerda.jpg"
              alt="Balıkçı Halil Geyikli lakerda"
              className="w-full h-72 object-cover"
            />
            <div className="p-5 bg-[#0b2538]">
              <h3 className="text-2xl font-bold text-white">Lakerda</h3>
              <p className="text-gray-400 mt-2">
                Balıkçı Halil usulü lakerda
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold transition"
          >
            Tüm Menüyü Gör
          </a>
        </div>
      </section>

      {/* KISA TANITIM */}
      <section className="py-20 px-6 bg-[#071c2d]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
            GEYİKLİ'DE BALIK RESTORANI
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Denizden Sofranıza
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Balıkçı Halil Geyikli olarak günlük taze balıklarımız, deniz
            ürünlerimiz ve Ege usulü mezelerimizle Geyikli'de keyifli bir
            balık sofrası için sizleri bekliyoruz. Samimi bahçemizde taze
            deniz lezzetlerinin tadını çıkarabilirsiniz.
          </p>

          <a
            href="/menu"
            className="inline-block mt-8 text-cyan-300 hover:text-cyan-200 font-semibold transition"
          >
            Menüyü incele →
          </a>
        </div>
      </section>

      {/* İSTATİSTİK */}
      <Stats />

      {/* HAKKIMIZDA */}
      <About />

      {/* GALERİ */}
      <div id="galeri">
        <Gallery />
      </div>

      {/* YORUMLAR */}
      <Reviews />

      {/* ÇAĞRI */}
      <CTA />

      {/* İLETİŞİM */}
      <div id="iletisim">
        <Contact />
      </div>

      {/* WHATSAPP */}
      <WhatsApp />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}