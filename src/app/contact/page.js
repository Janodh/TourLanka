import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import Breadcrumbs from "@/components/Breadcrumbs";

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact", customLabel: "Contact Us" },
  ];

  return (
    <section>
      <Breadcrumbs
        breadcrumbItems={breadcrumbItems}
        title="Contact Us"
        text="Have questions or want to book a tour? Get in touch with us and we’ll be happy to help you."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-gray-600">
              Contact us for tour bookings, custom packages, or any inquiries.
              Our team is ready to assist you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">
                <FaPhoneAlt className="text-yellow-500 text-xl" />
                <span>+94 77 123 4567</span>
              </div>

              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <span>info@captainfernando.lk</span>
              </div>

              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                <span>Negombo Lagoon, Sri Lanka</span>
              </div>
            </div>

            {/* FOLLOW US */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>

              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
