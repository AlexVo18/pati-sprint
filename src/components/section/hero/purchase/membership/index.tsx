import { Button } from "@/components/ui/button";
import { trainers } from "../../mock-data";
import BlackArrow from "@/icons/black-arrow";

const Membership = () => {
  return (
    <div className="my-4 rounded-xl py-7 px-6 border-2 border-[#BF9C74] bg-[#FFEFD6]">
      <div className="flex justify-center">
        <div className="flex uppercase rounded-full items-center justify-center gap-1.5 bg-linear-to-r from-[#EEB87A] to-[#DFCE89] text-xs pb-2 pt-3 px-4 font-bold mb-4 w-fit">
          <span>🎓</span>
          <span>90-DAY MEMBERS ONLY</span>
        </div>
      </div>
      <h1 className="font-arizona font-medium text-[28px] mb-2 text-center">
        90-Day IM8 Transformation Program
      </h1>
      <div className="text-center pb-5 font-medium text-sm">
        Exclusive access to quarterly masterclasses with our world-class Medical
        and Performance Experts
      </div>
      <div className="mb-5 grid grid-cols-3 gap-4">
        {trainers.map((trainer) => {
          const { image, name, role } = trainer;
          return (
            <div
              key={name}
              className="group transition-transform transform translate-y-0 hover:-translate-y-0.5 duration-300 ease-in-out text-center cursor-pointer"
            >
              <div className="mb-2.5">
                <img
                  src={image}
                  alt={name}
                  className="size-full aspect-square rounded-xl border-2 border-[#BF9C74] object-cover group-hover:shadow-lg transition duration-300"
                />
              </div>
              <p className="text-[13px] font-bold mb-1">{name}</p>
              <p className="text-[11px] text-[#6b4c3a]">{role}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center pt-4 border-t border-[#bf9c744d] font-medium text-sm">
        Exclusive access to quarterly masterclasses with our world-class Medical
        and Performance Experts
      </div>
      <Button className="w-full bg-linear-to-r from-[#EEB87A] to-[#DFCE89] text-main-dark-red cursor-pointer uppercase pt-6 pb-5 px-5 text-[13px] font-bold flex items-center rounded-xl mt-3 hover:shadow-lg transition-[left] duration-600 ease-in-out">
        Learn More About the Program{" "}
        <BlackArrow className="rotate-270 size-4" />
      </Button>
    </div>
  );
};

export default Membership;
