"use client";

import { ProfileTender } from "@/components/Profile/ProfileTenders/ProfileTender";
import { useProfileTendersQuery } from "@/store/tender/api";
import { EmptyItems, Plus } from "@/components/Icons";
import { useGetStateQuery } from "@/store/auth/api";
import { Skeleton } from "@/components/UI";
import { TEXTS } from "@/constants/texts";
import Link from "next/link";

interface Props {
  profileId: number;
}

const ProfileTenders: React.FC<Props> = ({ profileId }) => {
  const { data: tenders, isLoading } = useProfileTendersQuery({ profileId });
  const { data: state } = useGetStateQuery();

  const isEditable = state?.data.profile?.id === profileId;

  return (
    <div className="w-full min-h-[200px] p-2 sm:p-6 bg-white mt-4 sm:mt-6 rounded-[8px] flex flex-col gap-4 sm:gap-5">
      <h3 className="text-[#002366] text-[16px] sm:text-[24px] font-semibold">
        {TEXTS.profileTenders.title}
      </h3>

      {isLoading && <Skeleton className="w-full h-[120px] sm:h-[180px]" />}

      {!!tenders?.data?.length && (
        <div className="flex flex-col gap-8 sm:gap-12">
          {tenders?.data.map((tender) => (
            <ProfileTender
              profileImage={state?.data?.profile?.profile_photo_url}
              key={tender.id}
              tender={tender}
            />
          ))}
        </div>
      )}

      {!tenders?.data?.length && !isLoading && (
        <EmptyItems text={TEXTS.profileTenders.empty} />
      )}

      <div className="w-full flex justify-end">
        {isEditable && (
          <Link
            className="max-w-fit text-primary text-[13px] sm:text-[16px] flex items-center gap-1"
            href="/tenders/create"
          >
            <Plus fill="#F35D74" fillOpacity="1" />
            <span className="hidden sm:inline">
              {TEXTS.profileTenders.addTender}
            </span>
            <span className="inline sm:hidden">
              {TEXTS.profileTenders.addTender}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export { ProfileTenders };
