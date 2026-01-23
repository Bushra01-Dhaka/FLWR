import shop1 from "../../assets/shop1.jpg";
import shop2 from "../../assets/shop2.jpg";
import shop3 from "../../assets/shop3.jpg";

const shops = [
  {
    id: 1,
    name: "FLWR — Gulshan",
    address: "Road 12, Gulshan 1, Dhaka",
    opened: "Opened in 2021",
    image: `${shop1}`,
    description:
      "Our first FLWR space, designed as a calm floral studio where thoughtful bouquets meet everyday moments.",
  },
  {
    id: 2,
    name: "FLWR — Dhanmondi",
    address: "Satmasjid Road, Dhanmondi",
    opened: "Opened in 2023",
    image: `${shop2}`,
    description:
      "A neighborhood-focused shop bringing seasonal blooms and handcrafted arrangements closer to the community.",
  },
  {
    id: 3,
    name: "FLWR — Banani",
    address: "Block C, Banani",
    opened: "Opened in 2024",
    image: `${shop3}`,
    description:
      "Our newest space, blending modern design with natural textures to create a serene floral experience.",
  },
];

const OurShops = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-primary my-10 rounded-2xl shadow-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-outfit text-secondary mb-4">
            Our Shops
          </h2>
          <p className="text-secondary/70 max-w-xl mx-auto">
            Visit our physical spaces across the city, where FLWR comes to life
            through scent, texture, and care.
          </p>
        </div>

        {/* Shops */}
        <div className="space-y-24">
          {shops.map((shop, index) => (
            <div
              key={shop.id}
              className={`flex flex-col lg:flex-row items-center gap-12
              ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="flex-1"
              >
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Info */}
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="flex-1 text-start"
              >
                <h3 className="text-2xl font-semibold font-outfit text-secondary mb-3">
                  {shop.name}
                </h3>

                <p className="text-secondary/80 mb-4 leading-relaxed">
                  {shop.description}
                </p>

                <div className="space-y-1 text-sm text-secondary/70">
                  <p>
                    <span className="font-medium">Address:</span> {shop.address}
                  </p>
                  <p>
                    <span className="font-medium">Established:</span>{" "}
                    {shop.opened}
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

export default OurShops;
