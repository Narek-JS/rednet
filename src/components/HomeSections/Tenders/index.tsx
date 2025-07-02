import { TenderLot } from "@/components/shared/TenderLot";
import { EmptyItems } from "@/components/Icons";
import { Button } from "@/components/UI/Button";
import { ENDPOINTS_ENUM } from "@/constants";
import { TenderByIdResponse } from "@/types";
import { TEXTS } from "@/constants/texts";
import { api } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const Tenders: React.FC = async () => {
  const singleTenderUrl = ENDPOINTS_ENUM.TENDER_BY_ID.replace(
    ":tenderId",
    "24"
  );

  const tenderDataSsr = await api.get<TenderByIdResponse>(singleTenderUrl);

  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col justify-between gap-4">
        <div className="w-full flex flex-col gap-2 lg:gap-0">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">Tenders</h2>

            <Button
              className="w-[200px] border-primary !rounded-full"
              variant="border"
            >
              See all
            </Button>
          </div>

          <p className="text-gray-500">
            Hear from some of our amazing customers who are automating their
            finances.
          </p>
        </div>

        <div className="flex flex-col gap-4 shadow-2xl bg-[#F6F9FC] rounded-md px-4 py-4 sm:py-7">
          <div className="w-full flex flex-row justify-between items-center gap-2">
            <div className="flex gap-2 sm:gap-3 items-center">
              <Image
                className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
                src="/images/profile-photo.jpg"
                alt="Tender image"
                height={40}
                width={40}
              />
              <div className="flex flex-col justify-between">
                <p className="text-[#14142B] text-[16px] sm:text-[18px] font-semibold truncate max-w-[160px] sm:max-w-none">
                  {tenderDataSsr.result?.name}
                </p>
                <p className="text-[12px] text-[#001D23]">
                  {tenderDataSsr.result?.type} |{" "}
                  {tenderDataSsr.result?.lots?.length} {TEXTS.tenders.lots}
                </p>
              </div>
            </div>
            <Link
              href={"/tenders/" + tenderDataSsr.result?.id}
              className="text-primary text-[14px] sm:text-[18px] font-semibold"
            >
              {TEXTS.tenders.seeAll}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tenderDataSsr.result?.lots?.slice(0, 3)?.map((lot, index) => (
              <TenderLot key={index} lot={lot} />
            ))}
          </div>
          {!tenderDataSsr.result?.lots?.length && (
            <EmptyItems text={TEXTS.tenders.empty} />
          )}
        </div>
      </div>
    </section>
  );
};

export { Tenders };
