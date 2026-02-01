import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link } from "react-router";
const PlantCollections = () => {
  const axiosSecure = useAxiosSecure();
  const [visibleCount, setVisibleCount] = useState(6);

  const {
    data: plants = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["plants"],
    queryFn: async () => {
      const res = await axiosSecure.get("/plants");
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
      <div className="flex justify-center items-center min-h-[100vh]">
        <span className="loading loading-infinity loading-xl "></span>
      </div>
      
    );
  }

  return (
    <section
      //  data-aos="fade-up" data-aos-duration="1500"
      className="py-20 bg-primary text-secondary px-6 lg:px-20"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl lg:text-5xl font-outfit  font-bold mb-4">
          Indoor Plant Collection
        </h2>
        <p className="text-secondary/70">
          Thoughtfully selected indoor plants to nurture your space, your mood,
          and the people you love.
        </p>
      </div>

      {/* Plant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.slice(0, visibleCount).map((plant) => (
          <Link key={plant.id} to={`/plants/${plant._id}`}>
            <div
              className="
              rounded-2xl overflow-hidden
              bg-white/10 backdrop-blur-lg
              border border-white/20
              shadow-lg hover:shadow-2xl
              transition-all duration-300
            "
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="h-[300px] w-full object-cover p-6
               transition-transform duration-500 ease-out
      hover:scale-110
              "
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{plant.name}</h3>

                <p className="text-sm text-secondary/70 mb-3">
                  {plant.short_description}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold">${plant.price}</span>
                  <span className="capitalize text-secondary/60">
                    {plant.care_level}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < plants.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="
              px-8 py-3 rounded-full
              border border-secondary/40
              hover:bg-secondary hover:text-primary
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

export default PlantCollections;
