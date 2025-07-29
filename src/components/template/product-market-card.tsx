import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { WhatsAppNumber } from "@/lib/whatsapp-number";

export default function ProductMarketCard({ data }: { data: TProduct }) {
  return (
    <div className="bg-[#F1F5F9] border border-stone-100 overflow-hidden rounded-xl group hover:cursor-pointer">
      <div className="w-full overflow-hidden h-80 flex items-center justify-center bg-white">
        <Image
          src={data.thumbnail_url}
          alt={data.name}
          className="object-contain w-full h-60 transition-transform group-hover:scale-105"
          width={300}
          height={300}
        />
      </div>
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold">{data.name}</h2>
        <p className="text-sm text-pretty">{data.short_description}</p>
        <div className="flex items-center gap-2 mt-5">
          <Button
            asChild
            className="w-full bg-[#FFE8E3] hover:bg-[#FFE8E3] text-ladeva shadow-none rounded-lg"
          >
            <Link href={`/market/product/${data.slug}`}>Demo</Link>
          </Button>
          <Button
            asChild
            className="w-full text-white bg-ladeva hover:bg-ladeva shadow-none rounded-lg"
          >
            <Link
              target="_blank"
              href={`https://wa.me/${WhatsAppNumber}?text=Halo%20saya%20tertarik%20dengan%20aplikasi%20${data.name}.%20Bisa%20dibantu%3F`}
            >
              I want this
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
