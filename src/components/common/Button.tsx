import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { Link, LinkProps } from "react-router-dom";

const buttonVariant = cva("px-3 py-1 border hover:brightness-95 rounded-md", {
  variants: {
    intent: {
      primary: "border-blue-500",
      secondary: "border-slate-500",
    },
    variant: {
      outline: "bg-white",
      contained: "text-white",
    },
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  compoundVariants: [
    { intent: "primary", variant: "contained", className: "bg-blue-500" },
    { intent: "primary", variant: "outline", className: "text-blue-500" },
    { intent: "secondary", variant: "contained", className: "bg-slate-500" },
    { intent: "secondary", variant: "outline", className: "text-slate-500" },
  ],
  defaultVariants: {
    intent: "primary",
    variant: "contained",
    fontSize: "sm",
  },
});

type ButtonType = VariantProps<typeof buttonVariant> &
  (ComponentProps<"button"> | LinkProps);

function Button({ intent, variant, fontSize, children, ...props }: ButtonType) {
  if ("to" in props) {
    return (
      <Link className={buttonVariant({ intent, variant, fontSize })} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={buttonVariant({ intent, variant, fontSize })} {...props}>
      {children}
    </button>
  );
}

export default Button;
