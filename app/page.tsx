import Menu from "./components/menu";
import About from "./components/about";
import Gallery from "./components/gallery";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import WhatsApp from "./components/whatsapp";
import Footer from "./components/footer";
import Stats from "./components/stats";
import CTA from "./components/cta";
import FullMenu from "./components/FullMenu";
export default function Home() {
  return (
    <main className="bg-[#08253f] text-white">

      <nav className="fixed top-0 left-0 w-full bg-[#04192d]/80 backdrop-blur-md border-b border-cyan-900 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <h1 className="text-2xl font-bold">
            Balıkçı <span className="text-cyan-400">Halil</span>
          </h1>

          <div className="flex gap-8">
            <a href="#">Anasayfa</a>
            <a href="/menu">Dijital Menü</a>
            <a href="#iletisim">İletişim</a>
          </div>

        </div>
      </nav>

      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 px-6"
        style={{
          backgroundImage: "url('/bahce.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h2 className="text-yellow-300 tracking-[8px]">
            SINCE 1999
          </h2>

          <h1 className="text-7xl font-extrabold mt-4">
            Balıkçı Halil
          </h1>

          <h3 className="text-3xl text-cyan-300 mt-3">
            Geyikli
          </h3>

          <p className="mt-6 text-gray-200 max-w-xl">
            Günlük taze balıklar, Ege mezeleri ve huzurlu bahçemizde
            unutulmaz bir lezzet deneyimi.
          </p>
        </div>
      </section>

      <Menu />
      <FullMenu />
<Gallery />
<About />
<Reviews />
<Contact />
<WhatsApp />
<CTA />
<Footer />
      

    </main>
  );
}