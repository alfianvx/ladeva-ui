import Image from "next/image";

export default function Workflow() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto my-20 max-w-7xl">
      <h1 className="text-4xl font-semibold">
        How does it work<span className="text-ladeva">.</span>
      </h1>
      <span className="max-w-4xl py-5 text-center">
        No overcomplicated workflow, no unnecessary bureaucracy or pappers.
        Let&apos;s go straight to realizing your ideas and tackling your
        business problems.
      </span>
      <div className="grid w-full grid-cols-4 gap-5">
        <div className="bg-[#FFE8E3] col-span-1 p-5 rounded-lg">
          <h1 className="text-lg font-semibold">
            1. Get in touch with our team
          </h1>
          <p className="text-sm">
            click on the button to contact our team, and we will respond as soon
            as possible.
          </p>
          <div className="flex pt-10 justify-center">
            <Image
              src={"/custom/start-project.svg"}
              alt="rocket-icon"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="bg-[#F1F5F9] col-span-3 p-5 rounded-lg">
          <h1 className="text-lg font-semibold">2. Add your design Apps</h1>
          <p className="text-sm">
            After you contact our team. we will set to discuss about the
            application that will be made, you will get details of the total
            payment and the estimated time of the application made. during the
            manufacture we will continue to communicate and you can give
            feedback.
          </p>
          <div className="flex pt-10 justify-center">
            <Image
              src={"/custom/workflow.svg"}
              alt="workflow-icon"
              width={555}
              height={89}
            />
          </div>
        </div>
        <div className="bg-[#F1F5F9] col-span-3 p-5 rounded-lg flex relative">
          <Image
            src={"/3d/desktop.svg"}
            alt="desktop-icon"
            width={220}
            height={220}
          />
          <div>
            <h1 className="text-lg font-semibold">3. Enjoy your new Apps</h1>
            <p className="text-sm">
              After you contact our team. we will set to discuss about the
              application that will be made, you will get details of the total
              payment and the estimated time of the application made. during the
              manufacture we will continue to communicate and you can give
              feedback.
            </p>
          </div>
          <Image
            src={"/3d/carts.svg"}
            alt="carts-icon"
            width={220}
            height={150}
            className="absolute -bottom-7 right-0"
          />
        </div>
        <div
          className="bg-gradient-to-r from-[#A18CD1] to-[#FBC2EB]
  rounded-lg col-span-1 flex items-center justify-center"
        >
          <span className="text-xl text-white font-medium">Any Question?</span>
        </div>
      </div>
    </section>
  );
}
