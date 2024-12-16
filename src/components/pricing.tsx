import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center px-5 mx-auto my-16 md:my-20 md:px-0 max-w-7xl">
      <h1 className="text-2xl font-bold text-center md:text-4xl">
        Simple pricing<span className="text-ladeva">.</span>
      </h1>
      <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center mx-auto md:py-5">
        we will offer a price and if it is suitable we will start the work.
      </p>
      <div className="grid w-full max-w-5xl grid-cols-5 gap-3 mt-5 md:mt-8">
        <div className="bg-[#F1F5F9] p-5 rounded-2xl col-span-5 md:col-span-2">
          <h1 className="mb-2 text-3xl font-bold">
            Free <span className="text-stone-400">Consul</span>
          </h1>
          <p className="text-sm">Don&apos;t hesitate, contant us</p>
          <ul className="flex flex-col gap-3 my-6 md:my-8">
            {packages.free.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Image
                  src={"/icons/double-check-orange.svg"}
                  width={24}
                  height={24}
                  alt="double-check-icon"
                />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className="flex justify-center w-full py-6 font-medium border border-stone-900 rounded-xl"
            asChild
            variant="outline"
          >
            <Link href={"/"}>Try Us</Link>
          </Button>
        </div>
        <div className="bg-[#ED6244] text-white p-5 rounded-2xl col-span-5 md:col-span-3">
          <h1 className="mb-2 text-2xl font-bold">2X payment installment</h1>
          <p className="text-sm">Cost can be custumized</p>
          <ul className="grid grid-cols-1 gap-3 my-6 md:my-8 md:grid-cols-2 md:grid-rows-3">
            {packages.installment.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Image
                  src={"/icons/double-check-light.svg"}
                  width={24}
                  height={24}
                  alt="double-check-icon"
                />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className="flex justify-center w-full py-6 font-medium rounded-xl bg-white text-[#ED6244] hover:bg-[#f8866c] hover:text-white"
            asChild
            variant="secondary"
          >
            <Link href={"/"}>Create my Application</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

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
