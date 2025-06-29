"use client";

import DatePicker from "react-datepicker";
import { DatePickerIcon } from "@/components/Icons/DatePickerIcon";
import { ControllerRenderProps } from "react-hook-form";
import { format as formatFn } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";

interface DatePickerProps {
  field: ControllerRenderProps<any, any>;
  formatString?: string;
  placeholder?: string;
  label?: string;
  error?: string;
}

const CustomInput = React.forwardRef<HTMLButtonElement, any>(
  ({ value, onClick, placeholder }, ref) => (
    <button
      type="button"
      className="cursor-pointer relative w-full h-[46px] sm:h-[56px] rounded-[12px] sm:rounded-[16px] border-none outline-none bg-[#EFF0F6] px-6 py-2 text-left"
      onClick={onClick}
      ref={ref}
    >
      {value || <span className="text-gray-400">{placeholder}</span>}
      <DatePickerIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
    </button>
  )
);

CustomInput.displayName = "CustomInput";

export const DatePickerComponent: React.FC<DatePickerProps> = ({
  placeholder = "Select date",
  formatString = "yyyy-MM-dd",
  field,
  label,
  error,
}) => {
  return (
    <div className="relative w-full flex flex-col gap-2.5">
      {label && (
        <label className="text-[#14142B] font-semibold text-[14px] text-left">
          {label}
        </label>
      )}

      <DatePicker
        selected={field.value ? new Date(field.value) : null}
        onChange={(date: Date | null) => {
          if (date) field.onChange(formatFn(date, formatString));
        }}
        showTimeSelect
        dateFormat={formatString}
        placeholderText={placeholder}
        customInput={<CustomInput placeholder={placeholder} />}
      />

      {error && (
        <p className="absolute left-0 -bottom-[22px] text-[#C30052] whitespace-nowrap text-sm font-semibold">
          {error}
        </p>
      )}
    </div>
  );
};
