import Closing from "@/components/closing";
import Faq from "@/components/faq";
import { Button } from "@/components/ui/button";
import { IconBrandWhatsapp } from "@irsyadadl/paranoid";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="h-full pt-28">
      <div className="max-w-5xl px-5 mx-auto md:px-0">
        <Button
          asChild
          variant="secondary"
          className="px-10 py-4 text-sm bg-white border rounded-full md:text-base border-ladeva text-ladeva hover:bg-ladeva hover:text-white"
        >
          <Link href={"/market"}>Back to Market</Link>
        </Button>
      </div>
      <section className="mt-5">
        <div className="bg-[#F1F5F9] py-8 md:py-14">
          <div className="max-w-5xl px-5 mx-auto md:px-0">
            <h1 className="mb-3 text-2xl font-semibold md:text-4xl">
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
        <div className="flex flex-col items-center max-w-5xl gap-2 px-5 py-4 mx-auto md:my-10 md:flex-row md:px-0">
          <Image
            src="/products/garansiindonesia.svg"
            alt="garansi-indonesia"
            className="object-cover w-full h-full"
            width={300}
            height={300}
          />
          <Image
            src="/products/garansiindonesia.svg"
            alt="garansi-indonesia"
            className="object-cover w-full h-full"
            width={300}
            height={300}
          />
        </div>
        <div className="max-w-5xl px-5 mx-auto my-3 md:px-0">
          <p className="text-sm md:text-base">
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
          <div className="flex items-center justify-center my-6 md:my-12">
            <Button
              className="text-sm text-white md:text-base p-7 bg-ladeva hover:text-black hover:bg-orange-100"
              variant="secondary"
            >
              <IconBrandWhatsapp className="mr-2" />I Want This Now
            </Button>
          </div>
        </div>
        <div className="max-w-5xl px-5 mx-auto md:px-0">
          <p className="py-4 text-base font-medium">Simmiliar Application</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {products.map((product, index) => (
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
