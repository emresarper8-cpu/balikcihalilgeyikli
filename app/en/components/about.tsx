
export default function About() {
  return (
    <section className="bg-[#08253f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
              FROM GENERATION TO GENERATION
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Since 1999
            </h2>

            <p className="text-gray-300 leading-8 mt-6">
              The fishing tradition started by our grandfather Hüsnü
              continued with the shop our father opened at Odunluk
              Pier in 1999.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              What began in 2011 with cooking fish in a simple
              home-style pan has grown into what Balıkçı Halil is
              today, right here in Geyikli.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              For us, this is about more than cooking fish. It is
              about sharing a family tradition, the flavours of
              the Aegean, and a warm, welcoming table.
            </p>

            <div className="mt-8 border-l-4 border-cyan-400 pl-5">
              <p className="text-xl md:text-2xl text-white font-semibold italic">
                “The Bounty of the Sea, the Flavours of Geyikli.”
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                1999
              </h3>
              <p className="text-white mt-2">
                Our Beginning in Geyikli
              </p>
            </div>

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                25+
              </h3>
              <p className="text-white mt-2">
                Years of Experience
              </p>
            </div>

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                3
              </h3>
              <p className="text-white mt-2">
                Generations
              </p>
            </div>

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-white mt-2">
                Fresh Flavours
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
