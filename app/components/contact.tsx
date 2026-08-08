export default function Contact() {
  return (
    <section
      id="iletisim"
      className="bg-[#04192d] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Bize Ulaşın
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Balıkçı Halil Geyikli
            </h3>

            <p className="mb-4">
              📍 Geyikli / Ezine / Çanakkale
            </p>

            <p className="mb-4">
              📞 +90 543 345 00 17
            </p>

            <p className="mb-4">
              🕒 Her Gün
              <br />
              11:00 - 23:00
            </p>

            <a
              href="https://wa.me/905433450017"
              target="_blank"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-bold"
            >
              WhatsApp'tan Yaz
            </a>

          </div>

          <iframe
            className="rounded-3xl w-full h-[400px]"
            src="https://www.google.com/maps?q=Balıkçı%20Halil%20Geyikli&output=embed"
            loading="lazy"
          />
<a
  href="https://www.google.com/maps/dir/?api=1&destination=Balıkçı%20Halil%20Geyikli"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-semibold text-white"
>
  📍 Yol Tarifi Al
</a>
        </div>

      </div>
    </section>
  );
}