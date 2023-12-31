import React, { ButtonHTMLAttributes } from "react";
import { Loader } from "./icons";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg: string;
  color: string;
  text: string;
  variant: "solid" | "outline";
  borderColor: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  (
    {
      text,
      variant,
      bg,
      borderColor,
      color,
      className,
      disabled,
      isLoading,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`${
          variant == "solid"
            ? disabled
              ? "bg-grey-mid  "
              : `${bg} hover:text-black`
            : disabled
            ? "text-opacity-20"
            : "hover:border-primary-pink"
        } border-2 ${
          disabled ? "border-grey-mid" : borderColor
        } py-3 ${color} ${className} hover:!bg-transparent`}
        {...rest}
      >
        {isLoading ? (
          <Loader className="mx-auto w-[15px] animate-spin lg:w-[20px]" />
        ) : (
          text
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
