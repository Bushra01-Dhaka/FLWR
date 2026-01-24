import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-secondary px-6 py-20 lg:py-40 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-outfit lg:text-5xl font-bold text-info">
          Get in Touch with FLWR
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-info/70">
          Whether it’s a special request, florist partnership, or just a hello —
          we’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
        {/* Left Info */}
        <div className="space-y-8">
          <div data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-2xl font-outfit font-semibold text-info mb-3">
              Let’s Talk Flowers
            </h2>
            <p className="text-info/70 leading-relaxed">
              FLWR connects emotions through handcrafted bouquets by local
              florists. Reach out to us for custom orders, support, or
              collaboration.
            </p>
          </div>

          {/* Info Items */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-info text-xl" />
              <p className="text-info/80">Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-info text-xl" />
              <p className="text-info/80">+880 1234 567 890</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-info text-xl" />
              <p className="text-info/80">hello@flwr.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div 
        data-aos="fade-up"
            data-aos-duration="1500"
        className="bg-secondary border-1 border-info rounded-2xl shadow-xl p-8 lg:p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 text-sm border-0 border-b-1 border-info  text-info outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm border-0 border-b-1 border-info  text-info outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 text-sm border-0 border-b-1 border-info  text-info outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-secondary bg-info"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
