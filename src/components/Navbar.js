"use client";
import Link from "next/link";
import "@/styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Tour<span>Lanka</span>
        </Link>

        <nav className="navbar-links">
          <Link href="/" className="navbar-link">
            Home
          </Link>
          <Link href="/about" className="navbar-link">
            About
          </Link>
          <Link href="/tours" className="navbar-link">
            Tours
          </Link>
          <Link href="/contact" className="navbar-link">
            Contact
          </Link>
        </nav>

        <button className="navbar-cta">Book Now</button>
      </div>
    </header>
  );
}
