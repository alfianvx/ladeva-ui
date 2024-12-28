import Image from "next/image";
import { Button } from "../ui/button";
import { IconBrandWhatsapp } from "@irsyadadl/paranoid";
import Link from "next/link";
import { WhatsAppNumber } from "@/lib/whatsapp-number";

export default function MarketDetail({ data }: { data: TProduct }) {
  return (
    <section>
      <div className="bg-[#F1F5F9] py-8 md:py-10">
        <div className="max-w-5xl px-5 mx-auto md:px-0">
          <h1 className="mb-3 text-2xl font-bold md:text-4xl">{data.name}</h1>
          <p className="text-md">{data.short_description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-5xl gap-2 px-5 py-4 mx-auto md:my-10 md:flex-row md:px-0">
        <Image
          src={data.thumbnail_url}
          alt={data.name}
          className="object-contain w-full h-80"
          priority
          quality={100}
          width={100}
          height={100}
        />
      </div>
      <div className="max-w-5xl px-5 mx-auto my-3 md:px-0">
        <div
          className="prose prose-md !max-w-none"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <div className="flex items-center justify-center my-6 md:my-12">
          <Button
            className="text-sm text-white md:text-md px-7 py-6 bg-ladeva hover:text-black hover:bg-orange-100"
            variant="secondary"
            asChild
          >
            <Link
              target="_blank"
              href={`https://wa.me/${WhatsAppNumber}?text=Halo%20saya%20tertarik%20dengan%20aplikasi%20${data.name}.%20Bisa%20dibantu%3F`}
            >
              <IconBrandWhatsapp className="mr-2" />I Want This Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
