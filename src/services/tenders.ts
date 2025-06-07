"use client";

import { TENDER_MOCK } from "@/mocks/Tenders";
import { ResponseDataType } from "@/utils/api";

interface GetTendersParams {
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

export const getTenders = async ({
  search,
  category,
  priceGte,
  priceLte,
}: GetTendersParams): Promise<ResponseDataType<{ tenders: ITender[]; total: number }>> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  let tenders = TENDER_MOCK;

  if (search) {
    const regex = new RegExp(search, "i");
    tenders = tenders.filter(tender => regex.test(tender.name));
  }

  if (category) {
    const categories = Array.isArray(category) ? category : [category];
    tenders = tenders.filter(tender =>
      categories.includes(
        tender.category.replace(/\s/g, "_").replace(/[^a-zA-Z0-9]/g, "")
      )
    );
  }

  if (priceGte) {
    tenders = tenders.filter(tender => tender.lastBid >= Number(priceGte));
  }

  if (priceLte) {
    tenders = tenders.filter(tender => tender.lastBid <= Number(priceLte));
  }

  return {
    status: "SUCCESS",
    result: { tenders, total: tenders.length },
    error: null,
  };
};
