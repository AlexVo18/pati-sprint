import type { ReviewType } from "@/types/reviews.type";
import "./styles.css";
import Loader from "./loader";
import Pagination from "./pagination";
import ReviewCard from "./review-card";

type Props = {
  data: ReviewType[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Reviews = ({
  data,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      id="review-section"
      className="space-y-4 animate-dropdown"
      style={{
        animation: "dropdown 0.5s ease-out forwards",
      }}
    >
      {data.map((item) => (
        <ReviewCard data={item} key={item.email} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Reviews;
