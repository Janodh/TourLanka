"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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
          <Link href="/" className="navbar-link" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="/about"
            className="navbar-link"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/tours"
            className="navbar-link"
            onClick={() => setOpen(false)}
          >
            Tours
          </Link>
          <Link
            href="/contact"
            className="navbar-link"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <button className="navbar-cta mobile-cta">Book Now</button>
        </nav>

        <button className="navbar-cta desktop-cta">Book Now</button>
      </div>
    </header>
  );
}
