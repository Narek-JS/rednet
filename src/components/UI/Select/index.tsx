"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/utils/strings/cn";
import React, { ReactNode } from "react";

interface Props {
  label?: string;
  error?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  placeholder: string;
  className?: string;
}

const Select: React.FC<Props> = ({
  label,
  error,
  value,
  onValueChange,
  children,
  placeholder,
  className,
}) => (
  <div className="relative overflow-x-clip w-full flex flex-col gap-2.5">
    {label && (
      <label className="text-[#14142B] font-semibold text-[14px] text-left">
        {label}
      </label>
    )}

    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={cn(
          "w-full h-[46px] sm:h-[56px] bg-[#EFF0F6] rounded-[12px] sm:rounded-[16px] border-none outline-none px-6 py-2 flex items-center justify-between text-left cursor-pointer",
          !value ? "text-[#77797d]" : "text-[#14142B]",
          className
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDownIcon className="w-4 h-4 " />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          style={{ width: "var(--radix-select-trigger-width)" }}
          className="bg-white rounded-md shadow-lg z-50"
          position="popper"
          side="bottom"
          sideOffset={4}
        >
          <SelectPrimitive.Viewport className="p-1 max-h-[200px] overflow-y-auto">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>

    {error && (
      <p className="absolute left-0 -bottom-[22px] text-[#C30052] whitespace-nowrap text-sm font-semibold">
        {error}
      </p>
    )}
  </div>
);

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "px-6 py-2 text-sm text-[#14142B] cursor-pointer rounded-md hover:bg-[#EFF0F6] focus:bg-[#EFF0F6] outline-none",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = "SelectItem";

export { Select, SelectItem };
