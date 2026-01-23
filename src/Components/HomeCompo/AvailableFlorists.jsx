import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import stuff1 from "../../assets/stuff1.jpg";
import stuff2 from "../../assets/stuff2.jpg";
import stuff3 from "../../assets/stuff3.jpg";
import stuff4 from "../../assets/stuff4.jpg";

const florists = [
  {
    id: 1,
    name: "Luna Florals",
    location: "Gulshan, Dhaka",
    experience: "6 years",
    specialty: "Soft & romantic bouquets",
    rating: 4.8,
    image: `${stuff1}`,
  },
  {
    id: 2,
    name: "Petal Haven",
    location: "Dhanmondi, Dhaka",
    experience: "4 years",
    specialty: "Warm & boho arrangements",
    rating: 4.6,
    image: `${stuff2}`,
  },
  {
    id: 3,
    name: "Bloomora Studio",
    location: "Banani, Dhaka",
    experience: "5 years",
    specialty: "Colorful & wild florals",
    rating: 4.7,
    image: `${stuff3}`,
  },
  {
    id: 4,
    name: "Maison Petal",
    location: "Uttara, Dhaka",
    experience: "8 years",
    specialty: "Minimal & elegant designs",
    rating: 4.9,
    image: `${stuff4}`,
  },
];

const AvailableFlorists = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-info font-outfit mb-4">
            Our Florists
          </h2>
          <p className="text-info/90 max-w-xl mx-auto">
            Meet the talented hands behind every FLWR bouquet.
          </p>
        </div>

        {/* Florist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {florists.map((florist) => (
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1500"
              key={florist.id}
              className="bg-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={florist.image}
                alt={florist.name}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-5 text-start">
                <h3 className="text-lg font-semibold text-primary">
                  {florist.name}
                </h3>

                <p className="text-sm text-primary/70 mt-1">
                  {florist.specialty}
                </p>

                <div className="mt-4 space-y-2 text-sm text-primary/70">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary/60" />
                    <span>{florist.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span>{florist.rating} rating</span>
                  </div>

                  <p className="text-xs text-primary/60">
                    {florist.experience} experience
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableFlorists;
