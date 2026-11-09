
import Link from "next/link";

export const metadata = {
  title: "Dalyan Kalpli Göl | Geyikli'yi Keşfet",
  description:
    "Çanakkale Ezine Dalyan'daki Kalpli Göl'ün oluşumu, pembe rengi, doğal özellikleri ve ziyaret rehberi.",
};

export default function KalpliGolPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* ÜST ALAN */}
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/kesfet" className="text-cyan-300 hover:text-white">
            ← Geyikli'yi Keşfet
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            DOĞANIN İZİNDE
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Dalyan <span className="text-cyan-400">Kalpli Göl</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Bazen pembe, bazen kiremit tonlarında...
            Su seviyesine göre kalp şeklini alan,
            Alexandria Troas'ın eski iç limanında
            saklı eşsiz bir doğal güzellik.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Dalyan / Ezine
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🌿 Doğal lagün
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              💗 Pembe Göl
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kalpli-gol/kalpli-gol-genel.jpg"
            alt="Dalyan Kalpli Göl"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Kalpli Göl · Dalyan · Ezine
            </span>

            <a
              href="https://www.instagram.com/ery_photography_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Fotoğraf: @ery_photography_ ↗
            </a>
          </div>
        </div>
      </section>

      {/* TARİHÇE VE DOĞAL ÖZELLİKLER */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            DOĞANIN RENKLERİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Geyikli'nin yakınında sıra dışı bir doğa güzelliği
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Dalyan Kalpli Göl, Çanakkale'nin Ezine ilçesine
            bağlı Dalyan Köyü yakınlarında yer alır.
            Geyikli'nin güneybatısında bulunan bu doğal
            lagün, hem şekli hem de yıl içerisinde
            değişebilen renkleriyle dikkat çeker.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Halk arasında Pembe Göl veya Kalpli Göl
            olarak bilinen alan, özellikle yaz aylarında
            ve sonbahara yaklaşırken farklı pembe ve
            kiremit tonlarına bürünebilir. Bu görünüm,
            bölgeyi Çanakkale'nin ilgi çekici doğal
            noktalarından biri hâline getirmiştir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Neden pembe renge dönüşüyor?
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Gölün pembe ve kırmızıya yakın renklerinin
            oluşmasında Dunaliella salina adlı mikroskobik
            canlı önemli rol oynar. Bu canlı, tuzluluğun
            ve sıcaklığın arttığı uygun çevre koşullarında
            çoğalarak suyun renginin değişmesine neden
            olabilir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu nedenle göl yıl boyunca aynı renkte
            görünmez. Hava sıcaklığı, yağış miktarı,
            buharlaşma ve suyun tuzluluk oranı gibi
            etkenler gölün görünümünü etkiler.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Özellikle sıcak ve kurak dönemlerde
            tuzluluğun yükselmesiyle pembe tonlar
            daha belirgin hâle gelebilir. Yağışların
            arttığı dönemlerde ise renk yoğunluğu
            değişebilir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Neden kalp şeklini alıyor?
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Gölün halk arasında Kalpli Göl olarak
            anılmasının nedeni, belirli su seviyelerinde
            yukarıdan bakıldığında kalbi andıran
            bir şekil oluşturmasıdır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Su seviyesinin yükselip alçalması, gölün
            kıyı çizgisini ve görünümünü değiştirebilir.
            Bu nedenle kalp şekli her zaman aynı
            belirginlikte görülmez.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Gölü ziyaret etmeyi planlayanların,
            gördükleri fotoğraflardaki şeklin ve
            rengin her mevsim aynı olmayabileceğini
            bilmesi gerekir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Alexandria Troas'ın eski iç limanı
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kalpli Göl'ün en dikkat çekici özelliklerinden
            biri de tarihî geçmişidir. Göl, antik çağda
            Alexandria Troas Kenti'nin iç limanı olarak
            kullanılan alanla ilişkilidir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas, antik dönemde Troas
            bölgesinin önemli liman kentlerinden
            biriydi. Dalyan çevresindeki bu alan,
            kentin denizcilik ve liman yaşamının
            izlerini taşıyan tarihî coğrafyanın
            bir parçasıdır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Böylece Kalpli Göl, yalnızca doğal
            görünümüyle değil, çevresindeki antik
            liman geçmişiyle de ayrı bir önem taşır.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Mevsimlere göre değişen görünüm
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kalpli Göl'ün renk değişimi yılın farklı
            dönemlerinde gözlemlenebilir. Yaz aylarında
            sıcaklık ve buharlaşmanın artmasıyla
            pembe ve kiremit tonları belirginleşebilir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Sonbahar ve kış aylarında ise gölün
            rengi hardal sarısı ve farklı doğal
            tonlara dönüşebilir. Ancak bu değişim
            kesin bir takvime bağlı değildir;
            yağış ve sıcaklık koşulları her yıl
            farklı sonuçlar oluşturabilir.
          </p>

          {/* GÖRÜLEBİLECEKLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyarette neler görülebilir?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Pembe Göl",
                "Uygun çevre koşullarında pembe ve kiremit tonlarına dönüşen doğal lagün.",
              ],
              [
                "Kalp Şeklindeki Görünüm",
                "Su seviyesindeki değişimlerle belirginleşebilen kalp biçimli göl manzarası.",
              ],
              [
                "Doğal Lagün",
                "Kıyısal sulak alan özellikleri taşıyan ve çevresindeki doğal yaşamla dikkat çeken bölge.",
              ],
              [
                "Antik Liman Geçmişi",
                "Alexandria Troas'ın eski iç limanıyla ilişkili tarihî alan.",
              ],
              [
                "Dalyan Sahili",
                "Göl ziyaretini kıyı çevresinde kısa bir geziyle birleştirebileceğiniz sahil bölgesi.",
              ],
              [
                "Doğa Fotoğrafçılığı",
                "Gölün renklerini, şeklini ve çevresindeki doğal manzarayı fotoğraflayabileceğiniz alan.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-cyan-900 bg-[#0a263b] p-5"
              >
                <h3 className="font-bold text-cyan-300">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* DOĞAL YAŞAM */}
          <h2 className="mt-12 text-2xl font-bold">
            Doğal yaşam ve korunması
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Geyikli-Dalyan Kalp Gölü, kıyısal tuzlu ve
            acısu lagünü özellikleri taşıyan bir sulak
            alandır. Sulak alanlar, su kuşları ve
            farklı canlı grupları için önemli yaşam
            alanları oluşturur.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu nedenle gölün doğal yapısının korunması
            önemlidir. Ziyaret sırasında suya ve
            çevresindeki doğal alana zarar vermemek,
            çöpleri geride bırakmamak ve canlıları
            rahatsız etmemek gerekir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Gölün doğal yapısını korumak, bu özel
            manzaranın gelecek kuşaklara ulaşmasına
            katkı sağlayacaktır.
          </p>

          {/* ZİYARET BİLGİSİ */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyaret etmeden önce
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Kalpli Göl'ü ziyaret ederken gölün renginin
            ve kalp biçiminin her zaman aynı olmayacağını
            unutmayın. Pembe tonların belirginliği
            mevsime ve hava koşullarına göre değişebilir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Fotoğraf çekmek için göle yukarıdan
            bakılabilen güvenli noktaları tercih edin.
            Kıyıdaki hassas doğal alana girmemeye,
            suya atık bırakmamaya ve gölün doğal
            yapısını bozmamaya özen gösterin.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Göl çevresinde ziyaretçi tesisleri ve
            hizmetler sınırlı olabileceğinden
            ihtiyaçlarınızı önceden planlamanız
            faydalı olacaktır.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://www.aa.com.tr/tr/gundem/canakkaledeki-pembe-golun-incelenmesi-icin-tubitaka-proje-sunuldu-/2758423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Anadolu Ajansı – Pembe Göl'ün incelenmesi için TÜBİTAK projesi
                </a>
                <span>
                  {" "}· Gölün oluşumu, renk değişimi ve antik liman geçmişi.
                </span>
              </li>

              <li>
                <a
                  href="https://www.aa.com.tr/tr/gundem/canakkaledeki-kalpli-gol-pembeye-burundu/4002768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Anadolu Ajansı – Çanakkale'deki Kalpli Göl
                </a>
                <span>
                  {" "}· Mevsimsel renk değişimi ve Dunaliella salina.
                </span>
              </li>

              <li>
                <a
                  href="https://www.dha.com.tr/yerel-haberler/canakkale/ezine/canakkalede-kalpli-gol-pembeye-burundu-2912222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Demirören Haber Ajansı – Kalpli Göl
                </a>
                <span>
                  {" "}· Gölün doğal renkleri ve bilimsel açıklamalar.
                </span>
              </li>

              <li>
                <a
                  href="https://webdosya.csb.gov.tr/db/ced/icerikler/canakkale_-cdr2022-20231101091000.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Çevre Durum Raporu
                </a>
                <span>
                  {" "}· Geyikli-Dalyan Kalp Gölü lagününün konumu ve sulak alan özellikleri.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* KONUM VE ULAŞIM */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Konum ve ulaşım</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Kalpli Göl, Çanakkale'nin Ezine ilçesine
            bağlı Dalyan Köyü yakınlarında yer alır.
            Geyikli'nin güneybatısında, sahile yakın
            konumdadır.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kalpli+Gol+Dalyan+Ezine+Canakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            Haritada görüntüle ↗
          </a>
        </aside>
      </section>

      {/* MİNİ HARİTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-2xl border border-cyan-900 bg-[#0a263b] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-400">
              ZİYARETİNİZİ PLANLAYIN
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Kalpli Göl'e nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Kalpli Göl, Geyikli'ye yakın konumdaki
              Dalyan Köyü sahil bölümünde bulunur.
              Geyikli'den Dalyan yönüne ilerleyerek
              gölün bulunduğu bölgeye ulaşabilirsiniz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Kalpli+Gol%2C+Dalyan%2C+Ezine&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Dalyan Kalpli Göl haritası"
              src="https://maps.google.com/maps?q=Kalpli%20Gol%2C%20Dalyan%2C%20Ezine%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Kalpli Göl · Dalyan · Ezine
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kalpli+Gol+Dalyan+Ezine+Canakkale"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-cyan-300 hover:text-white"
              >
                Büyük haritayı aç ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-900 px-6 py-8 text-center text-sm text-gray-500">
        Balıkçı Halil Geyikli · Geyikli'yi Keşfet
      </footer>
    </main>
  );
}
