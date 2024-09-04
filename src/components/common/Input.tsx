import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputVariant = cva("border-b outline-none", {
  variants: {
    intent: {
      primary:
        "px-2 border-blue-400 hover:bg-blue-50 hover:border-blue-600 focus-visible:border-blue-600",
      secondary:
        "border-slate-400 hover:bg-slate-100 hover:border-slate-600 focus-visible:border-gray-600",
      transparent: "border-transparent",
    },
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    py: {
      xs: "py-0.5",
      sm: "py-1",
      md: "py-2",
      lg: "text-3",
      xl: "text-3.5",
    },
    textAlign: {
      left: "",
      center: "text-center",
    },
  },
  defaultVariants: {
    intent: "primary",
    fontSize: "md",
    py: "md",
    textAlign: "left",
  },
});

type InputType = VariantProps<typeof inputVariant> & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ intent, fontSize, py, textAlign, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={inputVariant({ intent, fontSize, py, textAlign })}
        {...props}
      />
    );
  }
);

export default Input;
