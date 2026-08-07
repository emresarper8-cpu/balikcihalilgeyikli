export default function About() {
  return (
    <section className="bg-[#08253f] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-5xl font-bold">
            1999'dan Beri
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Balıkçı Halil olarak Geyikli'de yıllardır günlük taze balıklar,
            Ege mezeleri ve samimi hizmet anlayışıyla misafirlerimizi
            ağırlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#10304f] rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">
              25+
            </h3>
            <p>Yıllık Deneyim</p>
          </div>

          <div className="bg-[#10304f] rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">
              %100
            </h3>
            <p>Günlük Taze</p>
          </div>

        </div>

      </div>
    </section>
  );
}