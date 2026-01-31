import FiveStars from "@/icons/five-stars";
import { ambassadorReviews, bgImg, bgImgSm } from "./mock-data";
import Card from "./carousel/card";
import "./styles.css";

const Ambassadors = () => {
  const reviews = [
    ...ambassadorReviews,
    ...ambassadorReviews,
    ...ambassadorReviews,
    ...ambassadorReviews,
  ];
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
          <h1 className="font-louzie md:text-[54px] text-[40px] leading-11 text-center">
            What Our IM8 Ambassadors Are Saying
          </h1>
        </div>
        <div className="relative overflow-hidden">
          <div className="grid grid-flow-col gap-4 animate-scroll">
            {reviews.map((review, index) => (
              <div className="h-full " key={`${review.name}-${index}`}>
                <Card review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;
