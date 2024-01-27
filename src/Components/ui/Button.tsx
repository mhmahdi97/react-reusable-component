import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;

type Tvariant = "solid" | "ghost" | "outline";

type TButtonOptions = {
  variant?: Tvariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, children, variant = "solid", ...rest }, ref) => {
    // ({ className, children, variant, ...rest }, ref) => {
    const getVariant = (variant: Tvariant) => {
      switch (variant) {
        case "outline":
          return "btn-outine";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };
    return (
      <button
        //   className={cn(
        //     "btn-ghost ${className}",
        //     {
        //       "border border-purple-500 bg-opacity-10": outline,
        //     },
        //     className
        //   )}
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
