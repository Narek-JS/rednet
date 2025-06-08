"use client";

import {
  useLazySignCoverPhotoUploadQuery,
  useUpdateCoverPhotoNameMutation,
} from "@/store/profile/api";
import { useUploadFileMutation } from "@/store/uploader/api";
import { selectState } from "@/store/auth/selectors";
import { Profile } from "@/store/profile/types";
import { useAppSelector } from "@/store/hooks";
import { Change } from "@/components/Icons";
import { ProfileInfo } from "./ProfileInfo";
import { ChangeEvent } from "react";
import Image from "next/image";

interface Props {
  profileData: Profile | null;
}

const ProfileBanner: React.FC<Props> = ({ profileData }) => {
  const state = useAppSelector(selectState);
  const isEditable = state?.profile?.id === profileData?.id || true;

  const [signCoverPhotoUpload] = useLazySignCoverPhotoUploadQuery();
  const [updateCoverPhotoName] = useUpdateCoverPhotoNameMutation();
  const [uploadFile] = useUploadFileMutation();

  const handleChaneCoverPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const resUpload = await signCoverPhotoUpload({ file_name: file.name });

      if (resUpload.isSuccess && state?.profile?.id) {
        const res = await uploadFile({
          url: resUpload.data.data.upload_url,
          file,
        });

        if (!res.error) {
          await updateCoverPhotoName({
            profileId: state.profile.id,
            coverName: resUpload.data.data.file_name,
          });
        }
      }
    }
  };

  return (
    <div className="w-full h-[358px] relative flex items-center justify-center">
      <div className="w-full h-full relative rounded-[8px]">
        <Image
          src={profileData?.cover_photo_url || "/images/cover-photo.jpg"}
          alt="The image selected by the user."
          className="rounded-[8px]"
          objectFit="cover"
          fill
        />
        {isEditable && (
          <div className="absolute right-6 top-6">
            <label
              className="flex items-center justify-center bg-white border-2 rounded-full h-[40px] w-[40px] p-0 cursor-pointer"
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
      <ProfileInfo profileData={profileData} isEditable={isEditable} />
    </div>
  );
};

export { ProfileBanner };
