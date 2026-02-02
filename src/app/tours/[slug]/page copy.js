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
import { notFound } from "next/navigation";

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
  {
    slug: "muthurajawela-marshes",
    title: "Muthurajawela Marshes Nature Reserve",
    price: "LKR 5,500",
    duration: "2 hours",
    tourType: "Shared",
    groupSize: "Min 2",
    age: "All ages",
    fitness: "Low",
    departure: "Dutch Canal, Sea Street, Negombo",
    times: ["8:00 AM", "10:30 AM", "4:30 PM"],
    image: "/Muthurajawela.jpg",
    summary:
      "Explore Sri Lanka’s largest coastal wetland rich in birdlife and mangroves.",
    description:
      "A peaceful boat safari through the Muthurajawela marshes showcasing diverse wildlife, serene waterways, and lush mangroves.",
  },
];

export default async function TourInnerPage({ params }) {
  const { slug } = await params;

  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
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
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About the Tour</h2>
          <p className="text-gray-600 leading-relaxed">{tour.description}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Tour Details</h3>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaShip /> {tour.tourType}
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> {tour.duration}
            </li>
            <li className="flex items-center gap-2">
              <FaUsers /> {tour.groupSize}
            </li>
            <li className="flex items-center gap-2">
              <FaTag /> {tour.price}
            </li>
            <li className="flex items-center gap-2">
              <FaChild /> {tour.age}
            </li>
            <li className="flex items-center gap-2">
              <FaWalking /> {tour.fitness}
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> {tour.departure}
            </li>
          </ul>

          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center border border-green-500 text-green-600 py-3 rounded-xl hover:bg-green-50 transition"
          >
            <FaWhatsapp className="inline mr-2" />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
