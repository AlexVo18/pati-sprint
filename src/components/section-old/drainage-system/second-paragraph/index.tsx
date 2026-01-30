import RedInfoCard from "@/components/common/card/red-info-card";
import {
  crossMetabolicItems,
  metabolicWasteImg,
  metabolicWasteImgSm,
} from "../mock-data";
import DecisionItem from "../decision-item";

const SecondParagraph = () => {
  return (
    <div className="flex sm:gap-25 gap-4 max-sm:flex-col max-sm:flex-wrap items-center">
      <div className="w-full max-sm:mt-2">
        <img
          src={metabolicWasteImg}
          alt="metabolic-waste"
          loading="lazy"
          className="w-full max-sm:hidden"
        />
        <img
          src={metabolicWasteImgSm}
          alt="metabolic-waste-small"
          loading="lazy"
          className="w-full sm:hidden"
        />
      </div>
      <div className="my-2 flex flex-col gap-2 w-full sm:text-lg text-base sm:leading-6 leading-5.5">
        <strong>And it accumulates. Day after day. Week after week.</strong>
        <p>
          That gallon of fluid your body should be draining every 24 hours? It's
          pooling in your stomach, your legs, your face—anywhere gravity and
          tissue structure allow it to settle.
        </p>
        <RedInfoCard>
          <p className="my-2">
            The metabolic waste your cells produce overnight? It's still sitting
            there at noon. At dinner. While you're trying to fall asleep.
          </p>
          <div className="flex flex-col gap-2">
            {crossMetabolicItems.map((item) => (
              <DecisionItem content={item} key={item} isTrue={false} />
            ))}
          </div>
        </RedInfoCard>
        <strong>
          Your cells are literally sitting in their own waste—and your body
          can't flush it out.
        </strong>
        <p>
          The longer this goes on, the worse it gets. More congestion. More
          inflammation. More pressure on an already compromised system.
        </p>
      </div>
    </div>
  );
};

export default SecondParagraph;
