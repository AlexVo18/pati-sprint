import { cn } from "@/lib/utils";

type Props = {
  isGradient?: boolean;
  message: string;
};

const MessageBadge = ({ isGradient = false, message }: Props) => {
  return (
    <b
      className={cn(
        "bg-[#960010] rounded-full text-white font-nb py-2 px-4 text-xs w-fit",
        isGradient && "bg-linear-to-r from-[#a40011] to-[#e78d2d]",
      )}
    >
      {message}
    </b>
  );
};

export default MessageBadge;
