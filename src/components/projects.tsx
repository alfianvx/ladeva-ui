"use client";
import { useQuery } from "@tanstack/react-query";
import { InfiniteMovingCards } from "./infininite-moving-cards";
import PartnerList from "./template/partner-list";
import { getPortofolios } from "@/service/Portofolio";
import { ProjectSkeleton } from "./skeletons";

export default function Projects() {
  const { data: portofolios, isLoading } = useQuery({
    queryKey: ["GET - PORTOFOLIOS"],
    queryFn: getPortofolios,
  });

  if (isLoading) return <ProjectSkeleton />;

  return (
    <section className="overflow-hidden py-7 md:py-10">
      <InfiniteMovingCards
        items={portofolios?.data}
        direction="left"
        speed="fast"
        pauseOnHover={false}
      />
      <InfiniteMovingCards
        items={portofolios?.data}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
      <PartnerList />
    </section>
  );
}
