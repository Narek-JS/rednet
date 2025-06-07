"use client";

import { AuctionItemSkeleton } from "@/components/UI/Sceleton/AuctionSceleton";
import { AuctionItem } from "@/components/Home/AuctionWrapper/AuctionItem";
import { getAuctions } from "@/services/auctions";
import type { IAuction } from "@/mocks/Auctions";
import { useEffect, useState } from "react";

interface DashboardProps {
  search?: string;
  category?: string;
  priceGte?: string;
  priceLte?: string;
}

export const AuctionDashboard: React.FC<DashboardProps> = ({
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
  
      try {
        // TODO: replace mock with real api
        const res = await getAuctions({ search, category, priceGte, priceLte });
  
        if (res.status === "SUCCESS") {
          setAuctions(res.result.auctions);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
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
