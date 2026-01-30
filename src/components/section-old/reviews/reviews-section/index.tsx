import type { ReviewType } from "@/types/reviews.type";
import FilterSelector from "./filter-selector";
import Reviews from "./reviews";


type Props = {
  isLoading: boolean;
  data: ReviewType[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onClick: (type: string) => void;
};

const ReviewSection = ({
  data,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  onClick,
}: Props) => {
  return (
    <div>
      <FilterSelector onClick={onClick} />
      <Reviews
        data={data}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ReviewSection;
