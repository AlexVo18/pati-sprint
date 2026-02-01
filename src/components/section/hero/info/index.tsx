import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { redMinusIcon, redPlusIcon } from "../mock-data";

const Info = () => {
  return (
    <Accordion type="single" collapsible defaultValue="ingredients">
      <AccordionItem value="ingredients" className="border-main-dark-red">
        <AccordionTrigger className="hover:no-underline  [&>svg]:hidden [&[data-state=open]>svg]:hidden font-bold text-base ">
          <span>Ingredients</span>
          <div>
            <img
              src={redPlusIcon}
              alt="plus"
              className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden size-4"
            />
            <img
              src={redMinusIcon}
              alt="minus"
              className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline size-4"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            Our comprehensive formula combines 92 nutrient-rich ingredients to
            fuel your body with everything it needs for optimal health. Packed
            with essential vitamins, minerals, antioxidants, superfoods, greens,
            pre-pro-post-biotics and clinical dosages of CoQ10 and MSM.*
          </p>

          <button type="button">View Supplement Facts</button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="third-party-tested"
        className="border-main-dark-red"
      >
        <AccordionTrigger className="hover:no-underline  [&>svg]:hidden [&[data-state=open]>svg]:hidden font-bold text-base ">
          <span>Third-Party Tested</span>{" "}
          <div>
            <img
              src={redPlusIcon}
              alt="plus"
              className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden size-4"
            />
            <img
              src={redMinusIcon}
              alt="minus"
              className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline size-4"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            Every ingredient and dosage in IM8 is third-party tested. This
            guarantees that what you see on the label is what you get, so you
            know exactly what you’re putting into your body.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="how-to-enjoy" className="border-main-dark-red">
        <AccordionTrigger className="hover:no-underline  [&>svg]:hidden [&[data-state=open]>svg]:hidden font-bold text-base ">
          <span>How to Enjoy</span>{" "}
          <div>
            <img
              src={redPlusIcon}
              alt="plus"
              className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden size-4"
            />
            <img
              src={redMinusIcon}
              alt="minus"
              className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline size-4"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ol className="text-base">
            <li>1. Scoop out one serving (12 grams)</li>
            <li>
              2. Add 8–12 oz of cold water, juice, smoothie, or your favorite
              drink (Use less liquid for a stronger taste)
            </li>
            <li>3. Shake or blend well then enjoy</li>
          </ol>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="tasting-notes" className="border-main-dark-red">
        <AccordionTrigger className="hover:no-underline  [&>svg]:hidden [&[data-state=open]>svg]:hidden font-bold text-base ">
          <span>Tasting Notes</span>{" "}
          <div>
            <img
              src={redPlusIcon}
              alt="plus"
              className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden size-4"
            />
            <img
              src={redMinusIcon}
              alt="minus"
              className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline size-4"
            />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            Experience a delightful blend with earthy undertones, a subtle
            tartness, and a hint of chocolate, culminating in a smooth acai and
            mixed berries finish.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Info;
