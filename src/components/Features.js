import { FaShip, FaHotel, FaMapMarkedAlt } from "react-icons/fa";
import "@/styles/Features.css";

export default function Features() {
  const features = [
    {
      title: "Private Tours",
      desc: "Tailor-made travel experiences designed exclusively for you.",
      icon: <FaShip />,
    },
    {
      title: "Luxury Travel",
      desc: "Premium hotels, comfortable transport, and curated itineraries.",
      icon: <FaHotel />,
    },
    {
      title: "Local Experts",
      desc: "Explore Sri Lanka with trusted local specialists and guides.",
      icon: <FaMapMarkedAlt />,
    },
  ];

  return (
    <section className="features-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="features-title">
          Why Choose <span>Us</span>
        </h2>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div className="feature-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
