import Badge from "./ui/badge";

export default function Works() {
  return (
    <div className="bg-[length:200%_400px] md:bg-[length:150%_400px] bg-top bg-no-repeat bg-[radial-gradient(ellipse_25%_70%_at_50%_-10%,rgba(99,100,250,0.3),rgba(255,255,255,0))] w-full mx-auto">
      <div className="flex flex-col items-center justify-center max-w-6xl py-10 mx-auto">
        <Badge>Our Works</Badge>
        <h1 className="text-2xl font-semibold text-center md:text-4xl text-stone-100">
          Crafting impactful design & development solutions.
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-sm text-center md:mt-8 text-pretty text-stone-300">
          Explore a diverse range of projects where we partnered with clients to
          achieve their goals.
        </p>
        <div className="flex flex-col w-full gap-4 py-10 md:flex-row">
          <div className="w-full overflow-hidden border rounded-md border-stone-800">
            <div className="w-full h-80 bg-stone-400/5"></div>
            <div className="flex flex-col justify-start p-5 space-y-3">
              <span className="px-3 py-1 text-sm border rounded-full max-w-max border-stone-800 bg-stone-900">
                Study Case
              </span>
              <h1 className="text-lg font-medium">Landing Page for Ladeva</h1>
            </div>
          </div>
          <div className="w-full overflow-hidden border rounded-md border-stone-800">
            <div className="w-full h-80 bg-stone-400/5"></div>
            <div className="flex flex-col justify-start p-5 space-y-3">
              <span className="px-3 py-1 text-sm border rounded-full max-w-max border-stone-800 bg-stone-900">
                Study Case
              </span>
              <h1 className="text-lg font-medium">Landing Page for Ladeva</h1>
            </div>
          </div>
          <div className="w-full overflow-hidden border rounded-md border-stone-800">
            <div className="w-full h-80 bg-stone-400/5"></div>
            <div className="flex flex-col justify-start p-5 space-y-3">
              <span className="px-3 py-1 text-sm border rounded-full max-w-max border-stone-800 bg-stone-900">
                Study Case
              </span>
              <h1 className="text-lg font-medium">Landing Page for Ladeva</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
