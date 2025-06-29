import { cn } from "@/utils/strings/cn";
import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassname?: string;
  labelClassname?: string;
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { label, error, className, wrapperClassname, labelClassname, ...rest },
    ref
  ) => (
    <div
      className={cn(
        "relative overflow-x-clip w-full flex flex-col gap-2.5",
        wrapperClassname
      )}
    >
      {label && (
        <label
          className={cn(
            "text-[#14142B] font-semibold text-[14px] text-left",
            labelClassname
          )}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          "w-full h-[46px] sm:h-[56px] rounded-[12px] sm:rounded-[16px] border-none outline-none bg-[#EFF0F6] px-3 pl-3 py-2",
          className
        )}
        {...rest}
      />
      {error && (
        <p className="absolute left-0 -bottom-[22px] text-[#C30052] whitespace-nowrap text-sm font-semibold">
          {error}
        </p>
      )}
    </div>
  )
);

Input.displayName = "Input";

export { Input };
