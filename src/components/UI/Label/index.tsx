"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const baseLabelClass =
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

type Primitive = typeof LabelPrimitive.Root;

interface LabelProps extends ComponentPropsWithoutRef<Primitive> {
  className?: string;
}

const Label = React.forwardRef<React.ComponentRef<Primitive>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={twMerge(clsx(baseLabelClass, className))}
      {...props}
    />
  )
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
