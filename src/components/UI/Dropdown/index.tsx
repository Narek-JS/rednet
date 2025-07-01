"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";
import classNames from "classnames";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
}

// Create context for Dropdown
const DropdownContext = createContext<
  { closeDropdown: () => void } | undefined
>(undefined);

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  className,
  align = "right",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeDropdown = () => setOpen(false);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen((prev) => !prev)}>{trigger}</div>
      {open && (
        <DropdownContext.Provider value={{ closeDropdown }}>
          <div
            className={classNames(
              "absolute z-50 mt-2 min-w-[120px] rounded-md bg-white border shadow-md text-sm",
              align === "right" ? "right-0" : "left-0",
              className
            )}
          >
            {children}
          </div>
        </DropdownContext.Provider>
      )}
    </div>
  );
};

interface DropdownItemProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  onClick,
  children,
  className,
}) => {
  const ctx = useContext(DropdownContext);
  const handleClick = () => {
    if (onClick) onClick();
    if (ctx) ctx.closeDropdown();
  };
  return (
    <button
      onClick={handleClick}
      className={classNames(
        "w-full text-left px-4 py-2 hover:bg-[#EFF0F6] transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
};
