
import Link from "next/link";

export const metadata = {
  title: "Neandria Ancient City | Discover Geyikli",
  description:
    "Explore the history of Neandria Ancient City, Mount Çığrı, its ancient walls and how to get there from Geyikli.",
  alternates: {
    canonical: "/en/explore/neandria",
    languages: {
      "tr-TR": "/kesfet/neandria",
      "en-US": "/en/explore/neandria",
    },
  },
};

export default function NeandriaPage() {
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
            Neandria <span className="text-cyan-400">Ancient City</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Located at the summit of Mount Çığrı, Neandria is one of the
            important ancient settlements of the Troad region, with a history
            stretching back thousands of years.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ezine / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Ancient City
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/neandria/neandria-genel.png"
            alt="Illustrative landscape image of Neandria"
            className="h-[280px] w-full object-cover md:h-[480px]"
          />
          <div className="flex flex-wrap justify-between gap-2 p-4">
            <span className="text-sm text-gray-300">
              Neandria Ancient City · Mount Çığrı
            </span>
            <span className="text-xs text-gray-500">
              Illustrative image
            </span>
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
            A city of history at the summit of Mount Çığrı
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Neandria is located on Mount Çığrı, between the villages of
            Kayacık, Yavaşlar and Koçeli, in the Ezine district of Çanakkale.
            Situated approximately 530 metres above sea level, its elevated
            position gave the ancient city a commanding view over the Troad
            region. Even today, the extensive landscape surrounding the
            mountaintop settlement makes it a remarkable place.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The known history of settlement at Neandria dates back at least
            to the 7th century BC. Archaeological remains from the Archaic
            Period indicate that the city was an important settlement from
            an early date. Neandria developed during the 6th century BC and
            expanded over the following centuries, eventually becoming a
            settlement with an extensive defensive system.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            A city surrounded by stone walls
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Among Neandria's most striking remains are the defensive walls
            extending along the slopes and summit of Mount Çığrı. According
            to information in the Çanakkale Provincial Cultural Inventory,
            the city's earlier wall circuit was approximately 1,500 metres
            long. These first defensive walls were built using polygonal
            stone masonry.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            As the city expanded during the 5th and 4th centuries BC, a
            second defensive system was constructed. Approximately 3,200
            metres in length, this system consists of impressive stone walls,
            some sections of which can still be seen today. The wall system
            had a total of 11 entrances, including four main gates. The
            western and southern gates were among the city's most important
            entrances.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The large andesite stone blocks and the emplekton, or
            box-wall construction technique, used in the fortifications
            demonstrate the quality of ancient stone craftsmanship. This
            defensive system is one of the most important indications that
            Neandria was not simply a small settlement on a high hill, but
            a planned and well-defended city.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Life within the ancient city
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Neandria is also notable for its grid-plan urban layout.
            Remains of foundations belonging to houses, public buildings
            and sacred areas can be found within the settlement. Some
            structures have survived only at foundation level. These
            remains offer important clues about the street layout and
            everyday life in the ancient city.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            One of the city's archaeologically significant structures is
            the Temple of Apollo. According to the Çanakkale Provincial
            Cultural Inventory, the temple is located approximately 200
            metres east of the western gate. This sacred area provides
            important evidence of religious life in Neandria.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            From Neandria to Alexandria Troas
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the most significant changes in Neandria's history took
            place towards the end of the 4th century BC. During the reign
            of Antigonus Monophthalmus, a new city was established in the
            Troad region, and a process began to bring together the
            populations of several nearby settlements.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Initially named Antigoneia, the new city was later renamed
            Alexandria Troas by Lysimachus. Historical accounts describe
            the relocation of the inhabitants of six cities, including
            Neandria, to this new settlement as part of a process of
            urban consolidation.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            As a result, Neandria gradually lost its former importance
            and the settlement on Mount Çığrı was eventually abandoned.
            Today, its remaining walls, gates, building foundations and
            traces of sacred areas continue to shed light on the ancient
            history of the Troad region.
          </p>

          {/* WHAT TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            What can you see in Neandria?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Ancient walls",
                "Defensive walls from different periods extending along the slopes of Mount Çığrı.",
              ],
              [
                "City gates",
                "Remains of the ancient city's entrances, particularly the western and southern gates.",
              ],
              [
                "Temple of Apollo",
                "A sacred area located approximately 200 metres east of the western gate.",
              ],
              [
                "Settlement remains",
                "Foundations of houses and other structures belonging to the city's grid-plan layout.",
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
            Neandria is located in a mountainous and rural area. Before
            visiting, we recommend checking road and terrain conditions,
            wearing comfortable walking shoes and bringing water with you.
            Please take care not to damage the stones or historical
            structures in order to help preserve the ancient remains.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.com.tr/assets/upload/dosyalar/canakkale-kultur-envanteri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Cultural Inventory – Neandria
                </a>
                <span> · Information about the location, walls, gates and Temple of Apollo.</span>
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
                <span> · Archaeological research and the historical development of the city.</span>
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
                <span> · Academic reference on the ancient city and its defensive system.</span>
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
                <span> · Archaeological study of Neandria's city walls, 2000.</span>
              </li>
            </ul>
          </div>
        </article>

        {/* LOCATION AND TRANSPORT */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Location and directions</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Mount Çığrı, between the villages of Kayacık, Yavaşlar and
            Koçeli, in the Ezine district of Çanakkale.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Neandria+Ancient+City+Canakkale"
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
              How to get to Neandria?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Neandria Ancient City is located on Mount Çığrı, between
              the villages of Kayacık, Yavaşlar and Koçeli in the Ezine
              district. A walk over uneven terrain may be necessary for
              the final part of the journey. We recommend checking road
              conditions before setting out.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Neandria+Ancient+City%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Neandria Ancient City mini map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=26.245%2C39.700%2C26.310%2C39.745&layer=mapnik&marker=39.7212%2C26.2791"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Neandria · Mount Çığrı
              </p>

              <a
                href="https://www.openstreetmap.org/?mlat=39.7212&mlon=26.2791#map=15/39.7212/26.2791"
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
