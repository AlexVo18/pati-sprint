import type { SymptomType } from "@/types/connection.type";

type Props = {
  item: SymptomType;
};

const SymptomCard = ({ item: { url, des } }: Props) => {
  return (
    <div className="flex sm:flex-col sm:gap-2.25 rounded-[6px] overflow-hidden">
      <div className="w-full">
        <img src={url} alt={des} className="w-full min-h-37.5 max-sm:h-[95%]" />
      </div>
      <div className="min-h-37.5 bg-[#f7f7f7] sm:p-4 p-3 text-center max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full">
        <p>{des}</p>
      </div>
    </div>
  );
};

export default SymptomCard;
