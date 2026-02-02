export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              TourLanka
            </h3>
            <p className="text-sm leading-relaxed">
              Discover Sri Lanka in luxury with private tours, curated
              experiences, and local experts dedicated to unforgettable
              journeys.
            </p>
            <div className="flex items-start gap-3 mt-5">
              <img
                src="/sltda-logo.png" // place logo in /public folder
                alt="SLTDA Registered"
                className="w-14 h-auto object-contain"
              />
              <div className="text-xs leading-snug">
                <p className="text-gray-300 font-medium">
                  SLTDA Registered Eco-Tourism Operator
                </p>
                <p className="text-gray-500">
                  Registration No: SLTDA/SQA/WS/00116
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/tours">Tours</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="footer-title">Experiences</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Luxury Tours</a>
              </li>
              <li>
                <a href="#">Wildlife Safaris</a>
              </li>
              <li>
                <a href="#">Cultural Trips</a>
              </li>
              <li>
                <a href="#">Boat & Lagoon Tours</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>📍 Sri Lanka</li>
              <li>📞 +94 77 123 4567</li>
              <li>✉️ info@tourlanka.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          © 2026{" "}
          <span className="text-yellow-400 font-semibold">TourLanka</span>. All
          rights reserved. Luxury Sri Lanka Tours & Experiences.
        </div>
      </div>
    </footer>
  );
}
