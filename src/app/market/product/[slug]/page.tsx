import Closing from "@/components/closing";
import Faq from "@/components/faq";
import MarketDetail from "@/components/pages/market-detail";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/service/Product";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  return (
    <main className="h-full pt-24">
      <section>
        <div className="max-w-5xl mb-5 px-5 mx-auto md:px-0">
          <Button
            asChild
            variant="secondary"
            className="px-10 py-4 text-sm bg-white border rounded-full md:text-base border-ladeva text-ladeva hover:bg-ladeva hover:text-white"
          >
            <Link href={"/market"}>Back to Market</Link>
          </Button>
        </div>
        <MarketDetail data={product.data} />
        {/* <div className="max-w-5xl my-5 px-5 mx-auto md:px-0">
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
                      <Link
                        target="_blank"
                        href={`https://wa.me/${WhatsAppNumber}?text=Halo%20saya%20tertarik%20dengan%20aplikasi%20${product.title}.%20Bisa%20dibantu%3F`}
                      >
                        I want this
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
      <Faq />
      <Closing />
    </main>
  );
}

// const products = [
//   {
//     image_url: "/products/academy-mastership.svg",
//     title: "Academy Mastership",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis doloremque sit fugiat excepturi minima distinctio praesentium commodi omnis explicabo recusandae rerum porro quo nisi, quod blanditiis cupiditate neque facilis?",
//     demo_link: "/market/academy-mastership",
//   },
//   {
//     image_url: "/products/garansiindonesia.svg",
//     title: "Garansi Indonesia",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis doloremque sit fugiat excepturi minima distinctio praesentium commodi omnis explicabo recusandae rerum porro quo nisi, quod blanditiis cupiditate neque facilis?",
//     demo_link: "/market/garansi-indonesia",
//   },
//   {
//     image_url: "/products/strongneurology.svg",
//     title: "Strong Neurology",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis doloremque sit fugiat excepturi minima distinctio praesentium commodi omnis explicabo recusandae rerum porro quo nisi, quod blanditiis cupiditate neque facilis?",
//     demo_link: "/market/strong-neurology",
//   },
// ];
