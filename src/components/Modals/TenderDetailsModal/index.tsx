import { X } from "lucide-react";

export interface ITenderSlot {
  id: number;
  name: string;
  type: string;
  location: string;
  quantity: number;
  decription: string;
}

interface Props {
  tenderSlot?: ITenderSlot;
  closeModal: () => void;
}

export const TenderDetailsModal: React.FC<Props> = ({ tenderSlot, closeModal }) => {
  return (
    <div className="relative  max-h-[700px]">
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer"
        onClick={closeModal}
      >
        <X className="w-6 h-6" />
      </button>

      <h2 className="text-[24px] font-semibold mb-6">
        {tenderSlot?.name}
      </h2>

      <p className="text-[16px] leading-[28px] ">
        {tenderSlot?.decription}
      </p>
    </div>
  );
};
