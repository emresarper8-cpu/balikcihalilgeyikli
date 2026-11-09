
import Link from "next/link";

export const metadata = {
  title: "Kestanbol Kaplıcaları | Geyikli'yi Keşfet",
  description:
    "Ezine Kestanbol Kaplıcaları'nın tarihî geçmişi, jeotermal kaynakları ve termal turizm özellikleri.",
};

export default function KestanbolKaplicalariPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* ÜST ALAN */}
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/kesfet" className="text-cyan-300 hover:text-white">
            ← Geyikli'yi Keşfet
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            TARİHİN VE DOĞANIN İZİNDE
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Kestanbol <span className="text-cyan-400">Kaplıcaları</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Antik çağlardan günümüze uzanan sıcak su
            kaynakları... Ezine'nin tarihî termal
            mirası Kestanbol, yüzyıllardır insanları
            bu topraklara çeken doğal zenginliklerden biri.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ezine / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              ♨️ Termal kaynak
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Antik dönemden günümüze
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kestanbol-kaplicalari/kestanbol-genel.jpg"
            alt="Kestanbol Kaplıcaları"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Kestanbol Kaplıcaları · Ezine
            </span>

           
          </div>
        </div>
      </section>

      {/* TARİHÇE */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            SICAK SULARIN TARİHİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Binlerce yıllık termal gelenek
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Kestanbol Kaplıcaları, Çanakkale'nin
            Ezine ilçesinde, Dalyan ve Alexandria
            Troas çevresindeki tarihî coğrafyada
            yer alır. Doğal sıcak su kaynaklarıyla
            tanınan bölge, antik dönemlerden beri
            termal suyun kullanıldığı önemli
            merkezlerden biri olarak bilinir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol'un önemi yalnızca sıcak
            su kaynaklarından ibaret değildir.
            Yakın çevresinde bulunan Alexandria
            Troas Antik Kenti, bölgenin tarihî
            geçmişini anlamak açısından önemli
            bir yere sahiptir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Antik çağlarda Kestanbol
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol Kaplıcaları'nın tarihî
            geçmişi, yakınındaki Alexandria
            Troas Antik Kenti ile birlikte
            değerlendirilmelidir. Antik kent,
            bugünkü Dalyan Köyü çevresinde
            kurulmuş önemli bir liman kentiydi.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            2018 yılında yayımlanan "Tarihi
            Kestanbol Kaplıcaları: Ölü Dirilten
            Su" başlıklı akademik çalışma,
            bölgenin antik çağlardan Bizans
            ve Osmanlı dönemlerine uzanan
            termal kullanım geçmişini ele alır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Çalışmada, Kestanbol'un tarih boyunca
            şifa arayan insanların ziyaret ettiği
            bir alan olduğu ve termal suyun
            farklı dönemlerde çeşitli uygulamalarla
            değerlendirildiği anlatılır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Osmanlı döneminde kaplıcalar
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol'un termal kaynakları Osmanlı
            döneminde de kullanılmaya devam etmiştir.
            Bölge, doğal sıcak sularından yararlanmak
            isteyenlerin uğrak noktalarından biri
            olmuştur.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Zaman içerisinde kaplıca çevresinde
            termal kullanım ve konaklama
            olanakları geliştirilmiştir. Böylece
            Kestanbol, yalnızca yerel halkın
            bildiği bir kaynak olmaktan çıkarak
            termal turizm açısından da önem kazanmıştır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Cumhuriyet döneminde Kestanbol
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Cumhuriyet döneminde de Kestanbol
            Kaplıcaları'nın kullanımı sürmüştür.
            1935 yılında Ezine Belediyesi
            tarafından onarılarak yeniden
            hizmete açıldığına ilişkin tarihî
            bilgiler bulunmaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            İlerleyen yıllarda kaplıca alanında
            termal tesisler geliştirilmiş, sıcak
            su kaynaklarından turizm ve konaklama
            amacıyla yararlanılmıştır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kestanbol'un termal suları
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol, jeolojik yapısı sayesinde
            doğal sıcak su kaynaklarına sahip
            bir bölgedir. Çanakkale İl Kültür
            ve Turizm Müdürlüğü verilerinde
            ana kaynağın sıcaklığı 67 °C olarak
            belirtilir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Aynı kaynakta ikinci kaynak için
            47 °C, çamur suyu için 68 °C,
            hamam kaynağı için 31 °C ve
            göz suyu kaynağı için 21 °C
            değerleri aktarılır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Çevre ve Şehircilik Bakanlığı'nın
            çevre durum raporlarında ise
            Kestanbol kaynaklarının sıcaklıkları
            ve debileri farklı ölçümlerle
            kaydedilmiştir. Bu farklılıklar
            kaynak noktası ve ölçüm zamanına
            bağlı olabilir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Çamur banyosu ve termal uygulamalar
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol yalnızca sıcak su banyolarıyla
            değil, çamur banyosu ve diğer termal
            uygulamalarla da tanınır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kültür ve Turizm Bakanlığı kaynaklarında
            banyo, çamur uygulamaları, inhalasyon
            ve serpinti uygulamaları bölgedeki
            termal kullanım biçimleri arasında
            sayılır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu uygulamalar tarihî ve turistik
            kullanım biçimleri olarak anlatılmalıdır.
            Termal suyun herhangi bir hastalığı
            tedavi ettiği veya herkes için
            güvenli olduğu anlamına gelmez.
            Sağlık amacıyla kullanmadan önce
            hekim görüşü alınmalıdır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kestanbol ve Alexandria Troas
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol Kaplıcaları'nın yakınında
            bulunan Alexandria Troas Antik Kenti,
            bölgenin tarihî gezisini tamamlayan
            önemli bir duraktır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Antik kentin kalıntıları, liman
            geçmişi ve termal kaynaklar birlikte
            düşünüldüğünde bu çevrenin antik
            çağlardan itibaren önemli bir
            yerleşim ve kullanım alanı olduğu
            görülür.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol'a gelen ziyaretçiler,
            gezi planlarına Alexandria Troas
            Antik Kenti'ni de ekleyerek
            doğa, tarih ve termal kültürü
            bir arada keşfedebilir.
          </p>

          {/* ÖZELLİKLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Kestanbol'da neler bulunuyor?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Termal Kaynaklar",
                "Farklı sıcaklıklara sahip doğal jeotermal su kaynakları.",
              ],
              [
                "Termal Havuzlar",
                "Tesis bünyesinde sunulan termal havuz olanakları.",
              ],
              [
                "Çamur Uygulamaları",
                "Kestanbol'un tarihî termal kullanımında yer alan çamur uygulamaları.",
              ],
              [
                "Tarihî Geçmiş",
                "Antik dönemlerden Bizans ve Osmanlı dönemine uzanan termal gelenek.",
              ],
              [
                "Alexandria Troas",
                "Yakın çevrede ziyaret edilebilecek önemli antik kent.",
              ],
              [
                "Termal Konaklama",
                "Bölgedeki termal tesislerde konaklama imkânı.",
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

          {/* ZİYARET BİLGİSİ */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyaret etmeden önce
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol Kaplıcaları'na gitmeden
            önce tesisin güncel çalışma durumunu,
            havuz kullanım saatlerini, konaklama
            seçeneklerini ve rezervasyon koşullarını
            doğrudan işletmeden öğrenmenizi öneririz.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Termal suyun sıcaklığı yüksek
            olabileceğinden kullanım süresi
            ve uygunluğu konusunda tesis
            görevlilerinin yönlendirmelerine
            uyulmalıdır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kalp-damar hastalığı, tansiyon,
            gebelik veya başka sağlık sorunu
            bulunan kişilerin termal havuz
            kullanımından önce doktorlarına
            danışmaları önemlidir.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70496/termal-turizm.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Kültür ve Turizm Müdürlüğü – Termal Turizm
                </a>
                <span>
                  {" "}· Kaynak sıcaklıkları ve termal kullanım bilgileri.
                </span>
              </li>

              <li>
                <a
                  href="https://ezine.meb.gov.tr/www/ilcemiz-ezine/icerik/408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Ezine İlçe Millî Eğitim Müdürlüğü – İlçemiz Ezine
                </a>
                <span>
                  {" "}· Kestanbol Kaplıcası ve Ezine'nin turizm değerleri.
                </span>
              </li>

              <li>
                <a
                  href="https://dergipark.org.tr/tr/pub/mutftd/article/523826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Demirsoy, Başaran ve Sandalcı (2018) – Tarihi Kestanbol Kaplıcaları
                </a>
                <span>
                  {" "}· Antik çağ, Bizans ve Osmanlı döneminde termal kullanım.
                </span>
              </li>

              <li>
                <a
                  href="https://webdosya.csb.gov.tr/db/ced/icerikler/canakkale_-cdr219-20201221092718.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Çevre Durum Raporu
                </a>
                <span>
                  {" "}· Kestanbol'un jeotermal kaynakları ve ölçüm değerleri.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kalkinmakutuphanesi.gov.tr/assets/upload/dosyalar/yenilenebilir-enerji-arastirmasi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Yenilenebilir Enerji Araştırması
                </a>
                <span>
                  {" "}· Kestanbol'un jeotermal kaynakları ve tesis geçmişi.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* BİLGİ KUTUSU */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Bölge bilgileri</h2>

          <div className="mt-5 space-y-5 text-sm">
            <div>
              <p className="text-cyan-300">İl</p>
              <p className="mt-1 text-gray-300">Çanakkale</p>
            </div>

            <div>
              <p className="text-cyan-300">İlçe</p>
              <p className="mt-1 text-gray-300">Ezine</p>
            </div>

            <div>
              <p className="text-cyan-300">Yaklaşık uzaklık</p>
              <p className="mt-1 text-gray-300">
                Ezine merkezine 15–18 km
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Ana kaynak sıcaklığı</p>
              <p className="mt-1 text-gray-300">
                Resmî kaynakta 67 °C
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Öne çıkan özellik</p>
              <p className="mt-1 leading-6 text-gray-300">
                Doğal sıcak su, termal havuzlar
                ve tarihî termal kullanım.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kestanbol+Kaplicalari+Ezine+Canakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            Haritada görüntüle ↗
          </a>
        </aside>
      </section>

      {/* HARİTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-2xl border border-cyan-900 bg-[#0a263b] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-400">
              GEZİNİZİ PLANLAYIN
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Kestanbol'a nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Kestanbol Kaplıcaları, Ezine
              ilçesinin güneybatısında,
              Körüktaşı Köyü çevresinde yer alır.
              Geyikli ve Ezine üzerinden bölgeye
              ulaşabilirsiniz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Kestanbol+Kaplicalari%2C+Ezine%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Alexandria+Troas+Antik+Kenti"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Alexandria Troas Antik Kenti'ni görüntüle ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Kestanbol Kaplıcaları haritası"
              src="https://maps.google.com/maps?q=Kestanbol%20Kaplicalari%2C%20Ezine%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Kestanbol Kaplıcaları · Ezine · Çanakkale
              </p>
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
