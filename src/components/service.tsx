import ServiceList from "./template/service-list";

export default function Service() {
  return (
    <section className="px-5">
      <div className="flex flex-col items-center justify-center mx-auto mb-20 md:px-0 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center md:text-4xl">
            Great Apps , zero-hassle<span className="text-ladeva">.</span>
          </h2>
          <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center md:py-5">
            When you hire us, you will get the whole team with all of our
            creative power. Not just 1-man-show with couple of outsourced
            designers like many others.
          </p>
        </div>
        <ServiceList />
      </div>
    </section>
  );
}
