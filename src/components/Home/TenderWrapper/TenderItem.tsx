"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/UI";
import { Separator } from "@/components/UI";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/modal/slice";

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

interface ITenderItem {
  tender: ITender;
}

export const TenderItem: React.FC<ITenderItem> = ({ tender }) => {
  const dispatch = useAppDispatch();

  const handleOpenDetails = (item: ITenderSlot) => {
    dispatch(
      openModal({
        type: "tenderDetails",
        props: { tenderSlot: item },
      })
    );
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-[50px] flex items-center justify-between rounded-[4px] px-4 w-full bg-gray-200">
        {tender.name}
        <Link href={`/tender/${tender.id}`} className="text-primary">
          See all
        </Link>
      </div>

      {tender.items.map((item) => (
        <div key={item.id} className="w-full rounded-[8px] p-4 bg-white shadow-main-dark">
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-between">
              <h6 className="text-[18px] font-semibold">{item.name}</h6>
              <span className="text-[12px]">{tender.category}</span>
            </div>
            <Link href={`/tender/${tender.id}?selectedTender=${item.id}`}>
              <Button variant="outline">Մասնակցել</Button>
            </Link>
          </div>

          <div className="mt-3 text-[14px]">
            <span>
              «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների
              ձեռքբերման նպատակով հայտարարված գնանշման հարցում
            </span>
          </div>

          <Separator className="my-4 bg-gray-300" />


          <div className="my-4 flex flex-wrap gap-y-8">
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-[#64748B] text-[12px] font-medium">Մատակարարման Վերջնաժամկետը</span>
              <span className="text-[#191D23] text-[14px]">40 օր</span>
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-[#64748B] text-[12px] font-medium">Աուկցիոնին գրանցվելու օրերի քանակը</span>
              <span className="text-[#191D23] text-[14px]">3 օր</span>
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-[#64748B] text-[12px] font-medium">Չափաբաժին</span>
              <span className="text-[#191D23] text-[14px]">{item.quantity}</span>
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-[#64748B] text-[12px] font-medium">Տարածաշրջան</span>
              <span className="text-[#191D23] text-[14px]">{item.location}</span>
            </div>
          </div>

          <Separator className="my-4 bg-gray-300" />
          <div className="w-full flex justify-between">
            <Button
              variant="link"
              className="text-[18px] text-start"
              onClick={() => handleOpenDetails(item)}
            >
              Տեսնել մանրամասները
            </Button>
            <Star />
          </div>
        </div>
      ))}
    </div>
  );
};
