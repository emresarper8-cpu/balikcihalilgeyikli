
import Link from "next/link";

export const metadata = {
  title: "Neandria Antik Kenti | Geyikli'yi Keşfet",
  description:
    "Neandria Antik Kenti'nin tarihi, Çığrı Dağı, antik surları ve Geyikli'den ulaşım rehberi.",
};

export default function NeandriaPage() {
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
            Neandria <span className="text-cyan-400">Antik Kenti</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Çığrı Dağı'nın zirvesinde, binlerce yıllık geçmişiyle
            Troas bölgesinin önemli antik yerleşimlerinden biri.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ezine / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Antik kent
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/neandria/neandria-genel.png"
            alt="Neandria için hazırlanmış temsili manzara görseli"
            className="h-[280px] w-full object-cover md:h-[480px]"
          />
          <div className="flex flex-wrap justify-between gap-2 p-4">
            <span className="text-sm text-gray-300">
              Neandria Antik Kenti · Çığrı Dağı
            </span>
            <span className="text-xs text-gray-500">
              Temsili görsel
            </span>
          </div>
        </div>
      </section>

      {/* TARİHÇE */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            KENTİN HİKÂYESİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Çığrı Dağı'nın zirvesinde bir tarih
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Neandria, Çanakkale'nin Ezine ilçesinde, Kayacık,
            Yavaşlar ve Koçeli köyleri arasında yükselen Çığrı
            Dağı üzerinde yer alır. Deniz seviyesinden yaklaşık
            530 metre yükseklikteki konumu, antik kente Troas
            bölgesini gözetleyebilen hâkim bir yerleşim özelliği
            kazandırmıştır. Dağın zirvesindeki bu kent, bugün
            bile çevresindeki geniş manzarasıyla dikkat çeker.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Neandria'nın bilinen yerleşim geçmişi en azından
            MÖ 7. yüzyıla kadar uzanır. Arkaik Dönem'e ait
            izler, kentin erken dönemlerden itibaren önemli
            bir yerleşim olduğunu gösterir. MÖ 6. yüzyılda
            gelişen kent, sonraki yüzyıllarda daha geniş bir
            alana yayılarak güçlü savunma sistemlerine sahip
            bir yerleşime dönüşmüştür.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Taş surlarla çevrili bir kent
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Neandria'nın en dikkat çekici kalıntıları,
            Çığrı Dağı'nın yamaçları ve zirvesi boyunca
            uzanan savunma duvarlarıdır. Çanakkale İl Kültür
            Envanteri'nde aktarılan bilgilere göre kentin
            erken sur hattı yaklaşık 1.500 metre uzunluğundadır.
            Bu ilk savunma duvarları, çokgen kenarlı taşlarla
            inşa edilmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            MÖ 5. ve 4. yüzyıllarda kent alanının genişlemesiyle
            ikinci bir sur sistemi oluşturulmuştur. Yaklaşık
            3.200 metre uzunluğundaki bu savunma hattı,
            yer yer günümüzde de izlenebilen etkileyici
            taş duvarlardan oluşur. Sur sistemi üzerinde
            dördü ana kapı olmak üzere toplam 11 giriş
            bulunmaktadır. Batı ve güney kapıları,
            kentin en önemli girişleri arasındadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Sur duvarlarında kullanılan büyük andezit taş
            blokları ve sandık duvar tekniği, dönemin
            taş işçiliğini ortaya koyar. Bu savunma sistemi,
            Neandria'nın yalnızca yüksek bir tepeye kurulmuş
            küçük bir yerleşim olmadığını, planlı ve güçlü
            bir kent olduğunu gösteren en önemli kanıtlardandır.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Kentin içindeki yaşam
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Neandria, ızgara planlı kent düzeniyle de dikkat
            çeker. Yerleşim içerisinde konutlara, kamu
            yapılarına ve kutsal alanlara ait temel izleri
            bulunmaktadır. Yapıların bir bölümü günümüze
            temel seviyesinde ulaşmıştır. Bu kalıntılar,
            antik kentteki sokak düzeni ve günlük yaşam
            hakkında önemli ipuçları sunar.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kentin arkeolojik açıdan önemli yapılarından biri
            Apollon Tapınağı'dır. Çanakkale İl Kültür
            Envanteri'ne göre tapınak, batı kapısının yaklaşık
            200 metre doğusunda yer almaktadır. Bu kutsal
            alan, Neandria'nın dini yaşamına ilişkin önemli
            izlerden biridir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Neandria'dan Aleksandria Troas'a
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Neandria'nın tarihindeki en önemli değişimlerden
            biri, MÖ 4. yüzyılın sonlarında yaşanmıştır.
            Antigonos Monophthalmos döneminde Troas bölgesinde
            yeni bir kent kurulmuş ve çevredeki bazı yerleşimlerin
            nüfusunun burada toplanması süreci başlamıştır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            İlk adı Antigoneia olan bu yeni kent, daha sonra
            Lysimakhos tarafından Aleksandria Troas olarak
            adlandırılmıştır. Antik yerleşimlerin birleştirilmesi
            olarak tanımlanan bu süreçte Neandria'nın da
            aralarında bulunduğu altı kentin halkının yeni
            yerleşime taşındığı aktarılır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Böylece Çığrı Dağı üzerindeki Neandria zamanla
            eski önemini kaybetmiş ve yerleşim terk edilmiştir.
            Bugün geriye kalan surlar, kapılar, yapı temelleri
            ve kutsal alan izleri, Troas bölgesinin antik
            geçmişine ışık tutmaya devam etmektedir.
          </p>

          {/* KENTTE GÖRÜLEBİLECEKLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Kentte neler görülebilir?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Antik surlar",
                "Çığrı Dağı'nın yamaçlarında uzanan farklı dönemlere ait savunma duvarları.",
              ],
              [
                "Kent kapıları",
                "Antik yerleşimin girişlerini oluşturan, özellikle batı ve güney kapılarıyla dikkat çeken kalıntılar.",
              ],
              [
                "Apollon Tapınağı",
                "Batı kapısının yaklaşık 200 metre doğusunda bulunan kutsal alan.",
              ],
              [
                "Yerleşim izleri",
                "Izgara planlı kent düzenine ait konut ve yapı temelleri.",
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
            Neandria dağlık ve kırsal bir alanda yer alır.
            Ziyaret öncesinde yol ve arazi koşullarını kontrol
            etmenizi, rahat yürüyüş ayakkabısı giymenizi ve
            yanınızda su bulundurmanızı öneririz. Antik
            kalıntıların korunması için taşlara ve tarihi
            yapılara zarar vermemeye özen gösterilmelidir.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.com.tr/assets/upload/dosyalar/canakkale-kultur-envanteri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Kültür Envanteri – Neandria
                </a>
                <span> · Konum, surlar, kapılar ve Apollon Tapınağı bilgileri.</span>
              </li>

              <li>
                <a
                  href="https://www.uni-muenster.de/AsiaMinor/projekte/ehemalige_projekte_/forschungsprojekt_neandria.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Münster Üniversitesi – Neandria Araştırma Projesi
                </a>
                <span> · Arkeolojik araştırmalar ve kentin tarihsel gelişimi.</span>
              </li>

              <li>
                <a
                  href="https://www.treccani.it/enciclopedia/neandria_%28Enciclopedia-dell%27-Arte-Antica%29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Treccani – Neandria
                </a>
                <span> · Antik kent ve savunma sistemi üzerine akademik başvuru.</span>
              </li>

              <li>
                <a
                  href="https://books.google.com/books/about/Die_Stadtmauern_von_Neandreia_in_der_Tro.html?hl=en&id=pCpuAAAAMAAJ&output=html_text"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Armin Schulz – Die Stadtmauern von Neandreia in der Troas
                </a>
                <span> · Neandria surları üzerine arkeolojik çalışma, 2000.</span>
              </li>
            </ul>
          </div>
        </article>

        {/* KONUM VE ULAŞIM */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Konum ve ulaşım</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Çığrı Dağı, Kayacık, Yavaşlar ve Koçeli köyleri
            arasındaki bölgede, Ezine ilçesi, Çanakkale.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Neandria+Ancient+City+Canakkale"
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
              Neandria'ya nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Neandria Antik Kenti, Ezine ilçesinde Kayacık,
              Yavaşlar ve Koçeli köyleri arasındaki Çığrı Dağı
              üzerinde yer alır. Son bölümde arazi yürüyüşü
              gerekebilir. Gitmeden önce yol koşullarını
              kontrol etmenizi öneririz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Neandria+Ancient+City%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Neandria Antik Kenti mini haritası"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.245%2C39.700%2C26.310%2C39.745&layer=mapnik&marker=39.7212%2C26.2791"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Neandria · Çığrı Dağı
              </p>

              <a
                href="https://www.openstreetmap.org/?mlat=39.7212&mlon=26.2791#map=15/39.7212/26.2791"
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
