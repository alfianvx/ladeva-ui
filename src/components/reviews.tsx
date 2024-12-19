import ReviewsList from "./template/reviews-list";

export default function Reviews() {
  return (
    <section className="px-5">
      <div className="mx-auto my-14 md:my-20 max-w-7xl md:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center md:text-4xl">
            What our clients think about us
            <span className="text-ladeva">.</span>
          </h1>
          <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center mx-auto md:py-5">
            We always consider our clients as part of us, where we will always
            be there for them and grow with their products.
          </p>
        </div>
        <ReviewsList />
      </div>
    </section>
  );
}
