
import Link from "next/link";

export const metadata = {
  title: "Truva Antik Kenti | Geyikli'yi Keşfet",
  description:
    "Truva Antik Kenti'nin tarihi, dokuz arkeolojik katmanı, Troya Savaşı, Truva Atı ve ziyaret rehberi.",
};

export default function TruvaPage() {
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
            Truva <span className="text-cyan-400">Antik Kenti</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Homeros'un İlyada Destanı'yla ölümsüzleşen,
            binlerce yıllık tarihi boyunca birçok uygarlığa
            ev sahipliği yapan efsanevi kent. Mitoloji,
            arkeoloji ve tarihin buluştuğu Troya.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Tevfikiye / Merkez
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Tunç Çağı'ndan Roma'ya
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🌍 UNESCO Dünya Mirası · 1998
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/truva/truva-genel.jpg"
            alt="Truva Antik Kenti arkeolojik alanı"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="p-4">
            <span className="text-sm text-gray-300">
              Truva Antik Kenti · Tevfikiye
            </span>
          </div>
        </div>
      </section>

      {/* TARİHÇE */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            EFSANELERİN VE UYGARLIKLARIN ŞEHRİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Binlerce yıllık geçmişe sahip efsanevi kent
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Truva Antik Kenti, Çanakkale'nin merkez ilçesine
            bağlı Tevfikiye Köyü yakınlarında, Hisarlık
            olarak bilinen höyük üzerinde yer alır. Anadolu,
            Ege ve Balkanlar arasındaki önemli geçiş
            noktalarından birinde bulunan kent, tarih
            boyunca ticaret ve kültürel ilişkiler açısından
            önemli bir konuma sahip olmuştur.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Arkeolojik araştırmalar, Truva'daki ilk yerleşimin
            yaklaşık MÖ 3000 yıllarına, Erken Tunç Çağı'na
            uzandığını göstermektedir. Aynı alanda farklı
            dönemlerde yeni kentler kurulmuş, eski yapıların
            üzerine yenileri inşa edilmiştir. Bu nedenle
            Truva, üst üste oluşmuş arkeolojik katmanlarıyla
            dünyanın en önemli tarihî alanlarından biridir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Dokuz kent katmanı
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Truva'da yapılan kazılar sonucunda dokuz ana
            yerleşim katmanı tanımlanmıştır. Bu katmanlar,
            yaklaşık 3.000 yıldan fazla bir süre boyunca
            aynı bölgede gelişen farklı uygarlıkların
            izlerini taşır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            En erken yerleşim Troya I olarak adlandırılır
            ve MÖ 3000-2500 yıllarına tarihlenir. Troya II
            döneminde surlar, büyük konutlar ve rampalı
            giriş gibi savunma yapıları dikkat çeker.
            Troya VI ve VII dönemleri ise kentin
            gelişmiş surları ve yerleşim düzeniyle öne çıkar.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Daha sonraki dönemlerde Yunan ve Roma
            yerleşimleri de aynı alanda gelişmiştir.
            Böylece Truva, yalnızca tek bir dönemin değil,
            binlerce yıl boyunca farklı toplumların
            yaşadığı çok katmanlı bir tarih alanına
            dönüşmüştür.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Homeros ve Troya Savaşı
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Truva'nın dünya çapında tanınmasında Homeros'un
            İlyada Destanı önemli rol oynar. Destanda,
            Akhalar ile Truvalılar arasında yaşanan büyük
            savaş anlatılır. Hikâyenin merkezinde Troya
            Kralı Priamos'un oğlu Paris ve Sparta Kralı
            Menelaos'un eşi Helena yer alır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Efsaneye göre Paris'in Helena'yı Troya'ya
            götürmesi üzerine Akha orduları kenti kuşatır.
            Yıllarca sürdüğü anlatılan savaş, antik
            dünyanın en tanınmış mitolojik hikâyelerinden
            biri hâline gelmiştir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            İlyada Destanı tarihî bir belge değil,
            mitolojik ve edebî bir eserdir. Arkeolojik
            araştırmalar Troya'daki savaş ve yıkım
            izlerini incelese de destandaki bütün
            olayların tarihsel olarak gerçekleştiği
            kesin biçimde kanıtlanmış değildir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Truva Atı efsanesi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Troya Savaşı anlatısının en bilinen unsurlarından
            biri ahşap attır. Efsaneye göre Akhalar,
            savaşı sona erdirmek için büyük bir tahta at
            hazırlamış ve askerlerini bu atın içine
            saklamıştır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Truvalılar atı kentin içine aldıktan sonra
            gece askerlerin dışarı çıktığı ve kentin
            ele geçirildiği anlatılır. Truva Atı,
            günümüzde kurnazlık ve savaş stratejisinin
            simgelerinden biri olarak kabul edilir.
            Ancak arkeolojik alanda sergilenen ahşap at,
            efsaneyi temsil eden modern bir yapıdır;
            antik döneme ait gerçek bir savaş aracı
            olarak değerlendirilmemelidir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Truva'nın keşfi ve kazılar
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Truva'nın arkeolojik açıdan tanınmasında
            Heinrich Schliemann'ın 1870'li yıllarda
            başlattığı kazılar önemli bir dönüm noktasıdır.
            Daha sonra Wilhelm Dörpfeld ve Carl
            Blegen gibi araştırmacılar da alanda
            çalışmalar yürütmüştür.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Bu kazılar, aynı yerde farklı dönemlere
            ait kentlerin üst üste kurulduğunu ortaya
            çıkarmıştır. İlk dönem kazılarında
            uygulanan yöntemler günümüz arkeoloji
            anlayışına göre eleştirilse de Truva'nın
            bilim dünyasındaki öneminin anlaşılmasında
            büyük rol oynamıştır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Günümüzde de bilimsel kazı ve araştırmalar
            devam etmektedir. Çalışmalar, kentin farklı
            dönemlerini, yerleşim düzenini ve çevre
            bölgelerle ilişkilerini daha ayrıntılı
            biçimde anlamamıza yardımcı olmaktadır.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            UNESCO Dünya Mirası
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Truva Arkeolojik Alanı, taşıdığı tarihî,
            kültürel ve arkeolojik değer nedeniyle
            1998 yılında UNESCO Dünya Miras Listesi'ne
            alınmıştır. Alan, Anadolu ile Ege ve
            Balkan dünyası arasındaki binlerce yıllık
            ilişkilerin anlaşılması bakımından
            önemli bir yere sahiptir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Truva'nın önemi yalnızca Homeros'un
            destanıyla sınırlı değildir. Farklı
            uygarlıkların aynı coğrafyada bıraktığı
            mimari, ticari ve kültürel izler,
            burayı dünya arkeolojisinin önemli
            araştırma alanlarından biri yapmaktadır.
          </p>

          {/* GÖRÜLEBİLECEKLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyarette neler görülebilir?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Truva Atı",
                "Troya Savaşı efsanesini temsil eden ve ziyaretçilerin en çok ilgi gösterdiği ahşap at.",
              ],
              [
                "Savunma Surları",
                "Farklı dönemlerde inşa edilen, kentin savunma mimarisini gösteren sur kalıntıları.",
              ],
              [
                "Rampalı Giriş",
                "Troya II dönemine ait, erken dönem savunma ve mimari anlayışını yansıtan giriş yolu.",
              ],
              [
                "Megaron Yapıları",
                "Erken Tunç Çağı yerleşimlerinde görülen büyük yapıların temel ve kalıntıları.",
              ],
              [
                "Athena Tapınağı",
                "Helenistik ve Roma dönemlerinde kutsal alan olarak kullanılan tapınak bölgesi.",
              ],
              [
                "Roma Dönemi Yapıları",
                "Antik kentin daha geç dönemlerdeki kamusal ve sosyal yaşamına ait kalıntılar.",
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

          {/* TROYA MÜZESİ */}
          <h2 className="mt-12 text-2xl font-bold">
            Troya Müzesi
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Truva Antik Kenti'nin girişinde, Tevfikiye
            Köyü sınırları içerisinde Troya Müzesi
            yer alır. 2018 yılında ziyarete açılan
            müze, Troya ve Troas bölgesinin arkeolojik
            geçmişini farklı sergi alanlarıyla anlatır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Müzede kazılarda ortaya çıkarılan eserler,
            heykeller, mezar taşları ve farklı dönemlere
            ait buluntular sergilenmektedir. Troya'nın
            tarihini ören yeri gezisiyle birlikte
            daha kapsamlı anlamak isteyenler için
            müze ziyareti de önemlidir.
          </p>

          {/* ZİYARET BİLGİSİ */}
          <h2 className="mt-12 text-2xl font-bold">
            Ziyaret etmeden önce
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Truva Antik Kenti geniş bir arkeolojik
            alana yayılmıştır. Alanı rahatça gezebilmek
            için yürüyüşe uygun ayakkabılar tercih
            etmenizi öneririz. Özellikle yaz aylarında
            güneşten korunmak ve yanınızda su
            bulundurmak faydalı olacaktır.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Antik kent gezisini Troya Müzesi ziyaretiyle
            birleştirebilirsiniz. Ziyaret saatleri,
            giriş koşulları ve güncel uygulamalar
            değişebileceğinden yola çıkmadan önce
            resmî müze sayfalarını kontrol edin.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://whc.unesco.org/en/list/849/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  UNESCO – Archaeological Site of Troy
                </a>
                <span>
                  {" "}· Truva'nın Dünya Mirası statüsü ve evrensel değeri.
                </span>
              </li>

              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70511/troya-oren-yeri.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Kültür ve Turizm Müdürlüğü – Troya Ören Yeri
                </a>
                <span>
                  {" "}· Kent katmanları ve ören yerinde görülebilecek kalıntılar.
                </span>
              </li>

              <li>
                <a
                  href="https://muze.gov.tr/muze-detay?DistId=TRV&SectionId=TRV01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  T.C. Kültür ve Turizm Bakanlığı – Troya Örenyeri
                </a>
                <span>
                  {" "}· Arkeolojik alanın tarihi ve ziyaret bilgileri.
                </span>
              </li>

              <li>
                <a
                  href="https://muze.gov.tr/muze-detay?DistId=TRO&SectionId=TRO01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Troya Müzesi – Resmî Müze Sayfası
                </a>
                <span>
                  {" "}· Müze koleksiyonu, adres ve ziyaret bilgileri.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/portal/truvaantikkenti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Kültür Portalı – Troya Antik Kenti
                </a>
                <span>
                  {" "}· Troya'nın mitolojik ve arkeolojik geçmişi.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* KONUM VE ULAŞIM */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Konum ve ulaşım</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Truva Antik Kenti, Çanakkale merkez ilçesine
            bağlı Tevfikiye Köyü yakınlarında, Hisarlık
            mevkiinde yer alır. Antik kent, Troya
            Müzesi'nin de bulunduğu arkeolojik alan
            içerisinde ziyaret edilebilir.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Troya+Antik+Kenti+Tevfikiye+Canakkale"
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
              Truva'ya nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Truva Antik Kenti, Çanakkale merkezinin
              güneyinde, Tevfikiye Köyü yakınlarında
              bulunur. Geyikli'den Ezine ve Çanakkale
              yönüne ilerleyerek Tevfikiye'ye
              ulaşabilirsiniz. Yolculuğunuzu önceden
              planlayabilirsiniz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Troya+Antik+Kenti%2C+Tevfikiye%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Truva Antik Kenti haritası"
              src="https://maps.google.com/maps?q=Troya%20Antik%20Kenti%2C%20Tevfikiye%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Truva Antik Kenti · Tevfikiye
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Troya+Antik+Kenti+Tevfikiye+Canakkale"
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
