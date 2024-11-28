import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
interface Props {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const WidgetButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={cn(
        "reaction flex items-center space-x-2 cursor-pointer p-2 rounded-3xl hover:bg-gray-700",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WidgetButton;