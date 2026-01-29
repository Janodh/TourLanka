"use client";

import { useState } from "react";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Breadcrumbs
        title="Contact Us"
        text="Have questions or want to book a tour? Get in touch with us."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* RIGHT FORM */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full border p-3 rounded-lg"
              />

              <button
                disabled={loading}
                className="w-full bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && <p className="text-center text-sm mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
