"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type SeparatorProps = React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
>;

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={twMerge(
      clsx(
        "shrink-0",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )
    )}
    {...props}
  />
);

export { Separator };
