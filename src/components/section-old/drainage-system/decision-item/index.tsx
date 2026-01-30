import { cn } from "@/lib/utils";
import { greenCheck, redX } from "@/mock";

type Props = {
  isTrue?: boolean;
  content: string;
};

const DecisionItem = ({ isTrue = true, content }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[#a60003]",
        isTrue && "text-[#0c7c00]"
      )}
    >
      <div>
        <img
          src={isTrue ? greenCheck : redX}
          alt={isTrue ? "check-icon" : "x-icon"}
          className="size-5"
        />
      </div>
      <p className="font-semibold">{content}</p>
    </div>
  );
};

export default DecisionItem;
