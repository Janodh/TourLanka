"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/navbar.css";
import "@/styles/booking-modal.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      country: form.country.value,
      email: form.email.value,
      phone: form.phone.value,
      pax: form.pax.value,
      fromDate: form.fromDate.value,
      toDate: form.toDate.value,
      message: form.message.value,
    };

    const res = await fetch("/api/book-tour", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      alert("Booking request sent successfully!");
      form.reset();
      setShowModal(false);
    } else {
      alert("Failed to send booking. Please try again.");
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            Tour<span>Lanka</span>
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar-toggle ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav links */}
          <nav className={`navbar-links ${open ? "show" : ""}`}>
            {["/", "/about", "/tours", "/contact", "/gallery"].map(
              (path, i) => (
                <Link
                  key={i}
                  href={path}
                  className="navbar-link"
                  onClick={() => setOpen(false)}
                >
                  {["Home", "About", "Tours", "Contact", "Gallery"][i]}
                </Link>
              ),
            )}

            <button
              className="navbar-cta mobile-cta"
              onClick={() => {
                setShowModal(true);
                setOpen(false);
              }}
            >
              Book Now
            </button>
          </nav>

          <button
            className="navbar-cta desktop-cta"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>

            <h2>Book Your Tour</h2>

            <form className="booking-form" onSubmit={handleSubmit}>
              <input name="firstName" placeholder="First Name" required />
              <input name="lastName" placeholder="Last Name" required />
              <input name="country" placeholder="Country" />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <input name="phone" placeholder="Phone Number" required />
              <input
                name="pax"
                type="number"
                placeholder="Pax Size"
                min="1"
                required
              />

              <div className="date-row">
                <input name="fromDate" type="date" required />
                <input name="toDate" type="date" required />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
              ></textarea>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit Booking"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
