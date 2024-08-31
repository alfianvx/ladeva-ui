import Closing from "@/components/closing";
import Differentiator from "@/components/differentiator";
import Faq from "@/components/faq";
import Intro from "@/components/intro";
import Market from "@/components/market";
import Pricing from "@/components/pricing";
import Product from "@/components/product";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import Service from "@/components/service";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Projects />
      <Service />
      <Differentiator />
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
