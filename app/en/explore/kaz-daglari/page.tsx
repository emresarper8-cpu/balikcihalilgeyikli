
import Link from "next/link";

export const metadata = {
  title: "Mount Ida (Kaz Mountains)",
  description:
    "Explore the natural beauty of the Kaz Mountains, Ayazma, waterfalls, canyons, forests and the mythology of ancient Mount Ida.",
  alternates: {
    canonical: "/en/explore/kaz-daglari",
    languages: {
      "tr-TR": "/kesfet/kaz-daglari",
      "en-US": "/en/explore/kaz-daglari",
    },
  },
};

export default function KazDaglariPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* HERO */}
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/en/explore" className="text-cyan-300 hover:text-white">
            ← Discover Geyikli
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            FOLLOWING NATURE'S FOOTPRINTS
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Mount <span className="text-cyan-400">Ida</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Mount Ida of ancient times... A remarkable natural
            landscape stretching between Çanakkale and Balıkesir,
            known for its countless springs, dense forests,
            waterfalls and legendary stories.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Çanakkale – Balıkesir
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🌲 National Park
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏔️ Mount Ida
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kaz-daglari/kaz-daglari-genel.jpg"
            alt="Forests and natural scenery of the Kaz Mountains"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Kaz Mountains · Mount Ida
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

      {/* HISTORY AND NATURAL FEATURES */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            IDA, THE MOUNTAIN OF A THOUSAND SPRINGS
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Where legends meet nature
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            The Kaz Mountains form an extensive mountainous
            region south of the Biga Peninsula, stretching
            across the provinces of Çanakkale and Balıkesir.
            Known in antiquity as Mount Ida, this landscape
            is distinguished by its forests, streams, valleys
            and rich vegetation.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The Kaz Mountains are famous not only for their
            natural beauty but also for mythological stories
            passed down over thousands of years. Mount Ida
            is mentioned in Homer's Iliad and is one of the
            important mythological settings of the ancient
            Troad region.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Mount Ida in mythology
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            In Greek mythology, Mount Ida is associated
            with stories of the gods. One of the best-known
            tales is the beauty contest between Aphrodite,
            Hera and Athena.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            According to the legend, the judge was Paris,
            son of King Priam of Troy. The three goddesses
            appeared before him and each promised him a
            different reward. Paris chose Aphrodite as the
            fairest goddess. In mythology, this decision
            is regarded as the beginning of events that
            eventually led to the Trojan War.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            This story is not evidence of a historical event;
            rather, it is an important legend that illustrates
            the place of Mount Ida in ancient mythology.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The natural richness of the Kaz Mountains
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Thanks to its varying elevations and climatic
            conditions, the Kaz Mountains support a rich
            diversity of plant life. Black pine, beech and
            various other tree species can be found in the
            forests. The region is particularly known for
            the Kazdağı fir, a distinctive tree associated
            with this area.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The Kazdağı fir is one of the region's important
            natural treasures. Native plant species and
            forest ecosystems are among the most valuable
            features of the Kaz Mountains and deserve
            protection.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Streams, springs and waterfalls flowing down
            from the mountains complete the region's
            natural landscape.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Çanakkale side: Bayramiç and Ayazma
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            On the Çanakkale side of the Kaz Mountains,
            the Bayramiç district and the area around
            Evciler Village are home to important nature
            destinations. One of the best-known places
            in this area is Ayazma Recreation Area.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Located approximately five kilometres beyond
            Evciler Village, Ayazma is known for its
            freshwater springs and lush natural surroundings.
            It is especially popular during summer among
            visitors looking to cool off and spend time
            in nature.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            For visitors exploring the Kaz Mountains from
            Geyikli and Ezine, the Bayramiç and Ayazma area
            is also worth considering as a day-trip destination.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Balıkesir side: National Park and waterfalls
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kazdağı National Park is located within the
            boundaries of Edremit district in Balıkesir.
            Declared a national park on 17 April 1993,
            the area stands out for its forests, canyons,
            water resources and biodiversity.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Some of the best-known natural attractions
            within the national park include Sütüven
            Waterfall, Hasanboğuldu Pond, Pınarbaşı
            and Şahindere Canyon.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Sütüven Waterfall is known for its scenic
            waters cascading between rocks. Nearby,
            Hasanboğuldu Pond is a popular destination
            for visitors wishing to spend time surrounded
            by nature.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Şahindere Canyon is one of the region's
            remarkable natural formations, with its deep
            valleys and impressive views. Designated
            visitor areas and a glass viewing terrace
            can be found around the canyon.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Legend of Sarıkız
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the best-known local legends of the
            Kaz Mountains is the Legend of Sarıkız.
            Passed down through generations in the
            region, the story is closely associated
            with Sarıkız Hill.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            There are several versions of the legend.
            At its centre is the injustice experienced
            by Sarıkız, her relationship with her father
            and the life she came to lead in the mountains.
            The story shows that the Kaz Mountains hold
            an important place not only in nature but
            also in the cultural memory of the region.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Legend of Hasanboğuldu
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Hasanboğuldu is another folk story associated
            with the natural beauty of the Kaz Mountains.
            The tale tells of the love between Hasan and
            Emine and is now closely connected with
            Hasanboğuldu Pond and its surroundings.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The region therefore offers visitors not
            only waterfalls and forest scenery but also
            stories passed down from one generation
            to the next.
          </p>

          {/* PLACES TO VISIT */}
          <h2 className="mt-12 text-2xl font-bold">
            Places to visit in the Kaz Mountains
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Ayazma",
                "A recreation area near Evciler Village in Bayramiç, known for its springs and lush natural surroundings.",
              ],
              [
                "Sütüven Waterfall",
                "An impressive waterfall and natural landscape within the Kazdağı National Park area.",
              ],
              [
                "Hasanboğuldu Pond",
                "A pond known for its natural scenery and local legend.",
              ],
              [
                "Şahindere Canyon",
                "A striking natural formation with deep valleys and scenic viewpoints.",
              ],
              [
                "Pınarbaşı",
                "A day-visit area where forest landscapes meet natural spring waters.",
              ],
              [
                "Sarıkız Hill",
                "One of the well-known high points of the Kaz Mountains and a central location in the Legend of Sarıkız.",
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
            Since the Kaz Mountains cover a very large
            geographical area, it is useful to decide
            in advance which places you would like to
            visit. The Bayramiç-Ayazma area and the
            national park destinations around Edremit
            are reached by different routes.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Access to some areas within the national park
            is controlled through designated checkpoints.
            Certain routes require visitors to be
            accompanied by an authorised area guide.
            Before setting out, check current entry
            conditions and visiting hours with the
            relevant Nature Conservation and National
            Parks authorities.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Avoiding open fires, taking rubbish with you
            and protecting plants and wildlife are
            essential for preserving the natural
            environment of the Kaz Mountains.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70575/kazdagi-ida-dagi-bayramic.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Directorate of Culture and Tourism – Mount Ida
                </a>
                <span>
                  {" "}· Bayramiç, Ayazma and the mythological history of Mount Ida.
                </span>
              </li>

              <li>
                <a
                  href="https://ekotaban.tarimorman.gov.tr/alan/54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Nature Tourism – Kazdağı National Park
                </a>
                <span>
                  {" "}· Natural features, access points and visitor information.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kulturportali.gov.tr/turkiye/balikesir/gezilecekyer/kaz-dagi-da-dagi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Culture Portal – Kazdağı National Park
                </a>
                <span>
                  {" "}· Sütüven, Hasanboğuldu and Şahindere Canyon.
                </span>
              </li>

              <li>
                <a
                  href="https://www.canakkale.bel.tr/tr/sayfa/1127-gezi-rehberi/295-ida-kazdaglari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Municipality – Mount Ida / Kaz Mountains
                </a>
                <span>
                  {" "}· Geography and mythological stories of the Kaz Mountains.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* INFORMATION BOX */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Regional information</h2>

          <div className="mt-5 space-y-5 text-sm">
            <div>
              <p className="text-cyan-300">Also known as</p>
              <p className="mt-1 text-gray-300">Mount Ida</p>
            </div>

            <div>
              <p className="text-cyan-300">Location</p>
              <p className="mt-1 text-gray-300">
                Çanakkale and Balıkesir
              </p>
            </div>

            <div>
              <p className="text-cyan-300">National Park designation</p>
              <p className="mt-1 text-gray-300">
                17 April 1993
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Key features</p>
              <p className="mt-1 leading-6 text-gray-300">
                Forests, waterfalls, canyons, native plants
                and mythology.
              </p>
            </div>
          </div>

          <a
            href="https://ekotaban.tarimorman.gov.tr/alan/54"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            National Park information ↗
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
              How to get to the Kaz Mountains
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              On the Çanakkale side of the Kaz Mountains,
              you can reach the Ayazma area via Bayramiç
              and Evciler Village. Routes to the national
              park on the Balıkesir side begin around
              Edremit, Zeytinli, Güre and Altınoluk.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Ayazma+Mesire+Yeri%2C+Bayramic%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli to Ayazma ↗
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kazdagi+Milli+Parki+Edremit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm font-semibold text-cyan-300 hover:text-white"
            >
              View the national park on the Edremit side ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of Ayazma in the Kaz Mountains"
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
        Balıkçı Halil Geyikli · Discover Geyikli
      </footer>
    </main>
  );
}
