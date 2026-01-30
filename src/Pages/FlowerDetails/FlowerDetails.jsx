import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const FlowerDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [quantity, setQuantity] = useState(1);

  const { data: bouquet = {}, isLoading } = useQuery({
    queryKey: ["bouquet", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bouquets/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="py-20 text-center text-secondary">
        Loading bouquet details...
      </div>
    );
  }

  const data = bouquet[0];
  const totalPrice = (data.price * quantity).toFixed(2);

  return (
    <section className="bg-secondary text-info py-20 lg:py-40 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={data.image}
            alt={data.short_title}
            className="
              w-full  object-cover
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-outfit font-bold mb-3">
            {data.short_title}
          </h1>

          <p className="text-secondary/70 mb-6">
            {data.short_description}
          </p>

          <p className="leading-relaxed mb-8">
            {data.description}
          </p>

          {/* Occasion / Category */}
          {data.occasion?.length > 0 && (
            <div className="mb-6">
              <span className="px-4 py-1 rounded-full bg-secondary/20 text-sm">
                Perfect for {data.occasion.join(", ")}
              </span>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-6 mb-8">
            <span className="font-semibold">Quantity</span>

            <div className="flex items-center border border-secondary/30 rounded-full">
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
              Total Price
            </p>
            <p className="text-2xl font-bold">
              ${totalPrice}
            </p>
          </div>

          {/* Buy Now */}
          <button
            className="
              w-full py-4 
              bg-info text-secondary
              font-semibold text-lg
              hover:bg-info/90
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

export default FlowerDetails;
