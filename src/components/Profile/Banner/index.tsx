"use client";

import {
  useLazySignCoverPhotoUploadQuery,
  useUpdateProfileMutation,
} from "@/store/profile/api";
import { ProfileInfo } from "@/components/shared/ProfileInfo";
import { useUploadFileMutation } from "@/store/uploader/api";
import { useGetStateQuery } from "@/store/auth/api";
import { Profile } from "@/store/profile/types";
import { ChangeEvent, useState } from "react";
import { Change } from "@/components/Icons";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/UI";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  profileDataSsr: Profile | null;
}

const ProfileBanner: React.FC<Props> = ({ profileDataSsr }) => {
  const router = useRouter();
  const { data: state } = useGetStateQuery();

  const [signCoverPhotoUpload] = useLazySignCoverPhotoUploadQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [uploadFile] = useUploadFileMutation();

  const [bannerImageLoad, setBannerImageLoad] = useState(false);

  const isEditable = state?.data.profile?.id === profileDataSsr?.id;

  const handleChangeCoverPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const resUpload = await signCoverPhotoUpload({ file_name: file.name });

      if (resUpload.isSuccess && state?.data?.profile?.id) {
        const res = await uploadFile({
          url: resUpload.data.data.upload_url,
          file,
        });

        if (!res.error) {
          await updateProfile({
            profileId: state.data.profile.id,
            cover_photo_name: resUpload.data.data.file_name,
          });
          router.refresh();
        }
      }
    }
  };

  return (
    <div className="relative h-[258px] sm:h-[358px] w-full flex items-center justify-center">
      <div className="w-full h-full relative rounded-[8px]">
        {!bannerImageLoad && <Skeleton className="w-full h-full" />}
        <Image
          src={profileDataSsr?.cover_photo_url || "/images/cover-photo.jpg"}
          onLoad={() => setBannerImageLoad(true)}
          className={classNames("rounded-[8px]", {
            "opacity-0": !bannerImageLoad,
            "opacity-100": bannerImageLoad,
          })}
          alt="Profile Cover Image"
          objectFit="cover"
          priority={true}
          fill
        />
        {isEditable && (
          <div className="absolute right-6 top-6">
            <label
              className="flex items-center justify-center bg-white border-2 border-[#D9DBE9] rounded-full h-[40px] w-[40px] p-0 cursor-pointer"
              htmlFor="file-cover"
            >
              <input
                onChange={handleChangeCoverPhoto}
                id="file-cover"
                type="file"
                hidden
              />
              <Change />
            </label>
          </div>
        )}
      </div>
      <div className="absolute w-[96%] sm:w-[96%] bg-[#ffffff] rounded-[8px] top-[156px] sm:top-[223px] z-20 py-2.5 sm:py-6 px-2 sm:px-4">
        <ProfileInfo profileDataSsr={profileDataSsr} isEditable={isEditable} />
      </div>
    </div>
  );
};

export { ProfileBanner };
