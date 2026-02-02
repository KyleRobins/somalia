import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-brand-600 text-white hover:bg-brand-700",
  outline: "border border-brand-200 text-brand-700 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50"
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-3 text-xs",
  lg: "h-12 px-7 text-base"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
