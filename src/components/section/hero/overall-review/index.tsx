import { benefits, ratings } from "../mock-data";

const OverallReview = () => {
  return (
    <div className="flex flex-col gap-4 flex-wrap">
      <div className="flex items-center gap-4">
        <img src={ratings} alt="ratings" className="sm:w-25 w-15" />
        <p className="max-sm:text-xs">
          4.8/5 Excellent | Based on 2381 Reviews
        </p>
      </div>
      <h1 className="leading-[1.4em] md:text-[28px] text-2xl font-normal font-lora">
        New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™
      </h1>
      <div className="flex flex-col gap-4">
        {benefits.map(({ des, icon }, index) => (
          <div key={des} className="flex items-center gap-3">
            <div className="w-[8.9%] flex items-center justify-center shrink-0">
              <img
                src={icon}
                alt={`Benefit-${index + 1}`}
                className="w-full object-fill"
                loading="lazy"
              />
            </div>
            <p className="text-wrap">{des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallReview;
