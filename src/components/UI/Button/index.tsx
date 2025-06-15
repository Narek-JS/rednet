import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/strings/cn";

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
    "w-full h-[48px] sm:h-[55px] px-[16px] rounded-[12px] sm:rounded-[16px] font-semibold cursor-pointer duration-200";

  const isText = variant === "text";
  const finalClass = isText
    ? cn("text-center text-sm", variantClasses[variant], className)
    : cn(baseClass, variantClasses[variant], className);

  return (
    <button type={type} className={finalClass} {...rest}>
      {children}
    </button>
  );
};

export { Button };
