import { IconCalendar } from "@irsyadadl/paranoid";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { InfiniteMovingImages } from "./ui/infinite-moving-images";

const images = [
  {
    id: 1,
    url: "https://utfs.io/f/dedb2a27-ed86-4be5-b0dd-0e9ec8b8ffed-1auqj.JK.png",
  },
  {
    id: 2,
    url: "https://utfs.io/f/dedb2a27-ed86-4be5-b0dd-0e9ec8b8ffed-1auqj.JK.png",
  },
  {
    id: 3,
    url: "https://utfs.io/f/dedb2a27-ed86-4be5-b0dd-0e9ec8b8ffed-1auqj.JK.png",
  },
  {
    id: 4,
    url: "https://utfs.io/f/dedb2a27-ed86-4be5-b0dd-0e9ec8b8ffed-1auqj.JK.png",
  },
  {
    id: 5,
    url: "https://utfs.io/f/dedb2a27-ed86-4be5-b0dd-0e9ec8b8ffed-1auqj.JK.png",
  },
  {
    id: 6,
    url: "https://utfs.io/f/dedb2a27-ed86-4be5-b0dd-0e9ec8b8ffed-1auqj.JK.png",
  },
];

const words = ["Together.", "Better.", "Stronger."];

export default function Hall() {
  return (
    <div className="pt-40 mx-auto w-full bg-[radial-gradient(ellipse_50%_50%_at_60%_-20%,rgba(99,129,241,0.5),rgba(255,255,255,0))] md:bg-[radial-gradient(ellipse_40%_75%_at_65%_-20%,rgba(99,129,241,0.5),rgba(255,255,255,0))]">
      <h1 className="text-4xl font-semibold text-center md:text-5xl text-stone-100">
        Elevate your brand.
      </h1>
      <h1 className="mt-2 text-4xl font-semibold text-center md:text-5xl text-stone-100">
        Grow
        <FlipWords words={words} duration={1000} />
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-sm text-center md:mt-8 text-pretty text-stone-300">
        Elevate your brand and drive growth with Ladeva Software House. We craft
        tactical design and development strategies, excelling in delivering
        powerful digital experiences for both government and startup clients.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row md:mt-12">
        <HoverBorderGradient className="flex items-center w-full gap-2 transition duration-300 hover:bg-indigo-700">
          <IconCalendar className="w-4 h-4" />
          Schedule a quick call
        </HoverBorderGradient>
        <HoverBorderGradient className="flex gap-2 text-xs border-none md:text-sm">
          Check our portofolios
        </HoverBorderGradient>
      </div>
      {/* PARTNERS */}
      <div className="w-full max-w-6xl py-10 mx-auto md:py-20">
        <h1 className="mb-3 text-base font-semibold text-center md:text-lg text-stone-300">
          Our Amazing Clients
        </h1>
        <InfiniteMovingImages
          items={images}
          direction="left"
          pauseOnHover={false}
          speed="normal"
        />
      </div>
    </div>
  );
}
