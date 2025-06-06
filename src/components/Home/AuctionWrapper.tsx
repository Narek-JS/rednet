"use client";

import { Dashboard } from "@/components/Home/Dashboard";
import { SearchSection } from "../SearchSection";

interface AuctionWrapperProps {
    search?: string;
    category?: string;
    priceGte?: string;
    priceLte?: string;
}

export const AuctionWrapper: React.FC<AuctionWrapperProps> = (props) => {
  const {search} = props;

  return (
    <div className="">
          <SearchSection search={search}/>
          <Dashboard {...props} />
    </div>
  );
};
