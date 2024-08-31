import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section id="faq" className="bg-[#F1F5F9] scroll-m-20">
      <div className="flex flex-col px-5 py-10 mx-auto md:pt-16 max-w-7xl md:px-0">
        <h1 className="text-2xl font-semibold md:text-4xl">
          What. The. F.A.Q<span className="text-ladeva">.</span>
        </h1>
        <p className="max-w-xl py-3 text-sm md:py-5 ">
          Some questions that are often asked by old and new clients. if there
          is something unclear please contact us, don&apos;t hesitate.{" "}
          <span className="text-ladeva">ladeva@hay.com</span>
        </p>
        <div className="flex flex-wrap">
          <Image
            src={"/3d/speaker.svg"}
            alt="spekaer-icon-3d"
            className="w-10 md:basis-2/4 basis-full"
            width={300}
            height={300}
          />
          <Accordion
            type="single"
            className="md:basis-2/4 basis-full"
            collapsible
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    id: 1,
    question: "How to contact customer service?",
    answer:
      "You can contact our customer service via the chat feature on the website or via email at",
  },
  {
    id: 2,
    question: "How to return a product?",
    answer:
      "You can return the product by contacting our customer service and stating the reason for the return.",
  },
  {
    id: 3,
    question: "How to track the product?",
    answer:
      "You can track the product by entering the tracking number that we have provided to you.",
  },
  {
    id: 4,
    question: "How to cancel an order?",
    answer:
      "You can cancel an order by contacting our customer service and stating the reason for the cancellation.",
  },
  {
    id: 5,
    question: "How to change the shipping address?",
    answer:
      "You can change the shipping address by contacting our customer service and stating the new shipping address.",
  },
];
