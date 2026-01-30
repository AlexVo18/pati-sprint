import { cn } from "@/lib/utils";

type Props = {
  className?: string;
} & Omit<React.ComponentProps<"img">, "className">;

const Image = ({ className, ...props }: Props) => {
  return <img className={cn("rounded-md", className)} {...props} />;
};

export default Image;
