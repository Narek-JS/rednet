"use client";

import * as Toast from "@radix-ui/react-toast";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  ReactNode,
  useState,
  useRef,
} from "react";

interface ToastContextValue {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const timerRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setOpen(false);
    requestAnimationFrame(() => setOpen(true));
  }, []);

  useEffect(() => {
    if (open) {
      timerRef.current = window.setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [open]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast.Provider swipeDirection="right">
        {children}
        <Toast.Root
          className="group flex items-center gap-3 bg-white text-black rounded-2xl shadow-lg px-5 py-4 w-[340px] max-w-full animate-slide-in transition-all data-[state=open]:animate-fade-in"
          open={open}
          onOpenChange={setOpen}
          onPointerEnter={() => {
            if (timerRef.current) clearTimeout(timerRef.current);
          }}
          onPointerLeave={() => {
            timerRef.current = window.setTimeout(() => {
              setOpen(false);
            }, 1500);
          }}
        >
          <div className="w-2.5 h-2.5 mt-0.5 rounded-full bg-green-500 flex-shrink-0" />
          <Toast.Title className="text-sm text-body font-medium leading-snug">
            {message}
          </Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="fixed top-4 right-4 z-[9999]" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
};
