import { Star } from "lucide-react";
import { checkBadge } from "../../mock-data";
import HalfStar from "@/icons-old/half-star";

const Summary = () => {
  return (
    <div className="flex flex-col font-montserrat">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.75">
          {Array.from({ length: 4 }, (_, index) => (
            <Star
              key={index}
              size={17}
              strokeWidth={3}
              fill="currentColor"
              className="text-main-pink"
            />
          ))}
          <HalfStar size={17} />
        </div>
        <p>4.67 out of 5</p>
      </div>
      <div className="flex items-center gap-2">
        <p>Based on 110 reviews</p>
        <div>
          <img src={checkBadge} alt="check-icon" className="size-4.25" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
