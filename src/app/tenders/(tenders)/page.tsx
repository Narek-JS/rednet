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
    <div>
      {!!tenders?.data?.length && (
        <div className="flex flex-col gap-12">
          {tenders?.data.map((tender) => (
            <div
              key={tender.id}
              className="min-h-[642px] flex flex-col gap-4 border border-[#D6D8E7] rounded-md p-3.5"
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-3">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Tender image"
                    height={48}
                    width={48}
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-[#14142B] text-[18px] font-semibold">
                      {tender?.name}
                    </p>
                    <p className="text-[12px] texr-[#001D23]">
                      {tender?.type} | {tender?.lots?.length}{" "}
                      {TEXTS.tenders.lots}
                    </p>
                  </div>
                </div>
                <Link
                  href={"/tenders/" + tender?.id}
                  className="text-primary text-[18px] font-semibold"
                >
                  {TEXTS.tenders.seeAll}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
