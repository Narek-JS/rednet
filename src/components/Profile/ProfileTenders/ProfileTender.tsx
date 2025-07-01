import { Tender as TenderI } from "@/store/tender/types";
import { TenderLot } from "../../shared/TenderLot";
import { EmptyItems } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  profileImage?: string;
  tender: TenderI;
}

const ProfileTender: React.FC<Props> = ({ tender, profileImage }) => (
  <div className="min-h-max sm:min-h-[570px] flex flex-col gap-3 sm:gap-4 border border-[#D6D8E7] rounded-md p-2 sm:p-3.5">
    <div className="w-full flex flex-row justify-between items-center gap-2">
      <div className="flex gap-2 sm:gap-3 items-center">
        <Image
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover"
          src={profileImage || "/images/profile-photo.jpg"}
          alt="Tender image"
          height={40}
          width={40}
        />
        <div className="flex flex-col justify-between">
          <p className="text-[#14142B] text-[16px] sm:text-[18px] font-semibold truncate max-w-[160px] sm:max-w-none">
            {tender?.name}
          </p>
          <p className="text-[12px] text-[#001D23]">
            {tender?.type} | {tender?.lots?.length} {TEXTS.tenders.lots}
          </p>
        </div>
      </div>
      <Link
        href={"/tenders/" + tender?.id}
        className="text-primary text-[14px] sm:text-[18px] font-semibold"
      >
        {TEXTS.tenders.seeAll}
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {tender?.lots?.slice(0, 6)?.map((lot, index) => (
        <TenderLot key={index} lot={lot} />
      ))}
    </div>
    {!tender?.lots?.length && <EmptyItems text={TEXTS.tenders.empty} />}
  </div>
);

export { ProfileTender };
