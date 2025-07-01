"use client";

import { FilterSidebar } from "./_components/FilterSidebar";
import { SearchTenders } from "./_components/Search";
import { TEXTS } from "@/constants/texts";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TendersLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="container mx-auto">
        <div className="my-[34px] w-full flex">
          <div className="hidden md:block">
            <FilterSidebar />
          </div>
          <main className="flex-1 p-6 pt-0">
            <div className="flex justify-between items-center gap-3 mb-4">
              <h1 className="text-[24px] font-bold text-[#000D26]">
                {TEXTS.tendersLayout.title}
              </h1>
              <SearchTenders />
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default TendersLayout;
