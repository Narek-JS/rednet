"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../UI";

export const PriceFilter: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialFrom = searchParams.get("priceGte") ?? "";
  const initialTo = searchParams.get("priceLte") ?? "";

  const [priceFrom, setPriceFrom] = useState(initialFrom);
  const [priceTo, setPriceTo] = useState(initialTo);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    let changed = false;

    if (priceFrom !== (searchParams.get("priceGte") ?? "")) {
      if (priceFrom) {
        params.set("priceGte", priceFrom);
      } else {
        params.delete("priceGte");
      }
      changed = true;
    }

    if (priceTo !== (searchParams.get("priceLte") ?? "")) {
      if (priceTo) {
        params.set("priceLte", priceTo);
      } else {
        params.delete("priceLte");
      }
      changed = true;
    }

    if (changed) {
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [priceFrom, priceTo, pathname, router, searchParams]);

  return (
    <div className="w-full h-[57px] flex gap-2 items-center">
      <Input
        type="number"
        placeholder="From"
        value={priceFrom}
        onChange={(e) => setPriceFrom(e.target.value)}
      />
      <Input
        type="number"
        placeholder="To"
        value={priceTo}
        onChange={(e) => setPriceTo(e.target.value)}
      />
    </div>
  );
};
