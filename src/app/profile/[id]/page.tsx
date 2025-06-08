import { Profile as IProfile } from "@/store/profile/types";
import {
  ProfileAnalytics,
  ProfileServices,
  ProfileBanner,
} from "@/components/Profile";
import { ENDPOINTS_ENUM } from "@/constants";
import { redirect } from "next/navigation";
import { api } from "@/utils/api";

const { PROFILE_BY_ID } = ENDPOINTS_ENUM;

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const Profile: React.FC<Props> = async ({ params }) => {
  const profileId = (await params).id;

  const profileData = await api.get<IProfile>(`${PROFILE_BY_ID}/${profileId}`);

  if (profileData.status === "ERROR") {
    return redirect("/");
  }

  return (
    <div className="container">
      <div className="my-[34px] w-full">
        <ProfileBanner profileData={profileData.result} />
        <ProfileAnalytics />
        <ProfileServices profileId={Number(profileId)} />
      </div>
    </div>
  );
};

export default Profile;
