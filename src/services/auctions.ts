"use client";

import { AUCTION_MOCKS, IAuction } from "@/mocks/Auctions";
import { ResponseDataType } from "@/utils/api";

export const getAuctions = async ({
  search,
  category,
  priceGte,
  priceLte
}: {
  search?: string;
  category?: string | string[];
  priceGte?: string;
  priceLte?: string;
}): Promise<ResponseDataType<{ auctions: IAuction[]; total: number }>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let auctions = [...AUCTION_MOCKS];

  if (search) {
    const regex = new RegExp(search, "i");
    auctions = auctions.filter(auction =>
      auction.items.some(item => regex.test(item.name))
    );
  }

  if (category) {
    const categoryList = Array.isArray(category) ? category : [category];
    auctions = auctions.filter((auction) => {
      const normalized = auction.category
        .replace(/\s/g, "_")
        .replace(/[^a-zA-Z0-9]/g, "");
      return categoryList.includes(normalized);
    });
  }

  if (priceGte) {
    auctions = auctions.filter(auction =>
      auction.items.some(item => item.lastBid >= Number(priceGte))
    );
  }

  if (priceLte) {
    auctions = auctions.filter(auction =>
      auction.items.some(item => item.lastBid <= Number(priceLte))
    );
  }

  return {
    status: "SUCCESS",
    result: { auctions, total: auctions.length },
    error: null
  };
};
