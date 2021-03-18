import React from "react";

interface ButtonProps {
  children?: React.ReactChild | Array<React.ReactChild>;
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({
  children,
  className,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`text-font-white bg-primary-400 hover:bg-primary-300 py-2 px-6 rounded-full ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
