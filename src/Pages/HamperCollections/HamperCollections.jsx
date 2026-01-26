import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";


const HamperCollections = () => {
  const axiosSecure = useAxiosSecure();
  const [visibleCount, setVisibleCount] = useState(6);

  const { data: hampers = [], isLoading, isError } = useQuery({
    queryKey: ["hampers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/hampers");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-info text-secondary text-center">
        <p className="text-lg">Loading hampers...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 bg-info text-secondary text-center">
        <p className="text-lg">Failed to load hampers 🧺</p>
      </section>
    );
  }

  return (
    <section 
     data-aos="fade-in" data-aos-duration="1500"
    className="py-20 bg-blue-950 text-secondary px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-bold mb-4">
          FLWR Gift Hampers
        </h2>
        <p className="text-secondary/70">
          Thoughtfully curated hampers filled with comfort, indulgence,
          and care — perfect for gifting or treating yourself.
        </p>
      </div>

      {/* Hampers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hampers.slice(0, visibleCount).map((hamper) => (
          <div
            key={hamper.id}
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
                src={hamper.image}
                alt={hamper.title}
                className="
                  h-[240px] w-full object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-110
                "
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">
                {hamper.title}
              </h3>

              <p className="text-sm text-secondary/70 mb-3">
                {hamper.short_description}
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">
                  ${hamper.price}
                </span>
                <span className="capitalize text-secondary/60">
                  {hamper.type?.[0]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < hampers.length && (
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

export default HamperCollections;
