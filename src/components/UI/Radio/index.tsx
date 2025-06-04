"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";
import { Circle } from "lucide-react";
import clsx from "clsx";

// RadioGroup wrapper with default grid spacing
type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
>;
const RadioGroup: React.FC<RadioGroupProps> = ({ className, ...props }) => {
  return (
    <RadioGroupPrimitive.Root
      className={twMerge(clsx("grid gap-2", className))}
      {...props}
    />
  );
};

// Single radio item with custom styles and indicator
type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;
const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  className,
  ...props
}) => {
  return (
    <RadioGroupPrimitive.Item
      className={twMerge(
        clsx(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};

export { RadioGroup, RadioGroupItem };
