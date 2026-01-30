import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const daysImg =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864";

export type Props = {
  bgClassName?: string;
  className?: string;
  isSubTextBold?: boolean;
};

const TryButton = ({ bgClassName, className, isSubTextBold = true }: Props) => {
  const handleClick = () => {
    window.open("https://pay.trysculptique.com/lymphatic/checkout", "_blank");
  };
  return (
    <div
      className={cn(
        "text-center font-normal flex flex-col justify-center items-center gap-4",
        bgClassName,
        isSubTextBold && "font-bold",
      )}
    >
      <Button
        className={cn(
          "text-white bg-black hover:opacity-70 sm:py-4.5 sm:px-20 p-4 sm:text-lg text-base sm:inline-block block transition duration-200 leading-[1.3em] rounded-sm h-fit hover:cursor-pointer max-sm:w-full font-normal",
          isSubTextBold && "font-bold",
          className,
        )}
        onClick={handleClick}
      >
        Try Lymphatic Drainage Risk-Free
      </Button>
      <div className="flex items-center gap-4 justify-center">
        <div>
          <img src={daysImg} alt="60-days-back" className="size-6" />
        </div>
        {!isSubTextBold ? (
          <p>60-Day Money-Back Guarantee</p>
        ) : (
          <p>60 day money-back guarantee</p>
        )}
      </div>
    </div>
  );
};

export default TryButton;
