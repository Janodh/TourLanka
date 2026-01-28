import "@/styles/ToursPreview.css";

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
  ];

  return (
    <section className="tours-section">
      <div className="container">
        <h2 className="section-title">Popular Experiences</h2>

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
