import Image from "next/image";
import { Button } from "./ui/button";
import { IconArrowRight, IconBrandWhatsapp } from "@irsyadadl/paranoid";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex flex-col items-center justify-center w-full mx-auto pt-48 pb-20 max-w-7xl">
      <h1 className="text-5xl font-bold text-center">
        Digitize your business quickly and precisely
        <span className="text-ladeva">.</span>
      </h1>
      <div className="grid grid-cols-3 mt-5 mb-10">
        <div className="flex items-center justify-center ">
          <Image
            src={"/icons/double-check-orange.svg"}
            alt="double-check-icon"
            className="mr-2"
            width={30}
            height={30}
          />
          Transparent fees from the start
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/icons/double-check-orange.svg"}
            alt="double-check-icon"
            className="mr-2"
            width={30}
            height={30}
          />
          Latest telcology
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/icons/double-check-orange.svg"}
            alt="double-check-icon"
            className="mr-2"
            width={30}
            height={30}
          />
          Fast Working Process
        </div>
      </div>
      <Button
        className="text-base text-white p-7 bg-ladeva hover:text-black hover:bg-orange-100"
        variant="secondary"
      >
        <IconBrandWhatsapp className="mr-2" />
        Start your dream project
      </Button>
      <div className="flex py-5 space-x-1">
        <p className="text-base">
          <span className="mr-1 text-ladeva">1 Slot left.</span>Wanna to talk
          first?
        </p>
        <Link
          href={"/"}
          className="flex items-center text-base gr group hover:text-ladeva transition duration-150"
        >
          Get in touch{" "}
          <IconArrowRight className="w-5 h-5 ml-[2px] group-hover:translate-x-1 transition duration-150" />
        </Link>
      </div>
    </section>
  );
}
