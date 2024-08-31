import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <section className="flex flex-col items-center justify-center px-5 mx-auto my-8 md:my-20 max-w-7xl md:px-0">
      <h1 className="text-2xl font-semibold text-center md:text-4xl">
        SaaS Ladeva Application<span className="text-ladeva">.</span>
      </h1>
      <span className="max-w-4xl py-3 text-sm text-center md:py-5">
        We provide ready-to-use applications that will facilitate your work in
        various sectors.
      </span>
      <button
        className="py-4 rounded-full px-8 md:px-10 bg-gradient-to-r from-[#A18CD1] to-[#FBC2EB] text-white
 border my-5 md:my-10"
      >
        <Link href={"/markets"} className="block text-sm md:text-base">
          Learn More
        </Link>
      </button>
      <div className="flex flex-wrap items-center justify-center max-w-5xl py-5 mx-auto gap-7 md:gap-9 md:py-16">
        {products.map((brand) => (
          <Image
            key={brand.id}
            src={brand.src}
            alt="brand-logo"
            width={250}
            height={100}
            className="mx-auto md:w-[15%] w-[30%]"
          />
        ))}
      </div>
    </section>
  );
}

const products = [
  {
    id: 1,
    src: "/products/smart-jimpitan.svg",
  },
  {
    id: 2,
    src: "/products/digilab.svg",
  },
  {
    id: 3,
    src: "/products/digirim.svg",
  },
  {
    id: 4,
    src: "/products/sewa-toko.svg",
  },
  {
    id: 5,
    src: "/products/web-sekolah.svg",
  },
];
