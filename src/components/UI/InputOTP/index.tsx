"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { cn } from "@/utils/strings/cn";
import { Dot } from "lucide-react";
import React from "react";

// Main OTP input wrapper with custom styles
type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput>;
const InputOTP: React.FC<InputOTPProps> = ({
  containerClassName,
  className,
  ...props
}) => (
  <OTPInput
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
);

// Groups OTP slots together with flex styling
type InputOTPGroupProps = React.ComponentPropsWithoutRef<"div">;
const InputOTPGroup: React.FC<InputOTPGroupProps> = ({
  className,
  ...props
}) => <div className={cn("flex items-center", className)} {...props} />;

// Individual slot in the OTP input, with caret and active state styling
type InputOTPSlotProps = React.ComponentPropsWithoutRef<"div"> & {
  index: number;
};
const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  className,
  ...props
}) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
};

// Visual separator used between OTP slots (renders a dot)
type InputOTPSeparatorProps = React.ComponentPropsWithoutRef<"div">;
const InputOTPSeparator: React.FC<InputOTPSeparatorProps> = (props) => (
  <div role="separator" {...props}>
    <Dot />
  </div>
);

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
