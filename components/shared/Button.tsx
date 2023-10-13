import React from "react";

interface IButton {
  bg: string;
  color: string;
  text: string;
  variant: "solid" | "outline";
  borderColor: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  text,
  variant,
  bg,
  borderColor,
  color,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`${
        variant == "solid" ? (disabled ? "bg-grey-mid" : bg) : ""
      } border-2 ${
        disabled ? "border-grey-mid" : borderColor
      } py-3 ${color} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
