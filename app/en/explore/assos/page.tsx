
import Link from "next/link";

export const metadata = {
  title: "Ancient City of Assos",
  description:
    "Discover the history of Assos, the Temple of Athena, Aristotle, the ancient harbour and the archaeological remains of this historic city.",
  alternates: {
    canonical: "/en/explore/assos",
    languages: {
      "tr-TR": "/kesfet/assos",
      "en-US": "/en/explore/assos",
    },
  },
};

export default function AssosPage() {
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
            Ancient City of <span className="text-cyan-400">Assos</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Rising above the Aegean Sea, Assos is an ancient city
            known for its Temple of Athena, historic harbour and
            connections with the philosopher Aristotle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Behramkale / Ayvacık
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Ancient Greek city
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📜 7th century BC
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/assos/assos-genel.jpg"
            alt="The Ancient City of Assos and the Temple of Athena"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />
          <div className="p-4">
            <span className="text-sm text-gray-300">
              Ancient City of Assos · Behramkale
            </span>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            THE STORY OF THE ANCIENT CITY
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Thousands of years of history on the Aegean coast
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            The Ancient City of Assos stands on a volcanic hill
            overlooking the Aegean Sea, within the boundaries of
            Behramkale Village in the Ayvacık district of Çanakkale.
            One of the important settlements of the ancient Troad
            region, Assos attracted attention throughout history
            because of its strategic location, harbour and natural
            resources.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Archaeological finds in the region indicate that its
            settlement history reaches back to the Bronze Age.
            Ancient sources associate the city's development in the
            7th century BC with settlers arriving from the island
            of Lesbos.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            The Temple of Athena: Symbol of the city
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Located at the highest point of the Acropolis, the
            Temple of Athena was dedicated to Athena, the city's
            patron goddess. Dating to the 6th century BC, the temple
            is one of the important surviving examples of Archaic
            Doric architecture in Anatolia.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The temple is remarkable not only for its architecture
            but also for its commanding position above the Aegean
            Sea. Architectural decorations found at the site
            include reliefs depicting mythological scenes and
            animal combats.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Aristotle's years in Assos
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the most notable figures associated with Assos
            is the ancient Greek philosopher Aristotle. He arrived
            in Assos in 347 BC and lived there for approximately
            three years.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            During this period, Aristotle pursued philosophical
            studies in the city and gathered a community of
            students and thinkers around him. His years in Assos
            show that the city was an important intellectual
            centre as well as a political and commercial one.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Stone craftsmanship and the famous Assos sarcophagi
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Thanks to the volcanic stone resources in its
            surroundings, Assos developed a distinctive building
            tradition. The andesite stone used in the city is
            notable for its durability and workability.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The sarcophagi of Assos are among the best-known burial
            traditions of the ancient world. Made from andesite,
            these sarcophagi were associated in antiquity with the
            idea that the stone accelerated the decomposition of
            the body. This gave rise to the traditional description
            of them as "flesh-eating" coffins.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Assos as a harbour city
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The ancient harbour connecting the city to the sea
            played an important role in the commercial and maritime
            life of Assos. The structures around the harbour still
            preserve traces of the city's relationship with the sea.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Today, the historic harbour remains one of the most
            popular parts of Assos, with its stone buildings and
            impressive sea views.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            From the ancient city to Behramkale
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The historic character of Assos is not limited to its
            ancient ruins. Behramkale Village, which developed
            within the ancient settlement, preserves the cultural
            heritage of the area through its stone houses, narrow
            streets and historic buildings.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Visitors can also see buildings from the Ottoman
            period, including Hüdavendigar Mosque and a historic
            bridge. A visit to Assos therefore offers the chance
            to discover architectural and cultural traces from
            different periods in one place.
          </p>

          {/* WHAT TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            What can you see during your visit?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Temple of Athena",
                "Impressive temple remains from the Archaic Period, located at the highest point of the Acropolis.",
              ],
              [
                "Ancient Theatre",
                "A hillside theatre that offers insight into the social life of the ancient city.",
              ],
              [
                "Agora and Stoas",
                "The remains of structures that formed the centre of commercial and public life.",
              ],
              [
                "City Walls",
                "Fortification walls surrounding the ancient city and reflecting its defensive architecture.",
              ],
              [
                "Ancient Harbour",
                "A historic harbour and surrounding structures that preserve traces of maritime trade.",
              ],
              [
                "Necropolis",
                "An ancient burial ground that introduces visitors to Assos burial traditions and its famous andesite sarcophagi.",
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

          {/* EXCAVATIONS */}
          <h2 className="mt-12 text-2xl font-bold">
            Archaeological excavations and research
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            The first scientific archaeological excavations at
            Assos were carried out by American archaeologists
            between 1881 and 1883. During these excavations,
            important finds were uncovered at the Temple of Athena
            and in other parts of the ancient city.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Later research conducted by different teams helped
            improve our understanding of the city's history,
            architecture and daily life. Archaeological research
            at Assos continues today.
          </p>

          {/* VISITOR INFORMATION */}
          <h2 className="mt-12 text-2xl font-bold">
            Before your visit
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            The Ancient City of Assos extends across sloping and
            rocky terrain, so comfortable walking shoes are
            recommended. During the summer months, it is useful
            to protect yourself from the sun and carry drinking
            water.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Allow enough time to explore the Temple of Athena,
            the ancient theatre and the harbour area. Visiting
            hours and admission conditions may change seasonally,
            so check the latest official information before
            setting out.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Directorate of Culture and Tourism
                </a>
                <span>
                  {" "}· Official information about Assos and the cultural heritage of Çanakkale.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Republic of Türkiye Ministry of Culture and Tourism – Culture Portal
                </a>
                <span>
                  {" "}· Historical and cultural information about Assos.
                </span>
              </li>

              <li>
                <a
                  href="https://kvmgm.ktb.gov.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  General Directorate of Cultural Heritage and Museums
                </a>
                <span>
                  {" "}· Information about the archaeological site and cultural heritage of Assos.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* LOCATION */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Location and directions</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            The Ancient City of Assos is located in Behramkale
            Village, in the Ayvacık district of Çanakkale.
            Overlooking the Aegean Sea, it is one of the region's
            important historical and tourist destinations.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Assos+Antik+Kenti+Behramkale+Ayvacik+Canakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            View on map ↗
          </a>
        </aside>
      </section>

      {/* MAP AND DIRECTIONS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-2xl border border-cyan-900 bg-[#0a263b] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-400">
              PLAN YOUR VISIT
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              How to get to Assos
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Assos is located in Behramkale Village, in the
              Ayvacık district. From Geyikli, follow the direction
              of Ezine and Ayvacık to reach Behramkale. You can
              plan your journey in advance.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Assos+Antik+Kenti%2C+Behramkale%2C+Ayvacik&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of the Ancient City of Assos"
              src="https://maps.google.com/maps?q=Assos%20Antik%20Kenti%2C%20Behramkale%2C%20Ayvacik%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Ancient City of Assos · Behramkale
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Assos+Antik+Kenti+Behramkale+Ayvacik+Canakkale"
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
