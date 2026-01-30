import type { CommitmentType } from "@/types/commitment.type";

type Props = {
  item: CommitmentType;
};

const CommitmentItem = ({ item }: Props) => {
  const { icon, scope, title } = item;
  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <img src={icon} alt={title} className="max-w-10 h-10" />
      </div>
      <div className="flex flex-col gap-2 text-center w-full items-center">
        <p className="font-semibold max-sm:max-w-37.5">{title}</p>
        <p>{scope}</p>
      </div>
    </div>
  );
};

export default CommitmentItem;
