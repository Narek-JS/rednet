"use client";

import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/utils/strings/cn";

import * as LabelPrimitive from "@radix-ui/react-label";

const baseLabelClass =
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

type Primitive = typeof LabelPrimitive.Root;

interface LabelProps extends ComponentPropsWithoutRef<Primitive> {
  className?: string;
}

const Label = forwardRef<React.ComponentRef<Primitive>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(baseLabelClass, className)}
      {...props}
    />
  )
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
