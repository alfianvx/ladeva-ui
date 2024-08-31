import Image from "next/image";
import { InfiniteMovingCards } from "./infininite-moving-cards";

const images = [
  {
    id: 1,
    src: "/products/academy-mastership.svg",
  },
  {
    id: 2,
    src: "/products/garansiindonesia.svg",
  },
  {
    id: 3,
    src: "/products/strongneurology.svg",
  },
];

const brands = [
  {
    id: 1,
    src: "/brands/tut-wuri-handayani.svg",
  },
  {
    id: 2,
    src: "/brands/pertamina.svg",
  },
  {
    id: 3,
    src: "/brands/mooxevents.svg",
  },
  {
    id: 4,
    src: "/brands/chifi.svg",
  },
  {
    id: 5,
    src: "/brands/scu-perkisemarang.svg",
  },
  {
    id: 6,
    src: "/brands/pemkab.svg",
  },
  {
    id: 7,
    src: "/brands/sunat-ceria.svg",
  },
];

export default function Projects() {
  return (
    <section className="overflow-hidden py-7 md:py-10">
      <InfiniteMovingCards items={images} direction="left" speed="fast" />
      <InfiniteMovingCards items={images} direction="right" speed="slow" />
      <div className="flex flex-wrap items-center justify-center max-w-5xl gap-3 px-5 py-10 mx-auto md:gap-9 md:py-16 md:px-0">
        {brands.map((brand) => (
          <Image
            key={brand.id}
            src={brand.src}
            alt="brand-logo"
            width={250}
            height={100}
            className="w-[20%] md:w-20 mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
