import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "../mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ArrowDown from "@/icons-old/arrow-down";

const QuestionsAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const closeItem = (id: string) => {
    setOpenItems((prev) => prev.filter((item) => item !== id));
  };
  return (
    <Accordion
      type="multiple"
      value={openItems}
      onValueChange={setOpenItems}
      className="w-full bg-linear-to-b from-white to-main-skin sm:p-8 p-4 rounded-xl "
    >
      {faqs.map((faq) => {
        const { question, answer } = faq;
        const isOpen = openItems.includes(question);
        return (
          <AccordionItem
            value={question}
            key={question}
            className="border-b-white last:border-b  py-4 sm:py-5 sm:px-6"
          >
            <AccordionTrigger
              className={cn(
                "hover:cursor-pointer flex items-center gap-3 hover:no-underline py-0 ",
                "[&>svg]:hidden [&[data-state=open]>svg]:hidden",
              )}
            >
              <p className="text-lg leading-[1.3em]">{question}</p>
              <div>
                <ArrowDown
                  className={cn(
                    "size-4 transition duration-200 ",
                    isOpen && "rotate-180",
                  )}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent
              className="hover:cursor-pointer pt-4 text-base leading-[1.3em] pb-0 h-fit tracking-wide"
              onClick={() => closeItem(question)}
            >
              {Array.isArray(answer)
                ? answer.map((item) => <div key={item}>{item}</div>)
                : answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default QuestionsAccordion;
