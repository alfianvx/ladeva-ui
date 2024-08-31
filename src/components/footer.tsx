import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@irsyadadl/paranoid";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 py-8 bg-black border-t border-white/20 md:py-5 md:px-0">
      <div className="flex flex-col-reverse items-center justify-center mx-auto gap-y-4 md:flex-row md:justify-between max-w-7xl">
        <div className="flex flex-col gap-y-2">
          <Image
            src={"/logo/ladeva-full-logo-light.svg"}
            alt="ladeva-logo"
            width={181}
            height={42}
          />
          <span className="text-sm subpixel-antialiased text-white">
            Copyright 2024 Ladeva Software - All rights Reserved
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-col gap-y-4 md:justify-end">
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/LADEVA+SOFTWARE+HOUSE+-+JASA+PEMBUATAN+WEBSITE+DAN+APLIKASI/@-7.3540271,109.9157807,15z/data=!4m6!3m5!1s0x2e7aa13fc00915d9:0x9a2be6f98b4595cc!8m2!3d-7.3540271!4d109.9157807!16s%2Fg%2F11k3j5ntn9?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            className="text-sm text-white"
          >
            Wonosari , Pagude , Wonosobo, Jawa Tengah, Indonesia (556312)
          </Link>
          <ul className="flex gap-5 text-sm text-white md:justify-end">
            {links.map((link) => (
              <li key={link.id}>{link.logo}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    id: 1,
    logo: <IconBrandInstagram />,
    url: "/",
  },
  {
    id: 2,
    logo: <IconBrandFacebook />,
    url: "/",
  },
  {
    id: 3,
    logo: <IconBrandLinkedin />,
    url: "/",
  },
  {
    id: 4,
    logo: <IconBrandYoutube />,
    url: "/",
  },
];
