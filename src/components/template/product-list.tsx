"use client";
import { getProducts } from "@/service/Product";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { ProductLogoSkeleton } from "../skeletons";

export default function ProductList() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["GET - PRODUCTS"],
    queryFn: getProducts,
  });

  if (isLoading) return <ProductLogoSkeleton />;

  return (
    <div className="flex flex-wrap items-center justify-center max-w-5xl py-10 mx-auto gap-14 md:py-16">
      {products?.data.map((product) => (
        <Image
          key={product.id}
          src={product.logo_url}
          alt={product.name}
          priority
          width={100}
          height={100}
          quality={100}
          className="w-32 h-18 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        />
      ))}
    </div>
  );
}
