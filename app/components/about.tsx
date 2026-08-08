export default function About() {
  return (
    <section className="bg-[#08253f] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* YAZI */}
          <div>
            <p className="text-cyan-400 font-semibold tracking-[4px] text-sm">
              NESİLDEN NESİLE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              1999'dan Beri
            </h2>

            <p className="text-gray-300 leading-8 mt-6">
              Dedem Hüsnü'nün başlattığı balıkçılık serüveni,
              babamın 1999 yılında Odunluk İskelesi'nde açtığı
              dükkânla devam etti.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              2011 yılında ev tavasıyla başlayan balık pişirme
              hikâyesi, bugün Geyikli'de Balıkçı Halil olarak
              devam ediyor.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              Bizim için bu iş sadece balık pişirmek değil;
              yıllardır süren bir aile geleneğini, Ege'nin
              lezzetlerini ve samimi bir sofrayı sizlerle
              paylaşmak.
            </p>

            <div className="mt-8 border-l-4 border-cyan-400 pl-5">
              <p className="text-xl md:text-2xl text-white font-semibold italic">
                “Denizin Bereketi, Geyikli'nin Lezzeti.”
              </p>
            </div>
          </div>


          {/* SAĞ TARAF */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                1999
              </h3>
              <p className="text-white mt-2">
                Geyikli'de Başlangıç
              </p>
            </div>

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                25+
              </h3>
              <p className="text-white mt-2">
                Yıllık Deneyim
              </p>
            </div>

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                3
              </h3>
              <p className="text-white mt-2">
                Nesil
              </p>
            </div>

            <div className="bg-[#10304f] rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                %100
              </h3>
              <p className="text-white mt-2">
                Taze Lezzet
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}