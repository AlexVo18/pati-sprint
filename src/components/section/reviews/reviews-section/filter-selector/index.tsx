import { filterTypeData } from "../../mock-data";

type Props = {
  onClick: (type: string) => void;
};

const FilterSelector = ({ onClick }: Props) => {
  return (
    <div className="py-2">
      <select
        className="text-main-pink py-2.5 text-sm cursor-pointer hover:opacity-80 tracking-tight focus:outline-[#858585] focus:outline-2 focus:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.4)] z-1"
        onChange={(e) => onClick(e.target.value)}
      >
        {filterTypeData.map((item) => {
          const { label, value } = item;

          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterSelector;
