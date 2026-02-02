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
import TourSwiper from "@/components/TourSwiper";
import "@/styles/TourInnerPage.css";

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
    image: ["/adventure.jpg", "/negombo.webp"],
    summary:
      "Cruise through mangrove forests, fishing villages and the historic Dutch Canal.",
    description:
      "Captain Fernando welcomes you on a tropical lagoon adventure through fishing villages, mangrove forests, birdlife and calm lagoon waters.",
  },
  {
    slug: "muthurajawela-marshes",
    title: "Muthurajawela Marshes Nature Reserve",
    price: "LKR 8,000",
    duration: "3 hours",
    tourType: "Shared",
    groupSize: "Min 2",
    age: "All ages",
    fitness: "Low",
    departure: "Muthurajawela, Negombo",
    times: ["7:00 AM", "9:00 AM", "3:30 PM"],
    image: ["/Muthurajawela.jpg", "/adventure.jpg"],
    summary:
      "Explore Sri Lanka’s largest coastal wetland rich in birdlife and mangroves.",
    description:
      "A peaceful boat safari through the Muthurajawela marshes showcasing diverse wildlife, serene waterways, and lush mangroves.",
  },
  {
    slug: "cultural-village-tour",
    title: "Cultural Village Tour",
    price: "LKR 6,500",
    duration: "4 hours",
    tourType: "Shared",
    groupSize: "Min 2",
    age: "All ages",
    fitness: "Low",
    departure: "Negombo Village",
    times: ["9:00 AM", "1:00 PM", "3:00 PM"],
    image: ["/NewPrivateTour_new_.jpg"],
    summary:
      "Experience the local culture, customs, and traditional crafts of Sri Lanka.",
    description:
      "Visit a traditional village to learn about local life, arts, and crafts, enjoy cultural performances and interact with the friendly locals.",
  },
  {
    slug: "beach-sunset-cruise",
    title: "Beach Sunset Cruise",
    price: "LKR 5,000",
    duration: "2.5 hours",
    tourType: "Shared",
    groupSize: "Min 2",
    age: "All ages",
    fitness: "Low",
    departure: "Negombo Beach",
    times: ["4:00 PM", "5:30 PM"],
    image: ["/tailer_made_tour_photo_010.jpg"],
    summary: "Relax and enjoy a stunning beach sunset from the water.",
    description:
      "Set sail along the coast as the sun sets, offering a perfect mix of relaxation, scenic views, and photography opportunities.",
  },
  {
    slug: "mangrove-kayaking-adventure",
    title: "Mangrove Kayaking Adventure",
    price: "LKR 7,500",
    duration: "2 hours",
    tourType: "Adventure",
    groupSize: "Min 2",
    age: "12+",
    fitness: "Medium",
    departure: "Negombo Mangroves",
    times: ["7:30 AM", "3:30 PM"],
    image: ["/NewPrivateTour_new_.jpg"],
    summary: "Kayak through the dense mangrove forests of Negombo.",
    description:
      "An active adventure kayaking through winding waterways surrounded by mangroves and observing local wildlife up close.",
  },
  {
    slug: "bird-watching-lagoon-safari",
    title: "Bird Watching Lagoon Safari",
    price: "LKR 7,000",
    duration: "3 hours",
    tourType: "Shared",
    groupSize: "Min 2",
    age: "All ages",
    fitness: "Low",
    departure: "Negombo Lagoon",
    times: ["6:30 AM", "4:00 PM"],
    image: ["/tailer_made_tour_photo_010.jpg"],
    summary: "Spot a variety of bird species in their natural habitat.",
    description:
      "A guided boat tour focused on birdwatching, exploring the rich lagoon ecosystem and its diverse birdlife.",
  },
  {
    slug: "private-family-boat-tour",
    title: "Private Family Boat Tour",
    price: "LKR 10,000",
    duration: "2 hours",
    tourType: "Private",
    groupSize: "Family",
    age: "All ages",
    fitness: "Low",
    departure: "Negombo Harbor",
    times: ["Flexible"],
    image: ["/adventure.jpg"],
    summary: "Enjoy a private boat tour for your family.",
    description:
      "A personalized family-friendly boat tour that allows flexibility in timing and route to make special memories on the water.",
  },
  {
    slug: "luxury-catamaran-experience",
    title: "Luxury Catamaran Experience",
    price: "LKR 15,000",
    duration: "3 hours",
    tourType: "Luxury",
    groupSize: "Min 2",
    age: "All ages",
    fitness: "Low",
    departure: "Negombo Harbor",
    times: ["Sunset Only"],
    image: ["/Muthurajawela.jpg", "/adventure.jpg"],
    summary: "Experience the lagoon in style aboard a luxury catamaran.",
    description:
      "Sail in comfort and luxury while enjoying sunset views, refreshments, and a serene cruise along the lagoon waters.",
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

  const moreTours = tours.filter((t) => t.slug !== slug);

  const shuffledTours = moreTours.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section className="bg-white">
      {/* Tour Images */}
      <div className="relative h-[480px] lg:h-[550px] mt-15">
        <TourSwiper
          images={Array.isArray(tour.image) ? tour.image : [tour.image]}
          title={tour.title}
          height="100%"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Tour Description */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            About the Tour
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {tour.description}
          </p>
        </div>

        {/* Tour Details Card */}
        <div className="relative bg-white/30 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-1">
          {/* Card Title */}
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 drop-shadow-md">
            Tour Details
          </h3>

          {/* Details List */}
          <ul className="space-y-5 text-gray-800">
            <li className="flex items-center gap-4">
              <FaShip className="text-green-500 w-6 h-6" />
              <span className="font-medium">{tour.tourType}</span>
            </li>
            <li className="flex items-center gap-4">
              <FaClock className="text-green-500 w-6 h-6" />
              <span className="font-medium">{tour.duration}</span>
            </li>
            <li className="flex items-center gap-4">
              <FaUsers className="text-green-500 w-6 h-6" />
              <span className="font-medium">{tour.groupSize}</span>
            </li>
            <li className="flex items-center gap-4">
              <FaTag className="text-green-500 w-6 h-6" />
              <span className="font-medium">{tour.price}</span>
            </li>
            <li className="flex items-center gap-4">
              <FaChild className="text-green-500 w-6 h-6" />
              <span className="font-medium">{tour.age}</span>
            </li>
            <li className="flex items-center gap-4">
              <FaWalking className="text-green-500 w-6 h-6" />
              <span className="font-medium">{tour.fitness}</span>
            </li>
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-500 w-6 h-6" />
              <span className="font-medium">{tour.departure}</span>
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <FaWhatsapp className="inline mr-2 w-5 h-5" />
            Book via WhatsApp
          </a>
        </div>
      </div>

      <div>
        <div className="px-6 pt-10 pb-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            More adventures waiting for you
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked experiences you may also love
          </p>
        </div>

        <div className="grid sm:grid-cols-2 px-6 py-16  lg:grid-cols-3 gap-8">
          {shuffledTours.map((t) => (
            <Link
              key={t.slug}
              href={`/tours/${t.slug}`}
              className="group relative block overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={Array.isArray(t.image) ? t.image[0] : t.image}
                  alt={t.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/30 transition duration-500" />
              </div>
              <div className="p-6 bg-white/90 backdrop-blur-md -mt-16 relative rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-700 mb-3">{t.summary}</p>
                <span className="text-green-600 font-semibold">{t.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
