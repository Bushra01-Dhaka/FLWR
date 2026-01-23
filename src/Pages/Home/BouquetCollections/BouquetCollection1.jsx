import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bouquets from "/public/data.json";

const BouquetCollection1 = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-info">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold font-outfit text-secondary">
          FLWR Bouquet Collections
        </h2>
        <p className="mt-3 text-secondary/70 max-w-xl mx-auto">
          Thoughtfully curated blooms for every moment, mood, and memory.
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="max-w-6xl mx-auto lg:p-20"
      >
        {bouquets.map((bouquet) => (
          <SwiperSlide key={bouquet.id}>
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
              <img
                src={bouquet.image}
                alt={bouquet.short_title}
                className="h-[300px] w-full object-cover p-6"
              />

              <div className="p-5">
                <h3 className="text-lg font-medium text-primary">
                  {bouquet.short_title}
                </h3>

                <p className="text-sm text-primary/70 mt-1">
                  {bouquet.short_description}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-primary font-semibold">
                    ${bouquet.price}
                  </span>
                  <span className="text-xs text-primary/60 capitalize">
                    {bouquet.occasion[0]}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BouquetCollection1;
