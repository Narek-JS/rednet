"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type Props = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress: React.FC<Props> = ({ className, value, ...props }) => (
  <ProgressPrimitive.Root
    className={twMerge(
      clsx(
        "relative h-3 w-full overflow-hidden rounded-[6px] bg-[#EFF0F6]",
        className
      )
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-secondary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
);

export { Progress };
