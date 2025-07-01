import { ProfileInfo } from "@/components/shared/ProfileInfo";
import { BackArrow, EmptyItems } from "@/components/Icons";
import { TenderByIdResponse } from "@/store/tender/types";
import { TenderLot } from "@/components/shared/TenderLot";
import { ENDPOINTS_ENUM } from "@/constants";
import { redirect } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import { api } from "@/utils/api";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const Tender: React.FC<Props> = async ({ params }) => {
  const tenderId = (await params).id;

  const singleTenderUrl = ENDPOINTS_ENUM.TENDER_BY_ID.replace(
    ":tenderId",
    String(tenderId)
  );

  const tenderDataSsr = await api.get<TenderByIdResponse>(singleTenderUrl);

  if (!tenderDataSsr.result) {
    return redirect("/tenders");
  }

  return (
    <div className="container mx-auto">
      <div className="my-8 sm:my-15 w-full flex flex-col gap-4 sm:gap-5">
        <Link
          href="/tenders"
          className="font-bold text-primary flex items-center gap-2 mb-2 sm:gap-2.5 sm:mb-3.5"
        >
          <BackArrow /> {TEXTS.tenders.backToTenders}
        </Link>
        <div className="relative bg-[#F7F7FC] border border-[#D6D8E7] rounded-[8px] p-2 sm:p-4">
          <ProfileInfo
            profileDataSsr={tenderDataSsr.result?.profile}
            seeProfile={true}
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 border border-[#D6D8E7] rounded-md p-2 sm:p-3.5">
          <div className="w-full flex flex-row justify-between items-center rounded-md h-auto sm:h-[50px] bg-[#EFF0F6] text-[#14142B] px-2 sm:px-3.5 py-2 sm:py-0 gap-2 sm:gap-0">
            <div className="flex flex-row items-center gap-1 sm:gap-2.5">
              <p className="font-bold text-[16px] sm:text-[18px]">
                {tenderDataSsr.result.name}
              </p>
              <p className="font-light text-[13px] sm:text-[14px]">
                {TEXTS.tenders.region}: {tenderDataSsr.result.region}
              </p>
            </div>
            <p className="text-[13px] sm:text-[14px]">
              {tenderDataSsr.result.finishes_at}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {tenderDataSsr.result.lots.map((lot, index) => (
              <TenderLot key={index} lot={lot} />
            ))}
          </div>
          {!tenderDataSsr.result.lots.length && (
            <EmptyItems text={TEXTS.tenders.empty} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tender;
