import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqList } from "@/utils/faq-item";

export default function Faq() {
  return (
    <>
      <div className="flex justify-center gap-10 mt-32 px-16">
        <div className="w-1/2">
          <Image src={"/faq.png"} alt="faq" width={400} height={400} className="w-full" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold ">Frequently Asked Questions</h1>
          {faqList.map((item, i) => (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="mt-3" key={i}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
