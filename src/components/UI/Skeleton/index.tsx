import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Skeleton = ({ className, asChild, ...props }: SkeletonProps) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={clsx("animate-pulse bg-secondary rounded-md", className)}
      {...props}
    />
  );
};

export { Skeleton };
