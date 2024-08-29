import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed bg-white z-50 border-b">
      <nav className="max-w-7xl items-center mx-auto py-5 px-4 grid grid-cols-4">
        <Link href={"/"} className="col-span-1">
          <Image
            src={"/logo/ladeva-full-logo-dark.svg"}
            alt="ladeva-logo"
            width={141}
            height={33}
          />
        </Link>
        <ul className="flex w-full justify-between items-center col-span-2">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Portofolio</Link>
          </li>
          <li>
            <Link href={"/"}>Market</Link>
          </li>
          <li className="relative">
            <Link href={"/"}>Why Us</Link>
            <div className="w-2 h-2 -top-1 -right-2 bg-ladeva animate-ping absolute rounded-full"></div>
            <div className="w-2 h-2 -top-1 -right-2 bg-ladeva absolute rounded-full"></div>
          </li>
          <li>
            <Link href={"/"}>How it Work</Link>
          </li>
          <li>
            <Link href={"/"}>Faq</Link>
          </li>
        </ul>
        <div className="flex justify-end col-span-1">
          <button className="py-2 px-8 col-span-1 border max-w-max rounded-lg">
            Start a Project
          </button>
        </div>
      </nav>
    </header>
  );
}
