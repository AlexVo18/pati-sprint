import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  garantuees,
  leaveIcon,
  plusRedIcon,
  redCheckIcon,
  supplementFacts,
} from "../mock-data";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/use-modal";

const NutritionModal = () => {
  const { isOpen, setIsOpen, handleClose } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 hover:cursor-pointer rounded-4xl  py-5 px-6 border border-black bg-white/85 hover:bg-white/85">
          <div className="size-6">
            <img src={leaveIcon} alt="nutrition-icon" className="size-6" />
          </div>
          <p className=" text-black text-base font-light">
            Nutritional Information
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden flex flex-col gap-4 p-4">
        <div
          className="absolute top-2 right-2 border border-red-500 hover:cursor-pointer rounded-full"
          onClick={handleClose}
        >
          <img
            src={plusRedIcon}
            alt="close-icon"
            className="size-6 rotate-45"
          />
        </div>
        <DialogHeader>
          <h1 className="text-center text-[28px] font-lora text-black">
            Nutritional Information
          </h1>
        </DialogHeader>
        <div>
          <img src={supplementFacts} alt="supplement-facts" />
        </div>
        <div>
          <Button className="hover:bg-black bg-black p-5 w-full h-full hover:cursor-pointer text-base font-light tracking-wider leading-7">
            <p className="text-wrap">Try Lymphatic Drainage Risk-Free</p>
          </Button>
        </div>
        <div className="flex sm:justify-center justify-start gap-3 flex-wrap">
          {garantuees.map((item) => (
            <div key={item} className="flex items-center gap-1">
              <div>
                <img
                  src={redCheckIcon}
                  alt="garantuee-icon"
                  className="size-4"
                />
              </div>
              <p className="text-xs">{item}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NutritionModal;
