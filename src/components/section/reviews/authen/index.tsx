import { authenBadge } from "../mock-data";

const Authen = () => {
  return (
    <div className="flex flex-col text-center">
      <div
        className="pt-4"
        title="Diamond Authentic Shop. 100% of published reviews are verified reviews"
      >
        <img
          src={authenBadge}
          alt="authenticity-badge"
          className="max-w-full size-20"
        />
      </div>
      <p className="font-bold text-xs -tracking-[0.02em] pl-2 text-[#4c8eda]">
        100.0
      </p>
    </div>
  );
};

export default Authen;
