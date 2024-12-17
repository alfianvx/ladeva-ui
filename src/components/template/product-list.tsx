import { getProducts } from "@/service/Product";
import Image from "next/image";

export default async function ProductList() {
  const products = await getProducts();
  return (
    <div className="flex flex-wrap items-center justify-center max-w-5xl py-5 mx-auto gap-7 md:gap-9 md:py-16">
      {products.data.map((product) => (
        <Image
          key={product.id}
          src={product.logo_url}
          alt={product.name}
          priority
          width={100}
          height={100}
          quality={100}
          className="w-28 h-18 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        />
      ))}
    </div>
  );
}
