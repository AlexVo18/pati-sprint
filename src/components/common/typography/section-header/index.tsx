import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  topSection?: React.ReactNode;
  subText?: React.ReactNode;
  hasSpacing?: boolean;
} & React.ComponentProps<"h1">;

const SectionHeader = ({
  children,
  className,
  topSection,
  subText,
  hasSpacing = true,
}: Props) => {
  return (
    <div
      className={cn(
        "text-center mx-auto max-w-200 flex flex-col gap-4",
        hasSpacing && "my-4"
      )}
    >
      {topSection ? topSection : null}
      <h2
        className={cn(
          "font-lora font-normal  sm:text-[2rem] text-2xl leading-[1.3em] ",
          className
        )}
      >
        {children}
      </h2>
      {subText ? (
        <div className="font-nunito sm:text-lg text-base leading-[1.3em]">
          {subText}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHeader;
