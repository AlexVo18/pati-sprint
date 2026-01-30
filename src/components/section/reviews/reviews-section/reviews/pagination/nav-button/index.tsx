import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;

const NavButton = ({ children, ...props }: Props) => {
  return (
    <button
      className="size-6 p-1 text-main-pink hover:opacity-80 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default NavButton;
