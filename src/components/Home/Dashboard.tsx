"use client";

import { AuctionItemSkeleton } from "@/components/UI/AuctionItemSkeleton";
import { AuctionItem } from "@/components/Home/AuctionItem";
import { getAuctions } from "@/services/auctions";
import type { IAuction } from "@/mocks/Auctions";
import { useEffect, useState } from "react";

interface DashboardProps {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  search,
  category,
  priceGte,
  priceLte
}) => {
  const [loading, setLoading] = useState(true);
  const [auctions, setAuctions] = useState<IAuction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      //simulation to fetch data, retuns mock data TODO: change it to real request 
      const res = await getAuctions({ search, category, priceGte, priceLte });

      if (res.status === "SUCCESS") {
        setAuctions(res.result.auctions);
      }

      setLoading(false);
    };

    fetchData();
  }, [search, category, priceGte, priceLte]);

  if (loading) {
    return (
      <div className="flex-1 flex flex-wrap gap-5">
        {[...Array(9)].map((_, index) => (
          <AuctionItemSkeleton key={index} />
        ))}
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap gap-5">
      {auctions.map((auction) => (
        <AuctionItem key={auction.id} auction={auction} />
      ))}
    </div>
  );
};
