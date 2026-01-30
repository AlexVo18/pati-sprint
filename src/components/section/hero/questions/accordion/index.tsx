import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { plusIcon } from "../../mock-data";
import type { BenefitType } from "@/types/hero.type";

type Props = {
  benefit: BenefitType;
  onClose: () => void;
};

const Accordion = ({ benefit: { content, title, id }, onClose }: Props) => {
  return (
    <AccordionItem
      value={id}
      className="rounded-4xl border px-4 data-[state=open]:border-main-green border-[#d2d2d2] cursor-pointer"
    >
      <AccordionTrigger
        className={cn(
          "py-4 text-left font-medium hover:no-underline text-base group/trigger cursor-pointer",
          "[&>svg]:hidden [&[data-state=open]>svg]:hidden"
        )}
      >
        <div className="flex w-full items-center justify-between">
          <span>{title}</span>
          <div className="size-6">
            <img
              src={plusIcon}
              alt="expand-icon"
              className="group-data-[state=open]/trigger:rotate-45 transition duration-500"
            />
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="text-base tracking-normal" onClick={onClose}>
        {content}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Accordion;
