import { twMerge } from "tailwind-merge";
import * as React from "react";
import clsx from "clsx";

type Variant = "default" | "secondary" | "destructive" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  default:
    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
};

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  const baseClass =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  return (
    <div
      className={twMerge(clsx(baseClass, variantClasses[variant], className))}
      {...props}
    />
  );
};

export { Badge };
