"use client";
import { getPartners } from "@/service/Partner";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { PartnerListSkeleton } from "../skeletons";

export default function PartnerList() {
  const { data: partners, isLoading } = useQuery({
    queryKey: ["GET - PARTNERS"],
    queryFn: getPartners,
  });

  if (isLoading) return <PartnerListSkeleton />;

  return (
    <div className="flex flex-wrap items-center justify-center max-w-5xl gap-14 px-5 py-14 mx-auto md:gap-9 md:py-24 md:px-0">
      {partners?.data.map((partner) => (
        <Image
          key={partner.id}
          src={partner.logo_url}
          alt={partner.name}
          width={100}
          height={20}
          priority
          quality={100}
          className="w-28 h-14 saturate-0 hover:saturate-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        />
      ))}
    </div>
  );
}
