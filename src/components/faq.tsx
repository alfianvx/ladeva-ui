import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  {
    id: 6,
    question: "How to change the payment method?",
    answer:
      "You can change the payment method by contacting our customer service and stating the new payment method.",
  },
  {
    id: 7,
    question: "How to change the shipping method?",
    answer:
      "You can change the shipping method by contacting our customer service and stating the new shipping method",
  },
  {
    id: 8,
    question: "How to change the product size?",
    answer:
      "You can change the product size by contacting our customer service and stating the new product size.",
  },
  {
    id: 9,
    question: "How to change the product color?",
    answer:
      "You can change the product color by contacting our customer service and stating the new product color.",
  },
  {
    id: 10,
    question: "How to change the product quantity?",
    answer:
      "You can change the product quantity by contacting our customer service and stating the new product quantity.",
  },
];

export default function Faq() {
  return (
    <section className="flex flex-col  mx-auto my-20 max-w-7xl">
      <h1 className="text-4xl font-semibold">
        What. The. F.A.Q<span className="text-ladeva">.</span>
      </h1>
      <p className="max-w-xl py-5">
        Some questions that are often asked by old and new clients. if there is
        something unclear please contact us, don&apos;t hesitate.{" "}
        <span className="text-ladeva">ladeva@hay.com</span>
      </p>
      <div className="flex">
        <Image
          src={"/3d/speaker.svg"}
          alt="spekaer-icon-3d"
          className="basis-2/4"
          width={300}
          height={300}
        />

        <Accordion type="single" className="basis-2/4" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
