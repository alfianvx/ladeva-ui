import Closing from "@/components/closing";
import Faq from "@/components/faq";
import { Button } from "@/components/ui/button";
import { IconBrandWhatsapp } from "@irsyadadl/paranoid";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="h-full pt-28">
      <div className="max-w-5xl mx-auto">
        <Button
          asChild
          variant="secondary"
          className="py-4 px-10 border-ladeva border rounded-full text-base text-ladeva bg-white hover:bg-ladeva hover:text-white"
        >
          <Link href={"/market"}>Back to Market</Link>
        </Button>
      </div>
      <section className="mt-5">
        <div className="bg-[#F1F5F9] py-14">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-semibold mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officia placeat debitis, culpa sapiente sed?
            </h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              autem nisi blanditiis culpa obcaecati nihil amet ratione sunt
              praesentium quia.
            </p>
          </div>
        </div>
        <div className="flex items-center max-w-5xl mx-auto gap-2 my-10">
          <Image
            src="/products/garansiindonesia.svg"
            alt="garansi-indonesia"
            className="w-full h-full object-cover"
            width={300}
            height={300}
          />
          <Image
            src="/products/garansiindonesia.svg"
            alt="garansi-indonesia"
            className="w-full h-full object-cover"
            width={300}
            height={300}
          />
        </div>
        <div className="max-w-5xl mx-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            dolorum nisi illo pariatur harum. Eius voluptate numquam possimus
            facere optio necessitatibus, omnis reprehenderit. Odio quod non nemo
            doloremque totam fugit ea eligendi odit soluta dolorem? Unde ut esse
            iste modi ipsa quod fuga ducimus repellendus officia aut minima
            voluptate, tempore quidem sunt nihil assumenda non obcaecati
            voluptates neque expedita eum veniam dolores. Consequuntur odio
            alias quis quasi molestias, cum deserunt maxime harum obcaecati
            laboriosam dignissimos. Repellendus necessitatibus nihil itaque
            minima obcaecati optio ab, beatae natus exercitationem labore sunt
            alias rem, aliquam totam, tempore voluptatem blanditiis deserunt!
            Reprehenderit voluptatum hic amet.
          </p>
          <div className="flex items-center justify-center my-12">
            <Button
              className="text-base text-white p-7 bg-ladeva hover:text-black hover:bg-orange-100"
              variant="secondary"
            >
              <IconBrandWhatsapp className="mr-2" />I Want This Now
            </Button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <p className="py-4 font-medium text-base">Simmiliar Application</p>
          <div className="grid grid-cols-3 gap-3">
            {products.map((product, index) => (
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
        </div>
      </section>
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
