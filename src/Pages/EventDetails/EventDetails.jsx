import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const EventDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: event = [], isLoading } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/events/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="py-20 text-center text-info">Loading event story...</div>
    );
  }

  const data = event[0];

  return (
    <section className="bg-secondary text-info py-20 px-6 lg:px-32">
      {/* HERO */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="max-w-4xl pt-10 mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-outfit lg:text-5xl font-bold mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-info/70">{data.short_description}</p>
      </div>

      {/* IMAGE + INTRO */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <img
          src={data.images[0]}
          alt={data.title}
          className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
        />

        <div data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-2xl font-outfit font-semibold mb-4">
            The Story Behind the Event
          </h2>
          <p className="leading-relaxed text-info/80">{data.description}</p>
        </div>
      </div>

      {/* FULL STORY */}
      <div className="max-w-4xl mx-auto mb-20">
        <p
          data-aos="fade-in"
          data-aos-duration="1500"
          className="leading-relaxed text-info/80"
        >
          From the first consultation to the final floral placement, our team
          focused on translating emotion into design. Every bloom was chosen
          based on seasonality, color harmony, and the atmosphere our client
          wanted to create.
        </p>
      </div>

      {/* IMAGE RIGHT */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-2xl font-outfit font-semibold mb-4">
            Designed With Purpose
          </h2>
          <p className="leading-relaxed text-info/80">
            We believe floral decoration should never feel forced. It should
            feel natural, intentional, and deeply personal — a quiet extension
            of the moment itself.
          </p>
        </div>

        <img
          src={data.images[1]}
          alt="Event decoration"
          className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
        />
      </div>

      {/* CLIENT RECOMMENDATION */}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="max-w-3xl mx-auto mb-20 bg-info/10 backdrop-blur-lg border border-info/20 rounded-3xl p-10"
      >
        <p className="italic text-lg leading-relaxed text-info/80">
          “FLWR didn’t just decorate our event — they understood it. Every
          detail felt intentional, elegant, and emotionally aligned with what we
          envisioned.”
        </p>
        <p className="mt-4 font-semibold text-info">— A Happy Client</p>
      </div>

      {/* FINAL IMAGE */}
      <div className="max-w-5xl mx-auto mb-20">
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          src={data.images[2]}
          alt="Final event setup"
          className="rounded-3xl shadow-xl w-full h-[460px] object-cover"
        />
      </div>

      {/* HOW WE FULFILLED */}
      <div
        data-aos="fade-in"
        data-aos-duration="1500"
        className="max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-2xl font-semibold mb-4">
          How We Fulfilled Every Detail
        </h2>
        <p className="leading-relaxed text-info/80">
          Our process begins at least one month prior to the event. We plan,
          source premium florals, coordinate logistics, and execute with
          precision. On the event day, our team handles everything — so our
          clients can simply enjoy the moment.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="mb-4 text-info/70">
          Booking required at least 1 month in advance
        </p>
        <button className="px-10 py-4 rounded-full bg-info text-secondary font-semibold hover:bg-info/90 transition">
          Book This Event
        </button>
      </div>
    </section>
  );
};

export default EventDetails;
