import LeavesDecoration from "@/icons-old/leaves-decoration";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doctorAvts } from "../mock-data";
import { X } from "lucide-react";

const CliniciansChoice = () => {
  return (
    <div className=" h-19.5 flex items-center gap-3">
      <div className="flex items-center gap-2.5 pt-2 px-2 pb-2.5">
        <div className="flex items-center gap-1">
          <div className="h-10">
            <LeavesDecoration className="text-black h-10 w-auto" />
          </div>
          <div className="font-lora text-center">
            <p>Clinicians'</p>
            <p>Choice</p>
          </div>
          <div className="h-10">
            <LeavesDecoration className="scale-x-[-1] h-10 w-auto" />
          </div>
        </div>
        <div className="flex flex-col leading-4.5 text-[13px] gap-1.5">
          <div>
            <p>
              <span className="font-bold">373 clinicians</span> share this on{" "}
              <span className="italic">FrontrowMD</span>
            </p>
            <p>
              without compensation.{" "}
              <span className="border-b border-black cursor-pointer">
                Learn more
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-0.5 *:data-[slot=avatar]:ring-2 h-4.5">
              {doctorAvts.map((avt, index) => (
                <Avatar className="size-4" key={index}>
                  <AvatarImage src={avt} alt={`doctor-${index + 1}`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <a className="font-semibold border-b border-transparent hover:border-black cursor-pointer">
              Read their reviews
            </a>
          </div>
        </div>
      </div>
      <div className="h-full max-md:hidden">
        <button className="text-xs p-1 bg-[#E0E0E0] rounded-full mt-1.25 aspect-square cursor-pointer">
          <X className="size-2.25" />
        </button>
      </div>
    </div>
  );
};

export default CliniciansChoice;
