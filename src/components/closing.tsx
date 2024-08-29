import Image from "next/image";

export default function Closing() {
  return (
    <section className="flex flex-col py-20 bg-black items-center justify-center w-full mx-auto">
      <h1 className="text-5xl py-5 max-w-4xl font-bold text-white text-center">
        Digitalize your business with us just one click away
        <span className="text-ladeva">.</span>
      </h1>
      <div className="grid grid-cols-3 mt-5 mb-10">
        <div className="flex items-center justify-center text-white">
          <Image
            src={"/icons/double-check-orange.svg"}
            alt="double-check-icon"
            className="mr-2"
            width={30}
            height={30}
          />
          Transparent cost
        </div>
        <div className="flex items-center justify-center text-white">
          <Image
            src={"/icons/double-check-orange.svg"}
            alt="double-check-icon"
            className="mr-2"
            width={30}
            height={30}
          />
          Latest telcology
        </div>
        <div className="flex items-center justify-center text-white">
          <Image
            src={"/icons/double-check-orange.svg"}
            alt="double-check-icon"
            className="mr-2"
            width={30}
            height={30}
          />
          Fast Working Process
        </div>
      </div>
      <button className="relative inline-block p-1 my-5 text-2xl text-white rounded-full overflow-hidden focus:outline-none">
        <span className="absolute inset-0 bg-gradient-to-r from-[#FCC5E4] via-[#FDA34B] to-[#020F75] rounded-lg"></span>
        <span className="relative block bg-black px-20 py-5 rounded-full">
          Start a Project
        </span>
      </button>
    </section>
  );
}
