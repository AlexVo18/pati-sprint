import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<"section">, "className">;

const Container = ({ children, className, ...props }: Props) => {
  return (
    <section
      className={cn(
        "container mx-auto md:px-12.5 px-3.75 max-w-335 tracking-[0.035em]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;
