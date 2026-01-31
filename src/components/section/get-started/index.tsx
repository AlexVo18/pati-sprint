import Container from "@/components/common/container";
import { bgImg, checkIcon, productImg } from "./mock-data";
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <div className="relative size-all">
      <img
        src={bgImg}
        alt="background image"
        className="size-full absolute inset-0 object-cover object-center -z-10"
      />
      <Container id="get-started" className="pt-7.5 " isLargeScreen>
        <h1 className="font-louzie text-[28px] leading-8 uppercase tracking-wider md:hidden text-center max-md:mb-7.5">
          Get Started with IM8 for Daily Ultimate Nutrition
        </h1>
        <div className="md:py-10 pb-0 grid md:grid-cols-2">
          <div>
            <h1 className="pb-7.5 font-louzie text-[40px] leading-12 uppercase tracking-wider max-md:hidden">
              Get Started with IM8 for Daily Ultimate Nutrition
            </h1>
            <div className="flex flex-col text-lg">
              <div className="flex items-center justify-between font-bold ">
                <p>Daily Ultimate Essentials</p>
                <p>$162</p>
              </div>
              <hr className="bg-[#160505] my-2.5 h-0.5" />
              <p className="uppercase text-[#7e7e7e] text-xs font-bold mb-1.25">
                FIRST TIME PURCHASE:
              </p>
              <div className="flex items-start justify-between mb-1.25">
                <p className="w-[65%] font-medium py-1.25 max-md:font-bold">
                  Signature Red Cup
                </p>
                <div className=" flex items-center">
                  <s className="text-[#7e7e7e] font-medium text-base">$52</s>
                  <p className="font-bold w-22.5 text-right">Free</p>
                </div>
              </div>
              <div className="flex items-start justify-between mb-1.25">
                <p className="w-[65%] font-medium py-1.25 max-md:font-bold">
                  Daily Ultimate Essentials Single-Serve Storage Box
                </p>
                <div className=" flex items-center">
                  <s className="text-[#7e7e7e] font-medium text-base">$14</s>
                  <p className="font-bold w-22.5 text-right">Free</p>
                </div>
              </div>
              <div className="flex items-start justify-between mb-1.25">
                <p className="w-[65%] font-medium py-1.25 max-md:font-bold">
                  5x Bonus Daily Ultimate Essentials Single-Serve Sachets
                </p>
                <div className=" flex items-center">
                  <s className="text-[#7e7e7e] font-medium text-base">$34</s>
                  <p className="font-bold w-22.5 text-right">Free</p>
                </div>
              </div>
              <hr className="bg-[#160505] my-2.5 h-0.5" />
              <div className="flex items-start justify-between mb-1.25">
                <p className="font-bold">Total</p>
                <div className=" flex items-center">
                  <p className="text-[#7e7e7e] font-medium text-base">
                    Save $100
                  </p>
                  <p className="font-bold w-22.5 text-right">$162</p>
                </div>
              </div>
            </div>
            <Button className="w-full rounded-full text-white bg-main-red hover:bg-main-dark-red transition duration-300 md:uppercase text-base font-bold h-fit md:mb-2.5 md:mt-7.5 mt-10 pb-3.25 pt-3.75 px-4.25 cursor-pointer">
              Get your Free IM8 Welcome Kit Now**
            </Button>
            <div className="flex max-md:flex-col items-center md:gap-4 gap-0 w-full justify-center my-4 text-black">
              <div className="flex items-center gap-2">
                <span>
                  <img src={checkIcon} alt="check icon" className="mb-px" />
                </span>
                <span>
                  <strong>30-Day</strong> money back guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img src={checkIcon} alt="check icon" className="mb-px" />
                </span>
                <span>
                  <strong>Update</strong> or <strong>cancel</strong> anytime
                </span>
              </div>
            </div>
          </div>
          <div className="max-md:order-first">
            <img src={productImg} alt="product" loading="lazy" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
