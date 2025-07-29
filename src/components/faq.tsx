import Image from "next/image";
import FaqList from "./template/faq-list";

export default function Faq() {
  return (
    <section id="faq" className="bg-[#F1F5F9] scroll-m-20 px-5">
      <div className="flex flex-col py-10 mx-auto md:pt-16 max-w-7xl md:px-0">
        <h2 className="text-2xl font-bold md:text-4xl">
          What. The. F.A.Q<span className="text-ladeva">.</span>
        </h2>
        <p className="max-w-xl tracking-wide leading-6 py-3 text-sm md:py-5 ">
          Some questions that are often asked by old and new clients. if there
          is something unclear please contact us, don&apos;t hesitate.{" "}
          <span className="text-ladeva">ladeva@hay.com</span>
        </p>
        <div className="flex flex-wrap">
          <Image
            src={"/3d/speaker.svg"}
            alt="spekaer-icon-3d"
            className="w-10 md:basis-2/4 basis-full"
            width={300}
            height={300}
          />
          <FaqList />
        </div>
      </div>
    </section>
  );
}
