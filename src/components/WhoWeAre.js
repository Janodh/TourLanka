export default function WhoWeAre() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-dark">
            Negombo Lagoon and Waterways
          </h2>

          <p className="mt-2 text-lg font-semibold text-primary">
            With Captain Fernando Boat Tours
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Get up close with nature cruising through the colourful wilderness
            of fishing boats, coconut palms, mangrove forests, birds and marine
            creatures on Negombo Lagoon. Experience fishing village life and
            cultural heritage while enjoying breathtaking sunsets.
          </p>

          <div className="mt-8 bg-primary/10 px-6 py-3 rounded-xl text-center">
            <p className="text-primary font-medium mb-4">
              ✔ Certified by Sri Lanka Tourism Development Authority (SLTDA)
            </p>
            <img
              src="/sltda-logo.png"
              alt="SLTDA Logo"
              className="mx-auto h-50 w-auto"
            />
          </div>
        </div>

        <img
          src="/tailer_made_tour_photo_010.jpg"
          alt="Negombo Lagoon"
          className="rounded-3xl shadow-2xl h-100 w-full object-cover"
        />
      </div>
    </section>
  );
}
