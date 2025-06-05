"use client";

import { makeStore, AppStore } from "@/store";
import { Provider } from "react-redux";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export { StoreProvider };
