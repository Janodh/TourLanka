import "@/styles/ToursPreview.css";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function ToursPreview() {
  const tours = [
    {
      title: "Negombo Lagoon & Historic Dutch Canal",
      duration: "2 hours",
      times: ["8:00 AM", "10:30 AM", "4:30 PM"],
      price: "LKR 5,500",
      age: "All ages",
      fitness: "Low",
      image: "/adventure.jpg",
    },
    {
      title: "Muthurajawela Marshes Nature Reserve",
      duration: "3 hours",
      times: ["7:00 AM", "9:00 AM", "3:30 PM"],
      price: "LKR 8,000",
      age: "All ages",
      fitness: "Low",
      image: "/Muthurajawela.jpg",
    },
    {
      title: "Cultural Village Tour",
      duration: "4 hours",
      times: ["9:00 AM", "1:00 PM", "3:00 PM"],
      price: "LKR 6,500",
      age: "All ages",
      fitness: "Low",
      image: "/NewPrivateTour_new_.jpg",
    },
    {
      title: "Beach Sunset Cruise",
      duration: "2.5 hours",
      times: ["4:00 PM", "5:30 PM"],
      price: "LKR 5,000",
      age: "All ages",
      fitness: "Low",
      image: "/tailer_made_tour_photo_010.jpg",
    },
    {
      title: "Mangrove Kayaking Adventure",
      duration: "2 hours",
      times: ["7:30 AM", "3:30 PM"],
      price: "LKR 7,500",
      age: "12+",
      fitness: "Medium",
      image: "/NewPrivateTour_new_.jpg",
    },
    {
      title: "Bird Watching Lagoon Safari",
      duration: "3 hours",
      times: ["6:30 AM", "4:00 PM"],
      price: "LKR 7,000",
      age: "All ages",
      fitness: "Low",
      image: "/tailer_made_tour_photo_010.jpg",
    },
    {
      title: "Private Family Boat Tour",
      duration: "2 hours",
      times: ["Flexible"],
      price: "LKR 10,000",
      age: "All ages",
      fitness: "Low",
      image: "/adventure.jpg",
    },
    {
      title: "Luxury Catamaran Experience",
      duration: "3 hours",
      times: ["Sunset Only"],
      price: "LKR 15,000",
      age: "All ages",
      fitness: "Low",
      image: "/Muthurajawela.jpg",
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tour", href: "/tour", customLabel: "Our Tours" },
  ];
  return (
    <section className="tours">
      <Breadcrumbs
        breadcrumbItems={breadcrumbItems}
        title="Our Tours"
        text="Discover beautiful lagoon and nature tours for a relaxing experience in Negombo."
      />
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 mt-12 mb-20">
        <div className="tours-grid">
          {tours.map((tour) => (
            <div className="tour-card" key={tour.title}>
              <div
                className="tour-image"
                style={{ backgroundImage: `url(${tour.image})` }}
              >
                <span className="tour-duration">{tour.duration}</span>
              </div>

              <div className="tour-content">
                <h3>{tour.title}</h3>

                <ul>
                  <li>
                    <strong>Departure:</strong> {tour.times.join(", ")}
                  </li>
                  <li>
                    <strong>Age:</strong> {tour.age}
                  </li>
                  <li>
                    <strong>Fitness:</strong> {tour.fitness}
                  </li>
                </ul>

                <div className="tour-footer">
                  <span className="price">{tour.price}</span>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
