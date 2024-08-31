import Link from "next/link";
import { Button } from "./ui/button";

export default function Differentiator() {
  return (
    <section className="flex items-center justify-center px-5 mx-auto my-10 max-w-7xl">
      <Button
        asChild
        className="transition duration-150 ease-in-out bg-white border rounded-full cursor-pointer md:py-7 md:px-10 border-ladeva hover:bg-ladeva max-w-max text-ladeva hover:text-white"
      >
        <Link
          href={"/why-us"}
          className="text-sm text-center md:text-xl text-wrap"
        >
          What makes us different from the competition
        </Link>
      </Button>
    </section>
  );
}
