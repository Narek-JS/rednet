"use client";

import { Dashboard } from "@/components/Home/Dashboard";

interface AuctionWrapperProps {
    search?: string;
    category?: string;
    priceGte?: string;
    priceLte?: string;
}

export const AuctionWrapper: React.FC<AuctionWrapperProps> = (props) => {
  return (
    <div className="">
          {/* search section@ heto  */}
          <Dashboard {...props} />
    </div>
  );
};
