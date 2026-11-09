
import Link from "next/link";

export const metadata = {
  title: "Koçali Köyü | Geyikli'yi Keşfet",
  description:
    "Çanakkale Ezine Koçali Köyü'nün tarihi, Kız Kalesi, Roma dönemi granit sütun ocakları ve Osmanlı dönemi eserleri.",
};

export default function KocaliPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* ÜST ALAN */}
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/kesfet" className="text-cyan-300 hover:text-white">
            ← Geyikli'yi Keşfet
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            TARİHİN İZİNDE
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Koçali <span className="text-cyan-400">Köyü</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Roma döneminin dev granit sütunlarından Bizans
            döneminin Kız Kalesi'ne, Osmanlı çeşmesinden
            köy camisinin tarihî izlerine uzanan bir
            kültür yolculuğu...
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ezine / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Tarihî miras
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🪨 Antik taş ocakları
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kocali/kocali-genel.jpg"
            alt="Koçali Köyü ve çevresi"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Koçali Köyü · Ezine · Çanakkale
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
            TAŞIN VE TARİHİN İZİNDE
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Ezine'nin tarihî köylerinden biri: Koçali
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Koçali, Çanakkale'nin Ezine ilçesine bağlı
            köylerden biridir. Çevresindeki tarihî
            kalıntılar, antik taş ocakları ve geleneksel
            köy dokusuyla bölgenin kültürel mirası
            içerisinde dikkat çeker.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Köyün çevresinde farklı dönemlere ait
            izler bulunur. Özellikle Roma döneminde
            kullanılan granit sütun ocakları ve
            Bizans dönemine tarihlenen Kız Kalesi,
            Koçali'nin tarihî önemini ortaya koyan
            başlıca yapılardır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Roma döneminden kalan dev granit sütunlar
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Koçali'nin en dikkat çekici tarihî
            değerlerinden biri, Gözkaya mevkiinde
            bulunan antik sütun ocaklarıdır.
            Çanakkale Kültür Envanteri'nde Koçali
            Sütun Ocakları adıyla kayıtlı olan bu
            alan, Roma dönemindeki taş işçiliğine
            dair önemli bilgiler sunar.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kültür envanterinde yer alan bilgilere
            göre burada ana kayadan koparılmış ve
            işlenmiş hâlde bırakılmış granit sütunlar
            bulunmaktadır. Sütunların ortalama
            uzunluğu 11,5 metre, çapı ise yaklaşık
            1,40 metredir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Çevrede yarı işlenmiş mimari parçalar
            da görülür. Bu kalıntılar, antik çağda
            taşların yalnızca çıkarılmadığını,
            aynı zamanda ocak alanında işlendiğini
            göstermektedir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Antik kaynaklar ve kültür envanterindeki
            değerlendirmeler, bu ocaklarda üretilen
            sütunların Roma'ya ihraç edildiğine
            işaret eder. Tamamlanmış bazı sütunların
            ise bilinmeyen bir nedenle sevk edilemeden
            ocakta kaldığı düşünülmektedir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu alan, antik dönemde taşın nasıl
            çıkarıldığını, işlendiğini ve uzak
            merkezlere nasıl taşındığını anlamak
            açısından önemlidir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kız Kalesi: Bizans'tan kalan tarihî yapı
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Koçali köyünün yaklaşık 2 kilometre
            doğusunda, Koçali ile Yavaşlar köyleri
            arasındaki Kızkalesi mevkiinde tarihî
            bir kale kalıntısı yer alır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Çanakkale Kültür Envanteri'nde Koçali
            Köyü Kız Kalesi adıyla kayıtlı olan yapı,
            Bizans dönemine tarihlendirilir.
            Neandria'nın yaklaşık 3 kilometre
            kuzeyinde, çevreye hâkim yüksek ve
            kayalık bir tepe üzerinde bulunur.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kalede doğu ve kuzey yönlerinde sur
            duvarı ve kule kalıntıları görülür.
            İç bölümde ise tonozlu yapı izleri,
            ev temelleri, sarnıç ve depo kalıntıları
            bulunmaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kaleye girişin iki yanında kule bulunan
            bir kapıyla sağlandığı envanter kayıtlarında
            belirtilir. Batı yamaçlarında teraslar
            üzerine oturan yapı izleri de vardır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kalenin, 13. yüzyıl ortalarında Bizans
            İmparatoru II. Theodoros'un Troas
            bölgesine yaptığı ziyaret sırasında
            adı geçen Astritzion Kalesi olabileceği
            düşünülmektedir. Bu eşleştirme kesin
            değil, tarihî bir araştırma önerisidir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Konumu itibarıyla kale, antik yol ağını
            ve kıyıdan iç kesimlere uzanan güzergâhları
            kontrol etmeye elverişli bir noktada
            inşa edilmiştir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            19. yüzyıldan kalan Koçali Köyü Camii
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Köyün tarihî yapıları arasında Koçali
            Köyü Camii de yer alır. Kültür Envanteri
            kayıtlarına göre cami, 19. yüzyılda
            inşa edilmiş Osmanlı dönemi yapısıdır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Dikdörtgen planlı, kâgir ve ahşap kırma
            çatılı bir yapı olan caminin iç mekânında
            kalem işi süslemeler ve hat yazıları
            bulunmaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Minare üzerindeki kitabeye göre caminin
            yapım tarihi Hicri 1280, yani Miladi
            1863'tür. Giriş kapısındaki kitabede
            ise Hicri 1304 yılının Şevval ayında,
            Miladi 1887'de yenilendiği bilgisi
            yer almaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Cami, Çanakkale Kültür Varlıklarını
            Koruma Bölge Kurulu tarafından
            30 Ocak 2020 tarihinde tescillenmiştir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Köyün tarihî taş çeşmesi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Koçali'de kayıt altına alınmış bir
            diğer Osmanlı dönemi eseri de köy
            çeşmesidir. Tek cepheli ve tek musluklu
            sokak çeşmesi, sade taş işçiliğiyle
            dikkat çeker.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Çeşmenin kaş kemeri tek parça taştan
            işlenmiştir. Kültür Envanteri'nde
            19. yüzyıla tarihlendirilen yapı,
            30 Ocak 2020 tarihinde tescillenmiştir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Koçali'nin çevresindeki tarihî coğrafya
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Koçali'nin bulunduğu çevre, Troas
            bölgesinin antik yerleşim ve ulaşım
            ağlarıyla bağlantılıdır. Yakın çevrede
            Neandria Antik Kenti ve Alexandria
            Troas gibi önemli tarihî merkezler
            bulunmaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu coğrafya, antik dönemden Osmanlı
            dönemine kadar uzanan farklı tarihî
            izleri bir arada barındırır. Koçali
            de bu geniş tarihî çevrenin önemli
            parçalarından biridir.
          </p>

          {/* GÖRÜLECEK YERLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Koçali'de ve çevresinde görülecek tarihî yerler
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Kız Kalesi",
                "Bizans dönemine tarihlenen, sur, kule, sarnıç ve yapı kalıntıları bulunan tarihî kale.",
              ],
              [
                "Antik Sütun Ocakları",
                "Roma döneminde granit sütunların çıkarılıp işlendiği Gözkaya mevkii.",
              ],
              [
                "Koçali Köyü Camii",
                "Kitabelerine göre 1863 yılında inşa edilmiş, 1887 yılında yenilenmiş Osmanlı dönemi camisi.",
              ],
              [
                "Tarihî Taş Çeşme",
                "19. yüzyıla tarihlendirilen, tek musluklu ve taş kemerli köy çeşmesi.",
              ],
              [
                "Neandria Antik Kenti",
                "Koçali çevresindeki tarihî coğrafyanın önemli antik kentlerinden biri.",
              ],
              [
                "Alexandria Troas",
                "Troas bölgesinin önemli liman kentlerinden biri olan antik yerleşim.",
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
            Koçali çevresindeki tarihî alanların
            bazıları açık arazide ve kırsal
            güzergâhlarda bulunmaktadır. Özellikle
            Kız Kalesi ve sütun ocaklarına gitmeden
            önce yol ve arazi koşullarını kontrol
            etmek gerekir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kız Kalesi ve antik taş ocakları
            arkeolojik değer taşıyan alanlardır.
            Kalıntılara zarar vermemek, taşları
            yerinden oynatmamak ve çevreyi temiz
            bırakmak önemlidir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Koruma altındaki alanlarda izinsiz
            kazı yapmak, taş veya eser almak
            yasaktır. Ziyaret sırasında mevcut
            koruma ve erişim kurallarına uyulmalıdır.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.com.tr/assets/upload/dosyalar/canakkale-kultur-envanteri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Kültür Envanteri – Musa Tombul, 2015
                </a>
                <span>
                  {" "}· Koçali Sütun Ocakları ve Koçali Köyü Kız Kalesi kayıtları.
                </span>
              </li>

              <li>
                <a
                  href="https://kulturenvanteri.com/yer/kocali-koyu-camii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Envanteri – Koçali Köyü Camii
                </a>
                <span>
                  {" "}· Caminin kitabeleri, tarihî özellikleri ve tescil bilgisi.
                </span>
              </li>

              <li>
                <a
                  href="https://kulturenvanteri.com/yer/cesme-kocali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Envanteri – Çeşme, Koçali
                </a>
                <span>
                  {" "}· Köy çeşmesinin mimari özellikleri ve tarihî kaydı.
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
                  {" "}· Koçali ve Kestanbol antik sütun ocakları hakkında bilgi.
                </span>
              </li>

              <li>
                <a
                  href="https://korumakurullari.ktb.gov.tr/Eklenti/119637%2Ccanakkale-ili-ezine-ilcesi-kocali-koyu-698-parsele-ilis-.pdf?0="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Varlıklarını Koruma Bölge Kurulu – 2023 tarihli karar
                </a>
                <span>
                  {" "}· Koçali'deki tescilli sarnıç, havuz ve yapı hakkında.
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
              <p className="mt-1 text-gray-300">Ezine</p>
            </div>

            <div>
              <p className="text-cyan-300">Öne çıkan tarihî değerler</p>
              <p className="mt-1 leading-6 text-gray-300">
                Kız Kalesi, antik granit sütun ocakları,
                köy camisi ve tarihî çeşme.
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Tarihî dönemler</p>
              <p className="mt-1 text-gray-300">
                Roma, Bizans ve Osmanlı.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Ko%C3%A7ali+K%C3%B6y%C3%BC+Ezine+%C3%87anakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            Köyü haritada görüntüle ↗
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
              Koçali Köyü'ne nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Koçali Köyü, Ezine ilçesine bağlıdır.
              Köyün çevresindeki tarihî alanları
              ziyaret etmek için yola çıkmadan önce
              harita üzerinden güzergâhı kontrol
              etmenizi öneririz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Ko%C3%A7ali+K%C3%B6y%C3%BC%2C+Ezine%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Ko%C3%A7ali+K%C3%B6y%C3%BC+K%C4%B1z+Kalesi+Ezine"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Kız Kalesi konumunu ara ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Koçali Köyü haritası"
              src="https://maps.google.com/maps?q=Ko%C3%A7ali%20K%C3%B6y%C3%BC%2C%20Ezine%2C%20%C3%87anakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Koçali Köyü · Ezine · Çanakkale
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
