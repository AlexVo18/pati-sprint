import type { ReviewType } from "@/types/reviews.type";
import StarRating from "@/components/section/reviews/star-rating";
import Avatar from "../avatar";

type Props = {
  data: ReviewType;
};

const ReviewCard = ({ data }: Props) => {
  const { content, createdDate, isVerified, name, rating, urls, title } = data;
  return (
    <div className="py-4 border-t border-[#fa8a8a1a] w-full flex flex-col gap-2.5 font-montserrat">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <StarRating rating={rating.toString()} size={16} />
          <p className="text-[#7b7b7b] text-[80%] ">{createdDate}</p>
        </div>
        <div className="flex gap-2 items-start">
          <Avatar isVerified={isVerified} />
          <div className="flex items-center gap-1.25">
            <p className="text-main-pink md:text-base text-[15px]">{name}</p>
            {isVerified ? (
              <div className="bg-main-pink text-white text-xs tracking-wider py-0.5 px-1.5">
                Verified
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {title && (
          <p className="text-[100%] tracking-[0.06em] font-bold">{title}</p>
        )}
        <p className="font-nunito">{content}</p>
        {urls.length > 0 && (
          <div className="mt-2 flex gap-3">
            {urls.map((item, index) => (
              <img
                src={item.url}
                alt={name + "'s review image " + index + 1}
                key={name + index}
                className="size-24 hover:opacity-80 cursor-pointer "
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
