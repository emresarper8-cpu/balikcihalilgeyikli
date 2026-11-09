
import Link from "next/link";

export const metadata = {
  title: "Dalyan Heart-Shaped Lake",
  description:
    "Discover the Heart-Shaped Lake in Dalyan, Ezine, Çanakkale, its changing pink colours, natural features and ancient harbour history.",
  alternates: {
    canonical: "/en/explore/kalpli-gol",
    languages: {
      "tr-TR": "/kesfet/kalpli-gol",
      "en-US": "/en/explore/kalpli-gol",
    },
  },
};

export default function KalpliGolPage() {
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
            Dalyan <span className="text-cyan-400">Heart-Shaped Lake</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Sometimes pink, sometimes terracotta...
            A remarkable natural wonder hidden in the former
            inner harbour of Alexandria Troas, taking on a
            heart-like shape depending on the water level.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Dalyan / Ezine
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🌿 Natural lagoon
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              💗 Pink Lake
            </span>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kalpli-gol/kalpli-gol-genel.jpg"
            alt="Dalyan Heart-Shaped Lake"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Heart-Shaped Lake · Dalyan · Ezine
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
            THE COLOURS OF NATURE
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            An extraordinary natural wonder near Geyikli
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Dalyan Heart-Shaped Lake is located near Dalyan
            Village in the Ezine district of Çanakkale.
            Situated southwest of Geyikli, this natural
            lagoon attracts attention with its distinctive
            shape and colours that can change throughout
            the year.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Known locally as the Pink Lake or Heart-Shaped
            Lake, the area can take on different shades of
            pink and terracotta, particularly during the
            summer and towards autumn. This appearance
            has made it one of Çanakkale's interesting
            natural attractions.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Why does the lake turn pink?
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The microscopic organism Dunaliella salina
            plays an important role in producing the
            lake's pink and reddish colours. Under suitable
            environmental conditions, particularly when
            salinity and temperature increase, this
            organism can multiply and cause the water
            to change colour.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            For this reason, the lake does not look the
            same throughout the year. Factors such as
            air temperature, rainfall, evaporation and
            water salinity all influence its appearance.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            During particularly hot and dry periods,
            higher salinity can make the pink shades
            more noticeable. When rainfall increases,
            the intensity of the colour may change.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            Why does it take the shape of a heart?
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The lake is popularly known as the
            Heart-Shaped Lake because, at certain
            water levels, its outline resembles a heart
            when viewed from above.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Changes in the water level can alter the
            shoreline and the overall appearance of
            the lake. As a result, the heart shape is
            not always equally visible.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Visitors should keep in mind that the
            shape and colours seen in photographs
            may not look the same in every season.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            The former inner harbour of Alexandria Troas
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            One of the lake's most interesting features
            is its historical background. The lake is
            associated with an area that served as the
            inner harbour of the ancient city of
            Alexandria Troas.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Alexandria Troas was one of the important
            harbour cities of the ancient Troad region.
            The area around Dalyan forms part of the
            historic landscape that preserves traces
            of the city's maritime and harbour life.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            This gives the Heart-Shaped Lake significance
            not only for its natural appearance but also
            for its connection with the ancient harbour.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-white">
            A landscape that changes with the seasons
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Changes in the lake's colours can be observed
            at different times of the year. During summer,
            rising temperatures and increased evaporation
            can make pink and terracotta shades more
            prominent.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            In autumn and winter, the lake may take on
            mustard-yellow and other natural shades.
            However, these changes do not follow a fixed
            calendar. Rainfall and temperature conditions
            can produce different results each year.
          </p>

          {/* WHAT TO SEE */}
          <h2 className="mt-12 text-2xl font-bold">
            What can you see during your visit?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "The Pink Lake",
                "A natural lagoon that can turn pink and terracotta under suitable environmental conditions.",
              ],
              [
                "The Heart-Shaped View",
                "A heart-like lake landscape that becomes more visible with certain water levels.",
              ],
              [
                "Natural Lagoon",
                "A coastal wetland with lagoon characteristics and surrounding natural habitats.",
              ],
              [
                "Ancient Harbour Heritage",
                "A historic area associated with the former inner harbour of Alexandria Troas.",
              ],
              [
                "Dalyan Coast",
                "A coastal area where you can combine your lake visit with a short walk by the sea.",
              ],
              [
                "Nature Photography",
                "A place to photograph the lake's colours, shape and surrounding landscape.",
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

          {/* WILDLIFE AND CONSERVATION */}
          <h2 className="mt-12 text-2xl font-bold">
            Natural life and conservation
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Geyikli-Dalyan Heart Lake is a coastal wetland
            with saline and brackish lagoon characteristics.
            Wetlands provide important habitats for waterbirds
            and many different groups of living organisms.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Protecting the lake's natural environment is
            therefore important. Visitors should avoid
            damaging the water and surrounding habitats,
            take their rubbish with them and avoid disturbing
            wildlife.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Preserving the lake's natural character will
            help ensure that this special landscape can
            be enjoyed by future generations.
          </p>

          {/* VISITOR INFORMATION */}
          <h2 className="mt-12 text-2xl font-bold">
            Before your visit
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Remember that the lake's colour and heart-shaped
            outline do not always look the same. The
            intensity of the pink shades can vary depending
            on the season and weather conditions.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            For photography, choose safe viewpoints from
            which you can look down towards the lake.
            Avoid entering sensitive areas along the shore,
            leaving waste in the water or disturbing the
            lake's natural environment.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Visitor facilities and services around the lake
            may be limited, so it is useful to plan your
            needs in advance.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and further reading
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://www.aa.com.tr/tr/gundem/canakkaledeki-pembe-golun-incelenmesi-icin-tubitaka-proje-sunuldu-/2758423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Anadolu Agency – TÜBİTAK project to study the Pink Lake
                </a>
                <span>
                  {" "}· The lake's formation, colour changes and ancient harbour history.
                </span>
              </li>

              <li>
                <a
                  href="https://www.aa.com.tr/tr/gundem/canakkaledeki-kalpli-gol-pembeye-burundu/4002768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Anadolu Agency – Çanakkale's Heart-Shaped Lake turns pink
                </a>
                <span>
                  {" "}· Seasonal colour changes and Dunaliella salina.
                </span>
              </li>

              <li>
                <a
                  href="https://www.dha.com.tr/yerel-haberler/canakkale/ezine/canakkalede-kalpli-gol-pembeye-burundu-2912222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Demirören News Agency – Heart-Shaped Lake
                </a>
                <span>
                  {" "}· The lake's natural colours and scientific explanations.
                </span>
              </li>

              <li>
                <a
                  href="https://webdosya.csb.gov.tr/db/ced/icerikler/canakkale_-cdr2022-20231101091000.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Environmental Status Report
                </a>
                <span>
                  {" "}· Location and wetland characteristics of Geyikli-Dalyan Heart Lake.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* LOCATION AND DIRECTIONS */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Location and directions</h2>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            The Heart-Shaped Lake is located near Dalyan
            Village in the Ezine district of Çanakkale.
            It lies close to the coast, southwest of Geyikli.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kalpli+Gol+Dalyan+Ezine+Canakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-cyan-500 px-5 py-3 text-center font-bold text-white hover:bg-cyan-400"
          >
            View on map ↗
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
              How to get to the Heart-Shaped Lake
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              The Heart-Shaped Lake is located near the
              coastal area of Dalyan Village, close to
              Geyikli. Follow the road from Geyikli towards
              Dalyan to reach the lake area.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Kalpli+Gol%2C+Dalyan%2C+Ezine&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get directions from Geyikli ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of Dalyan Heart-Shaped Lake"
              src="https://maps.google.com/maps?q=Kalpli%20Gol%2C%20Dalyan%2C%20Ezine%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Heart-Shaped Lake · Dalyan · Ezine
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kalpli+Gol+Dalyan+Ezine+Canakkale"
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
