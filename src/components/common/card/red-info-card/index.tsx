import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">;

const RedInfoCard = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn("px-4 py-2 rounded-sm bg-red-100 sm:my-4", className)}
      {...props}
    >
      <div className="my-2">{children}</div>
    </div>
  );
};

export default RedInfoCard;
