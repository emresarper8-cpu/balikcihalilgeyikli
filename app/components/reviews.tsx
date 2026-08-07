export default function Reviews() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Misafirlerimiz Ne Diyor?
        </h2>

        <p className="text-gray-500 text-center mt-4 mb-12">
          Google'da bizi değerlendiren misafirlerimizden bazı yorumlar
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
            <div className="text-yellow-500 text-2xl mb-3">
              ★★★★★
            </div>

            <p className="text-gray-700">
              Balıklar inanılmaz tazeydi. Mezeler de çok başarılıydı.
              Tekrar geleceğiz.
            </p>

            <h4 className="font-bold mt-6">
              Ahmet K.
            </h4>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
            <div className="text-yellow-500 text-2xl mb-3">
              ★★★★★
            </div>

            <p className="text-gray-700">
              Geyikli'de yediğimiz en güzel kalamar.
              Hizmet çok samimiydi.
            </p>

            <h4 className="font-bold mt-6">
              Elif Y.
            </h4>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
            <div className="text-yellow-500 text-2xl mb-3">
              ★★★★★
            </div>

            <p className="text-gray-700">
              Bahçesi çok huzurlu. Ailece keyifle vakit geçirdik.
            </p>

            <h4 className="font-bold mt-6">
              Mehmet T.
            </h4>
          </div>

        </div>
      </div>
    </section>
  );
}