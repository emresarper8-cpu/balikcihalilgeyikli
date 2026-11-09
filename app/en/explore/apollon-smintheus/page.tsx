
import Link from "next/link";

export const metadata = {
  title: "Temple of Apollo Smintheus | Discover Geyikli",
  description:
    "Explore the history and architecture of the Temple of Apollo Smintheus in Gülpınar, its Iliad reliefs and visitor information.",
  alternates: {
    canonical: "/en/explore/apollon-smintheus",
    languages: {
      "tr-TR": "/kesfet/apollon-smintheus",
      "en-US": "/en/explore/apollon-smintheus",
    },
  },
};

export default function ApollonSmintheusPage() {
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
            Temple of Apollo Smintheus
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Dedicated to Apollo, the Lord of Mice, this remarkable
            Hellenistic sanctuary brings scenes from Homer's Iliad
            to life through its stone reliefs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Gülpınar / Ayvacık
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ Hellenistic Period
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📜 Around 150 BC
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/apollon-smintheus/apollon-smintheus-genel.jpg"
            alt="Temple of Apollo Smintheus in Gülpınar"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="p-4">
            <span className="text-sm text-gray-300">
              Sanctuary of Apollo Smintheus · Gülpınar
            </span>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            THE STORY OF THE SANCTUARY
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            A sanctuary dedicated to Apollo in the heart of the Troad
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            The Sanctuary of Apollo Smintheus is located in Gülpınar,
            in the Ayvacık district of Çanakkale. Known in antiquity
            as Smintheion, this site was one of the important religious
            centres of the Troad region. The temple stands out not
            only for its architecture but also for its cultural
            and mythological significance.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The best-known structure in the sanctuary, the Temple
            of Apollo Smintheus, was built around 150 BC during
            the Hellenistic period. It holds a special place among
            the cults of Apollo in Anatolia because of its association
            with the mouse symbol.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Apollo Smintheus: Lord of the Mice
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The title Smintheus associated with Apollo is linked
            to the ancient word for mouse and is generally
            interpreted as "Lord of the Mice". In the Troad region,
            Apollo was also regarded as a god who protected farmers
            from mice that damaged agricultural crops.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            For this reason, the mouse symbol became an important
            part of the religious identity of the sanctuary.
            This title of Apollo is particularly interesting
            for understanding the relationship between agriculture
            and belief in the region.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            An impressive example of Hellenistic architecture
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The temple was built in the Ionic order. Its
            architectural design uses a pseudodipteral plan
            associated with the architect Hermogenes. This
            arrangement creates the impression of a second
            row of columns surrounding the temple.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The temple has eight columns on its front and rear
            façades and fourteen columns along each long side.
            This arrangement enhances the monumental appearance
            of the building and makes it an important example
            of Hellenistic architecture in Anatolia.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            The Iliad carved in stone
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the most distinctive features of the Temple
            of Apollo Smintheus is the scenes from Homer's Iliad
            carved into its architectural friezes. These reliefs
            depict mythological episodes from the Trojan War.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The reliefs are important examples of how a
            mythological narrative was incorporated into the
            architectural decoration of a temple. They also
            reflect the cultural connection between the Troad
            region and the stories of Troy.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            A settlement much older than the temple
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Smintheion is not limited to remains from the
            Hellenistic and Roman periods. Archaeological
            excavations have also uncovered traces of a much
            older settlement at the site of the sanctuary.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            According to scientific dating, this settlement
            dates to approximately 5200–4800 BC, during the
            Chalcolithic period. These findings show that
            human life around Gülpınar began thousands of
            years before the temple was built.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Other structures in the sanctuary
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            In addition to the temple, excavations have
            uncovered a bathhouse, residential buildings,
            a sacred road, water structures and various
            architectural remains. These discoveries show
            that Smintheion was much more than a single
            temple: it was an extensive sanctuary where
            worship, visits and everyday life came together.
          </p>

          {/* WHAT TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            What can you see during your visit?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Temple of Apollo Smintheus",
                "The Hellenistic temple in the Ionic order, with some architectural sections partially reconstructed.",
              ],
              [
                "Iliad Reliefs",
                "Temple friezes depicting mythological scenes from the Trojan War.",
              ],
              [
                "Sacred Road",
                "Remains of an ancient road connecting different parts of the sanctuary.",
              ],
              [
                "Roman Bathhouse",
                "Bath remains that shed light on the use of the sanctuary during the Roman period.",
              ],
              [
                "Chalcolithic Settlement Remains",
                "Archaeological traces of the early settlement dating to approximately 5200–4800 BC.",
              ],
              [
                "Excavation Area and Museum",
                "An area displaying finds uncovered during excavations and the temple friezes.",
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
            Excavations and research
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Scientific excavations at Smintheion began in 1980
            under the direction of Professor Coşkun Özgünel.
            During the work, researchers investigated not only
            the temple and surrounding structures but also
            traces of earlier settlements at the sanctuary.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Since 2020, the excavations have been directed by
            Associate Professor Davut Kaplan from the Department
            of Archaeology at Ondokuz Mayıs University.
            Research continues to reveal the historical layers
            belonging to different periods of the site.
          </p>

          {/* VISITOR INFORMATION */}
          <h2 className="mt-12 text-2xl font-bold">
            Before your visit
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            We recommend allowing enough time to explore the
            temple remains, architectural fragments and
            exhibition areas at the Sanctuary of Apollo
            Smintheus. Comfortable shoes are advisable,
            and bringing water is particularly useful
            during hot weather.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Visiting hours and the periods when the museum
            section is open may change, so check the latest
            information before setting out. Please avoid
            touching or moving historical remains.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70514/apollon-smintheus-oren-yeri.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Directorate of Culture and Tourism – Apollo Smintheus
                </a>
                <span>
                  {" "}· History, architecture and reliefs of the temple.
                </span>
              </li>

              <li>
                <a
                  href="https://ark-itbf.omu.edu.tr/tr/ara%C5%9Ftirmalar/kazilar/apollon-smintheion-kazilari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Ondokuz Mayıs University – Apollon Smintheion Excavations
                </a>
                <span>
                  {" "}· Excavation history, sanctuary and archaeological finds.
                </span>
              </li>

              <li>
                <a
                  href="https://muze.gov.tr/s3/MysFileLibrary/%C3%87anakkale%20Smintheion%20%C3%96ren%20Yeri-ce3e727f-05ef-484b-b5de-224f064569dd.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Republic of Türkiye Ministry of Culture and Tourism – Smintheion Visitor Brochure
                </a>
                <span>
                  {" "}· Structures of the sanctuary and the cult of Apollo Smintheus.
                </span>
              </li>

              <li>
                <a
                  href="https://www.hoyuk.gov.tr/eng/full-text-pdf/15/tur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  The Chalcolithic Settlement of Smintheion
                </a>
                <span>
                  {" "}· Prehistoric settlement and scientific dating.
                </span>
              </li>

              <li>
                <a
                  href="https://belleten.gov.tr/eng/full-text-pdf/1604/tur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Turkish Historical Society – Temple of Apollo Smintheus
                </a>
                <span>
                  {" "}· Academic study of the temple's architectural features.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* LOCATION AND DIRECTIONS */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Location and directions</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            The Sanctuary of Apollo Smintheus is located in
            Gülpınar, in the Ayvacık district of Çanakkale.
            The archaeological site is in an area known
            locally as Bahçeler-içi, within the settlement
            of Gülpınar.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Apollon+Smintheus+Tapinagi+Gulpinar+Ayvacik+Canakkale"
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
              How to get to Apollo Smintheus?
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              The temple is located in the settlement of
              Gülpınar. You can plan your journey from
              Geyikli towards Ayvacık and then continue
              to Gülpınar.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Apollon+Smintheus+Tapinagi%2C+Gulpinar%2C+Ayvacik&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of the Temple of Apollo Smintheus"
              src="https://maps.google.com/maps?q=Apollon%20Smintheus%20Tap%C4%B1na%C4%9F%C4%B1%2C%20G%C3%BClp%C4%B1nar%2C%20Ayvac%C4%B1k%2C%20%C3%87anakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Apollo Smintheus · Gülpınar
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Apollon+Smintheus+Tapinagi+Gulpinar+Ayvacik+Canakkale"
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
