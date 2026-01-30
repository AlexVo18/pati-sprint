import { useState } from "react";
import {
  americanFlag,
  cancelImg,
  daysImg,
  newYearPromoImg,
  options,
  payments,
} from "../mock-data";
import OptionCard from "../option-card";
import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Refill from "@/icons/refill";

const Deals = () => {
  const [chosenOtp, setChosenOtp] = useState("option2");

  const handleChooseOtp = (id: string) => {
    setChosenOtp(id);
  };

  const handleClick = () => {
    window.open(
      "https://pay.trysculptique.com/checkout2?products=763%3A1",
      "_blank",
    );
  };

  return (
    <div className="flex flex-col gap-4 flex-wrap">
      <div className="rounded-md bg-main-skin p-3 flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            option={option}
            key={option.id}
            isChosen={option.id === chosenOtp}
            onClick={handleChooseOtp}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 max-md:text-xs">
        <div>
          <Truck />
        </div>
        <p>
          Delivered on{" "}
          <span className="bg-main-green text-white py-1 px-2 rounded">
            Monday, 19 January
          </span>{" "}
          with Express Shipping
        </p>
      </div>
      <Button
        className="uppercase font-bold text-lg w-full px-3 py-7 font-nunito transition-colors duration-200 hover:cursor-pointer"
        onClick={handleClick}
      >
        ADD TO CART
      </Button>
      <div className="flex items-center justify-center gap-4 max-md:text-xs">
        <div className="flex gap-2 items-center border-r pr-4 border-black">
          <div>
            <Refill />
          </div>
          <p>{options.find((option) => option.id === chosenOtp)?.refill}</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="size-5">
            <img src={cancelImg} alt="cancel-icon" />
          </div>
          <p>Stop or Cancel Anytime</p>
        </div>
      </div>
      <div className="w-full">
        <img src={payments} alt="payment-methods" />
      </div>
      <div className="h-fit">
        <img
          src={newYearPromoImg}
          alt="new-year-promo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[5%]">
          <img src={daysImg} alt="return-days" />
        </div>
        <p>60-Day Money-Back Guarantee</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[5%]">
          <img src={americanFlag} alt="free-shipping-usa" />
        </div>
        <p>Free Shipping From USA Included</p>
      </div>
    </div>
  );
};

export default Deals;
