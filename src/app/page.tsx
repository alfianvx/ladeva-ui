import Closing from "@/components/closing";
import Faq from "@/components/faq";
import Intro from "@/components/intro";
import Market from "@/components/market";
import Pricing from "@/components/pricing";
import Product from "@/components/product";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Projects />
      <Services />
      <section className="flex items-center justify-center px-10 py-5 mx-auto my-10 transition duration-150 ease-in-out border rounded-full cursor-pointer border-ladeva hover:bg-ladeva max-w-max text-ladeva hover:text-white">
        <h1 className="text-xl ">
          What makes us different from the competition
        </h1>
      </section>
      <Workflow />
      <Reviews />
      <Market />
      <Pricing />
      <Product />
      <Faq />
      <Closing />
    </main>
  );
}
