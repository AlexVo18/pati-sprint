import { bgImg, bgImgSm } from "./mock-data";
import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import Analytics from "./analytics";
import Certification from "./certification";

const Testament = () => {
  return (
    <div className="relative ">
      {/* Container */}
      <div className="absolute inset-0 size-full -z-10">
        <img
          src={bgImg}
          alt="Clinical Studies Background"
          className="w-full h-full object-cover absolute inset-0 hidden md:block"
        />
        <img
          src={bgImgSm}
          alt="Clinical Studies Background Mobile"
          className="w-full h-full object-cover absolute inset-0 md:hidden"
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <p className="text-xs text-white md:py-10 md:px-14 p-5">
          *Results Based on a 12-Week Randomized, Controlled, Clinical Trial
          Conducted by the San Francisco Research Institute. Please Click Here
          for{" "}
          <a href="" className="underline">
            FULL
          </a>{" "}
          Details of the National Library of Medicine Trial.
        </p>
      </div>
      <Container id="testament" className="z-10 md:py-28.75 pt-13.5 pb-35">
        <div className="flex items-center justify-between md:w-[95%] ">
          <div className="w-[41.7%]  max-md:hidden flex items-center justify-center">
            <div className="w-full flex flex-col text-white">
              <h2>Daily Ultimate Essentials</h2>
              <Analytics />
            </div>
          </div>
          <div className="md:w-[54.5%] ">
            <div className="max-md:max-w-84.25 max-md:mx-auto">
              <h1 className="font-arizona md:text-[52px] text-[35px] text-center text-white md:leading-16 leading-12">
                Clinically Proven.
                <br />
                More Energy.
                <br />A Healthier Gut.*
              </h1>
              <Certification />
              <p className="text-white max-w-105 mx-auto mb-3 mt-4 md:text-justify text-center ">
                Every ingredient is third-party tested and NSF Certified for
                Sport, ensuring it's free from over 280 banned substances, heavy
                metals and contaminants. Trusted by athletes and sports leagues,
                including WADA, NFL, MLB, NHL, and PGA.
              </p>
            </div>

            <div className="md:hidden flex flex-col items-center text-white">
              <h2>Daily Ultimate Essentials</h2>
              <Analytics />
            </div>
            <div className="flex flex-col items-center gap-3 max-md:mt-3">
              <Button className="uppercase hover:bg-main-red bg-main-dark-red  rounded-full transition duration-300 font-bold pt-6.5 pb-6 px-8 text-base w-82.5 cursor-pointer">
                View Third-Party Testing Results
              </Button>
              <Button className="uppercase bg-[#ff9693] text-main-dark-red hover:bg-[#fd7772]  rounded-full transition duration-300 font-bold pt-6.5 pb-6 px-8 text-base w-82.5 cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testament;
