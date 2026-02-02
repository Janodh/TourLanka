"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function TourSwiper({ images = [], title, height }) {
  if (!images.length) return null;

  return (
    <div className="relative w-full h-full" style={{ height }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={1200}
        loop
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <Image src={img} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-10 left-10 text-white">
                <h1 className="text-3xl md:text-5xl font-black leading-tight">
                  {title}
                </h1>
                <p className="mt-2 text-white/80">
                  Discover Sri Lanka with local experts
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
