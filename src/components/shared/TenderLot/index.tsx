"use client";

import { TenderByIdLot, TenderLot as TenderLotI } from "@/store/tender/types";
import { openModal } from "@/store/modal/slice";
import { cutWordToEtc } from "@/utils/strings";
import { useAppDispatch } from "@/store/hooks";
import { Time } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import { Button } from "@/components/UI";

interface Props {
  lot: TenderLotI | TenderByIdLot;
}

const TenderLot: React.FC<Props> = ({ lot }) => {
  const dispatch = useAppDispatch();

  const openParticipateModal = () => {
    if (lot.status === "pending") {
      return dispatch(openModal({ type: "participateTenderLotModal" }));
    } else {
      alert("open enmyus modal");
    }
  };

  return (
    <div className="border border-[#D6D8E7] rounded-md p-2 sm:p-3.5 flex flex-col gap-2 sm:gap-0">
      <h4 className="text-[#14142B] text-[15px] sm:text-[18px] font-semibold truncate">
        {cutWordToEtc(lot.name, 25)}
      </h4>
      <div className="w-full flex justify-between mt-2 sm:mt-5 text-[13px] sm:text-[16px]">
        <span className="text-[#14142B]">{TEXTS.tenderLot.quantity}</span>
        <span className="text-[#14142B] font-semibold">
          {lot.quantity} {lot.measurement_unit.name}
        </span>
      </div>
      <div className="bg-[#dee6f094] h-[1px] w-full mt-2 sm:mt-2.5" />
      <div className="w-full flex justify-between text-[#14142B] mt-2 sm:mt-2.5 text-[13px] sm:text-[16px]">
        <span>{TEXTS.tenderLot.price}</span>
        <span className="font-semibold">֏ {lot.starting_price}</span>
      </div>
      <div className="h-[36px] sm:h-[42px] bg-[#EFF0F6] rounded-md flex items-center gap-1 sm:gap-2 px-1 sm:px-2.5 text-[#14142B] mt-3 sm:mt-4 text-[13px] sm:text-[16px]">
        <Time />
        <span>{TEXTS.tenderLot.timeLeft}</span>
        <span className="font-semibold">{TEXTS.tenderLot.timeLeftValue}</span>
      </div>
      <Button
        className="flex text-primary text-[14px] sm:text-[18px] font-semibold mt-4 sm:mt-6"
        onClick={openParticipateModal}
        variant="text"
      >
        {TEXTS.tenderLot.participate}
      </Button>
    </div>
  );
};

export { TenderLot };
