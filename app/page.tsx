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
    <main className="min-h-screen bg-[#08253f] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#04192d]/90 backdrop-blur-md border-b border-cyan-900/60 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          <a href="#" className="shrink-0">
            <h1 className="text-xl md:text-2xl font-extrabold">
              Balıkçı <span className="text-cyan-400">Halil</span>
            </h1>
            <p className="text-yellow-300 text-[9px] md:text-[10px] tracking-[3px]">
              SINCE 1999
            </p>
          </a>

          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#" className="hover:text-cyan-400 transition">
              Anasayfa
            </a>

            <a href="/menu" className="hover:text-cyan-400 transition">
              Dijital Menü
            </a>

            <a href="#galeri" className="hover:text-cyan-400 transition">
              Galeri
            </a>

            <a href="#iletisim" className="hover:text-cyan-400 transition">
              İletişim
            </a>

            <a
              href="tel:+905433450017"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2.5 rounded-full font-semibold transition"
            >
              📞 Ara
            </a>
          </div>

          <a
            href="/menu"
            className="md:hidden bg-cyan-500 px-4 py-2 rounded-full text-sm font-semibold"
          >
            Menü
          </a>

        </div>
      </nav>


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
            Balıkçı <span className="text-cyan-400">Halil</span>
          </h1>

          <h2 className="text-2xl md:text-4xl text-cyan-300 mt-3 font-semibold">
            Geyikli
          </h2>

          <p className="mt-7 text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Günlük taze balıklar, Ege mezeleri ve huzurlu bahçemizde
            güzel bir sofraya bekleriz.
          </p>

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


      {/* KISA TANITIM */}
      <section className="py-20 px-6 bg-[#071c2d]">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
            GEYİKLİ'DE TAZE BALIK
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Denizden Sofranıza
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Taze balıklarımız, Ege usulü mezelerimiz ve samimi bahçemizle
            Geyikli'de güzel bir balık sofrası için sizleri bekliyoruz.
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