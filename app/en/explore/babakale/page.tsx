
import Link from "next/link";

export const metadata = {
  title: "Babakale | Discover Geyikli",
  description:
    "Discover Babakale in Ayvacık, Çanakkale, with its Ottoman-era fortress, historic harbour and traditional knife-making craft.",
  alternates: {
    canonical: "/en/explore/babakale",
    languages: {
      "tr-TR": "/kesfet/babakale",
      "en-US": "/en/explore/babakale",
    },
  },
};

export default function BabakalePage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/en/explore" className="text-cyan-300 hover:text-white">
            ← Discover Geyikli
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            WHERE HISTORY MEETS THE SEA
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Baba<span className="text-cyan-400">kale</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            At the westernmost tip of the Asian continent stands one of the
            Ottoman fortresses built to defend the coast against pirate attacks.
            With its stone streets, historic harbour and traditional
            knife-making heritage passed down through generations, Babakale is
            a remarkable coastal village.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ayvacık / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏰 Ottoman Fortress
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🔪 Traditional knife-making
            </span>
          </div>
        </div>
      </section>

      {/* MAIN PHOTO */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/babakale/babakale-genel.jpg"
            alt="Babakale village and its historic harbour"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Babakale · Ayvacık · Çanakkale
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
            FROM THE OTTOMAN ERA TO THE PRESENT
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            A Fortress Village at the Western Edge of Asia
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Babakale is a historic coastal village in the Ayvacık district of
            Çanakkale, located at the southwestern tip of the Biga Peninsula.
            The settlement stands on Cape Baba, known as the westernmost point
            of the Asian continent.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            One of the features that distinguishes Babakale from other coastal
            villages is its fortress, built during the Ottoman period. The
            village developed around the fortress and gradually acquired its
            own character through its harbour, marketplace, mosque, bathhouse
            and traditional crafts.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Construction of Babakale Fortress
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale Fortress was built during the Ottoman period to protect
            the coastline against pirate attacks. Its construction is
            associated with Kaymak Mustafa Pasha, the Ottoman Grand Admiral
            (Kaptan-ı Derya).
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            According to information presented by the Turkish Culture Portal,
            one account of the fortress's origins begins with Sultan Ahmed III
            taking shelter in Babakale Harbour during a sea journey. Local
            residents reportedly complained about pirate attacks, leading to
            the decision to build the fortress.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            An academic study published in 2023 states that construction began
            in April 1727 and was completed in the summer of 1728. Some sources
            also give the date 1725. Therefore, the construction process should
            not be reduced to a single year.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            In its early years, the fortress was known as Hırzü'l-Bahr. The
            name is associated with the idea of protection and shelter at sea.
            Over time, the name Babakale became identified with the settlement
            itself.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Locally sourced stone and labour were used in the construction of
            the fortress. Following its completion, a village settlement
            developed around it.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Architecture and Defensive Design
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale Fortress stands out for its commanding coastal position
            and defensive architecture. Its stone walls, bastions and
            sea-facing location reflect the Ottoman approach to coastal
            defence.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The fortress was more than a military structure. It also contained
            buildings serving the needs of soldiers and fortress personnel.
            Historical documents mention a mosque and a bathhouse within the
            fortress.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale Fortress was registered as an immovable cultural asset
            requiring protection in 1988. Under a conservation board decision
            issued in 2024, the fortress and certain historic buildings in the
            village were classified as first-group cultural assets requiring
            protection.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Historic Harbour and the Development of the Village
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The harbour played an important role in the development of
            Babakale. The settlement that grew around the fortress expanded
            not only to meet military needs but also through trade and maritime
            transport.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The harbour became an important connection point for trade
            involving Babakale and neighbouring villages. In the past, the
            village had a marketplace, shops, mosques, bathhouses and
            fountains.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            An academic study published in 2023 reports that approximately
            1,000 people lived in the village in 1839, and that the population
            had reached around 3,000 towards the end of the century. These
            figures illustrate the lively social and economic life of
            Babakale in the past.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Traditional Knife-Making in Babakale
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of Babakale's best-known cultural values is its traditional
            knife-making craft. The history of this craft in the village is
            traced back to the 18th century, when the fortress was built.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            According to a local account presented by the Ministry of Culture
            and Tourism's Culture Portal, the first craftsmen were settled in
            Babakale after the fortress was completed, in order to produce
            swords, daggers and similar weapons for the soldiers.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Over time, knife-making in the village developed beyond military
            production and became a traditional craft that also supplied
            knives for everyday use.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Babakale knives are known for their handmade quality, patterned
            blades and traditional handle designs. Historical accounts
            describe numerous workshops in the village and note that knives
            were transported by sea to different regions.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Today, knife-making remains an important part of Babakale's
            cultural identity. Passing this craft and its skills on to future
            generations is essential to keeping the tradition alive.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Babakale Mosque and Historic Fountains
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Located outside the fortress, Babakale Mosque is one of the
            important examples of the village's historic architecture. It
            attracts attention with its stone walls, cut-stone minaret, wooden
            ceiling and traditional architectural details.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The interior features woodwork, painted decorations and muqarnas
            details. The marble fountain in its courtyard is another notable
            feature of the building.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The historic fountains in the village are also part of its Ottoman
            settlement fabric. Babakale Market Fountain is among the historic
            structures listed in conservation records.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Tomb of Latif Baba
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the local stories associated with Babakale's name and
            maritime culture concerns Latif Baba. According to a legend
            presented by the Culture Portal, sailors respected Latif Baba, and
            his grave appears in local accounts explaining the naming of
            Babakale.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            These accounts should be understood as local legends rather than
            established historical documents. The Tomb of Latif Baba and the
            Ottoman-era cemetery are also among the village's protected
            historic assets.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Westernmost Point of the Asian Continent
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Cape Baba is known as the westernmost point of the Asian continent.
            This geographical feature gives Babakale a particularly distinctive
            location.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            With its coastline opening onto the Aegean Sea, historic harbour
            and stone architecture, Babakale is one of the coastal settlements
            in Çanakkale worth discovering.
          </p>

          {/* PLACES TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            Places to See in Babakale
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Babakale Fortress",
                "A historic coastal fortress built during the Ottoman period in the 18th century.",
              ],
              [
                "Historic Harbour",
                "A harbour connected to the village's maritime trade and fishing history.",
              ],
              [
                "Babakale Mosque",
                "A mosque known for its stone architecture, wooden ceiling and historic fountain.",
              ],
              [
                "Babakale Market Fountain",
                "One of the important elements of the village's historic marketplace.",
              ],
              [
                "Tomb of Latif Baba",
                "A site connected with the village's history and local traditions.",
              ],
              [
                "Knife-Making Workshops",
                "Places where visitors can discover Babakale's traditional craft.",
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
            Before You Visit
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            You can explore the fortress, harbour, village square and
            knife-making workshops during the same visit. Walking through the
            village's narrow streets is a good way to see its historic
            buildings up close.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            If you would like to visit the knife-making workshops, it is useful
            to check their opening hours in advance. Speaking directly with
            local craftsmen when purchasing handmade products is also a great
            opportunity to learn more about the history of the craft.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Please respect the conservation rules and avoid damaging registered
            cultural assets such as the fortress, mosque, fountains and tomb.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and Further Reading
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://www.canakkale.bel.tr/tr/sayfa/1127-gezi-rehberi/363-babakale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Municipality – Babakale
                </a>
                <span>
                  {" "}· The village's history, architecture and local accounts.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/portal/babakale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Culture Portal – Babakale
                </a>
                <span>
                  {" "}· Hırzü'l-Bahr Fortress and the story of Latif Baba.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/turkiye/canakkale/kulturatlasi/babakale-bicakciligi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Culture Portal – Babakale Knife-Making
                </a>
                <span>
                  {" "}· Traditional knife production and handicrafts.
                </span>
              </li>

              <li>
                <a
                  href="https://dergipark.org.tr/tr/pub/kulturder/article/1323545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Emre Kocabıyık and Şerif Korkmaz – A Fortress Village Settlement: Babakale (2023)
                </a>
                <span>
                  {" "}· Academic research on the fortress construction, settlement and social life of the village.
                </span>
              </li>

              <li>
                <a
                  href="https://korumakurullari.ktb.gov.tr/Eklenti/129943%2Ccanakkale-ili-ayvacik-ilcesi-babakale-koyu-tescilli-kal-.pdf?0="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Regional Conservation Board – 2024 Decision
                </a>
                <span>
                  {" "}· Conservation decision concerning the fortress, mosque, fountain, tomb and cemetery.
                </span>
              </li>

              <li>
                <a
                  href="https://canakkale.com.tr/assets/upload/dosyalar/canakkale-kultur-envanteri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Cultural Inventory
                </a>
                <span>
                  {" "}· Records on Babakale Mosque and historic architecture.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* INFORMATION BOX */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Village Information</h2>

          <div className="mt-5 space-y-5 text-sm">
            <div>
              <p className="text-cyan-300">Province</p>
              <p className="mt-1 text-gray-300">Çanakkale</p>
            </div>

            <div>
              <p className="text-cyan-300">District</p>
              <p className="mt-1 text-gray-300">Ayvacık</p>
            </div>

            <div>
              <p className="text-cyan-300">Location</p>
              <p className="mt-1 text-gray-300">Cape Baba</p>
            </div>

            <div>
              <p className="text-cyan-300">Main Attractions</p>
              <p className="mt-1 leading-6 text-gray-300">
                Babakale Fortress, historic harbour, traditional
                knife-making, mosque and fountains.
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Historical Period</p>
              <p className="mt-1 text-gray-300">Ottoman Period</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Babakale+Ayvacik+Canakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            View on Map ↗
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
              How to Get to Babakale
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Babakale is located on Cape Baba, southwest of Ayvacık district.
              You can reach the village by travelling from Geyikli and Ezine
              towards Ayvacık.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Babakale%2C+Ayvacik%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get Directions from Geyikli ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of Babakale"
              src="https://maps.google.com/maps?q=Babakale%2C%20Ayvacik%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Babakale · Ayvacık · Çanakkale
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
