import Link from "next/link";
import ProductList from "./template/product-list";

export default function Product() {
  return (
    <section className="flex flex-col items-center justify-center px-5 mx-auto my-8 md:my-20 max-w-7xl md:px-0">
      <h1 className="text-2xl font-bold text-center md:text-4xl">
        SaaS Ladeva Application<span className="text-ladeva">.</span>
      </h1>
      <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center mx-auto md:py-5">
        We provide ready-to-use applications that will facilitate your work in
        various sectors.
      </p>
      <button
        className="py-4 rounded-full px-8 md:px-10 bg-gradient-to-r from-[#A18CD1] to-[#FBC2EB] text-white
 border my-5 md:my-10"
      >
        <Link href={"/markets"} className="block text-sm md:text-base">
          Learn More
        </Link>
      </button>
      <ProductList />
    </section>
  );
}
