import Badge from "./ui/badge";

export default function Services() {
  return (
    <div className="bg-[length:200%_400px] md:bg-[length:150%_400px] bg-top bg-no-repeat bg-[radial-gradient(ellipse_25%_70%_at_50%_-10%,rgba(99,100,250,0.3),rgba(255,255,255,0))] w-full mx-auto">
      <div className="flex flex-col items-center justify-center max-w-6xl py-10 mx-auto">
        <Badge>Our Services</Badge>
        <h1 className="text-2xl font-semibold text-center md:text-4xl text-stone-100">
          Elevate your brand online.
        </h1>
        <h1 className="text-2xl font-semibold text-center md:text-4xl text-stone-100">
          Crafted for growth.
        </h1>
        <p className="mx-auto mt-6 text-sm text-center  md:mt-8 text-pretty text-stone-300">
          Transform your online presence with user-friendly design and strategic
          development with Ladeva Software House.
        </p>
        <div className="flex flex-col gap-4 py-10 md:flex-row">
          <div className="overflow-hidden border rounded-md border-stone-800">
            <div className="w-full h-80 bg-stone-400/5"></div>
            <div className="flex flex-col items-center justify-center p-5 space-y-3">
              <h1 className="text-xl font-semibold">Web & App Design</h1>
              <p className="text-sm text-center">
                Front-end development, back-end development & full-stack
                development.
              </p>
            </div>
          </div>
          <div className="overflow-hidden border rounded-md border-stone-800">
            <div className="w-full h-80 bg-stone-400/5"></div>
            <div className="flex flex-col items-center justify-center p-5 space-y-3">
              <h1 className="text-xl font-semibold">Web & App Design</h1>
              <p className="text-sm text-center">
                Front-end development, back-end development & full-stack
                development.
              </p>
            </div>
          </div>
          <div className="overflow-hidden border rounded-md border-stone-800">
            <div className="w-full h-80 bg-stone-400/5"></div>
            <div className="flex flex-col items-center justify-center p-5 space-y-3">
              <h1 className="text-xl font-semibold">Web & App Design</h1>
              <p className="text-sm text-center">
                Front-end development, back-end development & full-stack
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
