"use client";

// import OtherServices from "@/modules/ProfileModule/components/OtherServices";
import { useProfileServicesQuery } from "@/store/profile/api";
import { EmptyItems } from "@/components/Icons";
import { ServiceItem } from "./ServiceItem";

interface Props {
  profileId: number;
}

const ProfileServices: React.FC<Props> = ({ profileId }) => {
  const { data: services } = useProfileServicesQuery({ profileId });

  return (
    <div className="w-full min-h-[200px] p-6 bg-white mt-6 rounded-[8px] flex flex-col gap-4">
      <h3 className="text-[#002366] text-[24px] font-semibold">Services</h3>
      {services?.data?.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}

      {!services?.data?.length && <EmptyItems text="No Services" />}

      {/* <OtherServices
        onDataChange={handleDataChange}
        isEditable={isEditable}
        profileId={profileId}
      /> */}
    </div>
  );
};

export { ProfileServices };
