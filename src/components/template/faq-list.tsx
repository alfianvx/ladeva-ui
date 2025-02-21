"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaqs } from "@/service/Faq";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function FaqList() {
  const { data: faqs } = useQuery({
    queryKey: ["GET - FAQS"],
    queryFn: getFaqs,
  });

  return (
    <Accordion type="single" className="md:basis-2/4 basis-full" collapsible>
      {faqs?.data.map((faq) => (
        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
          <AccordionTrigger className="text-sm md:text-base text-left font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
