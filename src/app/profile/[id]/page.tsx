import {
  ProfileProduct,
  ProfileService,
  Profile as IProfile,
} from "@/store/profile/types";
import { ProfileAnalytics, ProfileBanner } from "@/components/Profile";
import { ENDPOINTS_ENUM } from "@/constants";
import { redirect } from "next/navigation";
import { api } from "@/utils/api";

const { PROFILE_BY_ID, PROFILE_SERVICES, PROFILE_PRODUCTS } = ENDPOINTS_ENUM;

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

  const serviceWithParam = PROFILE_SERVICES.replace(":profileId", profileId);
  const serviceData = await api.get<Array<ProfileService>>(serviceWithParam);

  const productWithParam = PROFILE_PRODUCTS.replace(":profileId", profileId);
  const productData = await api.get<Array<ProfileProduct>>(productWithParam);

  console.log("serviceData, productData, profileData --> ", {
    serviceData,
    productData,
    profileData,
  });

  return (
    <div className="container">
      <div className="my-[34px] w-full">
        <ProfileBanner profileData={profileData.result} />
        <ProfileAnalytics />
      </div>
    </div>
  );
};

export default Profile;
