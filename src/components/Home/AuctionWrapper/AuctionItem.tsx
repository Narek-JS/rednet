"use client";

import { calculateTime } from "@/services/calculateTime";
import { IAuction, IAuctionItem } from "@/mocks/Auctions";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import { Button } from "@/components/UI";

interface Props {
  auction: IAuction;
}

export const AuctionItem: React.FC<Props> = ({ auction }) => {
  const dispatch = useAppDispatch();

  const handleOpen = (item: IAuctionItem) => {
    dispatch(
      openModal({
        type: "tenderDetails",
        props: { tenderSlot: item },
      })
    );
  };

  return (
    <div className="w-full border rounded-[8px] bg-white p-4 border-[#D6D8E7] min-h-[200px]">
      <div className="flex gap-3 items-center">
        <div className="w-[56px] h-[56px] relative">
          <Image
            src={auction.profileImage}
            alt={auction.companyName}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col text-[#14142B]">
            <p className="text-[18px] font-semibold">{auction.companyName}</p>
            <p className="font-semibold text-[12px]">
              {auction.companyType} | {auction.items.length} չափաբաժին
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap pt-3">
        {auction.items.slice(0, 4).map((item) => (
          <div
            key={item.id + item.name}
            className="text-[#14142B] hover:shadow-md duration-300 border rounded-[8px] bg-white p-4 border-[#D6D8E7] w-[calc(50%-4px)] h-[274px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[18px] font-semibold mb-4">{item.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <p className="font-normal">Quantity</p>
                <p className="font-semibold text-[18px]">300 item</p>
              </div>
              <div className="h-[1px] bg-[#D6D8E7] mb-4" />
              <div className="flex items-center justify-between mb-4">
                <p className="font-normal">Price</p>
                <p className="font-semibold text-[18px]">$ {item.lastBid}</p>
              </div>
              <div className="w-full bg-[#EFF0F6] h-[42px] rounded-[8px] flex items-center px-3 text-sm font-medium">
                {calculateTime(item.startDate, item.endDate)}
              </div>
            </div>
            <Button
              variant="link"
              onClick={() => handleOpen(item)}
              className="font-semibold mt-3 text-left"
            >
              Տեսնել ավելին
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
