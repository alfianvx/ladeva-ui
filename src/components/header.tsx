import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconAlignmentRight } from "@irsyadadl/paranoid";

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-white border-b">
      <nav className="grid items-center grid-cols-2 px-4 py-5 mx-auto max-w-7xl md:grid-cols-4">
        <Link href={"/"} className="col-span-1">
          <Image
            src={"/logo/ladeva-full-logo-dark.svg"}
            alt="ladeva-logo"
            width={141}
            height={33}
            priority
          />
        </Link>
        <ul className="items-center justify-between hidden w-full col-span-2 md:flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Portofolio</Link>
          </li>
          <li>
            <Link href={"/market"}>Market</Link>
          </li>
          <li className="relative">
            <Link href={"/why-us"}>Why Us</Link>
            <div className="absolute w-2 h-2 rounded-full -top-1 -right-2 bg-ladeva animate-ping"></div>
            <div className="absolute w-2 h-2 rounded-full -top-1 -right-2 bg-ladeva"></div>
          </li>
          <li>
            <Link href={"/"}>How it Work</Link>
          </li>
          <li>
            <Link href={"/"}>Faq</Link>
          </li>
        </ul>
        <div className="justify-end hidden col-span-1 md:flex">
          <button className="col-span-1 px-8 py-2 border rounded-lg max-w-max">
            Start a Project
          </button>
        </div>
        <div className="flex justify-end col-span-1 md:hidden">
          <Sheet>
            <SheetTrigger>
              <IconAlignmentRight />
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetTitle>
                <Image
                  src={"/icons/ladeva-icon.svg"}
                  alt="ladeva-icon"
                  width={30}
                  height={30}
                  priority
                />
              </SheetTitle>
              <nav>
                <ul className="flex flex-col pt-8 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <SheetClose asChild>
                        <Link href={link.href}>{link.name}</Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

const links = [
  { name: "Home", href: "/" },
  { name: "Portofolio", href: "/" },
  { name: "Market", href: "/market" },
  { name: "Why Us", href: "/why-us" },
  { name: "How it Work", href: "/" },
  { name: "Faq", href: "/" },
];
