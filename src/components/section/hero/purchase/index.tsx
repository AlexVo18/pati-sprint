import { useProductContext } from "@/hooks/use-product";
import { cn } from "@/lib/utils";
import Supply from "./supply";
import { Button } from "@/components/ui/button";
import LightGreenCheck from "@/icons/check";

const Purchase = () => {
  const {
    currentProduct,
    currentSupply: { pricePerMonth, name },
    products,
    selectProduct,
    selectSupply,
  } = useProductContext();
  return (
    <div>
      <div className="my-4">
        <p className="mb-2 text-base font-bold font-arizona">
          1. Select Format:
        </p>
        <div className="grid grid-cols-2 gap-2">
          {products.map((item, index) => {
            const { thumbnail, name, pricePerServing, isPopular } = item;
            const isChosen = currentProduct.name === name;
            return (
              <div
                key={item.name}
                className={cn(
                  "flex items-center relative rounded-xl bg-white border-[0.25px] max-h-25  hover:ring-main-dark-red hover:ring-[0.5px] border-[#e1cbb9] transition duration-300 cursor-default opacity-70",
                  isChosen &&
                    "bg-[#f5eaea] border border-main-dark-red hover:ring-0 opacity-100",
                )}
                onClick={() => selectProduct(index)}
              >
                {isPopular && (
                  <div className="absolute right-4 -top-2.5 uppercase font-nb text-[10px] bg-main-red text-white py-0.5 px-3.75 rounded-full text-center shadow tracking-wider">
                    <strong>Most Popular</strong>
                  </div>
                )}
                <div className="h-full">
                  <img
                    src={thumbnail}
                    alt={name}
                    className="rounded-l-xl object-cover h-full"
                    loading="lazy"
                  />
                </div>
                <div className="py-4 px-3.5 font-medium ">
                  <p className="font-arizona text-xl">{name}</p>
                  <p className="text-xs">
                    (354g) ${pricePerServing} AUD / serving
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4">
        <p className="mb-2 text-base font-bold font-arizona">
          2. Subscribe & Save:
        </p>
        <div className="flex flex-col gap-4 mt-4">
          {currentProduct.supplies.map((supply, index) => (
            <div
              className="cursor-default"
              onClick={() => selectSupply(index)}
              key={supply.name}
            >
              <Supply supply={supply} />
            </div>
          ))}
          <div className="flex items-center justify-center">
            <div className="text-center border-b border-main-dark-red text-sm cursor-pointer hover:opacity-70 transition duration-300 font-medium">
              One Time Purchase $203
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-3">
        <Button className="uppercase bg-main-red hover:bg-main-dark-red text-white rounded-full h-fit py-1.25 md:pt-3 md:pb-2 pt-4 pb-3 w-full text-base max-md:text-xs font-bold ">
          {name === "90-Day Supply"
            ? `START MY 90-DAY TRANSFORMATION PROGRAM-${pricePerMonth} AUD/MO`
            : `ADD TO CART-${pricePerMonth} AUD/MO`}
        </Button>
      </div>
      <div className="mt-4 md:py-3.5 md:px-4.5 py-3 px-3.5 gap-4 flex items-center rounded-xl border border-[#16A34A] bg-[#F0FDF4] text-sm">
        <div className="rounded-full size-6 bg-[#22c55e] flex items-center justify-center">
          <LightGreenCheck className="size-4 text-white" />
        </div>
        <p className="text-[#166534]">
          <span className="font-bold">New Year discount</span> automatically
          applied at checkout
        </p>
      </div>
    </div>
  );
};

export default Purchase;
