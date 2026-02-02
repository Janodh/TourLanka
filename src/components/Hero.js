"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/HeroNegombo.webp",
    title: "Discover Luxury Tours",
    highlight: "Negombo Lagoon",
    desc: "Experience serene waterways, mangroves, and island life with private boat tours.",
  },
  {
    image: "/hero13.webp",
    title: "Explore Sri Lanka",
    highlight: "Hidden Nature",
    desc: "From wetlands to wildlife, uncover untouched beauty with expert local guides.",
  },
  {
    image: "/hero4.jpg",
    title: "Travel in Comfort",
    highlight: "Premium Experiences",
    desc: "Tailor-made luxury journeys designed for unforgettable memories.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617]">
      {/* Background images */}
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            active === index ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Text */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ${
              active === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {slide.title} <br />
              <span className="text-yellow-400">{slide.highlight}</span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto text-gray-300">{slide.desc}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tours">
                <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
                  View Tours
                </button>
              </Link>

              <Link href="/about">
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
