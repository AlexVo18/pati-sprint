import SaleBadge from "@/icons-old/sale-badge";
import { cn } from "@/lib/utils";
import type { OptionType } from "@/types/hero.type";

type Props = {
  isChosen: boolean;
  option: OptionType;
  onClick: (id: string) => void;
};

const OptionCard = ({ option, isChosen, onClick }: Props) => {
  const { id, isSale, originalPrice, perks, price, subTitle, title } = option;
  return (
    <div
      className={cn(
        "relative border border-main-green hover:cursor-pointer rounded-lg",
      )}
      onClick={() => onClick(id)}
    >
      {isSale ? (
        <div className="absolute -top-5 -right-1.25">
          <SaleBadge className="" />
        </div>
      ) : null}
      <div className="p-4 bg-white rounded-lg flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="border-2 border-main-green rounded-full size-6.5 flex items-center justify-center">
            <div
              className={cn("size-4 rounded-full", isChosen && "bg-main-green")}
            />
          </div>
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-xs">{subTitle}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">{price}</p>
          <p className="text-sm line-through">{originalPrice}</p>
        </div>
      </div>
      <div
        className={cn("bg-main-green rounded-b-lg", !isChosen && "opacity-60")}
      >
        {perks.map((perk) => (
          <div
            key={perk.text}
            className="px-2 py-1 flex items-center gap-2 border-t border-t-white"
          >
            <div className="shrink-0 size-8.5">
              <img src={perk.icon} alt="perk.text w-full" />
            </div>
            <p className="text-white leading-[1em] font-bold text-xs">
              {perk.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionCard;
