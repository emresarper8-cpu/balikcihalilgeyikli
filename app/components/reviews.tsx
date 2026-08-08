export default function Reviews() {
  const reviews = [
    {
      name: "Misafirimiz",
      text: "Balıklar inanılmaz tazeydi. Mezeler de çok başarılıydı. Tekrar geleceğiz.",
    },
    {
      name: "Misafirimiz",
      text: "Geyikli'de güzel bir balık sofrası. Hizmet samimi, yemekler çok lezzetli.",
    },
    {
      name: "Misafirimiz",
      text: "Bahçesi çok huzurlu. Ailece keyifle vakit geçirdik.",
    },
  ];

  return (
    <section className="bg-[#071826] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-cyan-400 text-center font-semibold tracking-[4px] text-sm">
          MİSAFİRLERİMİZ
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mt-4">
          Misafirlerimiz Ne Diyor?
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-12">
          Bizi ziyaret eden misafirlerimizin yorumları
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#10304f] rounded-3xl p-8 shadow-xl border border-white/5"
            >

              <div className="text-yellow-400 text-2xl tracking-widest">
                ★★★★★
              </div>

              <p className="text-gray-200 leading-7 mt-5">
                “{review.text}”
              </p>

              <div className="mt-7 pt-5 border-t border-white/10">
                <p className="text-white font-semibold">
                  {review.name}
                </p>

                <p className="text-cyan-400 text-sm mt-1">
                  Google Yorumu
                </p>
              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Bal%C4%B1k%C3%A7%C4%B1+Halil+Geyikli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-[#071826] px-7 py-3 rounded-full font-semibold transition"
          >
            Google'da Yorumlarımızı Gör
          </a>
        </div>

      </div>
    </section>
  );
}