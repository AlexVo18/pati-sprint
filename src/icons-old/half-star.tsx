import { Star } from "lucide-react";

const HalfStar = ({ size = 16, className = "" }) => {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Empty star background */}
      <Star
        size={size}
        fill="none"
        stroke="currentColor"
        className="absolute top-0 left-0 text-main-pink"
      />
      {/* Half-filled star */}
      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: `${size / 2}px` }}
      >
        <Star
          size={size}
          fill="currentColor"
          stroke="currentColor"
          className="text-main-pink"
        />
      </div>
    </div>
  );
};

export default HalfStar;
