"use client";

import { useProfileServicesQuery } from "@/store/profile/api";
import { Down, EmptyItems, Plus } from "@/components/Icons";
import { useGetStateQuery } from "@/store/auth/api";
import { SECTION_TAGS } from "@/constants/sections";
import { Button, Skeleton } from "@/components/UI";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import { cutWordToEtc } from "@/utils/strings";
import { ServiceItem } from "./ServiceItem";
import { TEXTS } from "@/constants/texts";
import { useState } from "react";
import classNames from "classnames";

interface Props {
  profileId: number;
}

const ProfileServices: React.FC<Props> = ({ profileId }) => {
  const { data: state } = useGetStateQuery();
  const dispatch = useAppDispatch();

  const isEditable = state?.data.profile?.id === profileId;

  const [page, setPage] = useState(1);

  const { data: services, isLoading } = useProfileServicesQuery({
    profileId,
    page,
  });

  const addService = () => {
    dispatch(openModal({ type: "serviceModal", props: { profileId } }));
  };

  const seeMore = () => {
    setPage(0);
  };

  const hasMoreServices = !!page && services && services.meta.total > 1;

  return (
    <div
      id={SECTION_TAGS.PROFILE_SERVICES.ID}
      className="w-full min-h-[200px] p-2.5 sm:p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4"
    >
      <h3 className="text-[#002366] text-[18px] sm:text-[24px] font-semibold">
        {TEXTS.profileServices.title}
      </h3>

      {isLoading && <Skeleton className="w-full h-[180px]" />}

      {services?.data?.map((service) => (
        <ServiceItem key={service.id} service={service} profileId={profileId} />
      ))}

      {!services?.data?.length && !isLoading && (
        <EmptyItems text={TEXTS.profileServices.empty} />
      )}

      <div
        className={classNames("w-full flex", {
          "justify-between": hasMoreServices && isEditable,
          "justify-end": !hasMoreServices && isEditable,
        })}
      >
        {!!hasMoreServices && (
          <Button
            variant="link"
            className="max-w-fit text-primary text-[12px] sm:text-[16px] font-normal flex items-center gap-1"
            onClick={seeMore}
          >
            <span className="hidden sm:inline">
              {TEXTS.profileServices.seeMore}
            </span>
            <span className="inline sm:hidden">
              {cutWordToEtc(TEXTS.profileServices.seeMore, 17)}
            </span>
            <Down />
          </Button>
        )}

        {isEditable && (
          <Button
            variant="link"
            className="max-w-fit text-primary text-[14px] sm:text-[16px] flex items-center gap-1"
            onClick={addService}
          >
            <Plus fill="#F35D74" fillOpacity="1" />
            <span className="hidden sm:inline">
              {TEXTS.profileServices.addServices}
            </span>
            <span className="inline sm:hidden">
              {cutWordToEtc(TEXTS.profileServices.addServices, 12)}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export { ProfileServices };
