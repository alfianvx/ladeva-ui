import Faq from "@/components/faq";
import Hall from "@/components/hall";
import Services from "@/components/services";
import Works from "@/components/works";

export default function Home() {
  return (
    <main className="px-4 bg-black">
      <Hall />
      <Services />
      <Works />
      <Faq />
    </main>
  );
}
