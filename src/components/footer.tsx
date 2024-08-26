export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 px-4 space-y-5 bg-black md:space-y-0 md:flex-row py-5">
      <div className="basis-3/6">
        <div className="w-10 h-10 rounded-lg bg-stone-200"></div>
        <div className="py-10">
          <h1 className="mb-2 text-lg">Let&apos;s chat & grow together</h1>
          <p className="text-sm font-light">
            Share your project details & we&apos;ll get in touch to discuss how
            we can help.
          </p>
        </div>
        <form className="flex-col w-full space-y-2">
          <input
            type="text"
            placeholder="Your email address"
            className="w-full p-2 rounded-md bg-stone-900 focus:outline-none placeholder:text-sm placeholder:text-stone-500"
          />
          <button className="flex items-center justify-center w-full p-2 text-sm bg-indigo-600 rounded-md">
            Start Your Project
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-between w-full space-y-5 md:space-y-0">
        <div className="flex justify-between">
          <div className="basis-2/4">
            <h1 className="mb-5 text-lg">Pages</h1>
            <div className="flex flex-col space-y-4">
              <span className="text-sm font-light">Home</span>
              <span className="text-sm font-light">About</span>
              <span className="text-sm font-light">Portofolio</span>
              <span className="text-sm font-light">Careers</span>
            </div>
          </div>
          <div className="basis-2/4">
            <h1 className="mb-5 text-lg">Social</h1>
            <div className="flex flex-col space-y-4">
              <span className="text-sm font-light">Instagram</span>
              <span className="text-sm font-light">Linkedin</span>
              <span className="text-sm font-light">Facebook</span>
            </div>
          </div>
        </div>
        <p className="py-4 text-xs md:py-0 text-stone-400">
          ©2024 Ladeva Software House All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
