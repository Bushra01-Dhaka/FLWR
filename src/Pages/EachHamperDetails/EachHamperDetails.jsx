import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const EachHamperDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [quantity, setQuantity] = useState(1);

  const { data: hamper = {}, isLoading } = useQuery({
    queryKey: ["hamper", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/hampers/${id}`);
      return res.data;
    },
  });

  console.log("Hamper data", hamper)

  if (isLoading) {
    return (
      <div className="py-20 text-center text-secondary">
        Loading hamper details...
      </div>
    );
  }

  const data = hamper[0];

  const totalPrice = (data.price * quantity).toFixed(2);

  return (
    <section className="bg-secondary text-info py-20 lg:py-40 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold font-outfit mb-3">
            {data.title}
          </h1>

          <p className="text-secondary/70 mb-6">
            {data.short_description}
          </p>

          <p className="leading-relaxed mb-8">
            {data.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-6 mb-8">
            <span className="font-semibold">Quantity</span>

            <div className="flex items-center border border-info/30 rounded-full">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 text-lg"
              >
                −
              </button>

              <span className="px-6">{quantity}</span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <p className="text-sm text-secondary/60">
              Price per hamper
            </p>
            <p className="text-2xl font-bold">
              ${totalPrice}
            </p>
          </div>

          {/* Buy Button */}
          <button
            className="
              w-full py-4 
              bg-info text-secondary
              font-semibold text-lg
              hover:bg-info
              transition
            "
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default EachHamperDetails;
