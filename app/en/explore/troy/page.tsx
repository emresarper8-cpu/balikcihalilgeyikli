
import Link from "next/link";

export const metadata = {
  title: "Troy Ancient City | Discover Geyikli",
  description:
    "Discover the history of Troy, its nine archaeological layers, the Trojan War, the Trojan Horse and visitor information.",
  alternates: {
    canonical: "/en/explore/troy",
    languages: {
      "tr-TR": "/kesfet/truva",
      "en-US": "/en/explore/troy",
    },
  },
};

export default function TroyPage() {
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
            Troy <span className="text-cyan-400">Ancient City</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            The legendary city immortalised in Homer's Iliad, home to
            many civilisations throughout thousands of years of history.
            Troy is where mythology, archaeology and history meet.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Tevfikiye / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ From the Bronze Age to Rome
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🌍 UNESCO World Heritage · 1998
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/truva/truva-genel.jpg"
            alt="Archaeological site of Troy Ancient City"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="p-4">
            <span className="text-sm text-gray-300">
              Troy Ancient City · Tevfikiye
            </span>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            A CITY OF LEGENDS AND CIVILISATIONS
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            A legendary city with thousands of years of history
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Troy Ancient City is located on the mound known as Hisarlık,
            near Tevfikiye Village in Çanakkale. Situated at an important
            crossroads between Anatolia, the Aegean and the Balkans, the
            city held a significant position in trade and cultural
            relations throughout history.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Archaeological research indicates that the earliest settlement
            at Troy dates back to around 3000 BC, during the Early Bronze
            Age. New cities were established at the same site in different
            periods, with new structures built over older ones. For this
            reason, Troy is one of the world's most important historical
            sites, with its many successive archaeological layers.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Nine archaeological layers
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Excavations at Troy have identified nine main settlement
            layers. These layers preserve traces of different civilisations
            that developed in the same area over a period of more than
            3,000 years.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The earliest settlement is known as Troy I and dates to
            approximately 3000–2500 BC. During the Troy II period,
            defensive walls, large houses and structures such as a
            ramped entrance became prominent. Troy VI and Troy VII
            are particularly notable for their developed fortifications
            and settlement layout.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Greek and Roman settlements also developed at the site in
            later periods. As a result, Troy became a multi-layered
            historical landscape where different communities lived
            over thousands of years.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Homer and the Trojan War
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Homer's Iliad played an important role in making Troy
            famous around the world. The epic tells the story of
            the great war between the Achaeans and the Trojans.
            At the centre of the story are Paris, son of King
            Priam of Troy, and Helen, wife of Menelaus, King of Sparta.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            According to legend, the Achaean armies besieged the
            city after Paris took Helen to Troy. The war, said to
            have lasted for many years, became one of the best-known
            mythological stories of the ancient world.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The Iliad is not a historical document, but a mythological
            and literary work. Archaeological research investigates
            evidence of conflict and destruction at Troy, but it has
            not conclusively proven that every event described in
            the epic happened exactly as told.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            The legend of the Trojan Horse
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the best-known elements of the Trojan War story
            is the wooden horse. According to legend, the Achaeans
            built a large wooden horse to bring the war to an end
            and hid their soldiers inside it.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The story says that after the Trojans brought the horse
            inside the city, the soldiers emerged at night and
            captured Troy. Today, the Trojan Horse is regarded as
            a symbol of cunning and military strategy. However,
            the wooden horse displayed at the archaeological site
            is a modern structure representing the legend; it should
            not be considered an actual ancient war machine.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            The discovery of Troy and archaeological excavations
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Heinrich Schliemann's excavations, which began in the
            1870s, marked an important turning point in the
            archaeological recognition of Troy. Later, researchers
            such as Wilhelm Dörpfeld and Carl Blegen also carried
            out work at the site.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            These excavations revealed that cities from different
            periods had been built on top of one another at the
            same location. Although the methods used during the
            earliest excavations have since been criticised in
            light of modern archaeological standards, they played
            a major role in bringing Troy's importance to the
            attention of the scientific world.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Scientific excavations and research continue today.
            These studies help us better understand the city's
            different periods, settlement patterns and connections
            with surrounding regions.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            UNESCO World Heritage
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The Archaeological Site of Troy was added to the
            UNESCO World Heritage List in 1998 because of its
            historical, cultural and archaeological significance.
            The site plays an important role in understanding
            thousands of years of connections between Anatolia,
            the Aegean world and the Balkans.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Troy's importance extends far beyond Homer's epic.
            The architectural, commercial and cultural traces
            left by different civilisations in the same
            geographical area make it one of the important
            research sites in world archaeology.
          </p>

          {/* WHAT TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            What can you see during your visit?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "The Trojan Horse",
                "A wooden horse representing the legend of the Trojan War and one of the most popular attractions for visitors.",
              ],
              [
                "Defensive Walls",
                "Remains of fortifications built in different periods, illustrating the city's defensive architecture.",
              ],
              [
                "Ramped Entrance",
                "An entrance route from the Troy II period, reflecting early approaches to defence and architecture.",
              ],
              [
                "Megaron Structures",
                "Foundations and remains of large buildings found in Early Bronze Age settlements.",
              ],
              [
                "Temple of Athena",
                "The temple area used as a sacred site during the Hellenistic and Roman periods.",
              ],
              [
                "Roman Period Structures",
                "Remains connected with the public and social life of the ancient city in its later periods.",
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

          {/* TROYA MUSEUM */}
          <h2 className="mt-12 text-2xl font-bold">
            Troy Museum
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            The Troy Museum is located at the entrance to Troy Ancient
            City, within the boundaries of Tevfikiye Village. Opened
            to visitors in 2018, the museum presents the archaeological
            history of Troy and the Troad region through a range of
            exhibition spaces.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The museum displays objects uncovered during excavations,
            sculptures, tombstones and finds from different periods.
            For visitors who want to gain a deeper understanding of
            Troy's history, combining a visit to the archaeological
            site with the museum is highly worthwhile.
          </p>

          {/* VISITOR INFORMATION */}
          <h2 className="mt-12 text-2xl font-bold">
            Before your visit
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Troy Ancient City covers an extensive archaeological area.
            We recommend wearing comfortable walking shoes to explore
            the site. During the summer months, it is also useful to
            protect yourself from the sun and bring drinking water.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            You can combine your visit to the ancient city with a
            trip to the Troy Museum. Visiting hours, admission
            conditions and current arrangements may change, so
            check the official museum websites before setting out.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
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
                  {" "}· Troy's World Heritage status and outstanding universal value.
                </span>
              </li>

              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70511/troya-oren-yeri.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Directorate of Culture and Tourism – Troy
                </a>
                <span>
                  {" "}· Information about the settlement layers and archaeological remains.
                </span>
              </li>

              <li>
                <a
                  href="https://muze.gov.tr/muze-detay?DistId=TRV&SectionId=TRV01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Republic of Türkiye Ministry of Culture and Tourism – Troy
                </a>
                <span>
                  {" "}· History of the archaeological site and visitor information.
                </span>
              </li>

              <li>
                <a
                  href="https://muze.gov.tr/muze-detay?DistId=TRO&SectionId=TRO01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Troy Museum – Official Museum Page
                </a>
                <span>
                  {" "}· Museum collection, address and visitor information.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/portal/truvaantikkenti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Culture Portal – Troy Ancient City
                </a>
                <span>
                  {" "}· Mythological and archaeological history of Troy.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* LOCATION AND TRANSPORT */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Location and directions</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            Troy Ancient City is located near Tevfikiye Village,
            in the Hisarlık area of Çanakkale. The archaeological
            site can be visited together with the Troy Museum,
            which is also located in the area.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Troya+Antik+Kenti+Tevfikiye+Canakkale"
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
              How to get to Troy?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Troy Ancient City is located south of Çanakkale city
              centre, near Tevfikiye Village. From Geyikli, you can
              reach Tevfikiye by travelling in the direction of
              Ezine and Çanakkale. You can plan your journey in advance.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Troya+Antik+Kenti%2C+Tevfikiye%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of Troy Ancient City"
              src="https://maps.google.com/maps?q=Troya%20Antik%20Kenti%2C%20Tevfikiye%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Troy Ancient City · Tevfikiye
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Troya+Antik+Kenti+Tevfikiye+Canakkale"
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
