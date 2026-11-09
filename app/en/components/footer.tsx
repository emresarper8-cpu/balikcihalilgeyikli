
export default function Footer() {
  return (
    <footer className="bg-[#04192d] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold">
              Balıkçı <span className="text-cyan-400">Halil</span>
            </h2>

            <p className="text-yellow-300 text-xs tracking-[4px] mt-2">
              SINCE 1999
            </p>

            <p className="text-gray-400 mt-5 leading-7">
              The Bounty of the Sea, the Flavours of Geyikli.
            </p>

            <p className="text-gray-500 mt-3 leading-6">
              Serving fresh fish, Aegean mezes and warm hospitality
              in Geyikli since 1999.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="/en"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/en/menu"
                  className="hover:text-cyan-400 transition"
                >
                  Digital Menu
                </a>
              </li>

              <li>
                <a
                  href="/en#gallery"
                  className="hover:text-cyan-400 transition"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="/en#contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/en/explore"
                  className="hover:text-cyan-400 transition"
                >
                  Explore the Region
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              📍 Geyikli / Ezine / Çanakkale
            </p>

            <a
              href="tel:+905433450017"
              className="block text-gray-400 mt-3 hover:text-cyan-400 transition"
            >
              📞 +90 543 345 00 17
            </a>

            <a
              href="https://wa.me/905433450017"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 mt-3 hover:text-green-400 transition"
            >
              💬 Message on WhatsApp
            </a>

            <p className="text-gray-400 mt-3">
              🕒 Every Day: 11:00 AM - 11:00 PM
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 mt-12 border-t border-cyan-900 pt-8">
          © 2026 Balıkçı Halil Geyikli · All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
