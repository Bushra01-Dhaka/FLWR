import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import useAxiosSecure from "../../Hook/useAxiosSecure";


const EventsCollection = () => {
  const axiosSecure = useAxiosSecure();

  const { data: events = [], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get("/events");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="py-20 text-center info ">Loading events...</div>
    );
  }

  return (
    <section 
     data-aos="fade-up" data-aos-duration="1500"
    className="bg-accent text-info py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-outfit font-bold info ">
          Events Decoration
        </h2>
        <p className="mt-3 info /70 max-w-2xl mx-auto">
          Thoughtfully designed floral arrangements for life’s most meaningful
          celebrations.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event._id}
            className="rounded-3xl overflow-hidden bg-secondary/10 backdrop-blur-xl border border-secondary/20 shadow-xl"
          >
            {/* Image Slider */}
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="h-[260px]"
            >
              {event.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={event.title}
                    className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Content */}
            <div className="p-6 info ">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase font-semibold bg-secondary/20 px-3 py-1 rounded-full">
                  {event.eventType}
                </span>
                <span className="text-sm font-bold">${event.price}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

              <p className="text-sm info /70 mb-4">
                {event.short_description}
              </p>

              <div className="flex justify-between items-center">
                {/* <span className="text-xs italic info /60">
                  {event.advance_booking}
                </span> */}

                <button className="px-4 py-2 text-sm font-semibold rounded-full bg-secondary text-primary hover:bg-secondary/90 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsCollection;
