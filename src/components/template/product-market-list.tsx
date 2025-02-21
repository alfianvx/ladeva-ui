"use client";
import React from "react";
import { getProducts } from "@/service/Product";
import ProductMarketCard from "./product-market-card";
import { useQuery } from "@tanstack/react-query";
import { ProductListSkeleton } from "../skeletons";

export default function ProductMarketList() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["GET - PRODUCTS"],
    queryFn: getProducts,
  });

  if (isLoading) return <ProductListSkeleton />;

  if (products?.data.length === 0)
    return (
      <div className="flex justify-center py-10">
        <p className="text-sm text-center md:text-base">No product available</p>
      </div>
    );

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-5 pt-5 md:pt-10 md:grid-cols-3 pb-14">
        {products?.data.map((product, index) => (
          <ProductMarketCard key={index} data={product} />
        ))}
      </div>

      {(products?.data?.length ?? 0) > 6 && (
        <div className="flex justify-center">
          <button className="py-3 text-sm border rounded-full md:text-base px-14 border-ladeva text-ladeva hover:bg-ladeva hover:text-white transition duration-150 ease-in-out">
            Load More
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
