
import Link from "next/link";

export const metadata = {
  title: "Koçali Village",
  description:
    "Discover Koçali Village in Ezine, Çanakkale, its Byzantine Maiden's Castle, Roman granite column quarries and Ottoman heritage.",
  alternates: {
    canonical: "/en/explore/kocali",
    languages: {
      "tr-TR": "/kesfet/kocali",
      "en-US": "/en/explore/kocali",
    },
  },
};

export default function KocaliPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* HERO */}
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/en/explore" className="text-cyan-300 hover:text-white">
            ← Discover Geyikli
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            THROUGH THE LAYERS OF HISTORY
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Koçali <span className="text-cyan-400">Village</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            A cultural journey from the enormous granite
            columns of the Roman period to the Byzantine
            Maiden's Castle, and from an Ottoman fountain
            to the historic traces of the village mosque...
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ezine / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Historical heritage
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🪨 Ancient stone quarries
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kocali/kocali-genel.jpg"
            alt="Koçali Village and its surroundings"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Koçali Village · Ezine · Çanakkale
            </span>

            <a
              href="https://www.instagram.com/ery_photography_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Photo: @ery_photography_ ↗
            </a>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            FOLLOWING STONE AND HISTORY
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Koçali: One of the historic villages of Ezine
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Koçali is a village in the Ezine district of
            Çanakkale. With its historical remains, ancient
            stone quarries and traditional village character,
            it holds a distinctive place in the cultural
            heritage of the region.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Traces of different historical periods can be
            found around the village. The granite column
            quarries used during the Roman period and
            Maiden's Castle, dating to the Byzantine period,
            are among the main structures that reveal
            Koçali's historical importance.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Enormous granite columns from the Roman period
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of Koçali's most remarkable historical
            features is the ancient column quarry located
            in the Gözkaya area. Registered in the
            Çanakkale Cultural Inventory as the Koçali
            Column Quarries, the site provides valuable
            information about Roman-period stoneworking.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            According to the cultural inventory, granite
            columns can be found here, separated from the
            bedrock and left in a worked state. The columns
            are approximately 11.5 metres long and about
            1.40 metres in diameter.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Partially worked architectural pieces can
            also be seen in the surrounding area. These
            remains indicate that stone was not only
            extracted in antiquity but also shaped
            directly at the quarry.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Assessments in ancient sources and the
            cultural inventory suggest that columns
            produced in these quarries were exported
            to Rome. Some completed columns are thought
            to have remained at the quarry, possibly
            because they could not be shipped for
            an unknown reason.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            This site is important for understanding
            how stone was extracted, processed and
            transported to distant centres in antiquity.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Maiden's Castle: A historic Byzantine structure
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Approximately two kilometres east of Koçali
            Village, in the Kızkalesi area between Koçali
            and Yavaşlar villages, there are the remains
            of a historic castle.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Registered in the Çanakkale Cultural Inventory
            as Koçali Village Maiden's Castle, the
            structure is dated to the Byzantine period.
            It stands on a high, rocky hill overlooking
            the surrounding landscape, approximately
            three kilometres north of Neandria.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Remains of defensive walls and towers can
            be seen on the eastern and northern sides
            of the castle. Inside, there are traces of
            vaulted structures, house foundations,
            a cistern and storage areas.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Inventory records indicate that the castle
            entrance was accessed through a gate flanked
            by two towers. Traces of structures built
            on terraces can also be found on the western
            slopes.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The castle may be the Astritzion Castle
            mentioned during the visit of Byzantine
            Emperor Theodore II to the Troad region
            in the mid-13th century. This identification
            is a historical research proposal rather
            than a confirmed fact.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Due to its location, the castle was built
            at a strategic point suitable for controlling
            ancient road networks and routes connecting
            the coast with inland areas.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Koçali Village Mosque: A 19th-century building
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Koçali Village Mosque is another historic
            structure in the village. According to the
            Cultural Inventory records, it is an Ottoman
            period building constructed in the 19th century.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The mosque has a rectangular plan, masonry
            construction and a wooden hipped roof.
            Its interior features painted decorations
            and calligraphic inscriptions.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            According to the inscription on the minaret,
            the mosque was built in Hijri 1280, corresponding
            to 1863 AD. The inscription above the entrance
            states that it was renovated in Shawwal of
            Hijri 1304, corresponding to 1887 AD.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The mosque was officially registered by
            the Çanakkale Regional Board for the
            Conservation of Cultural Heritage on
            30 January 2020.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The historic stone fountain of the village
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Another registered Ottoman-period structure
            in Koçali is the village fountain. This
            single-sided street fountain, with one tap,
            attracts attention through its simple
            stone craftsmanship.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The arched upper section of the fountain
            is carved from a single piece of stone.
            Dated to the 19th century in the Cultural
            Inventory, the structure was registered
            on 30 January 2020.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The historical landscape around Koçali
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The area around Koçali is connected to
            the ancient settlement and transportation
            networks of the Troad region. Important
            historical centres such as the Ancient
            City of Neandria and Alexandria Troas
            are located nearby.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            This landscape brings together traces
            from different periods, stretching from
            antiquity to the Ottoman era. Koçali is
            an important part of this wider historical
            setting.
          </p>

          {/* PLACES TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            Historical places to see in and around Koçali
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Maiden's Castle",
                "A Byzantine-period castle with remains of walls, towers, a cistern and other structures.",
              ],
              [
                "Ancient Column Quarries",
                "The Gözkaya area where granite columns were extracted and worked during the Roman period.",
              ],
              [
                "Koçali Village Mosque",
                "An Ottoman-period mosque built in 1863 and renovated in 1887, according to its inscriptions.",
              ],
              [
                "Historic Stone Fountain",
                "A village fountain dating to the 19th century, with a single tap and stone arch.",
              ],
              [
                "Ancient City of Neandria",
                "One of the important ancient settlements in the historical landscape around Koçali.",
              ],
              [
                "Alexandria Troas",
                "An ancient settlement that was one of the important harbour cities of the Troad region.",
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
            Some historical sites around Koçali are
            located in open countryside and along
            rural routes. It is important to check
            road and terrain conditions before
            visiting Maiden's Castle and the
            ancient column quarries.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Maiden's Castle and the ancient stone
            quarries are archaeological sites.
            Visitors should avoid damaging the
            remains, moving stones and leaving
            rubbish behind.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Unauthorised excavation and the removal
            of stones or artefacts from protected
            sites are prohibited. Visitors must
            follow the existing conservation and
            access regulations.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.com.tr/assets/upload/dosyalar/canakkale-kultur-envanteri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Cultural Inventory – Musa Tombul, 2015
                </a>
                <span>
                  {" "}· Records of Koçali Column Quarries and Koçali Village Maiden's Castle.
                </span>
              </li>

              <li>
                <a
                  href="https://kulturenvanteri.com/yer/kocali-koyu-camii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Cultural Inventory – Koçali Village Mosque
                </a>
                <span>
                  {" "}· Inscriptions, historical features and registration details.
                </span>
              </li>

              <li>
                <a
                  href="https://kulturenvanteri.com/yer/cesme-kocali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Cultural Inventory – Fountain, Koçali
                </a>
                <span>
                  {" "}· Architectural features and historical record of the village fountain.
                </span>
              </li>

              <li>
                <a
                  href="https://ezine.meb.gov.tr/www/ilcemiz-ezine/icerik/408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Ezine District Directorate of National Education – Our District
                </a>
                <span>
                  {" "}· Information about Koçali and Kestanbol ancient column quarries.
                </span>
              </li>

              <li>
                <a
                  href="https://korumakurullari.ktb.gov.tr/Eklenti/119637%2Ccanakkale-ili-ezine-ilcesi-kocali-koyu-698-parsele-ilis-.pdf?0="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Regional Board for the Conservation of Cultural Heritage – 2023 decision
                </a>
                <span>
                  {" "}· Information about a registered cistern, pool and structure in Koçali.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* INFORMATION BOX */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Village information</h2>

          <div className="mt-5 space-y-5 text-sm">
            <div>
              <p className="text-cyan-300">Province</p>
              <p className="mt-1 text-gray-300">Çanakkale</p>
            </div>

            <div>
              <p className="text-cyan-300">District</p>
              <p className="mt-1 text-gray-300">Ezine</p>
            </div>

            <div>
              <p className="text-cyan-300">Key historical sites</p>
              <p className="mt-1 leading-6 text-gray-300">
                Maiden's Castle, ancient granite column
                quarries, village mosque and historic fountain.
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Historical periods</p>
              <p className="mt-1 text-gray-300">
                Roman, Byzantine and Ottoman.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Ko%C3%A7ali+K%C3%B6y%C3%BC+Ezine+%C3%87anakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            View village on map ↗
          </a>
        </aside>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-2xl border border-cyan-900 bg-[#0a263b] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-400">
              PLAN YOUR VISIT
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How to get to Koçali Village
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Koçali Village is located in the Ezine
              district. Before setting out to explore
              the historical sites around the village,
              we recommend checking your route on a map.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Ko%C3%A7ali+K%C3%B6y%C3%BC%2C+Ezine%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli ↗
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Ko%C3%A7ali+K%C3%B6y%C3%BC+K%C4%B1z+Kalesi+Ezine"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Search for Maiden's Castle ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of Koçali Village"
              src="https://maps.google.com/maps?q=Ko%C3%A7ali%20K%C3%B6y%C3%BC%2C%20Ezine%2C%20%C3%87anakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Koçali Village · Ezine · Çanakkale
              </p>
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
