import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import bouquets from "/public/data.json"; // ✅ NOT public

const BouquetCollections = () => {
  return (
    <section className="py-20 p-6 lg:p-20 bg-info overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">
          FLWR Bouquet Collections
        </h2>
        <p className="mt-3 text-secondary/70 max-w-xl mx-auto">
          Thoughtfully curated blooms for every moment, mood, and memory.
        </p>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="max-w-6xl mx-auto py-20"
      >
        {bouquets.map((bouquet) => (
          <SwiperSlide key={bouquet.id}>
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-lg">
              <img
                src={bouquet.image}
                alt={bouquet.short_title}
                className="h-[280px] w-full p-6 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary">
                  {bouquet.short_title}
                </h3>

                <p className="text-sm text-primary/70 mt-1">
                  {bouquet.short_description}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-primary font-bold">
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

export default BouquetCollections;
