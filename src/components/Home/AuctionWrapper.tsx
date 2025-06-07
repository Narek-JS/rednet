"use client";

import { Dashboard } from "@/components/Home/Dashboard";
import { SearchSection } from "../SearchSection";
import { Filter } from "../Filter";

interface AuctionWrapperProps {
    search?: string;
    category?: string;
    priceGte?: string;
    priceLte?: string;
}

export const AuctionWrapper: React.FC<AuctionWrapperProps> = (props) => {
  const {search} = props;

  return (
      <div className='flex gap-[33px] mt-8 items-start'>
        <Filter />
        <div className='flex-1'>
          <SearchSection search={search} />
          <Dashboard {...props} />
        </div>
      </div>
  );
};
