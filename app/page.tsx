
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
    <main className="bg-[#071826] text-white">
      <Navbar />

      {/* HERO */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/bahce.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6 py-24">
          <h2 className="text-yellow-300 tracking-[8px] text-lg font-semibold">
            SINCE 1999
          </h2>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 drop-shadow-xl text-white leading-tight">
            Balıkçı <span className="text-cyan-400">Halil</span>
            <br />
            Geyikli
          </h1>

          <h3 className="text-2xl md:text-4xl text-cyan-300 font-bold mt-5">
            Balık Restoranı
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/menu"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full text-lg font-bold text-white transition"
            >
              🍽️ Dijital Menüyü Gör
            </a>

            <a
              href="#galeri"
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-bold text-white transition"
            >
              📸 Galeriyi Gör
            </a>
          </div>
        </div>
      </section>

      {/* KISA TANITIM */}
      <section className="bg-[#071826] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-cyan-400 tracking-[4px] text-sm font-semibold">
            GEYİKLİ'DE BALIK RESTORANI
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Denizden Sofranıza
          </h2>

          <p className="text-gray-300 leading-8 text-lg mt-8">
            Balıkçı Halil Geyikli olarak günlük taze balıklarımız, deniz
            ürünlerimiz ve Ege usulü mezelerimizle Geyikli'de keyifli bir
            balık sofrası için sizleri bekliyoruz. Samimi bahçemizde taze
            deniz lezzetlerinin tadını çıkarabilirsiniz.
          </p>

          <a
            href="/menu"
            className="inline-block mt-8 text-cyan-400 hover:text-cyan-300 font-semibold transition"
          >
            Menüyü incele →
          </a>
        </div>
      </section>

      {/* GEYİKLİ REHBERİ */}
      <section className="bg-[#0b2538] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 tracking-[4px] text-sm font-semibold">
            BU TOPRAKLARIN HİKÂYESİ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Geyikli Rehberi
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Geyikli'nin tarihi sokaklarını, Odunluk İskelesi'nin geçmişini,
            Dalyan'ın güzelliklerini ve bu güzel coğrafyanın hikâyelerini
            birlikte tanıyalım. Tarihi yerleri, eski fotoğrafları ve
            keşfedilmeyi bekleyen güzel noktaları inceleyin.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#10304f] rounded-2xl p-8">
              <div className="text-4xl">🏛️</div>

              <h3 className="text-xl font-bold mt-4">
                Tarihi Yerler
              </h3>

              <p className="text-gray-400 mt-3">
                Bölgenin tarihini ve kültürel mirasını keşfedin.
              </p>
            </div>

            <div className="bg-[#10304f] rounded-2xl p-8">
              <div className="text-4xl">📷</div>

              <h3 className="text-xl font-bold mt-4">
                Eski Fotoğraflar
              </h3>

              <p className="text-gray-400 mt-3">
                Geyikli ve çevresinin geçmişine fotoğraflarla yolculuk yapın.
              </p>
            </div>

            <div className="bg-[#10304f] rounded-2xl p-8">
              <div className="text-4xl">📍</div>

              <h3 className="text-xl font-bold mt-4">
                Gezilecek Yerler
              </h3>

              <p className="text-gray-400 mt-3">
                Keşfedilecek güzel sahil noktalarını ve özel yerleri bulun.
              </p>
            </div>
          </div>

          <a
            href="/kesfet"
            className="inline-block mt-12 bg-cyan-500 hover:bg-cyan-600 transition px-9 py-4 rounded-full font-bold shadow-lg"
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
