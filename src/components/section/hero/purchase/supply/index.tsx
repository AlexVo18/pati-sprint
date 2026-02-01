import { useProductContext } from "@/hooks/use-product";
import { cn } from "@/lib/utils";
import type { SupplyType } from "@/types/hero.type";
import {
  benefits30Days,
  benefits90Days,
  checkIcon,
  emptyRadioIcon,
  fillRadioIcon,
} from "../../mock-data";

type Props = {
  supply: SupplyType;
};

const Supply = ({ supply }: Props) => {
  const {
    name,
    billedPrice,
    isBestValue,
    isOffer,
    pricePerMonth,
    pricePerServing,
    months,
    savePct,
  } = supply;
  const { currentSupply } = useProductContext();
  return (
    <div
      className={cn(
        "md:p-4 p-2.5 pt-5 relative bg-white hover:ring-main-dark-red hover:ring-[0.5px] border-[#e1cbb9] border transition duration-300 cursor-default rounded-xl opacity-70 hover:shadow",
        name === currentSupply.name &&
          name === "90-Day Supply" &&
          "opacity-100 border-main-red bg-[#fff2ed99]",
        name === currentSupply.name &&
          name === "30-Day Supply" &&
          "opacity-100 bg-[#f5eaea] border-main-dark-red",
      )}
    >
      {isBestValue && (
        <div className="absolute right-4 -top-2.5 uppercase font-nb text-[10px] bg-main-red text-white py-1 px-3.75 rounded-full text-center shadow tracking-wider">
          <strong>Best Value</strong>
        </div>
      )}
      {isOffer && (
        <div className="absolute left-4 -top-2.5  uppercase font-nb text-[10px] bg-[#FEC63F] text-main-dark-red py-1 px-3.75 rounded-full text-center shadow tracking-wider">
          <strong>New Year Offer</strong>
        </div>
      )}
      <div className="w-full flex items-center justify-between pb-3">
        <div className="flex items-start gap-2">
          <div>
            {name !== currentSupply.name ? (
              <img src={emptyRadioIcon} alt="empty radio" className="size-6" />
            ) : (
              <img src={fillRadioIcon} alt="fill radio" className="size-6" />
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-arizona font-medium md:text-xl text-[17px]">
              {name}{" "}
              <span
                className={cn(name === "90-Day Supply" && "text-[#16A34A]")}
              >
                (Save {savePct}%)
              </span>
            </p>
            <p className="text-sm font-medium">
              Billed ${billedPrice} AUD every {months} weeks
            </p>
          </div>
        </div>
        <div className="text-right flex flex-col gap-1">
          <p className="text-sm font-bold">${pricePerMonth} /mo</p>
          <p className="font-nb text-xs">${pricePerServing} AUD / serving</p>
        </div>
      </div>
      <hr className="ml-10 bg-[#e1cbb9] " />
      {name === "90-Day Supply" ? (
        <div className="mt-3 md:ml-5 ml-2 flex flex-col md:gap-1">
          {benefits90Days.map((data) => (
            <p key={data} className="text-sm mb-1 font-medium tracking-tight">
              {data}
            </p>
          ))}
        </div>
      ) : (
        <div className="mt-3 md:ml-5 ml-2 flex flex-col md:gap-2 gap-1 max-md:text-sm">
          {benefits30Days.map((data) => (
            <div
              key={data}
              className="text-sm font-medium flex items-center gap-2 tracking-tight"
            >
              <div>
                <img src={checkIcon} alt="check icon" className="size-4" />
              </div>
              <p>{data}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Supply;
