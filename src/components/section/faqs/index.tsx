import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bgImg, bgImgSm, faqData, minusIcon, plusIcon } from "./mock-data";
import { cn } from "@/lib/utils";

const Faqs = () => {
  return (
    <section id="fags" className="bg-main-red">
      <div className="flex max-md:flex-col md:min-h-screen ">
        <div className="flex items-center justify-center md:w-1/2">
          <div className="pt-10 md:pl-14 md:pr-30 px-5 md:pb-10 pb-14 md:w-[80%] ml-auto">
            <h1 className="font-arizona md:text-[52px] text-[56px] md:text-main-light-red text-white">
              FAQs
            </h1>
            <div className="mt-2 text-white">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((section) => {
                  const { title, description } = section;
                  return (
                    <AccordionItem
                      value={title}
                      className="border-b-white last:border-b"
                    >
                      <AccordionTrigger
                        className={cn(
                          "hover:no-underline font-sans font-semibold flex items-center justify-between w-full text-base hover:cursor-pointer",
                          "[&>svg]:hidden [&[data-state=open]>svg]:hidden",
                        )}
                      >
                        <span>{title}</span>
                        <div>
                          <img
                            src={plusIcon}
                            alt=""
                            className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden size-4"
                          />
                          <img
                            src={minusIcon}
                            alt=""
                            className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline size-4"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base pb-4">
                        {description.map((item) => {
                          return <p key={item}>{item}</p>;
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            <div className="mt-6">
              <Button className="uppercase rounded-full bg-main-dark-red hover:bg-main-dark-red transition max-md:hover:bg-main-red duration-500 h-fit md:min-w-57.5 w-full py-3.25 px-4.25 font-bold text-base cursor-pointer">
                Explore All Faqs
              </Button>
            </div>
          </div>
        </div>
        <div className="max-md:order-first overflow-hidden md:w-1/2">
          <img
            src={bgImg}
            alt="customer-image"
            loading="lazy"
            className="object-cover size-full max-md:hidden"
          />
          <img
            src={bgImgSm}
            alt="customer-image"
            loading="lazy"
            className="object-cover w-full aspect-4/3 md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
