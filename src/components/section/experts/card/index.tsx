import type { ExpertType } from "@/types/experts.type";

type Props = {
  data: ExpertType;
};

const Card = ({ data }: Props) => {
  const { alias, avatar, name, role, thumbnailHref, videoHref } = data;
  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden">
      <div className="rounded-2xl relative">
        <div className="flex items-center gap-2 px-4 py-3 md:bg-[#f5eaea] bg-[#f5eaea]/60 rounded-t-2xl max-md:absolute top-0 z-10 w-full">
          <img
            src={avatar}
            alt={name}
            className="size-7 rounded-full object-cover"
          />
          <span className="text-sm font-bold text-[#7a0f14]">{alias}</span>
        </div>

        <div className="relative rounded-b-2xl max-md:rounded-t-2xl">
          <video
            className="aspect-2/3 w-full object-cover rounded-b-2xl max-md:rounded-t-2xl"
            poster={thumbnailHref}
            muted
            loop
            playsInline
            autoPlay
          >
            <source src={videoHref} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="px-8 py-1.25 bg-[#f5eaea] font-arizona text-xl font-medium rounded-2xl flex flex-col justify-center h-full leading-6 md:min-h-25.5 min-h-34">
        <p className="">{name}</p>
        <p className="">{role}</p>
      </div>
    </div>
  );
};

export default Card;
