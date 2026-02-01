import Container from "@/components/common/container";
import { bgImg, greenCheckIcon, labelImgs } from "./mock-data";
import Gallery from "./gallery";
import FiveStars from "@/icons/five-stars";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlackArrow from "@/icons/black-arrow";
import Purchase from "./purchase";
import Membership from "./purchase/membership";
import Info from "./info";
import Ambassadors from "./ambassadors";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full absolute -z-10">
        <img src={bgImg} alt="" className="size-full object-cover" />
      </div>
      <Container
        id="hero"
        isLargeScreen
        className="md:pt-8 pb-20 md:px-12.5 px-0"
      >
        <div className="flex max-md:flex-col relative gap-11.25">
          <div className="md:w-[55%]">
            <div className="md:sticky md:top-27.5">
              <Gallery />
            </div>
          </div>
          <div className="md:w-[45%] max-md:px-5">
            <div className="flex flex-col">
              <div className="text-sm flex items-center md:gap-2 gap-1 mb-3.5 flex-wrap">
                <FiveStars />
                <span className="font-bold max-md:text-sm">
                  4.8 from 11,825 Reviews
                </span>
                <span className="font-medium text-[#6b4c3a] max-md:text-[13px]">
                  {" "}
                  <span className="max-md:hidden">|</span> 622k+ customer
                  purchases | 19M+ servings
                </span>
              </div>
              <h1 className="font-arizona md:text-[40px] text-[32px] md:leading-11 leading-8">
                Daily Ultimate Essentials:
                <br />
                All-in-One Supplement
              </h1>
              <p className="py-4 max-md:pb-8 max-md:leading-5">
                Engineered for peak absorption, this comprehensive formula
                replaces the need for 16 daily supplements with 92 nutrient-rich
                ingredients in one delicious drink.*
              </p>
              <div className="border-[1.5px] border-[#16A34A] bg-[#f0f9f4] rounded-lg p-6">
                <div className="flex max-md:flex-col md:items-center gap-2 justify-between mb-5">
                  <p className="md:text-[22px] text-lg font-bold font-arizona">
                    Clinically Proven Results
                  </p>
                  <div className="text-white bg-[#0f7a3a] rounded-full pt-2 pb-1 px-4 text-[11px] font-bold uppercase w-fit">
                    90-DAY CLINICAL STUDY
                  </div>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-1 mb-4">
                  <div>
                    <div className="flex items-center gap-0.75 text-[26px]">
                      <div className="">⚡</div>
                      <p className="text-[#16A34A] font-arizona  leading-6.5">
                        95%
                      </p>
                    </div>
                    <p className="font-bold text-[13px] leading-[1.3]">
                      More energy
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.75 text-[26px]">
                      <div className="">🦠</div>
                      <p className="text-[#16A34A] font-arizona  leading-6.5">
                        85%
                      </p>
                    </div>
                    <p className="font-bold text-[13px] leading-[1.3]">
                      Better gut health
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.75 text-[26px]">
                      <div className="">😴</div>
                      <p className="text-[#16A34A] font-arizona  leading-6.5">
                        80%
                      </p>
                    </div>
                    <p className="font-bold text-[13px] leading-[1.3]">
                      Better sleep quality
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.75 text-[26px]">
                      <div className="">🧠</div>
                      <p className="text-[#16A34A] font-arizona  leading-6.5">
                        70%
                      </p>
                    </div>
                    <p className="font-bold text-[13px] leading-[1.3]">
                      Sharper focus
                    </p>
                  </div>
                </div>
                <div className="mb-4 text-[#666] italic text-[11px]">
                  *Based on 12-week randomized controlled trial by San Francisco
                  Research Institute
                </div>
                <div className="flex max-md:flex-col items-end justify-between">
                  <Accordion
                    type="single"
                    collapsible
                    className="text-sm flex-wrap"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="group/trigger py-0 underline font-bold hover:opacity-80 cursor-pointer [&>svg]:hidden [&[data-state=open]>svg]:hidden">
                        <div className="flex items-center gap-2">
                          <span>Why These Results Matter?</span>
                          <BlackArrow className="group-data-[state=open]/trigger:rotate-180 transition duration-500 size-3" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-[13px] h-fit mt-6">
                        Unlike most supplements with unverified claims, IM8 is
                        backed by a 12-week randomized controlled clinical
                        trial. Every ingredient is NSF Certified for Sport,
                        verifying exact dosages and testing for 280+ banned
                        substances - the same certification trusted by
                        world-class athletes like Aryna Sabalenka, World No. 1
                        tennis player.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex items-center gap-2 shrink-0">
                    {labelImgs.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={"label " + index + 1}
                          className="h-12.5 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Purchase />
              <Membership />
              <div className="my-4 md:py-5 md:px-6 px-5 py-4 gap-4 flex items-center rounded-xl border-2 border-[#16A34A] bg-[#F0FDF4]">
                <div>
                  <img
                    src={greenCheckIcon}
                    alt="green check"
                    className="size-9"
                  />
                </div>
                <div>
                  <p className="md:text-xl text-lg font-bold">
                    30-Day 100% Money Back Guarantee
                  </p>
                  <p className="md:text-[13px] text-xs">
                    We're so confident you'll love it, take a full 30 days to
                    decide
                  </p>
                </div>
              </div>
              <Info />
              <Ambassadors />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
