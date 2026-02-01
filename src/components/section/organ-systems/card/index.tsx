import type { OrganSystem, ProductType } from "@/types/organ-systems.type";
import { getIcon } from "../mock-data";
import { ArrowIcon } from "../icons";

interface Props {
  system: OrganSystem;
  isActive: boolean;
  onClick: () => void;
  product: ProductType;
}

const Card = ({ system, isActive, onClick, product }: Props) => {
  const Icon = getIcon(system.icon);
  const isLongevity = product === "longevity";

  return (
    <button
      onClick={onClick}
      className={`organ-systems__card group relative flex flex-col items-center justify-center gap-2.5 md:gap-3 p-[24px_12px_20px] md:p-[32px_16px_24px] rounded-4xl md:rounded-[24px] cursor-pointer min-h-27.5 md:min-h-32.5 overflow-hidden border transition-all duration-280 ease-out
        ${
          isActive
            ? isLongevity
              ? "bg-linear-to-br from-[#E78D2D] via-[#3A0000] to-[#3A0000] border-[#E78D2D] shadow-[0_8px_32px_rgba(164,0,17,0.18),0_2px_8px_rgba(80,0,11,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]"
              : "bg-linear-to-br from-[#A40011] via-[#50000B] to-[#3A0008] border-[#A40011] shadow-[0_8px_32px_rgba(164,0,17,0.18),0_2px_8px_rgba(80,0,11,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]"
            : "bg-linear-to-br from-[rgba(255,255,255,0.95)] via-[rgba(245,234,234,0.9)] to-[rgba(255,240,240,0.85)] border-[rgba(164,0,17,0.08)] shadow-[0_4px_20px_rgba(164,0,17,0.06),0_1px_4px_rgba(80,0,11,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-[rgba(164,0,17,0.15)] hover:shadow-[0_6px_28px_rgba(164,0,17,0.09),0_2px_8px_rgba(80,0,11,0.04)] hover:-translate-y-0.5"
        }
        backdrop-blur-md [-webkit-backdrop-filter:blur(12px)]`}
      role="option"
      aria-selected={isActive}
      suppressHydrationWarning
    >
      <span
        className={`absolute top-2 left-3 font-['Aeonik'] text-[10px] font-medium opacity-60 transition-all duration-280 ease-out
        ${isActive ? "text-white/50 opacity-100" : "text-[#949596]"}`}
      >
        {system.number}
      </span>
      <div
        className={`absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-280 ease-smooth
        ${!isActive && "group-hover:opacity-100"}`}
        style={{
          background:
            "linear-gradient(135deg, rgba(164, 0, 17, 0.015) 0%, transparent 60%)",
        }}
      />
      <div
        className={`absolute inset-0 rounded-[inherit] z-0 pointer-events-none transition-opacity duration-420 ease-smooth
        ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
        style={{
          background: isActive
            ? "radial-gradient(circle at 30% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)"
            : "linear-gradient(135deg, rgba(164, 0, 17, 0.08) 0%, transparent 40%)",
        }}
      />
      <div
        className={`relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-280 ease-out
        ${
          isActive
            ? "text-white scale-105"
            : isLongevity
              ? "text-[#E78D2D]"
              : "text-[#50000B]"
        }`}
      >
        <Icon />
      </div>
      <span
        className={`relative font-['Aeonik'] text-xs md:text-[13px] font-medium text-center leading-[1.3] transition-colors duration-280 ease-out
        ${isActive ? "text-white" : "text-[#50000B]"}`}
      >
        {system.label}
      </span>
      <span
        className={`absolute bottom-2 right-2 transition-all duration-280 ease-out
        ${
          isActive
            ? "opacity-60 translate-x-0 text-white"
            : "opacity-0 -translate-x-1 text-[#50000B] group-hover:opacity-40 group-hover:translate-x-0"
        }`}
        aria-hidden="true"
      >
        <ArrowIcon />
      </span>
    </button>
  );
};

export default Card;
