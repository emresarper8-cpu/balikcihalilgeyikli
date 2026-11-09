
import Link from "next/link";

export const metadata = {
  title: "Kestanbol Thermal Springs | Discover Geyikli",
  description:
    "Discover the history, geothermal resources and thermal tourism features of Kestanbol Thermal Springs in Ezine, Çanakkale.",
  alternates: {
    canonical: "/en/explore/kestanbol-kaplicalari",
    languages: {
      "tr-TR": "/kesfet/kestanbol-kaplicalari",
      "en-US": "/en/explore/kestanbol-kaplicalari",
    },
  },
};

export default function KestanbolKaplicalariPage() {
  return (
    <main className="min-h-screen bg-[#071c2d] text-white">
      {/* HERO SECTION */}
      <section className="border-b border-cyan-900 bg-gradient-to-b from-cyan-950 to-[#071c2d]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/en/explore" className="text-cyan-300 hover:text-white">
            ← Discover Geyikli
          </Link>

          <p className="mt-12 text-sm font-bold tracking-[5px] text-cyan-300">
            WHERE HISTORY MEETS NATURE
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Kestanbol <span className="text-cyan-400">Thermal Springs</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Hot springs with a history stretching back to ancient times...
            Kestanbol is part of Ezine's historic thermal heritage and one of
            the natural treasures that has attracted people to this region
            for centuries.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              📍 Ezine / Çanakkale
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              ♨️ Geothermal Springs
            </span>
            <span className="rounded-full border border-cyan-700 px-4 py-2">
              🏛️ From Antiquity to the Present
            </span>
          </div>
        </div>
      </section>

      {/* MAIN PHOTO */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-2xl border border-cyan-900 bg-[#0a263b]">
          <img
            src="/images/kestanbol-kaplicalari/kestanbol-genel.jpg"
            alt="Kestanbol Thermal Springs"
            className="h-auto max-h-[650px] w-full object-contain bg-black"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-gray-300">
              Kestanbol Thermal Springs · Ezine
            </span>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <article className="md:col-span-2">
          <p className="font-bold tracking-widest text-cyan-400">
            THE HISTORY OF THE HOT SPRINGS
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            A Thermal Tradition Thousands of Years Old
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Kestanbol Thermal Springs are located in the Ezine district of
            Çanakkale, within the historic geographical area around Dalyan and
            Alexandria Troas. Known for its natural hot springs, the region
            has been an important centre for the use of thermal waters since
            ancient times.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The importance of Kestanbol goes beyond its hot springs. The nearby
            ancient city of Alexandria Troas is also significant for
            understanding the historical background of the region.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kestanbol in Ancient Times
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The history of Kestanbol Thermal Springs should be considered
            together with the nearby ancient city of Alexandria Troas. The
            ancient city was an important harbour settlement established
            around the present-day village of Dalyan.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            An academic study published in 2018 under the title "Historic
            Kestanbol Thermal Springs: The Water That Revives the Dead"
            examines the region's thermal history, from ancient times through
            the Byzantine and Ottoman periods.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The study describes Kestanbol as a place visited throughout
            history by people seeking relief and discusses how thermal water
            was used in different ways during various periods.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Thermal Springs During the Ottoman Period
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol's thermal resources continued to be used during the
            Ottoman period. The area became a destination for people wishing
            to benefit from its natural hot waters.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Over time, facilities for thermal bathing and accommodation
            developed around the springs. As a result, Kestanbol became
            increasingly important not only as a local natural resource but
            also as a thermal tourism destination.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kestanbol During the Republican Era
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The use of Kestanbol Thermal Springs continued during the
            Republican period. Historical information indicates that the
            facilities were repaired by Ezine Municipality and reopened in
            1935.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            In the following years, thermal facilities were developed in the
            area, and the hot springs began to be used for tourism and
            accommodation.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            The Thermal Waters of Kestanbol
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Thanks to its geological structure, Kestanbol has natural
            geothermal hot water resources. According to data from the
            Çanakkale Provincial Directorate of Culture and Tourism, the
            temperature of the main spring is 67°C.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            The same source reports a temperature of 47°C for the second
            spring, 68°C for the mud-water source, 31°C for the bath source
            and 21°C for the eye-water source.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Environmental reports published by the Ministry of Environment
            and Urbanisation also record temperatures and flow rates for
            Kestanbol's springs based on different measurements. These
            variations may depend on the specific spring location and the
            time of measurement.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Mud Baths and Thermal Applications
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Kestanbol is known not only for its hot water baths but also for
            mud baths and other thermal applications.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Ministry of Culture and Tourism sources list bathing, mud
            applications, inhalation and spray treatments among the forms of
            thermal use associated with the region.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            These applications should be described as historical and
            touristic practices. This does not mean that thermal water cures
            any disease or is safe for everyone. Anyone considering its use
            for health reasons should consult a medical professional first.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Kestanbol and Alexandria Troas
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            The ancient city of Alexandria Troas, located near Kestanbol
            Thermal Springs, is an important stop that complements a
            historical visit to the region.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            When the ruins of the ancient city, its harbour history and the
            thermal springs are considered together, it becomes clear that
            this area has been an important place of settlement and activity
            since ancient times.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Visitors to Kestanbol can also include Alexandria Troas in their
            itinerary and discover nature, history and thermal culture
            together.
          </p>

          {/* FEATURES */}
          <h2 className="mt-12 text-2xl font-bold">
            What Can You Find in Kestanbol?
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Thermal Springs",
                "Natural geothermal water sources with different temperatures.",
              ],
              [
                "Thermal Pools",
                "Thermal pool facilities offered by the resort.",
              ],
              [
                "Mud Applications",
                "Mud treatments that form part of Kestanbol's historic thermal tradition.",
              ],
              [
                "Historic Heritage",
                "A thermal tradition extending from ancient times through the Byzantine and Ottoman periods.",
              ],
              [
                "Alexandria Troas",
                "An important ancient city that can be visited nearby.",
              ],
              [
                "Thermal Accommodation",
                "Accommodation opportunities at thermal facilities in the region.",
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
            Before travelling to Kestanbol Thermal Springs, we recommend
            checking the facility's current operating status, pool hours,
            accommodation options and reservation conditions directly with
            the operator.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            As the thermal water may reach high temperatures, visitors should
            follow the facility staff's guidance regarding suitable use and
            bathing duration.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            People with cardiovascular conditions, blood pressure problems,
            those who are pregnant or anyone with other health concerns should
            consult their doctor before using thermal pools.
          </p>

          {/* REFERENCES */}
          <div className="mt-14 border-t border-cyan-900 pt-8">
            <h2 className="text-xl font-bold text-cyan-300">
              References and Further Reading
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-400">
              <li>
                <a
                  href="https://canakkale.ktb.gov.tr/TR-70496/termal-turizm.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Directorate of Culture and Tourism –
                  Thermal Tourism
                </a>
                <span>
                  {" "}· Spring temperatures and information about thermal use.
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
                  {" "}· Kestanbol Thermal Springs and the tourism attractions of Ezine.
                </span>
              </li>

              <li>
                <a
                  href="https://dergipark.org.tr/tr/pub/mutftd/article/523826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Demirsoy, Başaran and Sandalcı (2018) – Historic Kestanbol Thermal Springs
                </a>
                <span>
                  {" "}· Thermal use during the ancient, Byzantine and Ottoman periods.
                </span>
              </li>

              <li>
                <a
                  href="https://webdosya.csb.gov.tr/db/ced/icerikler/canakkale_-cdr219-20201221092718.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Çanakkale Provincial Environmental Status Report
                </a>
                <span>
                  {" "}· Geothermal resources and measurement data for Kestanbol.
                </span>
              </li>

              <li>
                <a
                  href="https://www.kalkinmakutuphanesi.gov.tr/assets/upload/dosyalar/yenilenebilir-enerji-arastirmasi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white"
                >
                  Renewable Energy Research
                </a>
                <span>
                  {" "}· Kestanbol's geothermal resources and facility history.
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* INFORMATION BOX */}
        <aside className="h-fit rounded-2xl border border-cyan-900 bg-[#0a263b] p-6">
          <h2 className="text-xl font-bold">Area Information</h2>

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
              <p className="text-cyan-300">Approximate Distance</p>
              <p className="mt-1 text-gray-300">
                15–18 km from Ezine town centre
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Main Spring Temperature</p>
              <p className="mt-1 text-gray-300">
                67°C according to official sources
              </p>
            </div>

            <div>
              <p className="text-cyan-300">Main Features</p>
              <p className="mt-1 leading-6 text-gray-300">
                Natural hot water, thermal pools and historic thermal use.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kestanbol+Kaplicalari+Ezine+Canakkale"
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
              How to Get to Kestanbol
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Kestanbol Thermal Springs are located southwest of Ezine
              district, around Körüktaşı Village. You can reach the area
              via Geyikli and Ezine.
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Geyikli%2C+Ezine%2C+Canakkale&destination=Kestanbol+Kaplicalari%2C+Ezine%2C+Canakkale&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-400"
            >
              Get Directions from Geyikli ↗
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Alexandria+Troas+Antik+Kenti"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm font-semibold text-cyan-300 hover:text-white"
            >
              View Alexandria Troas Ancient City ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-cyan-900">
            <iframe
              title="Map of Kestanbol Thermal Springs"
              src="https://maps.google.com/maps?q=Kestanbol%20Kaplicalari%2C%20Ezine%2C%20Canakkale&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                📍 Kestanbol Thermal Springs · Ezine · Çanakkale
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
