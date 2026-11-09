
import Link from "next/link";

export const metadata = {
  title: "Alexandria Troas Antik Kenti | Geyikli'yi Keşfet",
  description:
    "Alexandria Troas Antik Kenti'nin tarihi, antik limanı, Herodes Atticus Hamamı ve Geyikli'den ulaşım rehberi.",
};

export default function AlexandriaTroasPage() {
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
            Alexandria Troas{" "}
            <span className="text-cyan-400">Antik Kenti</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Bir zamanlar Troas bölgesinin en önemli liman kentlerinden biri.
            Bozcaada'nın karşı kıyısında, binlerce yıllık tarihiyle Dalyan'da.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Dalyan / Ezine
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Antik liman kenti
            </span>
          </div>
        </div>
      </section>

      {/* ANA FOTOĞRAF */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/alexandria-troas/alexandria-troas-genel.jpg"
            alt="Alexandria Troas ve Dalyan kıyısındaki taş kemer, gece çekimi"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap justify-between gap-2 p-4">
            <span className="text-sm text-gray-300">
              Alexandria Troas Antik Kenti · Dalyan
            </span>

            <a
              href="https://www.instagram.com/ery_photography_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-300 hover:text-white"
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
            KENTİN HİKÂYESİ
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Troas'ın kıyısında yükselen büyük bir kent
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Alexandria Troas, Çanakkale'nin Ezine ilçesine bağlı Dalyan
            Köyü sınırlarında, Kestanbolluk mevkiinde yer alır. Bozcaada'nın
            karşı kıyısındaki bu antik yerleşim, konumu ve limanıyla
            yüzyıllar boyunca Troas bölgesinin en önemli kentlerinden
            biri olmuştur.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kentin kuruluşu MÖ 310 yılına uzanır. Büyük İskender'in
            komutanlarından Antigonos Monophthalmos tarafından
            Antigoneia adıyla kurulan yerleşim, daha sonra Lysimakhos
            tarafından Alexandria Troas olarak yeniden adlandırılmıştır.
            Yeni kentin kuruluşunda çevredeki daha küçük yerleşimlerin
            nüfusunun bir araya getirilmesi de etkili olmuştur.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Roma döneminde bir liman ve ticaret merkezi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Roma egemenliği döneminde Alexandria Troas'ın önemi daha da
            artmıştır. İmparator Augustus döneminde Roma kolonisi hâline
            gelen kent, sahip olduğu liman sayesinde deniz ticareti ve
            ulaşım açısından önemli bir merkez olmuştur.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Özellikle İmparator Hadrianus döneminde kentte büyük imar
            faaliyetleri gerçekleştirilmiştir. Su yolları, hamamlar ve
            anıtsal yapılar bu gelişimin izlerini taşır. Kentin geniş
            yerleşim alanı ve sur sistemi, Alexandria Troas'ın antik
            çağdaki büyüklüğünü ortaya koymaktadır.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Herodes Atticus ve büyük hamam
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas'ın günümüze ulaşan en dikkat çekici
            yapılarından biri Herodes Atticus Hamamı ve Gymnasium
            kompleksidir. Atinalı zengin ve hayırsever Herodes Atticus
            ile ilişkilendirilen bu yapı topluluğu, kentin Roma
            dönemindeki zenginliğini ve mimari gücünü gösterir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Kentteki su ihtiyacını karşılamak için inşa edilen su yolu
            da bu dönemin önemli eserleri arasındadır. Hamamın büyük
            ölçüleri ve günümüze ulaşan kemerli bölümleri, antik
            mimarinin etkileyici örneklerindendir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Aziz Paulus'un ziyaret ettiği kent
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas, yalnızca ticari ve mimari açıdan değil,
            erken Hristiyanlık tarihi bakımından da önem taşır.
            Aziz Paulus'un MS 50'li yıllarda kenti ziyaret ettiği ve
            buradan deniz yoluyla Makedonya'ya geçtiği aktarılır.
            Bu ziyaret, kentin tarih boyunca farklı kültürler ve
            inançlar için taşıdığı önemi gösteren bilgilerden biridir.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Yüzyıllar boyunca değişen kent
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas, Roma döneminden sonra da önemini
            tamamen kaybetmemiştir. Bizans döneminde de yerleşim
            görmüş, arkeolojik araştırmalar kentin Orta Çağ'a kadar
            uzanan yaşam izlerini ortaya koymuştur. Bugün ayakta
            kalan yapılar ve kazılarda ortaya çıkarılan kalıntılar,
            bu uzun tarihsel sürecin parçalarını oluşturur.
          </p>

          {/* KENTTE GÖRÜLEBİLECEKLER */}
          <h2 className="mt-12 text-2xl font-bold">
            Antik kentte neler görülebilir?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Herodes Atticus Hamamı",
                "Roma döneminin anıtsal hamam yapılarından biri. Günümüze ulaşan kemerli bölümleriyle dikkat çeker.",
              ],
              [
                "Antik liman",
                "Kentin deniz ticaretindeki önemini gösteren liman alanı ve kıyı yerleşimi.",
              ],
              [
                "Tiyatro",
                "Antik kentin yüksek kesiminde yer alan, kent ve çevresine hâkim konumdaki yapı.",
              ],
              [
                "Stadyum",
                "Antik kentteki sportif etkinliklerle ilişkili büyük yapı alanı.",
              ],
              [
                "Nymphaeum",
                "Su mimarisinin önemli örneklerinden olan anıtsal çeşme yapısı.",
              ],
              [
                "Kent surları ve kapılar",
                "Geniş bir alana yayılan antik yerleşimin savunma sistemine ait kalıntılar.",
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
            Alexandria Troas geniş bir alana yayılan bir ören yeridir.
            Ziyaret sırasında farklı yapı kalıntıları arasında yürümek
            gerekebilir. Rahat ayakkabı giymenizi, özellikle sıcak
            havalarda yanınızda su bulundurmanızı öneririz. Tarihi
            yapıların korunması için taşlara ve kalıntılara zarar
            vermemeye özen gösterilmelidir.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Ziyaret saatleri ve güncel alan koşulları değişebileceğinden
            yola çıkmadan önce Kültür ve Turizm Bakanlığının ören yeri
            bilgilendirmesini kontrol etmenizi öneririz.
          </p>

          {/* KAYNAKÇA */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              Kaynakça ve ileri okuma
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://muze.gov.tr/muze-detay?DistId=MRK&SectionId=CAL01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  T.C. Kültür ve Turizm Bakanlığı – Alexandria Troas Örenyeri
                </a>
                <span>
                  {" "}· Konum, kent yapıları ve ziyaretçi bilgileri.
                </span>
              </li>

              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70513/alexandreia-troas-oren-yeri.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale İl Kültür ve Turizm Müdürlüğü – Alexandreia Troas
                </a>
                <span>
                  {" "}· Antik yapılar, hamam, tiyatro ve kent tarihi.
                </span>
              </li>

              <li>
                <a
                  href="https://www.hoyuk.gov.tr/tam-metin/113/tur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Erhan Öztepe – Alexandria Troas'taki Kültler ve İkonografileri
                </a>
                <span>
                  {" "}· Arkeolojik ve epigrafik araştırma.
                </span>
              </li>

              <li>
                <a
                  href="https://academic.oup.com/edited-volume/61673/chapter-abstract/548074847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Oxford Classical Dictionary – Alexandria Troas
                </a>
                <span>
                  {" "}· Kentin kuruluşu ve tarihsel gelişimi.
                </span>
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
                <span>
                  {" "}· Neandria ve çevredeki antik yerleşimler hakkında araştırma.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* KONUM VE ULAŞIM */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Konum ve ulaşım</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Alexandria Troas Antik Kenti, Ezine ilçesine bağlı Dalyan
            Köyü sınırlarında, Kestanbolluk mevkiinde yer alır.
            Geyikli ile Gülpınar arasındaki yol üzerindedir.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Alexandria+Troas+Ancient+City+Dalyan+Canakkale"
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
              Alexandria Troas'a nasıl gidilir?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Antik kent, Geyikli'den Gülpınar yönüne doğru ilerleyen
              yol üzerinde, Dalyan Köyü yakınlarında bulunur. Ziyaret
              öncesinde yol ve ören yeri koşullarını kontrol etmenizi
              öneririz.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Alexandria+Troas+Ancient+City%2C+Dalyan%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Geyikli'den yol tarifi al ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Alexandria Troas Antik Kenti mini haritası"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.140%2C39.735%2C26.180%2C39.765&layer=mapnik&marker=39.7487317%2C26.157815"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Alexandria Troas · Dalyan
              </p>

              <a
                href="https://www.openstreetmap.org/?mlat=39.7487317&mlon=26.157815#map=15/39.7487317/26.157815"
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
