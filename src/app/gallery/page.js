"use client";

import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

const images = [
  { src: "/gallery1.jpg", alt: "Negombo Lagoon Tour" },
  { src: "/gallery2.jpg", alt: "Mangrove Boat Ride" },
  { src: "/gallery3.jpg", alt: "Sunset Lagoon Cruise" },
  { src: "/gallery4.jpg", alt: "Bird Watching" },
  { src: "/gallery5.jpg", alt: "Fishing Village" },
  { src: "/gallery6.jpg", alt: "Captain Fernando Boat" },
  { src: "/gallery7.jpg", alt: "Island Ecosystem" },
  { src: "/gallery8.jpg", alt: "Nature & Wildlife" },
];

export default function GalleryPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <section>
      <Breadcrumbs
        breadcrumbItems={breadcrumbItems}
        title="Gallery"
        text="Explore unforgettable moments from our lagoon and nature tours."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-white text-sm p-4">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
