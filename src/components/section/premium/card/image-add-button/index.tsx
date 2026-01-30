import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ImageAddButton = () => {
  return (
    <Button
      className={cn(
        "absolute bottom-4 right-4 uppercase lg:opacity-0 transition-all duration-400 cursor-pointer",
        "ease-in-out lg:translate-y-full lg:group-hover:translate-y-0 lg:group-hover:opacity-100 pt-3 pb-2.5 px-8",
        "text-[#50000b] bg-[#fffc] border border-[#50000b] rounded-full hover:bg-[#50000b]",
        "hover:text-white font-bold text-[13px] leading-[1.4] text-center h-fit max-md:hidden",
      )}
    >
      Add to Cart
    </Button>
  );
};

export default ImageAddButton;
