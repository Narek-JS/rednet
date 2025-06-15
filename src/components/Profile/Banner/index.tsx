"use client";

import {
  useLazySignCoverPhotoUploadQuery,
  useUpdateProfileMutation,
} from "@/store/profile/api";
import { useUploadFileMutation } from "@/store/uploader/api";
import { useGetStateQuery } from "@/store/auth/api";
import { Profile } from "@/store/profile/types";
import { Change } from "@/components/Icons";
import { ProfileInfo } from "./ProfileInfo";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import Image from "next/image";

interface Props {
  profileDataSsr: Profile | null;
}

const ProfileBanner: React.FC<Props> = ({ profileDataSsr }) => {
  const router = useRouter();
  const { data: state } = useGetStateQuery();

  const isEditable = state?.data.profile?.id === profileDataSsr?.id;

  const [signCoverPhotoUpload] = useLazySignCoverPhotoUploadQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [uploadFile] = useUploadFileMutation();

  const handleChaneCoverPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
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
        <Image
          src={profileDataSsr?.cover_photo_url || "/images/cover-photo.jpg"}
          alt="Profile Cover Image"
          className="rounded-[8px]"
          objectFit="cover"
          fill
        />
        {isEditable && (
          <div className="absolute right-6 top-6">
            <label
              className="flex items-center justify-center bg-white border-2 border-[#D9DBE9] rounded-full h-[40px] w-[40px] p-0 cursor-pointer"
              htmlFor="file-cover"
            >
              <input
                onChange={handleChaneCoverPhoto}
                id="file-cover"
                type="file"
                hidden
              />
              <Change />
            </label>
          </div>
        )}
      </div>
      <ProfileInfo profileDataSsr={profileDataSsr} isEditable={isEditable} />
    </div>
  );
};

export { ProfileBanner };
