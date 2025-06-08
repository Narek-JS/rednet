"use client";

import { AuctionDashboard } from "@/components/Home/AuctionWrapper/AuctionDashboard";
import { SearchSection } from "../../SearchSection";
import { Filter } from "../../Filter";

interface AuctionWrapperProps {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

export const AuctionWrapper: React.FC<AuctionWrapperProps> = (props) => {
  const { search } = props;

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-8">
      <div className="w-full lg:w-[300px] shrink-0">
        <Filter />
      </div>
      <div className="w-full">
        <SearchSection search={search} />
        <AuctionDashboard {...props} />
      </div>
    </div>
  );
};
