import PricingList from "./template/pricing-list";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center px-5 mx-auto my-16 md:my-20 md:px-0 max-w-7xl">
      <h2 className="text-2xl font-bold text-center md:text-4xl">
        Simple pricing<span className="text-ladeva">.</span>
      </h2>
      <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center mx-auto md:py-5">
        we will offer a price and if it is suitable we will start the work.
      </p>
      <PricingList />
    </section>
  );
}
