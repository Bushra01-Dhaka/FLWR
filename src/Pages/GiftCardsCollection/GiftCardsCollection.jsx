import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Link } from "react-router";

const GiftCardsCollection = () => {
  const axiosSecure = useAxiosSecure();
  const [visibleCount, setVisibleCount] = useState(6);

  const { data: cards = [], isLoading, isError } = useQuery({
    queryKey: ["giftCards"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cards");
      return res.data;
    },
  });

  if (isLoading) {
    return (
    <div className="flex justify-center items-center min-h-[100vh]">
        <span className="loading loading-infinity loading-xl "></span>
      </div>
    );
  }

  if (isError) {
    return (
      <section className="py-20 bg-info text-secondary text-center">
        <p className="text-lg">Failed to load gift cards 🎁</p>
      </section>
    );
  }

  return (
    <section 
    //  data-aos="fade-up" data-aos-duration="1500"
    className="py-20 bg-linear-to-r from-red-900 to-red-800 text-secondary px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-outfit font-bold mb-4">
          FLWR Gift Cards
        </h2>
        <p className="text-secondary/70">
          Let them choose their own blooms, plants, or moments of joy
          with beautifully designed FLWR gift cards.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.slice(0, visibleCount).map((card) => (
          <Link    key={card.id}
          to={`/cards/${card._id}`}
          >
            <div
            className="
              group rounded-2xl overflow-hidden
              bg-white/10 backdrop-blur-lg
              border border-white/20
              shadow-lg hover:shadow-2xl
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="
                  h-[220px] w-full object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-110
                "
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">
                {card.title}
              </h3>

              <p className="text-sm text-secondary/70 mb-3">
                {card.short_description}
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">
                  ${card.price}
                </span>
                <span className="capitalize text-secondary/60">
                  {card.type}
                </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < cards.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="
              px-8 py-3 rounded-full
              border border-secondary/40
              hover:bg-secondary hover:text-info
              transition-all duration-300
              font-medium
            "
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default GiftCardsCollection;
