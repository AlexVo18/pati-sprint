import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type Props = {
  rating: string;
  size?: number;
  className?: string;
} & React.ComponentProps<"div">;

const StarRating = ({ rating, size = 14, className }: Props) => {
  return (
    <div className={cn("flex items-center gap-0.75", className)}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={size}
          strokeWidth={3}
          fill={index < Number(rating) ? "currentColor" : "none"}
          className={cn("text-main-pink")}
        />
      ))}
    </div>
  );
};

export default StarRating;
