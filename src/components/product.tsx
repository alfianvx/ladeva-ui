import Image from "next/image";

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

export default function Product() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto my-20 max-w-7xl">
      <h1 className="text-4xl font-semibold">
        SaaS Ladeva Application<span className="text-ladeva">.</span>
      </h1>
      <span className="max-w-4xl py-5 text-center">
        We provide ready-to-use applications that will facilitate your work in
        various sectors.
      </span>
      <button
        className="py-4 rounded-full px-10 bg-gradient-to-r from-[#A18CD1] to-[#FBC2EB] text-white
 border my-10"
      >
        Learn More
      </button>
      <div className="flex items-center justify-center max-w-5xl gap-9 py-16 mx-auto">
        {products.map((brand) => (
          <Image
            key={brand.id}
            src={brand.src}
            alt="brand-logo"
            width={250}
            height={100}
            className="mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
