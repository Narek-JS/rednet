"use client";

import { useEffect, useState } from "react";
import { Eye, Clock } from "lucide-react";
import { Button } from "@/components/UI";
import { getTender } from "@/services/tenders";
import { calculateTime } from "@/services/calculateTime";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";

interface TenderDetailsProps {
  id: string;
  selectedTender?: string;
}

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

export const TenderDetails: React.FC<TenderDetailsProps> = ({ id }) => {
  const [tender, setTender] = useState<ITender | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ITenderSlot | null>(null);

  console.log(selected, ' selected')

  const dispatch = useAppDispatch();



  useEffect(() => {
    dispatch(
      openModal({
        type: "tenderDetails",
        props: { tenderSlot: selected },
      })
    );
  }, [dispatch, selected]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getTender(id);
        if (res.status === "SUCCESS") {
          setTender(res.result);
        }
      } catch (error) {
        console.error("Failed to fetch tender:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !tender) {
    return <div className="p-8">Loading tender details...</div>;
  }

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="mt-6 max-w-[810px] w-full">
          <h1 className="text-[32px] text-title-active font-bold">{tender.name}</h1>
          <p className="font-semibold text-[16px] text-body">
            Published by <span className="underline">Name Surname</span>
          </p>
          <p className="mt-6 font-medium text-sm text-body leading-[24px]">{tender.description}</p>
        </div>

        <div className="flex flex-col items-start justify-between w-[267px] h-[192px] bg-white rounded-[8px] p-6 shadow-secondary">
          <div className="flex flex-col gap-3">
            <span className="text-title-active text-sm font-medium">Location: {tender.location}</span>
            <div className="mt-2 rounded-[39px] py-[7px] px-4 flex items-center justify-center bg-[#D5F7FF] text-[#0096B7] text-[13px] font-medium">
              {tender.category}
            </div>
          </div>
          <div className="bg-input w-[219px] h-[54px] rounded-[8px] flex items-center justify-center gap-2">
            <Clock size={18} />
            <span className="text-[15px] font-semibold text-title-active">
              {calculateTime(tender.startDate, tender.endDate)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[80px] overflow-x-auto border border-[#D6D8E7]">
        <table className="min-w-full text-sm">
          <thead className="bg-[#EFF0F6]">
            <tr>
              <th className="text-center text-[18px] font-semibold border border-[#D6D8E7] px-4 py-3">Չափաբաժնի անուն</th>
              <th className="text-center text-[18px] font-semibold border border-[#D6D8E7] px-4 py-3">Տեսակ</th>
              <th className="text-center text-[18px] font-semibold border border-[#D6D8E7] px-4 py-3">Տարածաշրջան</th>
              <th className="text-center text-[18px] font-semibold border border-[#D6D8E7] px-4 py-3">Քանակ</th>
              <th className="text-center text-[18px] font-semibold border border-[#D6D8E7] px-4 py-3">Մասնակցել</th>
            </tr>
          </thead>
          <tbody>
            {tender.items.map((item) => (
                <tr key={item.id} className="bg-white h-[64px]">
                <td className="text-left text-[16px] font-normal border border-[#D6D8E7] px-4">
                    <div className="flex w-full items-center">
                    <span className="w-2/3 truncate">{item.name}</span>
                    <div className="w-1/3 flex justify-end pr-1">
                        <Button variant="link" onClick={() => setSelected(item)} className="w-[24px] p-0">
                          <Eye size={20} />
                        </Button>
                    </div>
                    </div>
                </td>
                <td className="text-center text-[16px] font-normal border border-[#D6D8E7] px-4">{item.type}</td>
                <td className="text-center text-[16px] font-normal border border-[#D6D8E7] px-4">{item.location}</td>
                <td className="text-center text-[16px] font-normal border border-[#D6D8E7] px-4">{item.quantity}</td>
                <td className="text-center text-[16px] font-normal border border-[#D6D8E7] px-4">
                    <Button className="h-[40px] bg-[#EFF0F6] text-[#F35D74] font-semibold">
                    Մասնակցել
                    </Button>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {selected && <TenderDetailsModal closeModal={() => setSelected(null)} tenderSlot={selected} />} */}
    </div>
  );
};
    