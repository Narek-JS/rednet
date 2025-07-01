"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useGetIndustriesQuery } from "@/store/lookup/api";
import { Plus } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import { Input } from "@/components/UI";
import * as Accordion from "@radix-ui/react-accordion";

const FilterSidebar: React.FC = () => {
  const { data: industries } = useGetIndustriesQuery();
  const searchP = useSearchParams();
  const router = useRouter();

  const handleIndustryChange = (industryId: number, checked: boolean) => {
    const params = new URLSearchParams(searchP.toString());
    const existing = params.getAll("industry");

    if (checked) {
      params.append("industry", String(industryId));
    } else {
      const filtered = existing.filter((id) => id !== String(industryId));
      params.delete("industry");
      filtered.forEach((id) => params.append("industry", id));
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-full sm:w-[280px] p-4 space-y-4 bg-[#FFFFFF] shadow rounded-md h-fit">
      <Accordion.Root type="multiple">
        <Accordion.Item value="category">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between items-center rounded-md p-3 text-sm font-semibold cursor-pointer hover:bg-[#eff0f6]">
              {TEXTS.filter.industry}
              <Plus />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="p-3 space-y-2">
            {industries?.data.map(({ id, name }) => (
              <Input
                className="max-w-[16px] min-w-[16px] max-h-[16px] min-h-[16px] outline-[#dee6f094] cursor-pointer"
                onChange={(e) => handleIndustryChange(id, e.target.checked)}
                checked={searchP.getAll("industry").includes(String(id))}
                wrapperClassname="flex-row-reverse justify-end"
                labelClassname="text-[12px] font-normal"
                type="checkbox"
                label={name}
                key={id}
              />
            ))}
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="deadline">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between items-center rounded-md p-3 text-sm font-semibold cursor-pointer hover:bg-[#eff0f6]">
              {TEXTS.filter.deadline}
              <Plus />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-3">
            <div className="text-xs text-gray-500">
              {TEXTS.filter.deadlineFilter}
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="price">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between items-center rounded-md p-3 text-sm font-semibold cursor-pointer hover:bg-[#eff0f6]">
              {TEXTS.filter.price}
              <Plus />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="p-3 flex gap-3">
            <Input
              type="number"
              placeholder={TEXTS.filter.from}
              className="!max-h-[40px] !rounded-md"
            />
            <Input
              type="number"
              placeholder={TEXTS.filter.to}
              className="!max-h-[40px] !rounded-md"
            />
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="publisher">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full justify-between items-center rounded-md p-3 text-sm font-semibold cursor-pointer hover:bg-[#eff0f6]">
              {TEXTS.filter.publisher}
              <Plus />
            </Accordion.Trigger>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export { FilterSidebar };
