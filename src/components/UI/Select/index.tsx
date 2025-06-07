import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  placeholder: string;
  label?: string;
  error?: string;
}

const Select: React.FC<Props> = ({
  placeholder,
  className,
  children,
  label,
  error,
  ...rest
}) => (
  <div className="relative w-full flex flex-col gap-2.5">
    {label && (
      <label className="text-[#14142B] font-semibold text-[14px]">
        Industry
      </label>
    )}
    <select
      className={twMerge(
        clsx(
          "appearance-none w-full h-[56px] rounded-[16px] border-none outline-none bg-[#EFF0F6] px-3 pl-6 py-2",
          className
        )
      )}
      {...rest}
    >
      <option value="">{placeholder}</option>
      {children}
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <ChevronDownIcon />
    </div>
    {error && (
      <p className="absolute left-0 -bottom-[22px] text-[#C30052] text-sm font-semibold">
        {error}
      </p>
    )}
  </div>
);

export { Select };
