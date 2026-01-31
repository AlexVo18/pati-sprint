import { ambassadorReviews } from "../mock-data";
import Card from "./card";
import "./styles.css";

const Carousel = () => {
  const reviews = [
    ...ambassadorReviews,
    ...ambassadorReviews,
    ...ambassadorReviews,
    ...ambassadorReviews,
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-flow-col gap-4 animate-scroll">
        {reviews.map((review, index) => (
          <div className="h-full " key={`${review.name}-${index}`}>
            <Card review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
