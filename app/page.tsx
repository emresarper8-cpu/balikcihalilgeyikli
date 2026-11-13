
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

      {/* GEYİKLİ REHBERİ */}
      <section className="py-24 px-6 bg-[#0b2538]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
            BU TOPRAKLARIN HİKÂYESİ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Geyikli Rehberi
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            Geyikli'nin tarihi sokaklarını, Odunluk İskelesi'nin geçmişini,
            Dalyan'ın güzelliklerini ve bu güzel coğrafyanın hikâyelerini
            birlikte tanıyalım.
          </p>

          <a
            href="/kesfet"
            className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 text-white px-9 py-4 rounded-full font-bold transition shadow-lg"
          >
            Geyikli Rehberi'ni İncele →
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

      <WhatsApp />
      <Footer />
    </main>
  );
}
