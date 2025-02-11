import Closing from "@/components/closing";
import Differentiator from "@/components/differentiator";
import Faq from "@/components/faq";
import Intro from "@/components/intro";
import MarketScope from "@/components/market-scope";
import Pricing from "@/components/pricing";
import Product from "@/components/product";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import Service from "@/components/service";
import Workflow from "@/components/workflow";

export default async function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <Service />
      <Differentiator />
      <Workflow />
      <Reviews />
      <MarketScope />
      <Pricing />
      <Product />
      <Faq />
      <Closing />
    </main>
  );
}
