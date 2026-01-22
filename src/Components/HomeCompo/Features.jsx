import { FaLeaf, FaRegHeart, FaPalette, FaHandsHelping } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaRegHeart />,
      title: "Handcrafted with Care",
      text: "Every bouquet is thoughtfully arranged by skilled florists with attention to detail and emotion.",
    },
    {
      id: 2,
      icon: <FaLeaf />,
      title: "Fresh & Seasonal Blooms",
      text: "We use carefully selected seasonal flowers to ensure freshness, beauty, and longevity.",
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Curated Color Palettes",
      text: "Each arrangement is designed using harmonious color palettes to match every mood and occasion.",
    },
    {
      id: 4,
      icon: <FaHandsHelping />,
      title: "Florist-Led Design",
      text: "Our collections are created in collaboration with trusted local florists and designers.",
    },
  ];

  return (
    <section className="py-20 px-10 lg:px-20 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-outfit lg:text-4xl font-semibold text-primary mb-4">
            Why Choose FLWR
          </h2>
          <p className="text-neutral max-w-xl mx-auto">
            Thoughtfully designed floral experiences, made to feel personal and
            timeless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              data-aos="fade-in"
              data-aos-delay="100"
              className="text-center  bg-info/10  shadow-info p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-14 h-14 mx-auto mb-6 flex items-center justify-center 
                rounded-full bg-info text-secondary text-2xl"
              >
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-info mb-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
