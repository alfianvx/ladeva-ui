import Image from "next/image";

export default function Market() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto mb-20 max-w-7xl">
      <h1 className="text-4xl font-semibold">
        Our client coverage<span className="text-ladeva">.</span>
      </h1>
      <span className="max-w-4xl py-5 text-center">
        We try to reach all clients wherever they are and continue to adapt to
        build better IT infrastructure, and make Indonesia advanced in the
        digital sector.
      </span>
      <Image
        src={"/custom/maps.svg"}
        className="flex justify-center w-full"
        alt="maps-svg"
        width={1024}
        height={1024}
      />
    </section>
  );
}
