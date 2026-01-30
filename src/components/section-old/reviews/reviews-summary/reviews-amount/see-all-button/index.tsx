type Props = {
  chosenRating: string;
  onClick: (type: string) => void;
};

const SeeAllButton = ({ chosenRating, onClick }: Props) => {
  if (chosenRating === "all") {
    return null;
  }
  return (
    <div>
      <p
        className="underline hover:no-underline cursor-pointer text-main-pink mb-2.5 text-center text-[80%]"
        onClick={() => onClick("all")}
      >
        See all review
      </p>
    </div>
  );
};

export default SeeAllButton;
