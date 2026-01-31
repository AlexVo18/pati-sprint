import type { ReviewType } from "@/types/reviews.type";

type Props = {
  data: ReviewType;
};
const Card = ({ data }: Props) => {
  const { name, content } = data;
  return (
    <div className="p-7.5 flex flex-col justify-between gap-5 w-full bg-white h-full rounded-lg border border-[#E5E5E5] transition-transform transform translate-y-0 duration-300 ease-in-out hover:-translate-y-1 shadow-lg">
      <div className="flex flex-col gap-5">
        <div className="text-2xl text-main-red">★★★★★</div>
        <p className="text-base leading-normal">"{content}"</p>
      </div>
      <div className="text-base font-bold">— {name}</div>
    </div>
  );
};

export default Card;
