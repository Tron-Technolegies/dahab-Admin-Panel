import React from "react";

import Loading from "../../Loading";
import ProductCard from "../ProductCard";

export default function FeaturedSection({ loading, products }) {
  return (
    <div>
      <h4 className="text-2xl font-semibold text-[#1ECBAF]">
        Featured Products
      </h4>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10">
          {products.slice(0, 4).map((x) => (
            <ProductCard
              key={x._id}
              name={x.productName}
              img={x.productImage}
              price={x.price}
              id={x._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
