import FiveStars from "@/icons/five-stars";
import { bgImg, bgImgSm } from "./mock-data";
import "./styles.css";
import Carousel from "./carousel";

const Ambassadors = () => {
  return (
    <section id="ambassadors" className="relative md:py-26 py-14 size-full">
      <img
        src={bgImg}
        alt="background image"
        className="size-full absolute inset-0 object-cover object-center -z-10 max-md:hidden"
      />
      <img
        src={bgImgSm}
        alt="background image"
        className="size-full absolute inset-0 object-cover object-center -z-10 md:hidden"
      />
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex items-center gap-4">
            <div>
              <FiveStars />
            </div>
            <p className="uppercase text-sm">Feel The Difference</p>
          </div>
          <h1 className="font-arizona md:text-[54px] text-[40px] leading-11 text-center">
            What Our IM8 Ambassadors Are Saying
          </h1>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Ambassadors;
