
import Link from "next/link";

export const metadata = {
  title: "Babakale | Geyikli'yi Keşfet",
  description:
    "Çanakkale Ayvacık Babakale Köyü, Osmanlı döneminden kalma kalesi, tarihî limanı ve geleneksel bıçakçılığı.",
};

export default function BabakalePage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/kesfet" className="text-cyan-300 hover:text-white">
            ← Geyikli'yi Keşfet
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            TARİHİN VE DENİZİN İZİNDE
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Baba<span className="text-cyan-400">kale</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Asya kıtasının en batı ucunda, Osmanlı'nın
            korsan saldırılarına karşı inşa ettiği
            son kalelerden biri... Taş sokakları,
            tarihî limanı ve nesilden nesile aktarılan
            bıçakçılık geleneğiyle Babakale.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ayvacık / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏰 Osmanlı Kalesi
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🔪 Geleneksel bıçakçılık
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/babakale/babakale-genel.jpg"
            alt="Babakale Köyü ve tarihî limanı"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Babakale · Ayvacık · Çanakkale
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

      {/* TARİHÇE */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            OSMANLI'DAN GÜNÜMÜZE
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Asya'nın batı ucunda bir kale köyü
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Babakale, Çanakkale'nin Ayvacık ilçesine
            bağlı, Biga Yarımadası'nın güneybatı
            ucunda bulunan tarihî bir kıyı köyüdür.
            Bababurnu üzerinde yer alan yerleşim,
            Asya kıtasının en batı noktası olarak
            bilinir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale'yi diğer kıyı köylerinden ayıran
            en önemli özelliklerden biri, Osmanlı
            döneminde inşa edilen kalesidir. Kale
            çevresinde gelişen köy, zamanla limanı,
            çarşısı, camisi, hamamı ve el sanatlarıyla
            kendine özgü bir yerleşim kimliği kazanmıştır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Babakale Kalesi'nin inşası
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale Kalesi, Osmanlı döneminde
            bölgedeki korsan saldırılarına karşı
            kıyı güvenliğini sağlamak amacıyla
            inşa edilmiştir. Yapının yaptırılması
            Kaptan-ı Derya Kaymak Mustafa Paşa
            ile ilişkilendirilir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kültür Portalı'nda aktarılan bilgiye göre
            Sultan III. Ahmed'in deniz yolculuğu
            sırasında Babakale limanına sığınması
            ve bölge halkının korsanlardan şikâyetçi
            olması, kale yapımına giden sürecin
            anlatılan başlangıç noktalarından biridir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kale inşaatının Nisan 1727'de başladığı
            ve 1728 yazında tamamlandığı, 2023
            yılında yayımlanan akademik araştırmada
            belirtilmektedir. Bazı kaynaklarda
            1725 tarihi de geçmektedir. Bu nedenle
            yapının inşa sürecini tek bir yıla
            indirgememek gerekir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kale, ilk dönemlerinde Hırzü'l-Bahr
            adıyla anılmıştır. Bu isim denizle
            ilişkili bir koruma ve sığınak anlamı
            taşır. Zaman içerisinde Babakale adı
            yerleşimle özdeşleşmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kale yapımında çevreden sağlanan
            taş ve iş gücünden yararlanılmıştır.
            Yapının tamamlanmasıyla birlikte
            çevresinde bir köy yerleşimi gelişmiştir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kalenin mimarisi ve savunma düzeni
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale Kalesi, kıyıya hâkim konumu
            ve savunma amaçlı mimarisiyle dikkat
            çeker. Taş duvarları, burçları ve
            denize bakan konumuyla Osmanlı'nın
            kıyı savunma anlayışını yansıtır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kale yalnızca askerî bir yapı değildir.
            İçerisinde askerlerin ve kale görevlilerinin
            ihtiyaçlarını karşılayan yapılar da
            bulunuyordu. Tarihî belgelerde kale
            içindeki cami ve hamamdan da söz edilir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale Kalesi, 1988 yılında korunması
            gerekli taşınmaz kültür varlığı olarak
            tescillenmiştir. 2024 yılında alınan
            koruma kurulu kararıyla kale ve köydeki
            bazı tarihî yapılar birinci grup
            korunması gerekli kültür varlıkları
            olarak değerlendirilmiştir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Tarihî liman ve köyün gelişimi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale'nin gelişiminde liman önemli
            bir yere sahiptir. Kale çevresinde
            oluşan yerleşim, askerî ihtiyaçların
            yanı sıra ticaret ve deniz ulaşımıyla
            da büyümüştür.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Liman, Babakale ve çevre köylerin
            ticaretinde kullanılan önemli bir
            bağlantı noktası olmuştur. Köyde
            geçmişte çarşı, dükkânlar, camiler,
            hamamlar ve çeşmeler bulunuyordu.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            2023 yılında yayımlanan akademik
            araştırmada 1839 yılında köyde yaklaşık
            bin kişinin yaşadığı, yüzyılın sonuna
            doğru nüfusun yaklaşık üç bine ulaştığı
            aktarılır. Bu bilgiler, Babakale'nin
            geçmişteki canlı sosyal ve ekonomik
            yaşamını gösterir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Babakale bıçakçılığı
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale'nin en tanınmış kültürel
            değerlerinden biri geleneksel bıçakçılıktır.
            Köyde bu zanaatın geçmişi, kalenin
            inşa edildiği 18. yüzyıla kadar
            götürülmektedir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kültür ve Turizm Bakanlığı Kültür
            Portalı'nda aktarılan yöresel anlatıya
            göre kale tamamlandıktan sonra
            askerlerin kılıç, kama ve benzeri
            silah ihtiyaçlarını karşılamak üzere
            ilk ustalar Babakale'ye yerleştirilmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Zamanla köyde gelişen bıçakçılık,
            yalnızca askerî ihtiyaçlara yönelik
            üretim olmaktan çıkmış, günlük yaşamda
            kullanılan bıçakların da üretildiği
            bir el sanatına dönüşmüştür.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale bıçakları; el işçiliği,
            desenli bıçak yüzeyleri ve geleneksel
            sap biçimleriyle tanınır. Geçmişte
            köyde çok sayıda atölye bulunduğu,
            üretilen bıçakların deniz yoluyla
            farklı bölgelere gönderildiği
            aktarılmaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Günümüzde Babakale bıçakçılığı,
            köyün kültürel kimliğinin önemli
            parçalarından biridir. Ustalık
            geleneğinin gelecek kuşaklara
            aktarılması, bu el sanatının
            yaşatılması açısından büyük önem taşır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Babakale Camii ve tarihî çeşmeler
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kale dışında bulunan Babakale Camii,
            köyün tarihî mimarisinin önemli
            örneklerinden biridir. Taş duvarları,
            kesme taş minaresi, ahşap tavanı
            ve geleneksel mimari ayrıntılarıyla
            dikkat çeker.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Caminin iç mekânında ahşap işçiliği,
            kalem işi süslemeler ve mukarnaslı
            ayrıntılar bulunur. Avlusundaki
            mermer şadırvan da yapının dikkat
            çeken bölümlerindendir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Köydeki tarihî çeşmeler de Osmanlı
            dönemi yerleşim dokusunun parçalarıdır.
            Babakale Çarşı Çeşmesi, koruma
            kayıtlarında yer alan tarihî
            yapılardan biridir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Latif Baba Türbesi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale'nin adı ve kıyı kültürüyle
            ilişkilendirilen anlatılardan biri
            Latif Baba'dır. Kültür Portalı'nda
            aktarılan rivayete göre denizciler
            tarafından saygı gösterilen Latif
            Baba'nın kabri, Babakale'nin
            isimlendirilmesiyle ilgili anlatılarda
            yer alır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu anlatılar tarihî belgelerden
            ziyade yöresel rivayetler olarak
            değerlendirilmelidir. Latif Baba
            Türbesi ve Osmanlı dönemi mezarlık
            alanı da köyün koruma kapsamındaki
            tarihî değerleri arasındadır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Asya kıtasının en batı noktası
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Bababurnu, Asya kıtasının en batı
            noktası olarak bilinir. Bu özelliği
            Babakale'yi coğrafi açıdan da özel
            bir konuma taşır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Ege Denizi'ne açılan kıyısı, tarihî
            limanı ve taş mimarisiyle Babakale,
            Çanakkale'nin keşfedilmeye değer
            kıyı yerleşimlerinden biridir.
          </p>

          {/* GÖRÜLECEK YERLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Babakale'de görülecek yerler
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Babakale Kalesi",
                "18. yüzyılda Osmanlı döneminde inşa edilen tarihî kıyı kalesi.",
              ],
              [
                "Tarihî Liman",
                "Köyün deniz ticareti ve balıkçılık geçmişiyle bağlantılı liman.",
              ],
              [
                "Babakale Camii",
                "Taş mimarisi, ahşap tavanı ve tarihî şadırvanıyla dikkat çeken cami.",
              ],
              [
                "Babakale Çarşı Çeşmesi",
                "Köyün tarihî çarşı dokusunun önemli parçalarından biri.",
              ],
              [
                "Latif Baba Türbesi",
                "Köyün tarihî ve yerel anlatılarıyla bağlantılı ziyaret noktası.",
              ],
              [
                "Bıçak Atölyeleri",
                "Babakale'nin geleneksel el sanatını tanıyabileceğiniz üretim yerleri.",
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
            Babakale'yi gezerken kale, liman,
            köy meydanı ve bıçak atölyelerini
            aynı gezi içerisinde değerlendirebilirsiniz.
            Köyün dar sokaklarında yürüyerek
            tarihî yapıları yakından görebilirsiniz.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bıçak atölyelerini ziyaret etmek
            isteyenlerin çalışma saatlerini
            önceden öğrenmesi faydalıdır.
            El yapımı ürünleri satın alırken
            doğrudan ustalardan bilgi almak,
            zanaatın geçmişini daha yakından
            tanıma fırsatı sunar.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kale, cami, çeşme ve türbe gibi
            tescilli kültür varlıklarına zarar
            vermemek; ziyaret sırasında koruma
            kurallarına uymak önemlidir.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://www.canakkale.bel.tr/tr/sayfa/1127-gezi-rehberi/363-babakale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Belediyesi – Babakale
                </a>
                <span>
                  {" "}· Köyün tarihî geçmişi, mimarisi ve yerel anlatıları.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/portal/babakale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Portalı – Babakale
                </a>
                <span>
                  {" "}· Hırzü'l-Bahr Kalesi ve Latif Baba anlatısı.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/turkiye/canakkale/kulturatlasi/babakale-bicakciligi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Portalı – Babakale Bıçakçılığı
                </a>
                <span>
                  {" "}· Geleneksel bıçak üretimi ve el sanatları.
                </span>
              </li>

              <li>
                <a
                  href="https://dergipark.org.tr/tr/pub/kulturder/article/1323545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Emre Kocabıyık ve Şerif Korkmaz – Bir Kale Köy Yerleşimi: Babakale (2023)
                </a>
                <span>
                  {" "}· Kalenin inşası, köyün yerleşim ve sosyal hayatı üzerine akademik araştırma.
                </span>
              </li>

              <li>
                <a
                  href="https://korumakurullari.ktb.gov.tr/Eklenti/129943%2Ccanakkale-ili-ayvacik-ilcesi-babakale-koyu-tescilli-kal-.pdf?0="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Kültür Varlıklarını Koruma Bölge Kurulu – 2024 kararı
                </a>
                <span>
                  {" "}· Kale, cami, çeşme, türbe ve mezarlık alanının koruma kararı.
                </span>
              </li>

              <li>
                <a
                  href="https://canakkale.com.tr/assets/upload/dosyalar/canakkale-kultur-envanteri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Kültür Envanteri
                </a>
                <span>
                  {" "}· Babakale Camii ve tarihî mimari kayıtları.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* BİLGİ KUTUSU */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Köy bilgileri</h2>

          <div className="mt-5 space-y-5 text-sm">
            <div>
              <p className="text-cyan-300">İl</p>
              <p className="mt-1 text-gray-300">Çanakkale</p>
            </div>

            <div>
              <p className="text-cyan-300">İlçe</p>
              <p className="mt-1 text-gray-300">Ayvacık</p>
            </div>

            <div>
              <p className="text-cyan-300">Konum</p>
              <p className="mt-1 text-gray-300">Bababurnu</p>
            </div>

            <div>
              <p className="text-cyan-300">Öne çıkan değerler</p>
              <p className="mt-1 leading-6 text-gray-300">
                Babakale Kalesi, tarihî liman,
                bıçakçılık, cami ve çeşmeler.
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Tarihî dönem</p>
              <p className="mt-1 text-gray-300">Osmanlı dönemi</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Babakale+Ayvacik+Canakkale"
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
              Babakale'ye nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Babakale, Ayvacık ilçesinin güneybatısında,
              Bababurnu üzerinde yer alır. Geyikli
              ve Ezine üzerinden Ayvacık yönüne
              ilerleyerek Babakale'ye ulaşabilirsiniz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Babakale%2C+Ayvacik%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Babakale haritası"
              src="https://maps.google.com/maps?q=Babakale%2C%20Ayvacik%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Babakale · Ayvacık · Çanakkale
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
