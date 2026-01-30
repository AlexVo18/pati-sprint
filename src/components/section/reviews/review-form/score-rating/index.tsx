import { Star } from "lucide-react";
import { useState } from "react";

type Props = {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: number;
};

const ScoreRating = ({
  rating,
  onRatingChange,
  readonly,
  size = 28,
}: Props) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleStarClick = (starIndex: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starIndex);
    }
  };

  const handleStarHover = (starIndex: number) => {
    if (!readonly) {
      setHoveredRating(starIndex);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoveredRating(null);
    }
  };

  const displayRating = hoveredRating !== null ? hoveredRating : rating;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-0.75" onMouseLeave={handleMouseLeave}>
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const isFilled = starIndex <= displayRating;

          return (
            <button
              key={starIndex}
              onClick={() => handleStarClick(starIndex)}
              onMouseEnter={() => handleStarHover(starIndex)}
              className={`transition-all duration-200 ${
                readonly ? "cursor-default" : "cursor-pointer hover:opacity-60"
              }`}
              disabled={readonly}
              type="button"
              title={starIndex ? `1 star` : `${starIndex} stars`}
            >
              <Star
                size={size}
                fill={isFilled ? "currentColor" : "none"}
                className={"text-main-pink"}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreRating;
