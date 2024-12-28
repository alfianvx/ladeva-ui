import Image from "next/image";
import { Button } from "./ui/button";
import { IconArrowRight, IconBrandWhatsapp } from "@irsyadadl/paranoid";
import Link from "next/link";
import { WhatsAppNumber } from "@/lib/whatsapp-number";

export default function Intro() {
  return (
    <div className="w-full px-5">
      <section className="flex flex-col items-center pt-48 pb-16 md:pb-20 md:px-0 justify-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8 md:text-5xl">
          Digitize your business quickly and precisely
          <span className="text-ladeva">.</span>
        </h1>
        <div className="grid mb-10 space-y-4 md:space-y-0 place-items-center md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex items-center justify-center text-sm md:text-base"
            >
              <Image
                src={"/icons/double-check-orange.svg"}
                alt="double-check-icon"
                className="w-5 h-5 mr-1 md:mr-2"
                width={30}
                height={30}
              />
              {offer.title}
            </div>
          ))}
        </div>
        <Button
          className="w-full text-white transition duration-150 ease-in md:max-w-max p-7 bg-ladeva hover:bg-ladeva hover:shadow-xl"
          variant="secondary"
          asChild
        >
          <Link
            target="_blank"
            href={`https://wa.me/${WhatsAppNumber}?text=Halo%20saya%20tertarik%20memesan%20aplikasi.%20Bisa%20dibantu%3F`}
          >
            <IconBrandWhatsapp className="mr-2" />
            Start your dream project
          </Link>
        </Button>
        <div className="flex py-8 space-x-1">
          <p className="text-sm md:text-base">
            <span className="mr-1 text-ladeva">1 Slot left.</span>Wanna to talk
            first?
          </p>
          <Link
            target="_blank"
            href={`https://wa.me/${WhatsAppNumber}?text=Halo%20saya%20tertarik%20memesan%20aplikasi.%20Bisa%20dibantu%3F`}
            className="flex items-center text-sm transition duration-150 md:text-base group hover:text-ladeva"
          >
            Get in touch{" "}
            <IconArrowRight className="w-5 h-5 ml-[2px] group-hover:translate-x-1 transition duration-150" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const offers = [
  {
    id: 1,
    title: "Transparent fees from the start",
  },
  {
    id: 2,
    title: "Latest technology",
  },
  {
    id: 3,
    title: "Fast Working Process",
  },
];
