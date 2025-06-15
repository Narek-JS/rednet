"use client";

import { useProfileServicesQuery } from "@/store/profile/api";
import { Down, EmptyItems, Plus } from "@/components/Icons";
import { openModal } from "@/store/modal/slice";
import { useAppDispatch } from "@/store/hooks";
import { cutWordToEtc } from "@/utils/strings";
import { ServiceItem } from "./ServiceItem";
import { TEXTS } from "@/constants/texts";
import { Button } from "@/components/UI";
import { useState } from "react";

interface Props {
  profileId: number;
}

const INITIAL_SERVICES_LIMIT = 3;

const ProfileServices: React.FC<Props> = ({ profileId }) => {
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(INITIAL_SERVICES_LIMIT);

  const { data: services } = useProfileServicesQuery({
    profileId,
    limit,
  });

  const addService = () => {
    dispatch(openModal({ type: "serviceModal", props: { profileId } }));
  };

  const seeMore = () => {
    setLimit(limit + 2);
  };

  return (
    <div className="w-full min-h-[200px] p-2.5 sm:p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4">
      <h3 className="text-[#002366] text-[18px] sm:text-[24px] font-semibold">
        {TEXTS.profileServices.title}
      </h3>

      {services?.data?.map((service) => (
        <ServiceItem key={service.id} service={service} profileId={profileId} />
      ))}

      {!services?.data?.length && (
        <EmptyItems text={TEXTS.profileServices.empty} />
      )}

      <div className="w-full flex justify-between">
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

        <Button
          variant="link"
          className="max-w-fit text-primary text-[14px] sm:text-[18px] flex items-center gap-1"
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
      </div>
    </div>
  );
};

export { ProfileServices };
