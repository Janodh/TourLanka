import { FaLeaf, FaUsers, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import "@/styles/about.css";

import Breadcrumbs from "@/components/Breadcrumbs"; // import Breadcrumbs component

export default function AboutUs() {
  // Breadcrumb items with optional custom labels
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about", customLabel: "About Us" },
  ];
  return (
    <section className="">
      <Breadcrumbs
        breadcrumbItems={breadcrumbItems}
        title="The Story of Captain Fernando"
        text="Captain Fernando Boat Tours began as a family fishing tradition on the Negombo Lagoon and has grown into one of Sri Lanka’s most trusted eco-tourism operators."
      />

      {/* HISTORY */}
      <div className="about-section bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <h3 className="about-subtitle">From Humble Beginnings</h3>
              <p className="about-text">
                Following the Fernando family tradition of prawn fishing, Romesh
                Fernando began working on the lagoon with his father in 2014. In
                2015, he launched the first tour boat
                <span className="about-highlight"> “Sophie Rose”</span>.
              </p>
              <p className="about-text">
                The success of this venture led to the registration of
                <span className="about-highlight">
                  {" "}
                  Captain Fernando (PVT) Ltd
                </span>
                in 2018. Today, the company operates modern motorboats and
                kayaks from its headquarters,{" "}
                <span className="about-highlight">Captain’s Landing</span>.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-header">
                <FaUsers className="about-icon" />
                <h4>Community Partnerships</h4>
              </div>
              <p className="about-text">
                Captain Fernando works in partnership with the local lagoon
                community, supporting catamaran sailing, fishing, kayaking, and
                large group tours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ECO */}
      {/* VISION & MISSION */}
      <div className="about-section bg-white text-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="about-subtitle text-center mb-12">
            Our Vision & Mission
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="vision-card">
              <h4 className="vision-title">Our Vision</h4>
              <p className="about-text">
                To become Sri Lanka’s most trusted and respected lagoon
                eco-tourism operator, offering unforgettable nature-based
                experiences while preserving the beauty of Negombo Lagoon for
                future generations.
              </p>
            </div>

            {/* Mission */}
            <div className="mission-card">
              <h4 className="vision-title">Our Mission</h4>
              <p className="about-text">
                To provide safe, high-quality and authentic lagoon tours that
                support local communities, protect natural ecosystems, and
                deliver memorable experiences through professional service and
                responsible tourism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SAFETY */}
      <div className="about-section bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <h3 className="about-subtitle text-center mb-12">
            Safe & Professional Boat Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Clean, modern boats with low-noise engines",
              "Licensed tourism boats with safety certification",
              "Public liability insurance coverage",
              "Full safety equipment on all boats",
              "Qualified Coxswain-certified skipper",
              "Fluent English-speaking guides",
              "Modern guest facilities at Captain’s Landing",
              "Certified by Sri Lanka Tourism Development Authority",
            ].map((item) => (
              <div key={item} className="about-list-card">
                <FaCheckCircle className="about-check" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST */}

      <div className="about-section bg-white text-dark text-center">
        <div className="max-w-7xl mx-auto ">
          <img
            src="/sltda-logo.png"
            alt="SLTDA Logo"
            className="mx-auto trust-logo"
          />

          <p className="font-semibold text-dark mt-4">
            SLTDA Registered Eco-Tourism Operator
          </p>

          <p className="text-sm">
            Registration No:
            <span className="about-highlight"> SLTDA/SQA/WS/00116</span>
          </p>

          <p className="mt-4">
            With Captain Fernando, you are in safe and professional hands.
          </p>
        </div>
      </div>
    </section>
  );
}
