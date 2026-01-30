import type { IngredientType } from "@/types/ingredients.type";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { arrowDownIcon } from "../mock-data";
import { greenCheck } from "@/mock";

type Props = {
  item: IngredientType;
};

const IngredientItem = ({ item }: Props) => {
  const { name, amount, benefit, des, study, url } = item;
  const [isOpen, setIsOpen] = useState("");

  const toggleAccordion = () => {
    setIsOpen((prev) => (prev === name ? "" : name));
  };

  return (
    <Accordion
      type="single"
      collapsible
      value={isOpen}
      onValueChange={setIsOpen}
      className="w-full"
    >
      <AccordionItem value="item-1" className="sm:p-6 p-4">
        <AccordionTrigger className="hover:no-underline p-0 flex flex-col sm:gap-3 cursor-pointer [&>svg]:hidden [&[data-state=open]>svg]:hidden">
          <div className="flex items-center justify-center gap-2 w-full">
            <span>
              <img src={greenCheck} alt="green-check" className="size-4" />
            </span>
            <p className="text-[#0c7c00] text-base">{benefit}</p>
          </div>
          <div className="flex sm:flex-col sm:gap-3 gap-2 items-center w-full">
            <div className="flex justify-center max-sm:w-[25%]">
              <img
                src={url}
                alt={name}
                className="md:max-w-30 max-w-full max-h-20"
              />
            </div>
            <div className="flex items-center justify-between w-full gap-2">
              <h5 className="font-lora font-semibold sm:text-base text-sm leading-5">
                {name} ({amount}mg)
              </h5>
              <div>
                <img src={arrowDownIcon} alt="arrow-icon" className="max-w-6" />
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent
          className="cursor-pointer pb-0 pt-3 h-fit text-sm leading-4.5"
          onClick={toggleAccordion}
        >
          <div>{des}</div>
          <div>[Study: {study}]</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default IngredientItem;
