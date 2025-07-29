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
  { name: "Home", href: "/", ariaLabel: "Go to homepage" },
  {
    name: "Portofolio",
    href: "/",
    ariaLabel: "View our portfolio of completed projects",
  },
  {
    name: "Market",
    href: "/market",
    ariaLabel:
      "Visit our marketplace to browse available products and services",
  },
  {
    name: "Why Us",
    href: "/why-us",
    ariaLabel: "Learn why you should choose our services",
  },
  {
    name: "How it Work",
    href: "/#how-it-work",
    ariaLabel: "Learn about our work process and methodology",
  },
  {
    name: "Faq",
    href: "/#faq",
    ariaLabel: "View frequently asked questions and answers",
  },
];

export default function Header() {
  return (
    <header className="fixed z-50 w-full top-0 border-b border-stone-300/30 bg-white">
      <nav className="grid items-center grid-cols-2 px-4 py-5 mx-auto max-w-7xl md:grid-cols-4">
        <Link
          href={"/"}
          className="col-span-1"
          aria-label="Ladeva - Go to homepage"
        >
          <Image
            src={"/logo/ladeva-full-logo-dark.svg"}
            alt="Ladeva logo"
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
              aria-label="Go to homepage"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
              aria-label="View our portfolio of completed projects"
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              href={"/market"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
              aria-label="Visit our marketplace to browse available products and services"
            >
              Market
            </Link>
          </li>
          <li className="relative">
            <Link
              href={"/why-us"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
              aria-label="Learn why you should choose our services"
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
              aria-label="Learn about our work process and methodology"
            >
              How it Work
            </Link>
          </li>
          <li>
            <Link
              href={"/#faq"}
              className="hover:text-ladeva transition duration-150 ease-in-out"
              aria-label="View frequently asked questions and answers"
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
              aria-label="Start a new project by contacting us on WhatsApp"
            >
              Start a Project
            </Link>
          </Button>
        </div>
        <div className="flex justify-end col-span-1 md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open navigation menu">
              <IconAlignmentRight />
            </SheetTrigger>
            <SheetContent
              className="w-full"
              aria-describedby="mobile-nav-description"
            >
              <SheetTitle>
                <Image
                  src={"/icons/ladeva-icon.svg"}
                  alt="Ladeva icon"
                  width={30}
                  height={30}
                  priority
                />
              </SheetTitle>
              <div id="mobile-nav-description" className="sr-only">
                Mobile navigation menu for Ladeva website
              </div>
              <nav>
                <ul className="flex flex-col pt-8 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <SheetClose asChild>
                        <Link href={link.href} aria-label={link.ariaLabel}>
                          {link.name}
                        </Link>
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
