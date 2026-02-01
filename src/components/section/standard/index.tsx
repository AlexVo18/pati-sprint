import Container from "@/components/common/container";
import {
  dailyProduct,
  dailyStandards,
  leadingProduct,
  leadingStandards,
} from "./mock-data";
import RedCheck from "@/icons/red-check";
import GreyX from "@/icons/grey-x";
import GreenX from "@/icons/green-x";
import GreenCheck from "@/icons/green-check";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Standard = () => {
  const [isMore, setIsMore] = useState(false);
  const redData = isMore
    ? [...dailyStandards]
    : [...dailyStandards.slice(0, 10)];
  const greenData = isMore
    ? [...leadingStandards]
    : [...leadingStandards.slice(0, 10)];

  return (
    <div className="bg-[#eae0d2]">
      <Container id="standard" className="md:py-26 pt-14 pb-9.5">
        <div className="flex flex-col mx-auto">
          <h1 className="font-arizona md:text-[52px] text-[40px] text-center">
            IM8: The New Gold Standard
          </h1>
          <div className="w-full rounded-xl grid grid-cols-2 md:mt-14 mt-20 border border-main-dark-red">
            <div className="rounded-l-xl ">
              <div className="bg-main-dark-red p-4 pt-2.5 flex max-md:flex-col-reverse rounded-tl-xl md:h-14 h-20.5">
                <div className="md:pl-10 pt-1 text-white w-full font-bold max-md:text-sm max-md:text-center">
                  Daily Ultimate Essentials
                </div>
                <div className="md:-mt-20 -mt-60 h-28 w-21.25 relative max-md:translate-x-14">
                  <img
                    src={dailyProduct}
                    alt="daily product"
                    className="size-full object-contain absolute "
                  />
                </div>
              </div>
              {redData.map((item) => (
                <div
                  className={cn(
                    "flex items-center md:gap-5 gap-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 bg-[#f5eaea] border-main-dark-red not-last:border-b border-r ",
                    isMore && "last:rounded-bl-xl",
                  )}
                >
                  <div>
                    {item.isTrue ? (
                      <RedCheck className="max-md:size-4" />
                    ) : (
                      <GreyX className="max-md:size-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold max-md:text-[13px]">{item.item}</p>
                    {item.description ? (
                      <p className="text-xs max-md:text-[11px]">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-r-xl ">
              <div className="bg-main-dark-red p-4 pt-2.5 flex max-md:flex-col-reverse rounded-tr-xl md:h-14 h-20.5">
                <div className="md:pl-10 pt-1 text-white w-full font-bold max-md:text-sm max-md:text-center">
                  Leading Greens Powder
                </div>
                <div className="md:-mt-20 -mt-60 h-28 w-21.25 relative max-md:translate-x-14">
                  <img
                    src={leadingProduct}
                    alt="leading product"
                    className="size-full object-contain absolute "
                  />
                </div>
              </div>
              {greenData.map((item) => (
                <div
                  className={cn(
                    "flex items-center md:gap-5 gap-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 text-[#2d3b32] bg-[#b6c0b1] border-main-dark-red not-last:border-b border-l ",
                    isMore && "last:rounded-br-xl",
                  )}
                >
                  <div>
                    {item.isTrue ? (
                      <GreenCheck className="max-md:size-4" />
                    ) : (
                      <GreenX className="max-md:size-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold max-md:text-[13px]">{item.item}</p>
                    {item.description ? (
                      <p className="text-xs max-md:text-[11px]">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            {!isMore && (
              <div
                className="col-span-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 border-t border-main-dark-red rounded-b-xl bg-[#f5eaea] flex items-center justify-center cursor-pointer"
                onClick={() => setIsMore(true)}
              >
                See more
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button className="uppercase bg-main-red hover:bg-main-dark-red  rounded-full transition duration-300 font-bold pt-5.5 pb-5 px-8 text-base min-w-68">
            View Supplement Facts
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Standard;
