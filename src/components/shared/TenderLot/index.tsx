"use client";

import { TenderByIdLot, TenderLot as TenderLotI } from "@/store/tender/types";
import { openModal } from "@/store/modal/slice";
import { cutWordToEtc } from "@/utils/strings";
import { useAppDispatch } from "@/store/hooks";
import { Time } from "@/components/Icons";
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
    <div className="border border-[#D6D8E7] rounded-md p-3.5">
      <h4 className="text-[#14142B] text-[18px] font-semibold">
        {cutWordToEtc(lot.name, 25)}
      </h4>
      <div className="w-full flex justify-between mt-5">
        <span className="text-[#14142B]">Quantity</span>
        <span className="text-[#14142B] text-[18px] font-semibold">
          {lot.quantity} {lot.measurement_unit.name}
        </span>
      </div>
      <div className="bg-[#dee6f094] h-[1px] w-full mt-2.5" />
      <div className="w-full flex justify-between text-[#14142B] mt-2.5">
        <span>Price</span>
        <span className="text-[18px] font-semibold">
          $ {lot.starting_price}
        </span>
      </div>
      <div className="h-[42px] bg-[#EFF0F6] rounded-md flex items-center gap-2 px-2.5 text-[#14142B] mt-4">
        <Time />
        <span>Time left:</span>
        <span className=" text-[18px] font-semibold">23h 53m 12s TO DO</span>
      </div>

      <Button
        variant="text"
        onClick={openParticipateModal}
        className="text-primary text-[18px] font-semibold mt-6"
      >
        Տեսնել ավելին
      </Button>
    </div>
  );
};

export { TenderLot };
