import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaChild,
  FaWalking,
  FaTag,
  FaShip,
  FaWhatsapp,
} from "react-icons/fa";
import Breadcrumbs from "@/components/Breadcrumbs";

const tours = [
  {
    slug: "negombo-lagoon-dutch-canal",
    title: "Negombo Lagoon & Historic Dutch Canal",
    price: "LKR 5,500",
    duration: "2 hours",
    tourType: "Shared",
    groupSize: "Min 2",
    age: "All ages",
    fitness: "Low",
    departure: "Dutch Canal, Sea Street, Negombo",
    times: ["8:00 AM", "10:30 AM", "4:30 PM"],
    image: "/adventure.jpg",
    summary:
      "Cruise through mangrove forests, fishing villages and the historic Dutch Canal.",
    description:
      "Captain Fernando welcomes you on a tropical lagoon adventure through fishing villages, mangrove forests, birdlife and calm lagoon waters.",
  },
];

export default function TourInnerPage({ params }) {
  const tour = tours.find((t) => t.slug === params.slug);

  if (!tour) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-bold">Tour not found</h1>
        <Link href="/tours" className="text-yellow-500 underline">
          Back to Tours
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: tour.title, href: `/tours/${tour.slug}` },
  ];

  return (
    <section>
      <Breadcrumbs
        breadcrumbItems={breadcrumbItems}
        title={tour.title}
        text={tour.summary}
      />

      <div className="relative h-[420px]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About the Tour</h2>
          <p className="text-gray-600">{tour.description}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Tour Details</h3>
          <ul className="space-y-3">
            <li>
              <FaShip /> {tour.tourType}
            </li>
            <li>
              <FaClock /> {tour.duration}
            </li>
            <li>
              <FaUsers /> {tour.groupSize}
            </li>
            <li>
              <FaTag /> {tour.price}
            </li>
            <li>
              <FaChild /> {tour.age}
            </li>
            <li>
              <FaWalking /> {tour.fitness}
            </li>
            <li>
              <FaMapMarkerAlt /> {tour.departure}
            </li>
          </ul>

          <a
            href="https://wa.me/94771234567"
            className="mt-6 block text-center border border-green-500 text-green-600 py-3 rounded-xl"
          >
            <FaWhatsapp className="inline mr-2" />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
