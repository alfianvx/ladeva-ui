import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Faq from "../faq";
import Closing from "../closing";

export default function Market() {
  return (
    <main className="h-full">
      <div className="px-5 pt-48 pb-10 md:px-0">
        <h1 className="text-3xl font-bold text-center md:text-6xl">
          Ladeva
          <span className="ml-1 text-ladeva">Mart.</span>
        </h1>
        <p className="max-w-lg py-3 mx-auto text-sm text-center md:text-base md:py-5">
          not only making costum applications. we also make applications for the
          public that you might need.
        </p>
        <div className="max-w-6xl pt-10 mx-auto md:pt-20">
          <div className="flex items-center justify-end text-sm md:text-base">
            <span className="mr-3">short by :</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-3 pt-5 md:pt-10 md:grid-cols-3 pb-14">
            {[...products, ...products, ...products].map((product, index) => (
              <div
                key={index}
                className="bg-[#F1F5F9] border border-stone-100 overflow-hidden rounded-2xl group hover:cursor-pointer"
              >
                <div className="w-full overflow-hidden h-60">
                  <Image
                    src={product.image_url}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-5">
                  <h2 className="mb-2 text-2xl font-bold">{product.title}</h2>
                  <p className="text-sm text-pretty">{product.description}</p>
                  <div className="flex items-center gap-2 mt-5">
                    <Button
                      asChild
                      className="w-full bg-[#FFE8E3] hover:bg-[#FFE8E3] text-ladeva"
                    >
                      <Link href={product.demo_link} className="">
                        Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full text-white bg-ladeva hover:bg-ladeva"
                    >
                      <Link href={product.demo_link}>I want this</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="py-4 text-sm border rounded-full md:text-lg px-14 border-ladeva text-ladeva">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Faq />
      <Closing />
    </main>
  );
}

const products = [
  {
    image_url: "/products/academy-mastership.svg",
    title: "Academy Mastership",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis doloremque sit fugiat excepturi minima distinctio praesentium commodi omnis explicabo recusandae rerum porro quo nisi, quod blanditiis cupiditate neque facilis?",
    demo_link: "/market/academy-mastership",
  },
  {
    image_url: "/products/garansiindonesia.svg",
    title: "Garansi Indonesia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis doloremque sit fugiat excepturi minima distinctio praesentium commodi omnis explicabo recusandae rerum porro quo nisi, quod blanditiis cupiditate neque facilis?",
    demo_link: "/market/garansi-indonesia",
  },
  {
    image_url: "/products/strongneurology.svg",
    title: "Strong Neurology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis doloremque sit fugiat excepturi minima distinctio praesentium commodi omnis explicabo recusandae rerum porro quo nisi, quod blanditiis cupiditate neque facilis?",
    demo_link: "/market/strong-neurology",
  },
];
