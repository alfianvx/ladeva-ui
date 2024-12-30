import Image from "next/image";

export default function MarketScope() {
  return (
    <section className="flex flex-col items-center justify-center px-5 mx-auto my-10 max-w-7xl md:px-0">
      <h1 className="text-2xl font-bold text-center md:text-4xl">
        Our client coverage<span className="text-ladeva">.</span>
      </h1>
      <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center mx-auto md:py-5">
        We try to reach all clients wherever they are and continue to adapt to
        build better IT infrastructure, and make Indonesia advanced in the
        digital sector.
      </p>
      <Image
        src={"/custom/maps.svg"}
        className="w-full"
        alt="maps-svg"
        priority
        quality={100}
        width={1024}
        height={1024}
      />
    </section>
  );
}
