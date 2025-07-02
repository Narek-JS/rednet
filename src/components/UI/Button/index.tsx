import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/strings/cn";

export type Variant = "primery" | "border" | "text" | "outline" | "link";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  loading?: boolean;
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
  loading = false,
  disabled,
  ...rest
}) => {
  const baseClass =
    "w-full h-[48px] sm:h-[55px] px-[16px] rounded-[12px] sm:rounded-[16px] font-semibold cursor-pointer duration-200 flex items-center justify-center gap-2";

  const isText = variant === "text";
  const finalClass = isText
    ? cn("text-center text-sm", variantClasses[variant], className)
    : cn(baseClass, variantClasses[variant], className);

  const isDisabled = disabled || loading;

  return (
    <button type={type} className={finalClass} disabled={isDisabled} {...rest}>
      {loading ? (
        <Loading
          classname={variant === "outline" ? "bg-primary" : "bg-white"}
        />
      ) : (
        children
      )}
    </button>
  );
};

const Loading = ({ classname }: { classname?: string }) => (
  <div className="flex gap-2">
    <div
      className={cn(
        "w-1.5 h-1.5 rounded-full animate-pulse bg-[white]",
        classname
      )}
    />
    <div
      className={cn(
        "w-1.5 h-1.5 rounded-full animate-pulse bg-[white]",
        classname
      )}
    />{" "}
    <div
      className={cn(
        "w-1.5 h-1.5 rounded-full animate-pulse bg-[white]",
        classname
      )}
    />
  </div>
);

export { Button };
