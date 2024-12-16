import Image from "next/image";
import Link from "next/link";

export default function Workflow() {
  return (
    <section id="how-it-work" className="px-5 scroll-m-32">
      <div className="flex flex-col items-center justify-center mx-auto my-14 md:my-20  max-w-7xl scroll-m-32">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center md:text-4xl">
            How does it work<span className="text-ladeva">.</span>
          </h1>
          <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center md:py-5">
            No overcomplicated workflow, no unnecessary bureaucracy or pappers.
            Let&apos;s go straight to realizing your ideas and tackling your
            business problems.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-4 md:gap-5">
          <div className="bg-[#F1F5F9] hover:bg-[#FFE8E3] transition cursor-pointer duration-200 ease-in-out col-span-3 md:col-span-1 p-5 rounded-lg">
            <h1 className="mb-1 text-lg font-semibold">
              1. Get in touch with our team
            </h1>
            <p className="text-sm">
              click on the button to contact our team, and we will respond as
              soon as possible.
            </p>
            <div className="flex justify-center pt-10">
              <Image
                src={"/custom/start-project.svg"}
                alt="rocket-icon"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="bg-[#F1F5F9] hover:bg-[#FFE8E3] transition cursor-pointer duration-200 ease-in-out col-span-3 p-5 rounded-lg">
            <h1 className="mb-1 text-lg font-semibold">
              2. Add your design Apps
            </h1>
            <p className="text-sm">
              After you contact our team. we will set to discuss about the
              application that will be made, you will get details of the total
              payment and the estimated time of the application made. during the
              manufacture we will continue to communicate and you can give
              feedback.
            </p>
            <div className="flex justify-center pt-10">
              <Image
                src={"/custom/workflow.svg"}
                alt="workflow-icon"
                width={555}
                height={89}
              />
            </div>
          </div>
          <div className="bg-[#F1F5F9] hover:bg-[#FFE8E3] transition cursor-pointer duration-200 ease-in-out col-span-3 p-5 rounded-lg flex flex-col-reverse md:flex-row relative">
            <Image
              src={"/3d/desktop.svg"}
              alt="desktop-icon"
              width={220}
              height={220}
              className="mx-auto"
            />
            <div>
              <h1 className="mb-1 text-lg font-semibold">
                3. Enjoy your new Apps
              </h1>
              <p className="text-sm">
                After you contact our team. we will set to discuss about the
                application that will be made, you will get details of the total
                payment and the estimated time of the application made. during
                the manufacture we will continue to communicate and you can give
                feedback.
              </p>
            </div>
            <Image
              src={"/3d/carts.svg"}
              alt="carts-icon"
              width={220}
              height={150}
              className="absolute right-0 hidden -bottom-7 md:block"
            />
          </div>
          <Link
            href={"/"}
            className="bg-gradient-to-r from-[#A18CD1] to-[#FBC2EB] cursor-pointer 
  rounded-lg col-span-1 flex items-center justify-center w-auto h-40 md:h-auto"
          >
            <span className="text-xl font-medium text-white">
              Any Question?
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
