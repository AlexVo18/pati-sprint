import { Accordion as Accordions } from "@/components/ui/accordion";
import Accordion from "./accordion";
import type { BenefitType } from "@/types/hero.type";
import { ingredients } from "../mock-data";
import ContentListItem from "./content-list-item";
import { useState } from "react";

const items: BenefitType[] = [
  {
    id: "ingredients",
    title: "Ingredients proven by science",
    content: (
      <>
        <p>
          <strong>Sculptique Ingredients:</strong>
        </p>
        <div className="mb-4">
          <ul className="list-disc list-outside md:text-lg text-base pl-10 marker:text-sm">
            {ingredients.map((item) => (
              <ContentListItem listItem={item} />
            ))}
          </ul>
        </div>
        <div>
          <p>
            These natural ingredients work together to reduce puffiness,
            bloating, fluid retention.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "works",
    title: "How does it actually work?",
    content: (
      <p>
        Sculptique works by improving blood flow and supporting lymphatic
        drainage to reduce fluid buildup that causes puffiness, inflammation,
        and water retention. It also reduces inflammation and boosts collagen
        production to help skin become firmer and smoother.
      </p>
    ),
  },
  {
    id: "shipping",
    title: "Shipping and returns",
    content: (
      <>
        <p>
          All of Sculptique orders get FREE shipping straight from our USA
          warehouse. Orders are usually shipped out within 1-2 working days, and
          you should receive the order within 3-7 working days for domestic USA
          orders, and within 10 working days for International orders.
        </p>
        <p>
          We also offer a 60-day money back guarantee - if you are unsatisfied
          with our product, you can take advantage of our guarantee and ship
          back the product to us to get your return within 60 days of receiving
          your order.
        </p>
      </>
    ),
  },
];

const Questions = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const closeItem = (id: string) => {
    setOpenItems((prev) => prev.filter((item) => item !== id));
  };

  return (
    <div>
      <Accordions
        type="multiple"
        className="space-y-4 "
        value={openItems}
        onValueChange={setOpenItems}
      >
        {items.map((item, index) => (
          <Accordion
            benefit={item}
            key={index}
            onClose={() => closeItem(item.id)}
          />
        ))}
      </Accordions>
    </div>
  );
};

export default Questions;
