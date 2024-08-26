import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Navbar() {
  return (
    <header className="fixed z-50 grid items-center max-w-4xl grid-cols-2 p-4 mx-auto rounded-md inset-x-4 md:grid-cols-3 bg-white/5 backdrop-blur-md top-4">
      <h1>Ladeva</h1>
      <nav className="items-center justify-center hidden md:flex space-x-14">
        <span>Home</span>
        <span>About</span>
        <span>Portofolio</span>
      </nav>
      <div className="flex justify-end">
        <HoverBorderGradient className="flex gap-2 text-xs border-none md:text-sm">
          Contact us
        </HoverBorderGradient>
      </div>
    </header>
  );
}
