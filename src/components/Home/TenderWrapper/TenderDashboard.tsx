"use client";

import { useEffect, useState } from "react";
import { TenderItem } from "./TenderItem";
import { TenderSkeleton } from "@/components/UI/Sceleton/TnederSceleton";
import { getTenders } from "@/services/tenders";

interface TenderDashboardProps {
  search?: string;
  category?: string | string[];
  priceGte?: string;
  priceLte?: string;
}

interface ITenderSlot {
  id: number;
  name: string;
  type: string;
  location: string;
  quantity: number;
  decription: string;
}

interface ITender {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  location: string;
  lastBid: number;
  category: string;
  description: string;
  items: ITenderSlot[];
}


export const TenderDashboard: React.FC<TenderDashboardProps> = ({ search, category, priceGte, priceLte }) => {
  const [loading, setLoading] = useState(true);
  const [tenders, setTenders] = useState<ITender[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getTenders({ search, category, priceGte, priceLte });
        if (res.status === "SUCCESS") {
          setTenders(res.result.tenders);
        } else {
          console.error("Failed to fetch tenders:", res);
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
      <div className='flex-1 flex flex-col gap-8'>
        {[...Array(5)].map((_, i) => (
          <TenderSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className='flex-1 flex flex-col gap-8'>
      {tenders.map((tender) => (
        <TenderItem key={tender.id} tender={tender} />
      ))}
    </div>
  );
};
