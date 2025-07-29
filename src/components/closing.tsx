import { WhatsAppNumber } from "@/lib/whatsapp-number";
import Image from "next/image";
import Link from "next/link";

export default function Closing() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-5 py-10 mx-auto bg-black md:py-24 md:px-0">
      <h2 className="max-w-4xl leading-relaxed py-5 text-3xl font-extrabold text-center text-white md:text-5xl">
        Digitalize your business with us just one click away
        <span className="text-ladeva">.</span>
      </h2>
      <div className="grid items-center my-5 space-y-4 md:space-y-0 md:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex items-center justify-center text-sm text-white md:text-base"
          >
            <Image
              src={"/icons/double-check-orange.svg"}
              alt="double-check-icon"
              className="w-5 h-5 mr-1 md:w-7 md:h-7 md:mr-2"
              width={30}
              height={30}
            />
            {offer.title}
          </div>
        ))}
      </div>
      <button className="relative inline-block p-1 mt-5 overflow-hidden text-white rounded-full md:mt-10 focus:outline-none">
        <span className="absolute inset-0 bg-gradient-to-r from-[#FCC5E4] via-[#FDA34B] to-[#020F75] rounded-lg"></span>
        <Link
          target="_blank"
          href={`https://wa.me/${WhatsAppNumber}?text=Halo%20saya%20tertarik%20memesan%20aplikasi.%20Bisa%20dibantu%3F`}
          className="relative block px-16 py-3 text-lg bg-black rounded-full md:px-20 md:py-5 md:text-2xl"
        >
          Start a Project
        </Link>
      </button>
    </section>
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
