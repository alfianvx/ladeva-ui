import { getProducts } from "@/service/Product";
import { InfiniteMovingCards } from "./infininite-moving-cards";
import PartnerList from "./template/partner-list";
import { getPortofolios } from "@/service/Portofolio";

export default async function Projects() {
  const portofolios = await getPortofolios();
  return (
    <section className="overflow-hidden py-7 md:py-10">
      <InfiniteMovingCards
        items={portofolios.data}
        direction="left"
        speed="fast"
        pauseOnHover={false}
      />
      <InfiniteMovingCards
        items={portofolios.data}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
      <PartnerList />
    </section>
  );
}
