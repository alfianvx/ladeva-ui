import { Button } from "./ui/button";

export default function Reviews() {
  return (
    <section className="mx-auto mb-20 max-w-7xl">
      <h1 className="text-4xl font-semibold">
        What our clients think about us<span className="text-ladeva">.</span>
      </h1>
      <p className="max-w-lg py-5">
        We always consider our clients as part of us, where we will always be
        there for them and grow with their products.
      </p>
      <div className="w-full p-5 bg-gradient-to-r my-4 from-[#FF5858] to-[#F09819] text-white rounded-lg">
        <span className="text-lg subpixel-antialiased">
          “ Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting “
        </span>
        <div className="flex items-center justify-between pt-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-stone-400"></div>
            <div>
              <h1 className="font-medium">Briana Neidig</h1>
              <span className="text-sm font-light">Director</span>
            </div>
          </div>
          <button className="px-4 py-2 border rounded-full">Learn More</button>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-full p-5 border rounded-lg">
          <span className="text-lg subpixel-antialiased">
            “when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting “
          </span>
          <div className="flex items-center justify-between pt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-stone-400"></div>
              <div>
                <h1 className="font-medium">Briana Neidig</h1>
                <span className="text-sm font-light">Director</span>
              </div>
            </div>
            <button className="px-4 py-2 border rounded-full border-black">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full p-5 border rounded-lg">
          <span className="text-lg subpixel-antialiased">
            “when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting “
          </span>
          <div className="flex items-center justify-between pt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-stone-400"></div>
              <div>
                <h1 className="font-medium">Briana Neidig</h1>
                <span className="text-sm font-light">Director</span>
              </div>
            </div>
            <button className="px-4 py-2 border rounded-full border-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
