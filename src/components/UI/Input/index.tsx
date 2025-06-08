import { twMerge } from "tailwind-merge";
import * as React from "react";
import clsx from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, className, ...rest }, ref) => (
    <div className="relative w-full flex flex-col gap-2.5">
      {label && (
        <label className="text-[#14142B] font-semibold text-[14px] text-left">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={twMerge(
          clsx(
            "w-full h-[56px] rounded-[16px] border-none outline-none bg-[#EFF0F6] px-3 pl-6 py-2",
            className
          )
        )}
        {...rest}
      />
      {error && (
        <p className="absolute left-0 -bottom-[22px] text-[#C30052] text-sm font-semibold">
          {error}
        </p>
      )}
    </div>
  )
);

Input.displayName = "Input";

export { Input };
