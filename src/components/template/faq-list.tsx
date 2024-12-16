import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaqs } from "@/service/Faq";
import React from "react";

export default async function FaqList() {
  const faqs = await getFaqs();

  return (
    <Accordion type="single" className="md:basis-2/4 basis-full" collapsible>
      {faqs.data.map((faq) => (
        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
          <AccordionTrigger className="text-sm md:text-base font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
