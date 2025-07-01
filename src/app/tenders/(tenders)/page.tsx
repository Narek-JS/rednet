"use client";

import { useProfileTendersQuery } from "@/store/tender/api";
import { TenderLot } from "@/components/shared/TenderLot";
import { EmptyItems } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import Image from "next/image";
import Link from "next/link";

const Tenders: React.FC = () => {
  const { data: tenders } = useProfileTendersQuery({
    profileId: 137,
  });

  return (
    <div className="px-2 sm:px-0">
      {!!tenders?.data?.length && (
        <div className="flex flex-col gap-8 sm:gap-12">
          {tenders?.data.map((tender) => (
            <div
              key={tender.id}
              className="min-h-[320px] sm:min-h-[642px] flex flex-col gap-4 border border-[#D6D8E7] rounded-md p-2 sm:p-3.5"
            >
              <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <div className="flex gap-2 sm:gap-3 items-center">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Tender image"
                    height={40}
                    width={40}
                    className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-[#14142B] text-[16px] sm:text-[18px] font-semibold truncate max-w-[160px] sm:max-w-none">
                      {tender?.name}
                    </p>
                    <p className="text-[12px] text-[#001D23]">
                      {tender?.type} | {tender?.lots?.length}{" "}
                      {TEXTS.tenders.lots}
                    </p>
                  </div>
                </div>
                <Link
                  href={"/tenders/" + tender?.id}
                  className="text-primary text-[14px] sm:text-[15px] sm:text-[18px] font-semibold"
                >
                  {TEXTS.tenders.seeAll}
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {tender?.lots?.slice(0, 4)?.map((lot, index) => (
                  <TenderLot key={index} lot={lot} />
                ))}
              </div>
              {!tender?.lots?.length && (
                <EmptyItems text={TEXTS.tenders.empty} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tenders;
