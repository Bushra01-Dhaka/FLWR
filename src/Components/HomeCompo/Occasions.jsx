import {
  FaBirthdayCake,
  FaRing,
  FaHeart,
  FaRegSadTear,
  FaSpa
} from "react-icons/fa";

const Occasions = () => {
  const occasions = [
    {
      id: 1,
      title: "Birthday",
      icon: <FaBirthdayCake />,
      bg: "bg-[#F6E8E4]",
      text: "Bright blooms to celebrate another beautiful year."
    },
    {
      id: 2,
      title: "Wedding",
      icon: <FaRing />,
      bg: "bg-[#F1EFEA]",
      text: "Timeless florals crafted for meaningful unions."
    },
    {
      id: 3,
      title: "Anniversary",
      icon: <FaHeart />,
      bg: "bg-[#F4E1EB]",
      text: "Romantic arrangements that honor lasting love."
    },
    {
      id: 4,
      title: "Sympathy",
      icon: <FaRegSadTear />,
      bg: "bg-[#E9EEF1]",
      text: "Gentle blooms offering comfort and remembrance."
    },
    {
      id: 5,
      title: "Self Love",
      icon: <FaSpa />,
      bg: "bg-[#EAF3EC]",
      text: "Because you deserve flowers, just for you."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#FFF6EC">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold font-outfit text-info mb-3">
            Flowers for Every Occasion
          </h2>
          <p className="text-neytral max-w-xl mx-auto">
            Thoughtfully curated bouquets for life’s most meaningful moments.
          </p>
        </div>

        {/* Occasion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {occasions.map(occasion => (
            <div
               data-aos="fade-in"
              data-aos-delay="100"
              key={occasion.id}
              className={`${occasion.bg} rounded-2xl p-6 text-center
              hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center 
                rounded-full bg-info/80 text-secondary text-xl">
                {occasion.icon}
              </div>

              <h3 className="text-lg font-medium text-info mb-2">
                {occasion.title}
              </h3>

              <p className="text-sm text-neutral leading-relaxed">
                {occasion.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Occasions;
