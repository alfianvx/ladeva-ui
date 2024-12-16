import Image from "next/image";
import { InfiniteMovingCards } from "./infininite-moving-cards";
import PartnerList from "./template/partner-list";

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

export default function Projects() {
  return (
    <section className="overflow-hidden py-7 md:py-10">
      <InfiniteMovingCards
        items={images}
        direction="left"
        speed="fast"
        pauseOnHover={false}
      />
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
      <PartnerList />
    </section>
  );
}
