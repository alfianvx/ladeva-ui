import Accordion from "./ui/accordion";

export default function Faq() {
  return (
    <div className="bg-[length:200%_400px] md:bg-[length:150%_400px] bg-top bg-no-repeat bg-[radial-gradient(ellipse_25%_70%_at_50%_-10%,rgba(99,100,250,0.3),rgba(255,255,255,0))] w-full h-full mx-auto">
      <div className="flex flex-col items-center justify-center max-w-6xl py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center md:text-4xl text-stone-100">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-6 text-sm text-center md:mt-8 text-pretty text-stone-300">
          Seamlessly use your preferred tools for unified work, start to finish.
        </p>
        <div className="w-full max-w-4xl py-10">
          <Accordion
            question="How long does it take to build a website?"
            answer="It depends on project scope! We work with you for a realistic timeline."
          />
          <Accordion
            question="Do you offer support after the project is completed?"
            answer="Yes, we offer support for a limited time after the project is completed."
          />
          <Accordion
            question="What payment methods do you accept?"
            answer="We accept all major credit cards, PayPal, and bank transfers."
          />
        </div>
      </div>
    </div>
  );
}
