import { Check, User } from "lucide-react";

type Props = {
  isVerified: boolean;
};

const Avatar = ({ isVerified }: Props) => {
  return (
    <div className="relative flex items-center justify-center size-9 bg-[#e0e0e080]">
      <User size={24} className="text-main-pink" />
      {isVerified ? (
        <div className="absolute flex items-center justify-center bottom-0 right-0 size-3 bg-main-pink">
          <Check size={8} className="text-white" strokeWidth={5} />
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
