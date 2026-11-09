
import Link from "next/link";

export const metadata = {
  title: "Kaz Dağları | Geyikli'yi Keşfet",
  description:
    "Kaz Dağları'nın doğal güzellikleri, Ayazma, şelaleleri, kanyonları ve mitolojik geçmişi.",
};

export default function KazDaglariPage() {
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
            Kaz <span className="text-cyan-400">Dağları</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Antik çağların İda Dağı... Bin pınarı, sık
            ormanları, şelaleleri ve efsaneleriyle
            Çanakkale ile Balıkesir arasında uzanan
            eşsiz bir doğa coğrafyası.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Çanakkale – Balıkesir
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🌲 Millî Park
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏔️ İda Dağı
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kaz-daglari/kaz-daglari-genel.jpg"
            alt="Kaz Dağları'nın ormanları ve doğal manzarası"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="p-4"><div className="flex flex-wrap items-center justify-between gap-3 p-4">
  <span className="text-sm text-gray-300">
    Kaz Dağları · İda Dağı
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
            <span className="text-sm text-gray-300">
             
            </span>
          </div>
        </div>
      </section>

      {/* TARİHÇE VE DOĞAL ÖZELLİKLER */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            BİN PINARLI İDA
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Efsanelerin ve doğanın buluştuğu dağ
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Kaz Dağları, Biga Yarımadası'nın güneyinde,
            Çanakkale ve Balıkesir illerine yayılan
            geniş bir dağlık bölgedir. Antik çağlarda
            İda Dağı olarak bilinen bu coğrafya;
            ormanları, dereleri, vadileri ve zengin
            bitki örtüsüyle dikkat çeker.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kaz Dağları yalnızca doğal güzellikleriyle
            değil, binlerce yıldır anlatılan mitolojik
            hikâyeleriyle de tanınır. Homeros'un
            İlyada Destanı'nda İda Dağı'ndan söz edilir.
            Dağ, antik Troas dünyasının önemli
            mitolojik mekânlarından biridir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Mitolojide İda Dağı
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Yunan mitolojisinde İda Dağı, tanrıların
            hikâyeleriyle anılır. En bilinen anlatılardan
            biri, Afrodit, Hera ve Athena arasında
            gerçekleştiğine inanılan güzellik yarışmasıdır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Efsaneye göre yarışmanın hakemi, Troya
            Kralı Priamos'un oğlu Paris'tir. Üç tanrıça
            Paris'in karşısına çıkar ve ona farklı
            armağanlar vaat eder. Paris, en güzel
            tanrıça olarak Afrodit'i seçer. Bu karar,
            mitolojik anlatıda Troya Savaşı'na uzanan
            olayların başlangıcı olarak kabul edilir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu anlatı tarihsel bir olayın kanıtı değil,
            İda Dağı'nın antik mitolojideki yerini
            gösteren önemli bir efsanedir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kaz Dağları'nın doğal zenginliği
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kaz Dağları, farklı yükseltileri ve iklim
            özellikleri sayesinde zengin bir bitki
            çeşitliliğine sahiptir. Ormanlık alanlarda
            karaçam, kayın ve çeşitli ağaç türleri
            görülür. Bölge, özellikle kendine özgü
            Kazdağı göknarıyla tanınır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kazdağı göknarı, bu coğrafyanın önemli
            doğal değerlerinden biridir. Kaz Dağları'na
            özgü bitki türleri ve orman ekosistemi,
            bölgenin korunması gereken en önemli
            zenginlikleri arasında yer alır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Dağlık alanlardan doğan dereler, kaynaklar
            ve şelaleler de Kaz Dağları'nın doğal
            görünümünü tamamlar.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Çanakkale tarafı: Bayramiç ve Ayazma
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kaz Dağları'nın Çanakkale tarafında
            Bayramiç ilçesi ve Evciler Köyü çevresi
            önemli doğa gezi noktalarına ev sahipliği
            yapar. Bu bölgenin en bilinen noktalarından
            biri Ayazma Mesire Yeri'dir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Evciler Köyü'nün yaklaşık 5 kilometre
            ilerisinde bulunan Ayazma, su kaynakları
            ve yeşil doğasıyla tanınır. Özellikle yaz
            aylarında serinlemek ve doğayla vakit
            geçirmek isteyenlerin tercih ettiği
            yerlerden biridir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Geyikli ve Ezine çevresinden Kaz Dağları'nı
            keşfetmek isteyenler için Bayramiç ve
            Ayazma tarafı da değerlendirilebilecek
            gezi noktaları arasındadır.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Balıkesir tarafı: Millî Park ve şelaleler
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kazdağı Millî Parkı, Balıkesir'in Edremit
            ilçesi sınırlarında yer alır. 17 Nisan
            1993 tarihinde millî park ilan edilen
            alan; ormanları, kanyonları, su kaynakları
            ve biyolojik çeşitliliğiyle öne çıkar.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Millî park içerisinde en çok bilinen
            doğal gezi noktalarından bazıları
            Sütüven Şelalesi, Hasanboğuldu Göleti,
            Pınarbaşı ve Şahindere Kanyonu'dur.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Sütüven Şelalesi, suyun kayalıklar
            arasından döküldüğü doğal manzarasıyla
            dikkat çeker. Yakınındaki Hasanboğuldu
            Göleti ise doğayla iç içe vakit geçirmek
            isteyenlerin uğrak noktalarındandır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Şahindere Kanyonu, derin vadileri ve
            etkileyici manzarasıyla bölgenin dikkat
            çeken doğal oluşumlarından biridir.
            Kanyon çevresinde belirlenmiş ziyaret
            noktaları ve cam seyir terası bulunur.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Sarıkız Efsanesi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kaz Dağları'nın en bilinen halk
            anlatılarından biri Sarıkız Efsanesi'dir.
            Yörede kuşaktan kuşağa aktarılan bu
            hikâye, Sarıkız Tepesi ile özdeşleşmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Efsanenin farklı anlatımları bulunur.
            Hikâyenin merkezinde Sarıkız'ın yaşadığı
            haksızlık, babasıyla ilişkisi ve dağlara
            uzanan yaşamı yer alır. Bu anlatı,
            Kaz Dağları'nın yalnızca doğal değil,
            kültürel hafızada da önemli bir yere
            sahip olduğunu gösterir.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Hasanboğuldu Efsanesi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Hasanboğuldu, Kaz Dağları'nın doğal
            güzellikleriyle birlikte anılan bir başka
            halk hikâyesidir. Hasan ile Emine'nin
            aşkını konu alan bu anlatı, günümüzde
            Hasanboğuldu Göleti ve çevresiyle
            özdeşleşmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Böylece bölge, ziyaretçilerine yalnızca
            şelale ve orman manzarası değil,
            kuşaktan kuşağa aktarılan hikâyeler
            de sunar.
          </p>

          {/* GEZİ NOKTALARI */}
          <h2 className="mt-12 text-2xl font-bold">
            Kaz Dağları'nda görülecek yerler
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Ayazma",
                "Bayramiç Evciler Köyü yakınlarında, su kaynakları ve yeşil doğasıyla bilinen mesire alanı.",
              ],
              [
                "Sütüven Şelalesi",
                "Kazdağı Millî Parkı içindeki etkileyici şelale ve doğal çevresi.",
              ],
              [
                "Hasanboğuldu Göleti",
                "Doğal manzarası ve yöresel efsanesiyle tanınan gölet.",
              ],
              [
                "Şahindere Kanyonu",
                "Derin vadileri ve seyir noktalarıyla dikkat çeken doğal oluşum.",
              ],
              [
                "Pınarbaşı",
                "Orman ve kaynak sularının bir arada bulunduğu günübirlik kullanım alanı.",
              ],
              [
                "Sarıkız Tepesi",
                "Kaz Dağları'nın tanınmış zirve noktalarından ve Sarıkız Efsanesi'nin merkezlerinden biri.",
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
            Kaz Dağları oldukça geniş bir coğrafyaya
            yayıldığı için gezi planı yaparken
            ziyaret etmek istediğiniz noktayı
            önceden belirlemeniz faydalı olacaktır.
            Bayramiç-Ayazma ile Edremit tarafındaki
            millî park noktaları farklı güzergâhlardadır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Millî park içerisinde bazı alanlara
            girişler kontrol noktalarından sağlanır.
            Bazı güzergâhlarda alan kılavuzu eşliğinde
            hareket edilmesi gerekir. Yola çıkmadan
            önce güncel giriş koşullarını ve ziyaret
            saatlerini Doğa Koruma ve Millî Parklar
            yetkililerinden kontrol edin.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Doğal alanlarda ateş yakmamak, çöpleri
            geride bırakmamak, bitki ve canlılara
            zarar vermemek Kaz Dağları'nın korunması
            için önemlidir.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70575/kazdagi-ida-dagi-bayramic.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Kültür ve Turizm Müdürlüğü – Kaz Dağı
                </a>
                <span>
                  {" "}· Bayramiç, Ayazma ve İda Dağı'nın mitolojik geçmişi.
                </span>
              </li>

              <li>
                <a
                  href="https://ekotaban.tarimorman.gov.tr/alan/54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Doğa Turizmi – Kazdağı Millî Parkı
                </a>
                <span>
                  {" "}· Millî parkın doğal değerleri, giriş noktaları ve ziyaret bilgileri.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/turkiye/balikesir/gezilecekyer/kaz-dagi-da-dagi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Portalı – Kazdağı Millî Parkı
                </a>
                <span>
                  {" "}· Sütüven, Hasanboğuldu ve Şahindere Kanyonu.
                </span>
              </li>

              <li>
                <a
                  href="https://www.canakkale.bel.tr/tr/sayfa/1127-gezi-rehberi/295-ida-kazdaglari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Belediyesi – İda / Kaz Dağları
                </a>
                <span>
                  {" "}· Kaz Dağları'nın coğrafyası ve mitolojik anlatıları.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* BİLGİ KUTUSU */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Bölge bilgisi</h2>

          <div className="mt-5 space-y-5 text-sm">
            <div>
              <p className="text-cyan-300">Diğer adı</p>
              <p className="mt-1 text-gray-300">İda Dağı</p>
            </div>

            <div>
              <p className="text-cyan-300">Konum</p>
              <p className="mt-1 text-gray-300">
                Çanakkale ve Balıkesir
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Millî Park</p>
              <p className="mt-1 text-gray-300">
                17 Nisan 1993
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Öne çıkan değerler</p>
              <p className="mt-1 leading-6 text-gray-300">
                Ormanlar, şelaleler, kanyonlar,
                endemik bitkiler ve mitoloji.
              </p>
            </div>
          </div>

          <a
            href="https://ekotaban.tarimorman.gov.tr/alan/54"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            Millî Park bilgileri ↗
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
              Kaz Dağları'na nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Kaz Dağları'nın Çanakkale tarafındaki
              Ayazma bölgesine Bayramiç ve Evciler
              Köyü üzerinden ulaşabilirsiniz.
              Balıkesir tarafındaki millî park
              güzergâhları ise Edremit, Zeytinli,
              Güre ve Altınoluk çevresinden başlar.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Ayazma+Mesire+Yeri%2C+Bayramic%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den Ayazma'ya yol tarifi ↗
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kazdagi+Milli+Parki+Edremit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Edremit tarafındaki millî parkı görüntüle ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Kaz Dağları Ayazma haritası"
              src="https://maps.google.com/maps?q=Ayazma%20Mesire%20Yeri%2C%20Bayramic%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Ayazma · Evciler · Bayramiç
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
