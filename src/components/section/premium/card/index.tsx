import type { DealType } from "@/types/premium.type";
import BestSellerBadge from "./best-seller-badge";
import MessageBadge from "./message-badge";
import ImageAddButton from "./image-add-button";
import AddButton from "./add-button";

type Props = {
  item: DealType;
};

const Card = ({ item }: Props) => {
  const {
    isBestSeller,
    message,
    isGradient,
    description,
    firstImg,
    name,
    price,
    secondImg,
    imgSm,
  } = item;
  return (
    <div className="flex flex-col group ">
      <div className="relative rounded-xl w-full lg:aspect-square aspect-3/2 overflow-hidden">
        {isBestSeller && <BestSellerBadge />}
        <img
          src={firstImg}
          alt={name + " first image"}
          loading="lazy"
          className="max-md:hidden rounded-xl size-full absolute inset-0 object-cover transition-opacity duration-500 ease-in-out lg:group-hover:opacity-0"
        />
        <img
          src={secondImg}
          alt={name + " second image"}
          loading="lazy"
          className="max-lg:hidden rounded-xl size-full absolute inset-0 object-cover transition-all duration-500 opacity-0 ease-in-out group-hover:opacity-100 scale-110 group-hover:scale-100"
        />
        <img
          src={imgSm}
          alt={name + " small image"}
          loading="lazy"
          className="md:hidden rounded-xl size-full absolute inset-0 object-cover object-top"
        />
        <ImageAddButton />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <MessageBadge message={message} isGradient={isGradient} />
        <h3 className="font-medium font-louzie text-2xl max-md:text-[20px] w-[55%]">
          {name}
        </h3>
        <div className="flex flex-col gap-1 text-sm max-md:text-xs">
          <p>{description}</p>
          <p className="font-bold">From ${price}</p>
        </div>
        <AddButton />
      </div>
    </div>
  );
};

export default Card;
