"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "@/components/UI/Chechbox";
import { Label } from "@radix-ui/react-label";
import { ENDPOINTS_ENUM } from "@/constants";
import { Search } from "@/components/Icons";
import { Input } from "@/components/UI";
import { api } from "@/utils/api";

export interface IItems {
  id: number;
  name: string;
}

export const CategoryFilter: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<IItems[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>(() => searchParams.getAll("category"));

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get<IItems[]>(ENDPOINTS_ENUM.CATEGORIES);
      setCategories(res.result || []);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("category");
    selectedIds.forEach(id => newParams.append("category", id));
    router.replace(`${pathname}?${newParams.toString()}`);
  }, [selectedIds, router, pathname, searchParams]);

  const toggleCategory = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(String(id))
        ? prev.filter(i => i !== String(id))
        : [...prev, String(id)]
    );
  };

  const filteredCategories = useMemo(() => {
    if (!searchValue) return categories;
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [categories, searchValue]);

  return (
    <div className="w-full max-h-[400px] overflow-y-auto">
      <div className="relative w-full h-[57px]">
        <Input
          placeholder="Search"
          className="pl-12"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value|| "")}
        />
        <button
            type="button"
            className="absolute left-0 top-0 h-full px-3 "
        >
             <Search />
        </button>
      </div>
      <div className="pl-3 mt-2">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            const isChecked = selectedIds.includes(String(category.id));
            return (
              <div
                key={category.id}
                className="flex gap-3 items-center h-[40px]"
              >
                <Checkbox
                  checked={isChecked}
                  onChange={() => toggleCategory(category.id)}
                />
                <Label className="font-medium text-xs text-title-active">
                  {category.name}
                </Label>
              </div>
            );
          })
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
};
