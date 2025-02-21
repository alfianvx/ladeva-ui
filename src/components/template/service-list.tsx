"use client";
import Image from "next/image";
import { getServices } from "@/service/Services";
import { useQuery } from "@tanstack/react-query";
import { ServiceSkeleton } from "../skeletons";

export default function ServiceList() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["GET - SERVICES"],
    queryFn: getServices,
  });

  if (isLoading) return <ServiceSkeleton />;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {services?.data.map((service) => (
        <div
          className="p-4 transition-transform duration-300 ease-in-out border rounded-lg cursor-pointer md:px-5 md:py-3 hover:border-yellow-400 hover:shadow-lg hover:transform hover:-translate-y-1"
          key={service.id}
        >
          <div className="flex mb-3 items-center gap-3 transition-transform duration-300 ease-in-out">
            <Image
              src={service.icon_url}
              className="transition-transform duration-300 ease-in-out w-14 md:w-auto"
              alt="3d-icon"
              width={50}
              height={50}
              quality={100}
              priority
            />
            <h1 className="text-sm font-bold transition-transform duration-300 ease-in-out md:text-base">
              {service.title}
            </h1>
          </div>
          <p className="text-xs leading-7 transition-transform tracking-wide duration-300 ease-in-out md:text-sm">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
