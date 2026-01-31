import type { AmbassadorReviewType } from "@/types/ambassadors.type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "../rating";

type Props = {
  review: AmbassadorReviewType;
};

const Card = ({ review }: Props) => {
  const { avatar, content, name, thumbnailHref, videoHref } = review;
  return (
    <div className="bg-white md:w-85.25 w-78 md:px-6 md:pb-8 px-5.5 pb-5.5 rounded-xl h-full cursor-pointer">
      <div className="py-3 pr-6 flex items-center gap-5">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-bold text-sm ">{name}</p>
      </div>
      <video
        autoPlay
        loop
        muted
        poster={thumbnailHref}
        className="w-full  rounded-xl"
      >
        <source src={videoHref} type="video/mp4" />
      </video>
      <div className="pt-6">
        <Rating className="h-3" />
        <div className="pt-4 font-louzie font-medium text-xl ">{content}</div>
      </div>
    </div>
  );
};

export default Card;
