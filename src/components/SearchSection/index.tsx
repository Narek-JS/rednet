"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "../Icons";
import { Sort } from "../Icons";
import { Input } from "../UI";

interface SearchSectionProps {
  search?: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ search }) => {
  const [searchValue, setSearchValue] = useState(search);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams() as URLSearchParams;
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearch || debouncedSearch === "") {
      params.set("search", debouncedSearch as string);
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [debouncedSearch, params, pathname, router]);

  return (
    <div className='w-full mb-6 flex items-center justify-between'>
      <div className='relative w-[412px] h-[57px]'>
        <Input
          placeholder='Search'
          className='pl-12 bg-[#dddee2] border border-amber-400'
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value);
          }}
        />
        <button
            type="button"
            className="absolute left-0 top-0 h-full px-3 "
        >
             <Search />
        </button>

      </div>
      <div className='flex items-center px-4 gap-2 text-[18px] font-semibold text-primary'>
        <Sort /> Sort
      </div>
    </div>
  );
};
