import Container from "@/components/common/container";
import {
  advancedBenefitData,
  beckhamProductImg,
  dailyProductImg,
  immediateBenefitData,
} from "./mock-data";
import ProductHeader from "./product-header";
import ProductBenefits from "./product-benefits";

const BeckhamStack = () => {
  return (
    <div className="bg-[#fdf8f8]">
      <Container id="beckham-stack" className="md:py-20 py-15">
        <div className="flex flex-col gap-8">
          <div className="flex max-md:flex-col items-center justify-center gap-6 font-louzie">
            <h1 className="text-center  lg:text-[32px] text-[28px] uppercase font-medium tracking-wider leading-8">
              Upgrade to the Beckham Stack
            </h1>
            <div className="bg-main-red text-white text-lg py-2 px-4 rounded-lg font-medium">
              Save $37/ month
            </div>
          </div>
          <div className="max-w-245 w-full mx-auto rounded-2xl overflow-visible border border-[#E5E5E5]">
            <div className="bg-main-dark-red grid grid-cols-3 items-center overflow-visible relative text-white text-lg font-louzie rounded-t-2xl">
              <div className="flex items-start justify-start text-left p-2.5 pl-7.5 max-md:py-3.5 max-md:2.5 max-lg:p-4  lg:text-lg md:text-base text-sm tracking-wider">
                Feature
              </div>
              <ProductHeader
                productImg={dailyProductImg}
                title="Daily Ultimate Essentials"
              />
              <ProductHeader
                productImg={beckhamProductImg}
                title="The Beckham Stack  (Essentials + Longevity)"
              />
            </div>
            <div className="grid grid-cols-3 gap-6 max-lg:gap-5 max-md:gap-3.5 py-3 max-lg:py-2.5 max-md:py-2 px-6 max-lg:px-5 max-md:px-4 bg-[#fdf8f8] font-medium text-sm max-lg:text-[13px] max-md:text-xs border-[#E5E5E5] border-y">
              <div className="uppercase">Immediate Essentials Benefit</div>
              <div className="text-center self-center">Essentials</div>
              <div className="text-center self-center">Beckham Stack</div>
            </div>
            <div>
              <ProductBenefits benefits={immediateBenefitData} />
            </div>
            <div className="w-full bg-main-skin uppercase max-lg:gap-5 max-md:gap-3.5 py-3 max-lg:py-2.5 max-md:py-2 px-6 max-lg:px-5 max-md:px-4 font-medium text-sm max-lg:text-[13px] max-md:text-xs border-[#E5E5E5] border-y">
              Advanced Longevity Benefit
            </div>
            <div>
              <ProductBenefits benefits={advancedBenefitData} />
            </div>
            <div className="grid grid-cols-3 gap-6 text-base max-lg:text-[15px] max-md:text-sm text-center font-bold py-3.5 px-6 border-[#E5E5E5] border-t">
              <div className="text-sm text-left">Monthly Subscription</div>
              <div className="self-center">$178</div>
              <div className="self-center">$336</div>
            </div>
            <div className="grid grid-cols-3 gap-6 text-base max-lg:text-[15px] max-md:text-sm text-center font-bold py-3.5 px-6 border-[#E5E5E5] border-t">
              <div className="text-sm text-left">Cost per Daily Serving</div>
              <div className="self-center">$5.93</div>
              <div className="self-center">$11.20</div>
            </div>
            <div className="grid grid-cols-3 gap-6 text-base max-lg:text-[15px] max-md:text-sm text-center font-bold py-3.5 px-6 border-[#E5E5E5] border-t rounded-b-2xl">
              <div className="text-sm text-left">
                Savings vs. Buying Separately
              </div>
              <div className="self-center">-</div>
              <div className="text-main-red self-center">$37/month</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BeckhamStack;
