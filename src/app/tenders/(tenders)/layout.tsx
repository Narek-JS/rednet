"use client";

import { FilterSidebar } from "./_components/FilterSidebar";
import { ReactNode } from "react";
import { SearchTenders } from "./_components/Search";

interface Props {
  children: ReactNode;
}

const TendersLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="container mx-auto">
        <div className="my-[34px] w-full flex">
          <FilterSidebar />
          <main className="flex-1 p-6 pt-0">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[24px] font-bold text-[#000D26]">Tenders</h1>
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
