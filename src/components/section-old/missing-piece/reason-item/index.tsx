import RedInfoCard from "@/components/common/card/red-info-card";
import { redX } from "@/mock";
import type { ReasonFailed } from "@/types/missing-piece.type";

type Props = {
  item: ReasonFailed;
};

const ReasonItem = ({ item: { reason, solution, url } }: Props) => {
  return (
    <div className="flex flex-col rounded-md h-full">
      <div className="rounded-t-sm">
        <img src={url} alt={solution} className="rounded-t-sm" />
      </div>
      <div className="flex flex-col sm:p-6 p-4 text-center bg-white rounded-b-sm sm:gap-6 gap-4 h-full">
        <h4 className="font-lora text-xl">{solution}</h4>
        <RedInfoCard className="py-0 sm:my-0 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-1.5">
              <p className="font-semibold">Why it failed</p>
              <div>
                <img
                  src={redX}
                  alt="why-it-failed"
                  loading="lazy"
                  className="max-w-6"
                />
              </div>
            </div>
            <p className="font-bold">{reason}</p>
          </div>
        </RedInfoCard>
      </div>
    </div>
  );
};

export default ReasonItem;
