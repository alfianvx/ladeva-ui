import Image from "next/image";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto mb-20 max-w-7xl">
      <h1 className="text-4xl font-semibold">
        Simple pricing<span className="text-ladeva">.</span>
      </h1>
      <span className="max-w-4xl py-5 text-center">
        we will offer a price and if it is suitable we will start the work.
      </span>
      <div className="grid grid-cols-5 max-w-5xl gap-3 mt-8">
        <div className="bg-[#F1F5F9] p-5 rounded-lg col-span-2">
          <h1 className="text-3xl font-semibold mb-2">
            Free <span className="text-stone-400">Consul</span>
          </h1>
          <p className="text-sm">don&apos;t hesitate contant us</p>
          <ul className="flex flex-col gap-3 my-8">
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-orange.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Consul before manufacturing
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-orange.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Consul after creation
            </li>
            <li className="flex items-center font-medium gap-2 text-sm">
              <Image
                src={"/icons/double-check-orange.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Lifetime application warranty
            </li>
          </ul>
          <button className="border rounded-lg flex font-medium justify-center w-full border-black p-4">
            Try Us
          </button>
        </div>
        <div className="bg-[#ED6244] text-white p-5 rounded-lg col-span-3">
          <h1 className="text-2xl font-semibold mb-2">
            2X payment installment
          </h1>
          <p>Cost can be custumized</p>
          <ul className="grid grid-cols-2 grid-rows-3 gap-3 my-8">
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-light.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Dp for initial payment
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-light.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Discussion on adding features
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-light.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Repayment when completed
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-light.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Cost can be adjusted
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-light.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Total cost is disclosed in advance
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Image
                src={"/icons/double-check-light.svg"}
                width={24}
                height={24}
                alt="double-check-icon"
              />
              Available profit sharing feature
            </li>
          </ul>
          <button className="bg-white text-[#ED6244] font-medium rounded-lg flex justify-center w-full p-4">
            Create my Application
          </button>
        </div>
      </div>
    </section>
  );
}
