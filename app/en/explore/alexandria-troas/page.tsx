
import Link from "next/link";

export const metadata = {
  title: "Alexandria Troas Ancient City | Discover Geyikli",
  description:
    "Explore the history of Alexandria Troas, its ancient harbour, the Herodes Atticus Baths and directions from Geyikli.",
  alternates: {
    canonical: "/en/explore/alexandria-troas",
    languages: {
      "tr-TR": "/kesfet/alexandria-troas",
      "en-US": "/en/explore/alexandria-troas",
    },
  },
};

export default function AlexandriaTroasPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* HERO */}
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/en/explore" className="text-cyan-300 hover:text-white">
            ← Discover Geyikli
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            A JOURNEY THROUGH HISTORY
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Alexandria Troas{" "}
            <span className="text-cyan-400">Ancient City</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Once one of the most important harbour cities in the Troad
            region. Located in Dalyan, across the coast from Bozcaada,
            this ancient city carries thousands of years of history.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Dalyan / Ezine
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Ancient Harbour City
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/alexandria-troas/alexandria-troas-genel.jpg"
            alt="Stone arch on the Dalyan coast near Alexandria Troas at night"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap justify-between gap-2 p-4">
            <span className="text-sm text-gray-300">
              Alexandria Troas Ancient City · Dalyan
            </span>

            <a
              href="https://www.instagram.com/ery_photography_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-300 hover:text-white"
            >
              Photography: @ery_photography_ ↗
            </a>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            THE STORY OF THE CITY
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            A great city rising on the shores of the Troad
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Alexandria Troas is located in the Kestanbolluk area,
            within the boundaries of Dalyan Village in the Ezine
            district of Çanakkale. Situated across the coast from
            Bozcaada, this ancient settlement became one of the
            most important cities in the Troad region for centuries
            thanks to its location and harbour.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The city was founded in 310 BC by Antigonus Monophthalmus,
            one of the generals of Alexander the Great, under the
            name Antigoneia. It was later renamed Alexandria Troas
            by Lysimachus. The establishment of the new city also
            involved bringing together the populations of smaller
            surrounding settlements.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            A harbour and trade centre during the Roman period
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas became even more important under Roman
            rule. During the reign of Emperor Augustus, it became
            a Roman colony. Its harbour made the city an important
            centre for maritime trade and transportation.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Major construction projects took place in the city,
            particularly during the reign of Emperor Hadrian.
            Aqueducts, baths and monumental buildings reflect
            this period of development. The city's extensive
            settlement area and defensive walls reveal the
            impressive scale of Alexandria Troas in antiquity.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Herodes Atticus and the great bath complex
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the most remarkable surviving structures in
            Alexandria Troas is the Herodes Atticus Baths and
            Gymnasium complex. Associated with the wealthy
            Athenian benefactor Herodes Atticus, this group
            of buildings demonstrates the city's wealth and
            architectural strength during the Roman period.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The aqueduct built to supply the city with water
            is another important achievement from this period.
            The enormous scale of the baths and their surviving
            arched sections are impressive examples of ancient
            architecture.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            The city visited by Saint Paul
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas was important not only for trade
            and architecture but also for the history of early
            Christianity. It is recorded that Saint Paul
            visited the city in the 50s AD and travelled from
            there by sea to Macedonia. This visit is one
            indication of the city's importance to different
            cultures and faiths throughout history.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            A city transformed over the centuries
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas did not completely lose its
            importance after the Roman period. It continued
            to be inhabited during the Byzantine period, and
            archaeological research has revealed traces of
            settlement extending into the Middle Ages.
            The surviving structures and excavated remains
            today are fragments of this long historical story.
          </p>

          {/* WHAT TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            What can you see in the ancient city?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Herodes Atticus Baths",
                "One of the monumental bath complexes of the Roman period, notable for its surviving arched sections.",
              ],
              [
                "Ancient Harbour",
                "The harbour area and coastal settlement that reflect the city's importance in maritime trade.",
              ],
              [
                "Theatre",
                "A structure located in the higher part of the ancient city, overlooking the surrounding landscape.",
              ],
              [
                "Stadium",
                "A large structure associated with sporting events in the ancient city.",
              ],
              [
                "Nymphaeum",
                "A monumental fountain structure and an important example of ancient water architecture.",
              ],
              [
                "City Walls and Gates",
                "Remains of the defensive system surrounding the extensive ancient settlement.",
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

          {/* VISITOR INFORMATION */}
          <h2 className="mt-12 text-2xl font-bold">
            Before your visit
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas is an extensive archaeological site.
            You may need to walk between different groups of ruins
            during your visit. We recommend wearing comfortable
            shoes and bringing water, especially in hot weather.
            Please take care not to damage the stones or ancient
            remains so that the site can be preserved.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Visiting hours and current site conditions may change.
            We recommend checking the archaeological site
            information provided by the Ministry of Culture and
            Tourism before setting out.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://muze.gov.tr/muze-detay?DistId=MRK&SectionId=CAL01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Republic of Türkiye Ministry of Culture and Tourism – Alexandria Troas
                </a>
                <span>
                  {" "}· Location, city structures and visitor information.
                </span>
              </li>

              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70513/alexandreia-troas-oren-yeri.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Directorate of Culture and Tourism – Alexandria Troas
                </a>
                <span>
                  {" "}· Ancient structures, baths, theatre and city history.
                </span>
              </li>

              <li>
                <a
                  href="https://www.hoyuk.gov.tr/tam-metin/113/tur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Erhan Öztepe – Cults and Iconography in Alexandria Troas
                </a>
                <span>
                  {" "}· Archaeological and epigraphic research.
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
                  {" "}· The city's foundation and historical development.
                </span>
              </li>

              <li>
                <a
                  href="https://www.uni-muenster.de/AsiaMinor/projekte/ehemalige_projekte_/forschungsprojekt_neandria.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  University of Münster – Neandria Research Project
                </a>
                <span>
                  {" "}· Research on Neandria and ancient settlements in the surrounding region.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* LOCATION AND DIRECTIONS */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Location and directions</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Alexandria Troas Ancient City is located in the
            Kestanbolluk area, within the boundaries of Dalyan
            Village in the Ezine district. It lies along the
            road between Geyikli and Gülpınar.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Alexandria+Troas+Ancient+City+Dalyan+Canakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            View on map ↗
          </a>
        </aside>
      </section>

      {/* MINI MAP */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-2xl border border-cyan-900 bg-[#0a263b] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-400">
              PLAN YOUR VISIT
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How to get to Alexandria Troas?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              The ancient city is located near Dalyan Village,
              along the road from Geyikli towards Gülpınar.
              We recommend checking road conditions and
              archaeological site information before your visit.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Alexandria+Troas+Ancient+City%2C+Dalyan%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Alexandria Troas Ancient City mini map"
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
                Open larger map ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-900 px-6 py-8 text-center text-sm text-gray-500">
        Balıkçı Halil Geyikli · Discover Geyikli
      </footer>
    </main>
  );
}
