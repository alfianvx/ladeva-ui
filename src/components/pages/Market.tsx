import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Faq from "../faq";
import Closing from "../closing";

export default function Market() {
  return (
    <main className="h-full">
      <div className="pt-48 pb-10">
        <h1 className="text-6xl font-bold text-center">
          Ladeva
          <span className="text-ladeva ml-1">Mart.</span>
        </h1>
        <p className="max-w-lg mx-auto py-5 text-center">
          not only making costum applications. we also make applications for the
          public that you might need.
        </p>
        <div className="max-w-6xl mx-auto pt-20">
          <div className="flex justify-end items-center">
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
          <div className="grid grid-cols-3 gap-3 pt-10 pb-14">
            {[...products, ...products, ...products].map((product, index) => (
              <div
                key={index}
                className="bg-[#F1F5F9] border border-stone-100 overflow-hidden rounded-2xl group hover:cursor-pointer"
              >
                <div className="w-full h-60 overflow-hidden">
                  <Image
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
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
                      className="w-full bg-ladeva text-white hover:bg-ladeva"
                    >
                      <Link href={product.demo_link}>I want this</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="py-4 px-14 border-ladeva border rounded-full text-lg text-ladeva">
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
