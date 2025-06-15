"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/utils/strings/cn";

type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
>;

const RadioGroup: React.FC<RadioGroupProps> = ({ className, ...props }) => (
  <RadioGroupPrimitive.Root
    className={cn("grid gap-2", className)}
    {...props}
  />
);

type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  className,
  ...props
}) => (
  <RadioGroupPrimitive.Item
    className={cn(
      "flex items-center justify-center",
      "h-5 w-5 min-w-5 min-h-5 rounded-full cursor-pointer",
      "border border-primary text-primary",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="h-2.5 w-2.5 rounded-full bg-primary" />
  </RadioGroupPrimitive.Item>
);

export { RadioGroup, RadioGroupItem };
