"use client";
import Image from "next/image";
import Link from "next/link";
import { getPricings } from "@/service/Pricing";
import { WhatsAppNumber } from "@/lib/whatsapp-number";
import { useQuery } from "@tanstack/react-query";
import { PricingSkeleton } from "../skeletons";
import { Button } from "../ui/button";

export default function PricingList() {
  const { data: pricings, isLoading } = useQuery({
    queryKey: ["GET - PRICINGS"],
    queryFn: getPricings,
  });

  if (isLoading) return <PricingSkeleton />;
  const highlightedPricings = pricings?.data.filter(
    (pricing: TPricing) => pricing.is_featured === true
  );
  return (
    <div className="grid w-full max-w-5xl grid-cols-5 gap-3 mt-5 md:mt-8">
      {pricings?.data
        .filter((pricing) => pricing.is_featured === false)
        .map((pricing) => (
          <div
            key={pricing.id}
            className="bg-[#F1F5F9] p-5 rounded-2xl col-span-5 md:col-span-2"
          >
            <h3 className="mb-2 text-3xl font-bold">
              Free <span className="text-stone-400">Consul</span>
            </h3>
            <p className="text-sm">Don&apos;t hesitate, contant us</p>
            <ul className="flex flex-col gap-3 my-6 md:my-8">
              {pricing.offer.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Image
                    src={"/icons/double-check-orange.svg"}
                    width={24}
                    height={24}
                    alt="double-check-icon"
                    priority
                    quality={100}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              className="flex justify-center w-full py-6 font-medium border border-stone-900 rounded-xl"
              asChild
              variant="outline"
            >
              <Link
                target="_blank"
                href={`https://wa.me/${WhatsAppNumber}?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Standar.%20Bisa%20berikan%20informasi%20lebih%20lanjut%3F`}
              >
                Try Us
              </Link>
            </Button>
          </div>
        ))}

      {highlightedPricings?.map((pricing) => (
        <div
          key={pricing.id}
          className="bg-[#ED6244] text-white p-5 rounded-2xl col-span-5 md:col-span-3"
        >
          <h3 className="mb-2 text-2xl font-bold">{pricing.title}</h3>
          <p className="text-sm">{pricing.description}</p>
          <ul className="grid grid-cols-1 gap-3 my-6 md:my-8 md:grid-cols-2 md:grid-rows-3">
            {pricing.offer.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Image
                  src={"/icons/double-check-light.svg"}
                  width={24}
                  height={24}
                  priority
                  quality={100}
                  alt="double-check-icon"
                />
                {item}
              </li>
            ))}
          </ul>
          <Button
            className="flex justify-center w-full py-6 font-medium rounded-xl bg-white text-[#ED6244] hover:bg-[#f8866c] hover:text-white"
            asChild
            variant="secondary"
          >
            <Link
              target="_blank"
              href={`https://wa.me/${WhatsAppNumber}?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Premium.%20Bisa%20berikan%20informasi%20lebih%20lanjut%3F`}
            >
              Create my Application
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}

// DUMMY DATA
const packages = {
  free: {
    title: "Free Consul",
    description: "don't hesitate contant us",
    features: [
      "Consul before manufacturing",
      "Consul after creation",
      "Lifetime application warranty",
    ],
  },
  installment: {
    title: "2X payment installment",
    description: "Cost can be custumized",
    features: [
      "Dp for initial payment",
      "Discussion on adding features",
      "Repayment when completed",
      "Cost can be adjusted",
      "Total cost is disclosed in advance",
      "Available profit sharing feature",
    ],
  },
};
