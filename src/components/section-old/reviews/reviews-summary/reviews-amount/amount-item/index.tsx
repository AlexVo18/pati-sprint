import { cn } from "@/lib/utils";
import StarRating from "@/components/section-old/reviews/star-rating";

type Props = {
  isChosen: boolean;
  rating: string;
  pct: string;
  length: number;
  onClick: (type: string) => void;
};

const AmountItem = ({ isChosen, rating, pct, length, onClick }: Props) => {
  const handleRatingFilter = () => {
    if (length !== 0) {
      return onClick(rating);
    }
    return;
  };

  return (
    <div
      className={cn(
        "flex items-center gap-6 cursor-pointer hover:opacity-60",
        isChosen && "opacity-60",
        length === 0 && "hover:cursor-default hover:opacity-100",
      )}
      onClick={handleRatingFilter}
    >
      <div className="flex items-center gap-0.75">
        <StarRating rating={rating} />
      </div>
      <div className="bg-[#e0e0e080] h-3.5 md:w-35 w-31.5">
        <div className={`h-full bg-main-pink`} style={{ width: `${pct}%` }} />
      </div>
      <p className=" text-[80%] text-[#7b7b7b]">{length}</p>
    </div>
  );
};

export default AmountItem;
