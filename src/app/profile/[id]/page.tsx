import {
  ProfileAnalytics,
  ProfileServices,
  ProfileProducts,
  ProfileTenders,
  ProfileBanner,
} from "@/components/Profile";
import { Profile as IProfile } from "@/store/profile/types";
import { ENDPOINTS_ENUM } from "@/constants";
import { notFound } from "next/navigation";
import { api } from "@/utils/api";

const { PROFILE_BY_ID } = ENDPOINTS_ENUM;

interface Props {
  params: Promise<{ id: string }>;
}

const Profile: React.FC<Props> = async ({ params }) => {
  const profileId = (await params).id;

  const profileData = await api.get<IProfile>(`${PROFILE_BY_ID}/${profileId}`);

  if (!profileData.result) {
    return notFound();
  }

  return (
    <div className="container mx-auto">
      <div className="my-[34px] w-full">
        <ProfileBanner profileDataSsr={profileData.result} />
        <ProfileAnalytics />
        <ProfileServices profileId={Number(profileId)} />
        <ProfileProducts profileId={Number(profileId)} />
        <ProfileTenders profileId={Number(profileId)} />
      </div>
    </div>
  );
};

export default Profile;
