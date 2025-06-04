import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type Variant = "primery" | "border";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primery: "bg-[#F35D74] text-[#FFFFFF]",
  border: "border-2 border-[#D6D8E7] text-[#F35D74] bg-transparent",
};

const Button: React.FC<Props> = ({
  children,
  variant = "primery",
  type = "button",
  className,
  ...rest
}) => {
  const baseClass =
    "w-full h-[56px] px-[17.9px] rounded-full font-semibold cursor-pointer";

  return (
    <button
      className={twMerge(clsx(baseClass, variantClasses[variant], className))}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
