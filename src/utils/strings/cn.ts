import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs));
};

export { cn };
