import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HeroNegombo.webp"
        alt="Luxury travel experience"
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Discover <span className="text-yellow-400">Luxury Tours</span>
          <br /> Made for You
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-gray-300">
          Private luxury tours designed for unforgettable travel experiences.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            View Tours
          </button>

          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}
