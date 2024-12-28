import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconAlignmentRight } from "@irsyadadl/paranoid";
import { Button } from "./ui/button";
import { WhatsAppNumber } from "@/lib/whatsapp-number";

const links = [
  { name: "Home", href: "/" },
  { name: "Portofolio", href: "/" },
  { name: "Market", href: "/market" },
  { name: "Why Us", href: "/why-us" },
  { name: "How it Work", href: "/#how-it-work" },
  { name: "Faq", href: "/#faq" },
];

export default function Header() {
  return (
    <header className="fixed z-50 w-full top-0 border-b border-stone-300/30 bg-white">
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
            <Link
              href={"/"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              href={"/market"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
            >
              Market
            </Link>
          </li>
          <li className="relative">
            <Link
              href={"/why-us"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
            >
              Why Us
            </Link>
            <div className="absolute w-2 h-2 rounded-full -top-1 -right-2 bg-ladeva animate-ping"></div>
            <div className="absolute w-2 h-2 rounded-full -top-1 -right-2 bg-ladeva"></div>
          </li>
          <li>
            <Link
              href={"/#how-it-work"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
            >
              How it Work
            </Link>
          </li>
          <li>
            <Link
              href={"/#faq"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
            >
              Faq
            </Link>
          </li>
        </ul>
        <div className="justify-end hidden col-span-1 md:flex">
          <Button
            variant="outline"
            className="hover:bg-ladeva hover:text-white shadow-none"
            size="lg"
            asChild
          >
            <Link
              target="_blank"
              href={`https://wa.me/${WhatsAppNumber}?text=Halo%20saya%20tertarik%20memesan%20aplikasi.%20Bisa%20dibantu%3F`}
            >
              Start a Project
            </Link>
          </Button>
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
