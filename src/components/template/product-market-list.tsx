import ProductMarketCard from "./product-market-card";
import React from "react";

export default async function ProductMarketList({
  data,
}: {
  data: TProduct[];
}) {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-5 pt-5 md:pt-10 md:grid-cols-3 pb-14">
        {data.map((product, index) => (
          <ProductMarketCard key={index} data={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="py-3 text-sm border rounded-full md:text-base px-14 border-ladeva text-ladeva hover:bg-ladeva hover:text-white transition duration-150 ease-in-out">
          Load More
        </button>
      </div>
    </React.Fragment>
  );
}
