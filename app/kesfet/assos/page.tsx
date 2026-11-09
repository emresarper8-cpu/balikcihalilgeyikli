
import Link from "next/link";

export const metadata = {
  title: "Assos Antik Kenti | Geyikli'yi Keşfet",
  description:
    "Assos Antik Kenti'nin tarihi, Athena Tapınağı, Aristoteles ve antik kentte görülebilecek yapılar hakkında gezi rehberi.",
};

export default function AssosPage() {
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
            Assos <span className="text-cyan-400">Antik Kenti</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Ege Denizi'ne hâkim kayalıkların üzerinde yükselen,
            Athena Tapınağı, antik limanı ve Aristoteles'in
            izleriyle tarihe ışık tutan binlerce yıllık kent.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Behramkale / Ayvacık
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Antik Yunan kenti
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📜 MÖ 7. yüzyıl
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/assos/assos-genel.jpg"
            alt="Assos Antik Kenti ve Athena Tapınağı"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="p-4">
            <span className="text-sm text-gray-300">
              Assos Antik Kenti · Behramkale
            </span>
          </div>
        </div>
      </section>

      {/* TARİHÇE */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            ANTİK KENTİN HİKÂYESİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Ege'nin kıyısında binlerce yıllık bir tarih
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Assos Antik Kenti, Çanakkale'nin Ayvacık ilçesine
            bağlı Behramkale Köyü sınırlarında, Ege Denizi'ne
            hâkim volkanik bir tepe üzerine kurulmuştur.
            Antik Troas bölgesinin önemli yerleşimlerinden
            biri olan Assos, tarih boyunca stratejik konumu,
            limanı ve doğal kaynaklarıyla dikkat çekmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bölgedeki arkeolojik bulgular yerleşim geçmişinin
            Tunç Çağı'na kadar uzandığını göstermektedir.
            Antik kaynaklarda kentin gelişimi MÖ 7. yüzyılda
            Midilli Adası'ndan gelen göçmenlerle
            ilişkilendirilmektedir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Athena Tapınağı: Kentin simgesi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Assos Akropolü'nün en yüksek noktasında yer alan
            Athena Tapınağı, kentin koruyucu tanrıçası
            Athena'ya adanmıştır. MÖ 6. yüzyıla tarihlenen
            tapınak, Anadolu'da Arkaik Dönem Dor mimarisinin
            günümüze ulaşan önemli örneklerinden biridir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Tapınak, yalnızca mimari özellikleriyle değil,
            Ege Denizi'ne hâkim konumuyla da dikkat çeker.
            Yapının mimari süslemelerinde mitolojik sahneler
            ve hayvan mücadelelerini betimleyen kabartmalar
            bulunmuştur.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Aristoteles'in Assos yılları
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Assos'un tarihindeki en dikkat çekici isimlerden
            biri Antik Yunan filozofu Aristoteles'tir.
            Aristoteles, MÖ 347 yılında Assos'a gelmiş ve
            yaklaşık üç yıl boyunca burada yaşamıştır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu dönemde kentte felsefi çalışmalar yürütmüş,
            çevresinde öğrenciler ve düşünürlerden oluşan
            bir topluluk meydana gelmiştir. Aristoteles'in
            Assos'taki yılları, kentin yalnızca siyasi ve
            ticari değil, düşünsel açıdan da önemli bir
            merkez olduğunu göstermektedir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Taş işçiliği ve ünlü Assos lahitleri
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Assos, çevresindeki volkanik taş kaynakları
            sayesinde kendine özgü bir yapı geleneği
            geliştirmiştir. Kentte kullanılan andezit taşı,
            dayanıklılığı ve işlenme özellikleriyle
            dikkat çekmektedir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Assos lahitleri, antik dünyanın tanınan mezar
            geleneklerinden biridir. Andezit taşından
            hazırlanan bu lahitlerin, cesedi hızlı
            ayrıştırdığına inanıldığı için antik çağda
            "et yiyen" anlamına gelen tabutlarla
            ilişkilendirildiği aktarılır.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Liman kenti Assos
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Antik kentin denize açılan limanı, Assos'un
            ticari ve denizcilik yaşamında önemli bir yere
            sahipti. Liman çevresindeki yapılar, kentin
            denizle kurduğu ilişkinin izlerini günümüze
            taşımaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Günümüzde de tarihî liman çevresi, taş yapıları
            ve deniz manzarasıyla Assos'un en çok ilgi
            gören noktalarından biridir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Antik kentten Behramkale'ye
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Assos'un tarihî dokusu yalnızca antik kalıntılarla
            sınırlı değildir. Antik kentin içinde gelişen
            Behramkale Köyü, taş evleri, dar sokakları ve
            tarihî yapılarıyla bölgenin kültürel mirasını
            yaşatmaktadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Köyde Osmanlı döneminden kalan Hüdavendigar
            Camii ve tarihî köprü gibi yapılar da
            görülebilir. Böylece Assos ziyaretinde farklı
            dönemlere ait mimari ve kültürel izleri
            bir arada keşfetmek mümkündür.
          </p>

          {/* GÖRÜLEBİLECEKLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyarette neler görülebilir?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Athena Tapınağı",
                "Akropolün en yüksek noktasında bulunan, Arkaik Dönem'e ait etkileyici tapınak kalıntıları.",
              ],
              [
                "Antik Tiyatro",
                "Yamaç üzerine kurulan ve kentin sosyal yaşamına ışık tutan antik tiyatro.",
              ],
              [
                "Agora ve Stoalar",
                "Antik kentin ticaret ve kamusal yaşamının merkezi olan yapı kalıntıları.",
              ],
              [
                "Şehir Surları",
                "Antik kenti çevreleyen ve savunma mimarisini yansıtan surlar.",
              ],
              [
                "Antik Liman",
                "Deniz ticaretinin izlerini taşıyan tarihî liman ve çevresindeki yapılar.",
              ],
              [
                "Nekropol",
                "Assos'un mezar geleneklerini ve ünlü andezit lahitlerini tanıtan antik mezarlık alanı.",
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
            Assos'taki ilk bilimsel arkeolojik kazılar
            1881-1883 yılları arasında Amerikalı arkeologlar
            tarafından gerçekleştirilmiştir. Bu çalışmalar
            sırasında Athena Tapınağı ve kentin farklı
            bölümlerinde önemli buluntular ortaya çıkarılmıştır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Daha sonraki yıllarda farklı ekipler tarafından
            yürütülen araştırmalar, antik kentin tarihini,
            mimarisini ve günlük yaşamını daha iyi anlamamızı
            sağlamıştır. Assos'ta arkeolojik araştırmalar
            günümüzde de devam etmektedir.
          </p>

          {/* ZİYARET BİLGİSİ */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyaret etmeden önce
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Assos Antik Kenti eğimli ve taşlık bir araziye
            yayıldığı için rahat yürüyüş ayakkabıları
            tercih etmenizi öneririz. Özellikle yaz
            aylarında güneşten korunmak ve yanınızda
            su bulundurmak faydalı olacaktır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Athena Tapınağı, antik tiyatro ve liman
            çevresini gezmek için yeterli zaman ayırın.
            Ziyaret saatleri ve giriş koşulları dönemsel
            olarak değişebileceğinden yola çıkmadan önce
            güncel resmî bilgileri kontrol edin.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Kültür ve Turizm Müdürlüğü
                </a>
                <span>
                  {" "}· Assos ve Çanakkale kültür mirası hakkında resmî bilgiler.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  T.C. Kültür ve Turizm Bakanlığı – Kültür Portalı
                </a>
                <span>
                  {" "}· Assos'un tarihî ve kültürel özellikleri.
                </span>
              </li>

              <li>
                <a
                  href="https://kvmgm.ktb.gov.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Varlıkları ve Müzeler Genel Müdürlüğü
                </a>
                <span>
                  {" "}· Assos arkeolojik alanı ve kültürel miras bilgileri.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* KONUM VE ULAŞIM */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Konum ve ulaşım</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Assos Antik Kenti, Çanakkale'nin Ayvacık
            ilçesine bağlı Behramkale Köyü'nde yer alır.
            Ege Denizi'ne hâkim konumuyla dikkat çeken
            antik kent, bölgenin önemli tarihî
            ve turistik noktalarından biridir.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Assos+Antik+Kenti+Behramkale+Ayvacik+Canakkale"
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
              Assos'a nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Assos, Ayvacık ilçesine bağlı Behramkale
              Köyü'nde bulunur. Geyikli'den Ezine ve
              Ayvacık yönüne ilerleyerek Behramkale'ye
              ulaşabilirsiniz. Yolculuğunuzu önceden
              planlayabilirsiniz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Assos+Antik+Kenti%2C+Behramkale%2C+Ayvacik&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Assos Antik Kenti haritası"
              src="https://maps.google.com/maps?q=Assos%20Antik%20Kenti%2C%20Behramkale%2C%20Ayvacik%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Assos Antik Kenti · Behramkale
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Assos+Antik+Kenti+Behramkale+Ayvacik+Canakkale"
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
