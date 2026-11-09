
import Link from "next/link";

export const metadata = {
  title: "Apollon Smintheus Tapınağı | Geyikli'yi Keşfet",
  description:
    "Gülpınar'daki Apollon Smintheus Tapınağı'nın tarihi, mimarisi, İlyada kabartmaları ve ziyaret rehberi.",
};

export default function ApollonSmintheusPage() {
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
            Apollon Smintheus{" "}
            <span className="text-cyan-400">Tapınağı</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Farelerin Efendisi Apollon'a adanmış, Homeros'un İlyada
            Destanı'ndan sahneleri taş kabartmalarında yaşatan
            eşsiz bir Hellenistik dönem kutsal alanı.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Gülpınar / Ayvacık
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Hellenistik dönem
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📜 MÖ 150 civarı
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/apollon-smintheus/apollon-smintheus-genel.jpg"
            alt="Gülpınar Apollon Smintheus Tapınağı"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="p-4">
            <span className="text-sm text-gray-300">
              Apollon Smintheus Kutsal Alanı · Gülpınar
            </span>
          </div>
        </div>
      </section>

      {/* TARİHÇE */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            KUTSAL ALANIN HİKÂYESİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Troas'ın kalbinde Apollon'a adanmış bir kutsal alan
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Apollon Smintheus Kutsal Alanı, Çanakkale'nin Ayvacık
            ilçesine bağlı Gülpınar'da yer alır. Antik çağda
            Smintheion adıyla bilinen bu alan, Troas bölgesinin
            önemli dini merkezlerinden biridir. Tapınak, yalnızca
            mimarisiyle değil, taşıdığı kültürel ve mitolojik
            anlamlarla da dikkat çeker.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kutsal alanın en tanınmış yapısı olan Apollon Smintheus
            Tapınağı, yaklaşık MÖ 150 yıllarında Hellenistik dönemde
            inşa edilmiştir. Anadolu'daki Apollon kültleri arasında
            fare simgesiyle öne çıkan özel bir yere sahiptir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Farelerin Efendisi: Apollon Smintheus
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Apollon'un Smintheus sıfatı, antik dilde fareyle
            ilişkilendirilir ve genellikle "Farelerin Efendisi"
            şeklinde açıklanır. Troas bölgesinde Apollon, tarım
            ürünlerine zarar veren farelerden çiftçileri koruyan
            tanrı olarak da kabul edilmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu nedenle fare simgesi, kutsal alanın dini kimliğinin
            önemli bir parçasıdır. Apollon'un bu sıfatı, bölgenin
            tarımsal yaşamı ve inanç dünyası arasındaki ilişkiyi
            anlamak açısından dikkat çekicidir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Hellenistik mimarinin etkileyici örneği
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Tapınak İon düzeninde inşa edilmiştir. Mimari tasarımında
            Hermogenes ile ilişkilendirilen pseudodipteros planı
            kullanılmıştır. Bu plan, tapınağın çevresinde ikinci bir
            sütun sırası varmış izlenimi oluşturan düzenlemesiyle
            tanınır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Tapınağın ön ve arka cephelerinde sekizer, uzun
            kenarlarında ise on dörder sütun bulunur. Bu düzen,
            yapının anıtsal görünümünü güçlendirir ve onu
            Hellenistik dönem Anadolu mimarisi açısından önemli
            bir örnek hâline getirir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Taşlara işlenen İlyada Destanı
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Apollon Smintheus Tapınağı'nı özel kılan en önemli
            özelliklerden biri, mimari frizlerinde Homeros'un
            İlyada Destanı'ndan alınan sahnelerin işlenmiş olmasıdır.
            Kabartmalarda Troya Savaşı'nın mitolojik anlatıları
            betimlenmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu kabartmalar, mitolojik anlatının bir tapınağın
            mimari süslemesine nasıl taşındığını gösteren
            önemli örneklerdir. Aynı zamanda Troas bölgesinin
            Troya anlatılarıyla kurduğu kültürel bağın izlerini
            taşırlar.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Tapınaktan çok daha eski bir yerleşim
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Smintheion yalnızca Hellenistik ve Roma dönemlerine
            ait kalıntılardan oluşmaz. Arkeolojik kazılarda kutsal
            alanın bulunduğu yerde çok daha eski bir yerleşimin
            izleri de ortaya çıkarılmıştır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bilimsel tarihlendirmelere göre bu yerleşim yaklaşık
            MÖ 5200–4800 yıllarına, Kalkolitik döneme uzanır.
            Bu bulgular, Gülpınar çevresindeki insan yaşamının
            tapınağın inşa edilmesinden binlerce yıl öncesine
            dayandığını gösterir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Kutsal alanın diğer yapıları
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kazılarda tapınağın yanı sıra kutsal alanla ilişkili
            hamam, konutlar, kutsal yol, su yapıları ve farklı
            mimari kalıntılar da ortaya çıkarılmıştır. Bu yapılar,
            Smintheion'un yalnızca bir tapınaktan ibaret olmadığını;
            ibadet, ziyaret ve günlük yaşamın bir arada bulunduğu
            geniş bir kutsal alan olduğunu ortaya koyar.
          </p>

          {/* GÖRÜLEBİLECEKLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyarette neler görülebilir?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Apollon Smintheus Tapınağı",
                "İon düzenindeki Hellenistik tapınak ve kısmen ayağa kaldırılmış mimari bölümleri.",
              ],
              [
                "İlyada kabartmaları",
                "Troya Savaşı'nın mitolojik sahnelerini anlatan tapınak frizleri.",
              ],
              [
                "Kutsal yol",
                "Kutsal alanın farklı bölümlerini birbirine bağlayan antik yol kalıntıları.",
              ],
              [
                "Roma hamamı",
                "Kutsal alanın Roma dönemindeki kullanımına ışık tutan hamam kalıntıları.",
              ],
              [
                "Kalkolitik dönem izleri",
                "Yaklaşık MÖ 5200–4800 yıllarına tarihlenen eski yerleşimin arkeolojik izleri.",
              ],
              [
                "Kazı alanı ve müze",
                "Kazılarda ortaya çıkarılan eserlerin ve tapınak frizlerinin sergilendiği alan.",
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

          {/* KAZILAR */}
          <h2 className="mt-12 text-2xl font-bold">
            Kazı ve araştırmalar
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Smintheion'daki bilimsel kazılar 1980 yılında Prof. Dr.
            Coşkun Özgünel başkanlığında başlamıştır. Çalışmalar
            sırasında tapınak ve çevresindeki yapıların yanı sıra
            kutsal alanın daha eski dönemlerine ait yerleşim izleri
            de araştırılmıştır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            2020 yılından itibaren kazı başkanlığını Ondokuz Mayıs
            Üniversitesi Arkeoloji Bölümü'nden Doç. Dr. Davut
            Kaplan yürütmektedir. Araştırmalar, alanın farklı
            dönemlerine ait tarihsel katmanları ortaya çıkarmaya
            devam etmektedir.
          </p>

          {/* ZİYARET BİLGİSİ */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyaret etmeden önce
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Apollon Smintheus Kutsal Alanı'nı gezerken tapınak
            kalıntılarını, mimari parçaları ve sergi alanlarını
            incelemek için zaman ayırmanızı öneririz. Rahat
            ayakkabılar giymek ve özellikle sıcak havalarda
            yanınızda su bulundurmak faydalı olacaktır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Ziyaret saatleri ve müze bölümünün açık olduğu dönemler
            değişebileceğinden yola çıkmadan önce güncel bilgileri
            kontrol edin. Tarihi kalıntılara dokunmamaya ve
            bulundukları yerden taşımamaya özen gösterin.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70514/apollon-smintheus-oren-yeri.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Kültür ve Turizm Müdürlüğü – Apollon Smintheus
                </a>
                <span>
                  {" "}· Tapınağın tarihi, mimarisi ve kabartmaları.
                </span>
              </li>

              <li>
                <a
                  href="https://ark-itbf.omu.edu.tr/tr/ara%C5%9Ftirmalar/kazilar/apollon-smintheion-kazilari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Ondokuz Mayıs Üniversitesi – Apollon Smintheion Kazıları
                </a>
                <span>
                  {" "}· Kazı geçmişi, kutsal alan ve arkeolojik bulgular.
                </span>
              </li>

              <li>
                <a
                  href="https://muze.gov.tr/s3/MysFileLibrary/%C3%87anakkale%20Smintheion%20%C3%96ren%20Yeri-ce3e727f-05ef-484b-b5de-224f064569dd.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  T.C. Kültür ve Turizm Bakanlığı – Smintheion Ören Yeri Broşürü
                </a>
                <span>
                  {" "}· Kutsal alanın yapıları ve Apollon Smintheus kültü.
                </span>
              </li>

              <li>
                <a
                  href="https://www.hoyuk.gov.tr/eng/full-text-pdf/15/tur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kalkolitik Smintheion Yerleşimi
                </a>
                <span>
                  {" "}· Tarih öncesi yerleşim ve bilimsel tarihlendirme.
                </span>
              </li>

              <li>
                <a
                  href="https://belleten.gov.tr/eng/full-text-pdf/1604/tur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Türk Tarih Kurumu – Apollon Smintheus Tapınağı
                </a>
                <span>
                  {" "}· Tapınağın mimari özellikleri üzerine akademik çalışma.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* KONUM VE ULAŞIM */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Konum ve ulaşım</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Apollon Smintheus Kutsal Alanı, Çanakkale'nin Ayvacık
            ilçesine bağlı Gülpınar'da yer alır. Antik alan,
            Gülpınar yerleşiminin Bahçeler-içi olarak bilinen
            mevkiindedir.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Apollon+Smintheus+Tapinagi+Gulpinar+Ayvacik+Canakkale"
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
              Apollon Smintheus'a nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Tapınak, Gülpınar yerleşiminde bulunur. Geyikli'den
              Ayvacık yönüne ve oradan Gülpınar'a ulaşım için
              yolculuğunuzu önceden planlayabilirsiniz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Apollon+Smintheus+Tapinagi%2C+Gulpinar%2C+Ayvacik&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Apollon Smintheus Tapınağı haritası"
              src="https://maps.google.com/maps?q=Apollon%20Smintheus%20Tap%C4%B1na%C4%9F%C4%B1%2C%20G%C3%BClp%C4%B1nar%2C%20Ayvac%C4%B1k%2C%20%C3%87anakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Apollon Smintheus · Gülpınar
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Apollon+Smintheus+Tapinagi+Gulpinar+Ayvacik+Canakkale"
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
