import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  buttonType?: "default" | "outline";
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<typeof Button>, "variant" | "className">;

const FormButton = ({
  buttonType = "default",
  children,
  className,
  ...props
}: Props) => {
  return (
    <Button
      className={cn(
        "hover:opacity-80 text-white bg-main-pink border-2 border-main-pink hover:bg-main-pink font-extrabold text-lg py-2.5 px-5 cursor-pointer rounded-none",
        buttonType === "outline" &&
          "text-main-pink hover:text-main-pink bg-white hover:bg-white",
        className,
      )}
      variant={buttonType}
      {...props}
    >
      {children}
    </Button>
  );
};

export default FormButton;
