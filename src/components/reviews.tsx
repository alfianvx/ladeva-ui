import { Button } from "./ui/button";

export default function Reviews() {
  return (
    <section className="px-5 mx-auto my-14 md:my-20 max-w-7xl md:px-0">
      <h1 className="text-2xl font-semibold text-center md:text-4xl">
        What our clients think about us<span className="text-ladeva">.</span>
      </h1>
      <p className="max-w-4xl py-3 text-sm text-center md:py-5">
        We always consider our clients as part of us, where we will always be
        there for them and grow with their products.
      </p>
      <div className="w-full p-5 bg-gradient-to-r my-4 from-[#FF5858] to-[#F09819] rounded-lg">
        <span className="text-base subpixel-antialiased text-white md:text-lg">
          “ Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting “
        </span>
        <div className="flex items-center justify-between pt-8 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-stone-400"></div>
            <div>
              <h1 className="text-base font-medium">Briana Neidig</h1>
              <span className="text-sm font-light">Director</span>
            </div>
          </div>
          <Button
            variant="ghost"
            className="border border-white rounded-full md:text-base"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-5">
        <div className="w-full p-5 border rounded-lg">
          <span className="text-base subpixel-antialiased md:text-lg">
            “when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting “
          </span>
          <div className="flex items-center justify-between pt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-stone-400"></div>
              <div>
                <h1 className="text-base font-medium">Briana Neidig</h1>
                <span className="text-sm font-light">Director</span>
              </div>
            </div>
            <Button
              variant="ghost"
              className="border rounded-full border-stone-900 md:text-base"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full p-5 border rounded-lg">
          <span className="text-base subpixel-antialiased md:text-lg">
            “when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting “
          </span>
          <div className="flex items-center justify-between pt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-stone-400"></div>
              <div>
                <h1 className="text-base font-medium">Briana Neidig</h1>
                <span className="text-sm font-light">Director</span>
              </div>
            </div>
            <Button
              variant="ghost"
              className="border rounded-full border-stone-900 md:text-base"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
