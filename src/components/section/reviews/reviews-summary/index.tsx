import type { ReviewsByRatingType } from "@/types/reviews.type";
import { memo } from "react";
import FormButton from "../form-button";
import Summary from "./summary";
import ReviewsAmount from "./reviews-amount";

type Props = {
  data: ReviewsByRatingType[];
  total: number;
  chosenRating: string;
  isOpen: boolean;
  onClick: (type: string) => void;
  onClickForm: () => void;
};

const ReviewsSummary = memo(
  ({ data, total, chosenRating, isOpen, onClick, onClickForm }: Props) => {
    return (
      <div className="flex flex-col lg:gap-6 gap-3 pb-6">
        <h2 className="font-lora text-center text-[150%]">Customer Reviews</h2>
        <div className="flex max-lg:flex-col gap-6 justify-center items-stretch">
          <div className="flex justify-center items-center lg:w-[30%]">
            <Summary />
          </div>
          <div className=" border-x border-[#1084741a] flex justify-center lg:w-[40%]">
            <ReviewsAmount
              data={data}
              total={total}
              chosenRating={chosenRating}
              onClick={onClick}
            />
          </div>
          <div className="flex items-center justify-center lg:w-[30%]">
            <FormButton onClick={onClickForm} className="sm:max-w-60 w-full">
              {isOpen ? "Cancel review" : "Write a review"}
            </FormButton>
          </div>
        </div>
      </div>
    );
  },
);

export default ReviewsSummary;
