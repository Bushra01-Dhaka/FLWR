import bannerVideo from "../../assets/whiteFlowers.mp4"; // add your video here
import bannerImg from "../../assets/flowers1.jpg";

const Banner = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative hero min-h-screen p-10 py-20 lg:px-20">
        <div className="hero-content flex flex-col lg:flex-row justify-between items-center text-neutral-content w-full">
          {/* Text Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="lg:flex-1 bg-[#362E2B]/90 lg:relative left-10 p-4 lg:p-10 rounded-xl shadow-2xl shadow-primary text-start backdrop-blur-sm"
          >
            <h1 className="mb-5 font-outfit text-4xl lg:text-5xl text-secondary font-bold leading-tight">
              Let flowers say what words cannot
            </h1>

            <p className="mb-5 text-base text-neutral-200 max-w-md">
              Delicately wrapped and beautifully composed, each bouquet carries
              warmth, intention, and a quiet kind of magic meant to be felt, not
              spoken.
            </p>

            <div className="flex justify-start items-center mt-10 gap-4">
              <button className="btn btn-secondary text-primary">
                Explore Shop
              </button>
              <button className="btn btn-outline btn-secondary text-secondary hover:text-primary">
                Buy Now
              </button>
            </div>
          </div>

          {/* Optional Image Section */}
          <div 
          className="flex-1 hidden lg:block">
            <img
              className="h-[100vh] w-full rounded-md shadow-2xl object-cover shadow-black"
              src={bannerImg}
              alt="Flower Bouquet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
