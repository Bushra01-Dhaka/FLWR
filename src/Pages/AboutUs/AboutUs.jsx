import florist1 from "../../assets/florist1.jpg";
import florist2 from "../../assets/florist2.jpg";
import florist3 from "../../assets/florist3.jpg";
import OurShops from "../../Components/HomeCompo/OurShops";
const AboutUs = () => {
  return (
    <div className="bg-secondary py-20 px-4 lg:p-20">
      <div className="flex justify-center items-center">
        <div className="flex  flex-col lg:flex-row justify-between items-center text-secondary gap-6">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="flex-1 bg-primary p-10 rounded-xl shadow-2xl "
          >
            <div className="text-start">
              <h2 className="text-4xl font-semibold font-outfit">Our Story</h2>
              <p className="py-6">
                Each bouquet is handcrafted by local florists using seasonal
                blooms, wrapped with care and intention. At FLWR, we believe
                flowers speak in moments where words fall short. Each bouquet is
                thoughtfully designed by local florists using seasonal blooms,
                chosen for their natural beauty and meaning. Wrapped with care
                and intention, our arrangements are created to celebrate life’s
                quiet joys, heartfelt connections, and the simple act of giving.
              </p>
              <p className="py-4">
                FLWR was created from a love for thoughtful details and honest
                beauty. Every bouquet is handcrafted by skilled local florists
                using fresh, seasonal flowers, carefully arranged to feel
                natural and effortless. From the first stem to the final wrap,
                each piece is made with intention — meant to bring warmth,
                emotion, and a sense of calm to every moment it touches.
              </p>
            </div>
          </div>

          <div className="flex-1  grid grid-cols-2 gap-4">
            <img
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="col-span-1 hover: transition-transform rounded-2xl shadow-2xl "
              src={florist1}
              alt=""
            />
            <img
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="col-span-1 rounded-2xl shadow-2xl"
              src={florist3}
              alt=""
            />
            <img
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="col-span-2 rounded-2xl shadow-2xl"
              src={florist2}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* our shops  */}
      <OurShops></OurShops>
    </div>
  );
};

export default AboutUs;
