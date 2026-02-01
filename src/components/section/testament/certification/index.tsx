const Certification = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  max-w-[680px] mx-auto mt-6 px-4 sm:pr-4 sm:pl-6 py-5 sm:py-3 rounded-[14px] border-2 border-[#F59E0B] bg-gradient-to-r from-[#FEF9E7] via-[#FEF3C7] to-[#FDE68A] shadow-[0_6px_20px_0_rgba(245,158,11,0.28),0_2px_6px_rgba(0,0,0,0.04)] gap-3 sm:gap-0 text-center sm:text-left w-fit">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[14px] sm:pr-5 w-full sm:w-auto">
        <span className="text-[32px] sm:text-4xl leading-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]">
          🏆
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-[13px] sm:text-[15px] font-extrabold text-[#44403C] uppercase tracking-[0.6px] sm:tracking-[0.8px] leading-[1.2]">
            NSF CERTIFIED FOR SPORT
          </span>
          <span className="text-xs sm:text-[13px] font-semibold text-[#B45309] tracking-[0.2px]">
            280+ Substances Tested
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="block w-4/5 sm:w-0.5 h-0.5 sm:h-[52px] bg-gradient-to-r sm:bg-gradient-to-b from-[rgba(245,158,11,0.1)] via-[rgba(245,158,11,0.35)] to-[rgba(245,158,11,0.1)] flex-shrink-0 rounded-sm"></div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 sm:pl-5 w-full sm:w-auto">
        <div className="w-[58px] h-[58px] sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 sm:border-[3px] border-[#F59E0B] shadow-[0_2px_8px_rgba(245,158,11,0.3)] order-first sm:order-last">
          <img
            src="https://im8health.com/cdn/shop/files/media_arynasabalenka_2x_1.png?v=1750822572&width=150"
            alt="Aryna Sabalenka"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[13px] sm:text-sm font-semibold text-[#44403C] leading-[1.3]">
            Trusted by{" "}
            <span className="text-[#B45309] font-bold">Aryna Sabalenka</span>
          </span>
          <span className="text-xs sm:text-[13px] font-medium text-[#57534E] leading-[1.3]">
            World No. 1 Tennis Player
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certification;
