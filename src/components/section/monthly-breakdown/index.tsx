import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  checkIcon,
  ingredients,
  pillBg,
  pillBgSm,
  productImg,
} from "./mock-data";

const MonthlyBreakdown = () => {
  return (
    <div className="bg-[#f5eaea]">
      <Container isLargeScreen className="max-lg:px-0!">
        <div className="flex max-md:hidden">
          <div className="flex flex-col gap-6 w-[47%] relative md:pt-16 md:pl-14 pt-10 pl-5">
            <div className="w-full absolute opacity-25">
              <img
                src={pillBg}
                alt="background"
                className="w-full object-cover "
                loading="lazy"
              />
            </div>
            <h1 className="text-[40px] max-lg:text-[28px] font-arizona leading-10 max-lg:leading-6 z-10 ">
              Replaces 16
              <br />
              Supplements.
              <br />
              Saving You Money.
            </h1>
            <div className="z-10">
              <Button className="uppercase h-fit rounded-full bg-main-red hover:bg-main-dark-red duration-300 transition min-w-68 font-bold pt-3.25 pb-2.75 px-6.25 cursor-pointer">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative w-[53%] flex flex-col pt-20  pb-16 pl-42 pr-20 max-lg:py-10 max-lg:px-7.5">
            <div className="absolute -left-47.25 max-lg:-left-30 top-20.5 max-lg:top-20 w-94.5 max-xl:w-52.5">
              <div className="w-full relative">
                <div className="absolute left-0 max-lg:left-6 bottom-[6%] max-lg:-bottom-8 p-6.5 max-lg:p-3 z-13 flex items-center justify-center flex-col gap-5 max-lg:gap-2 text-center shadow rounded-full bg-main-dark-red text-white translate-x-[calc(-75%-16px)] size-75 max-lg:size-46.5">
                  <p className="uppercase text-sm font-bold">ANNUAL SAVINGS</p>
                  <div className="text-[34px]  font-arizona leading-10">
                    <p className="max-lg:text-xl">$2,532 - $3,000</p>
                    <p className="max-lg:text-sm">per year</p>
                  </div>
                  <p className="text-[13px] max-lg:text-[11px]">
                    when switching to IM8
                  </p>
                </div>
                <img src={productImg} alt="product" className="w-full " />
              </div>
            </div>
            <div className="w-[86.81%] ml-auto">
              <h1 className="text-[40px] max-lg:text-[28px] font-arizona leading-10 text-center">
                Monthly Breakdown
              </h1>
              <div className="pt-14 max-lg:pt-3 pl-8.25 pr-6.25 max-w-full flex flex-col gap-4.25 max-lg:gap-3">
                {ingredients.map((item) => (
                  <div key={item.item} className="relative">
                    <div className="absolute flex items-center top-0 -left-22 max-lg:-left-8 translate-y-2">
                      <div className="h-px w-14 max-lg:w-4 bg-main-dark-red"></div>
                      <div className="size-2 max-lg:size-1 bg-main-red rounded-full"></div>
                    </div>
                    <div className="flex justify-between max-lg:text-xs">
                      <p>{item.item}</p>
                      <s className="font-nb opacity-60">${item.cost}</s>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-8 max-lg:pt-4">
                <div className="border border-main-dark-red rounded-xl w-full ">
                  <div className="bg-[#f5eaea] pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 max-lg:text-xs flex items-center justify-between rounded-t-xl border-b border-main-dark-red">
                    <p>Your Traditional Supplements</p>
                    <s className="font-nb opacity-60">$545</s>
                  </div>
                  <div className="pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 max-lg:text-xs flex items-center justify-between bg-white rounded-b-xl">
                    <p className="font-bold">IM8 Daily Ultimate Essentials</p>
                    <p className="font-nb">$162</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden px-5 py-14 relative w-full overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-center pt-10">
            <img
              src={pillBgSm}
              alt="background"
              className="object-contain w-full max-w-2xl opacity-25"
              loading="lazy"
            />
          </div>

          <div className="relative z-10 flex flex-col">
            <h1 className="text-center text-[32px] max-w-70 font-arizona leading-8 mx-auto">
              Replaces
              <br />
              16 Supplements,
              <br />
              Saving You Money.
            </h1>

            <div className="relative mt-23.5">
              <div className="absolute left-1/2 -translate-x-1/2 -top-23 w-26.75 z-20">
                <div className="relative">
                  <img src={productImg} alt="product" className="w-full" />
                  <div className="absolute bottom-2 right-0 translate-x-44  p-3 flex items-center justify-center flex-col gap-2 text-center shadow rounded-full bg-main-dark-red text-white size-46.5">
                    <p className="uppercase text-sm font-bold">
                      ANNUAL SAVINGS
                    </p>
                    <div className="text-[34px] font-arizona leading-10">
                      <p className="max-lg:text-xl">$2,532 - $3,000</p>
                      <p className="max-lg:text-sm">per year</p>
                    </div>
                    <p className="text-[13px] max-lg:text-[11px]">
                      when switching to IM8
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3.75 border border-main-dark-red rounded-xl w-full text-sm px-6 pb-7 pt-25 bg-[#f5eaea]">
                {ingredients.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <img src={checkIcon} alt="check icon" />
                      <p>{item.item}</p>
                    </div>
                    <s className="font-nb opacity-60">${item.cost}</s>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-main-dark-red rounded-xl w-full text-sm mt-4">
              <div className="pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 bg-[#f5eaea] flex items-center justify-between rounded-t-xl border-b border-main-dark-red">
                <p>Your Traditional Supplements</p>
                <s className="font-nb opacity-60">$545</s>
              </div>
              <div className="pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 flex items-center justify-between bg-white rounded-b-xl">
                <p className="font-bold">IM8 Daily Ultimate Essentials</p>
                <p className="font-nb">$162</p>
              </div>
            </div>

            <div className="max-w-full mx-auto pt-5">
              <Button className="uppercase h-fit rounded-full bg-main-red hover:bg-main-dark-red duration-300 transition min-w-68 font-bold pt-3.25 pb-2.75 px-6.25 cursor-pointer">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MonthlyBreakdown;
