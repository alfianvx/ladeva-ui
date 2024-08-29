import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-5 bg-black">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col space-y-2">
          <Image
            src={"/logo/ladeva-full-logo-light.svg"}
            alt="ladeva-logo"
            width={181}
            height={42}
          />
          <span className="text-white text-sm subpixel-antialiased">
            Copyright 2024 Ladeva Software - All rights Reserved
          </span>
        </div>
        <div>
          <Link href="/" className="text-white text-sm">
            Wonosari , Pagude , Wonosobo, Jawa Tengah, Indonesia (556312)
          </Link>
          <ul className="text-white flex justify-end gap-5 text-sm">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
