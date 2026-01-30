import {
  checkItems,
  crossItems,
  lymphaticImg,
  lymphaticImgSm,
} from "../mock-data";
import DecisionItem from "../decision-item";
import RedInfoCard from "@/components/common/card/red-info-card";

const FirstParagraph = () => {
  return (
    <div className="flex sm:gap-25 gap-4 max-sm:flex-col-reverse max-sm:flex-wrap items-center">
      <div className="my-2 flex flex-col gap-2 w-full sm:text-lg text-base sm:leading-6 leading-5.5">
        <p>
          Your lymphatic system is your body's internal cleaning crew—a network
          of vessels that processes{" "}
          <strong>
            3-4 liters of cellular waste and excess fluid every single day.
          </strong>
        </p>
        <p>When it's working properly, you don't even know it exists.</p>
        <div className="flex flex-col gap-2">
          {checkItems.map((item) => (
            <DecisionItem content={item} key={item} />
          ))}
        </div>
        <RedInfoCard>
          But after age 35, declining estrogen hijacks this system's ability to
          function.
        </RedInfoCard>
        <div className="flex flex-col gap-2">
          {crossItems.map((item) => (
            <DecisionItem content={item} key={item} isTrue={false} />
          ))}
        </div>
        <p>
          Instead of processing and removing waste, it backs up in your tissues.
        </p>
      </div>
      <div className="w-full">
        <img
          src={lymphaticImg}
          alt="lymphatic-system"
          loading="lazy"
          className="w-full max-sm:hidden"
        />
        <img
          src={lymphaticImgSm}
          alt="lymphatic-system-small"
          loading="lazy"
          className="w-full sm:hidden"
        />
      </div>
    </div>
  );
};

export default FirstParagraph;
