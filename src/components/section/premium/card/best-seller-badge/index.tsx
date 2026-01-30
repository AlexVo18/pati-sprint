import { badgeBg } from "../../mock-data";

const BestSellerBadge = () => {
  return (
    <div className="absolute uppercase font-nb lg:size-16 size-12 right-4 top-4 z-2">
      <img
        src={badgeBg}
        alt="Best Seller Badge"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="leading-2 text-white text-center text-[10px]">
          <div>Best</div>
          <div>Seller</div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerBadge;
