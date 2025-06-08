import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type Variant = "primery" | "border" | "text" | "outline" | "link";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  border: "border-2 border-[#D6D8E7] text-[#F35D74] bg-transparent",
  text: "bg-transparent font-medium cursor-pointer",
  primery: "bg-[#F35D74] text-[#FFFFFF]",
  outline: "border border-primary text-primary bg-white",
  link: "text-primary px-0 h-auto",
};

const Button: React.FC<Props> = ({
  variant = "primery",
  type = "button",
  className,
  children,
  ...rest
}) => {
  const baseClass =
    "w-full h-[56px] px-[17.9px] rounded-full font-semibold cursor-pointer";

  const isText = variant === "text";
  const finalClass = isText
    ? twMerge(clsx("text-center text-sm", variantClasses[variant], className))
    : twMerge(clsx(baseClass, variantClasses[variant], className));

  return (
    <button type={type} className={finalClass} {...rest}>
      {children}
    </button>
  );
};

export { Button };
