import type { ReviewsByRatingType } from "@/types/reviews.type";
import AmountItem from "./amount-item";
import SeeAllButton from "./see-all-button";
import { financial } from "@/components/section/reviews/util/function";
type Props = {
  data: ReviewsByRatingType[];
  total: number;
  chosenRating: string;
  onClick: (type: string) => void;
};

const ReviewsAmount = ({ data, total, chosenRating, onClick }: Props) => {
  return (
    <div className="flex flex-col gap-4 font-montserrat">
      <div className="flex flex-col gap-1 ">
        {data
          .filter((item) => item.typeRating !== "all")
          .map((item) => {
            const { length, typeRating } = item;
            const pct = financial((length / total) * 100);
            return (
              <AmountItem
                isChosen={chosenRating === typeRating}
                pct={pct}
                rating={typeRating}
                onClick={onClick}
                length={length}
                key={typeRating}
              />
            );
          })}
      </div>
      <SeeAllButton chosenRating={chosenRating} onClick={onClick} />
    </div>
  );
};

export default ReviewsAmount;
