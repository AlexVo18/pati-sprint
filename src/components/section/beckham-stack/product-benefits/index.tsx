import GreyX from "@/icons/grey-x";
import RedCheck from "@/icons/red-check";
import type { BenefitType } from "@/types/beckham-stack.type";

type Props = {
  benefits: BenefitType[];
};

const ProductBenefits = ({ benefits }: Props) => {
  return benefits.map((benefit) => {
    const { type, isEssensial, isInStack } = benefit;
    return (
      <div
        key={type}
        className="grid grid-cols-3 gap-6 max-lg:gap-5 max-md:gap-3.5 py-3 max-lg:py-2.5 max-md:py-2 px-6 max-lg:px-5 max-md:px-4 text-[15px] max-lg:text-sm max-md:text-[13px] leading-[1.3] text-[#333] font-medium bg-white border-[#E5E5E5] not-first:border-t"
      >
        <div>{type}</div>
        <div className="flex justify-center self-center">
          {isEssensial ? (
            <RedCheck className="size-5 max-lg:size-4.5 max-md:size-4" />
          ) : (
            <GreyX className="size-5 max-lg:size-4.5 max-md:size-4" />
          )}
        </div>
        <div className="flex justify-center self-center">
          {isInStack ? (
            <RedCheck className="size-5 max-lg:size-4.5 max-md:size-4" />
          ) : (
            <GreyX className="size-5 max-lg:size-4.5 max-md:size-4" />
          )}
        </div>
      </div>
    );
  });
};

export default ProductBenefits;
