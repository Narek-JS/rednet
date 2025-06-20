"use client";

import { forwardRef } from "react";

const Checkbox = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <input
    type="checkbox"
    ref={ref}
    className={`w-4 h-4 border rounded text-primary focus:ring focus:ring-primary ${className}`}
    {...props}
  />
));

Checkbox.displayName = "Checkbox";
export { Checkbox };
