import { Button } from "@/components/ui/button";
import { useProductContext } from "@/hooks/use-product";

const Cart = () => {
  const {
    currentProduct: { images, name },
    currentSupply: { pricePerMonth },
  } = useProductContext();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border border-[#50000b1f]">
      <div className="w-full h-22.25 bg-[#f5eaeaf2] mx-auto md:px-14 px-4">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-4.5 max-lg:hidden">
            <img src={images[0]} alt={name} className="size-22.5 rounded-xl" />
            <div className="leading-4">
              <p className="font-bold">
                Daily Ultimate Essentials: All-in-One Supplement
              </p>
              <p>({name})</p>
            </div>
          </div>
          <div className="flex items-center gap-3 h-full max-lg:w-full">
            <div className="rounded-full max-lg:w-full px-7.5 py-2 border border-main-dark-red text-xs md:w-70 bg-white">
              <p className="font-bold text-sm">90-Day Supply</p>
              <p>$4.73 AUD / serving</p>
            </div>
            <Button className="uppercase bg-main-dark-red hover:bg-main-dark-red rounded-full transition duration-300 font-bold pt-4.75 pb-3.75 px-10 text-[13px] w-80 h-11.75 max-md:w-30 cursor-pointer max-md:hidden">
              Add to cart-${pricePerMonth} AUD/MO
            </Button>
            <Button className="uppercase bg-main-dark-red hover:bg-main-dark-red rounded-full transition duration-300 font-bold pt-4.75 pb-3.75 px-10 text-[13px] w-80 h-11.75 max-md:w-30 cursor-pointer md:hidden">
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
