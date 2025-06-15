"use client";

import {
  useLazySignProfilePhotoUploadQuery,
  useUpdateProfileMutation,
  useGetIndustriesQuery,
} from "@/store/profile/api";
import {
  Link as LinkIcon,
  Message,
  Change,
  Verify,
  Phone,
} from "@/components/Icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useUploadFileMutation } from "@/store/uploader/api";
import { selectState } from "@/store/auth/selectors";
import { Profile } from "@/store/profile/types";
import { openModal } from "@/store/modal/slice";
import { useRouter } from "next/navigation";
import { cutEmail, cutWordToEtc } from "@/utils/strings";
import { TEXTS } from "@/constants/texts";
import { Badge } from "@/components/UI";
import { ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProfileInfoProps {
  profileDataSsr: Profile | null;
  isEditable: boolean;
}

export const ProfileInfo: React.FC<IProfileInfoProps> = ({
  profileDataSsr,
  isEditable,
}) => {
  const state = useAppSelector(selectState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [signProfilePhotoUpload] = useLazySignProfilePhotoUploadQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [uploadFile] = useUploadFileMutation();

  const { data: industries } = useGetIndustriesQuery(undefined, {
    skip: !isEditable,
  });

  const openEditModal = () => {
    dispatch(
      openModal({
        type: "profileEdit",
        props: { profileDataSsr, industries: industries?.data },
      })
    );
  };

  const handleChangePhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const resUpload = await signProfilePhotoUpload({ file_name: file.name });

      if (resUpload.isSuccess && state?.profile?.id) {
        const res = await uploadFile({
          url: resUpload.data.data.upload_url,
          file,
        });

        if (res) {
          await updateProfile({
            profileId: state?.profile?.id,
            profile_photo_name: resUpload.data.data.file_name,
          });
          router.refresh();
        }
      }
    }
  };

  return (
    <div className="absolute w-[96%] sm:w-[96%] bg-[#ffffff] rounded-[8px] top-[156px] sm:top-[223px] z-20 py-2.5 sm:py-6 px-2 sm:px-4">
      <div className="w-full h-full flex gap-2.5 sm:gap-[40px] relative">
        <div className="relative w-[112px] sm:w-[192px] sm:min-w-[192px] min-w-[112px] min-h-[112px] h-[112px] sm:min-h-[192px] sm:h-[192px] border-[8px] sm:border-[12px] border-[#FFE2E7] rounded-[8px] group overflow-hidden">
          <Image
            src={
              profileDataSsr?.profile_photo_url || "/images/profile-photo.jpg"
            }
            className="rounded-[4px] object-cover"
            alt={TEXTS.profileInfo.alt}
            fill
          />

          {isEditable && (
            <>
              <label
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                htmlFor="file-profile"
              >
                <span className="text-white text-[14px] text-center font-medium">
                  {TEXTS.profileInfo.editPhoto}
                </span>
              </label>
              <input
                onChange={handleChangePhoto}
                id="file-profile"
                type="file"
                hidden
              />
            </>
          )}
        </div>

        <div className="flex-1 h-full flex flex-col gap-[5px] sm:gap-[10px]">
          <div className="flex flex-col sm:flex-row gap-[5px] sm:gap-[11px] sm:items-center">
            <h2 className="text-[#000D26] font-semibold sm:font-bold text-[18px] sm:text-[32px] flex items-center gap-1 sm:gap-2.5">
              {cutWordToEtc(profileDataSsr?.brand_name || "", 20)}
              <Verify /> {/* To do to check */}
            </h2>
            {!!profileDataSsr?.industries.length && (
              <Badge
                className="max-w-fit py-[3px] sm:py-[6px] px-[6px] sm:px-[12px] rounded-[5px] sm:rounded-[8px] bg-[#D4D3FF] border-none text-[10px] sm:text-[15px] font-normal"
                variant="outline"
              >
                {profileDataSsr?.industries[0].name}
              </Badge>
            )}
          </div>
          {profileDataSsr?.region && (
            <div className="flex items-center gap-1 font-semibold text-[12px] sm:text-[14px] text-body">
              <span className="border-r-1 sm:border-r-2 border-body pr-1.5 ">
                {TEXTS.profileInfo.region}
              </span>
              <span> {profileDataSsr?.region}</span>
            </div>
          )}
          <div className="text-body flex flex-col sm:flex-row sm:items-center gap-[5px] sm:gap-4">
            {profileDataSsr?.phone_number && (
              <p className="flex items-center gap-[6px] font-normal text-[12px] sm:text-[16px]">
                <Phone /> {profileDataSsr?.phone_number}
              </p>
            )}
            {profileDataSsr?.public_email && (
              <p className="flex items-center gap-[6px] font-normal text-[12px] sm:text-[16px]">
                <Message />
                <span className="hidden sm:inline">
                  {profileDataSsr?.public_email}
                </span>
                <span className="inline sm:hidden">
                  {cutEmail(profileDataSsr?.public_email)}
                </span>
              </p>
            )}
            {profileDataSsr?.website_url && (
              <Link
                href={profileDataSsr?.website_url}
                className="absolute sm:relative right-2 sm:right-0 top-13 sm:top-0 bg-white border-2 border-[#D9DBE9] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
              >
                <LinkIcon />
              </Link>
            )}
          </div>

          <div className="hidden sm:block h-[1px] bg-[#dee6f094]" />

          {profileDataSsr?.headline && (
            <p className="text-body font-semibold text-[12px] sm:text-[16px]">
              {profileDataSsr?.headline}
            </p>
          )}
          {profileDataSsr?.description && (
            <p className="font-medium text-body text-[11px] sm:text-[12px]">
              {profileDataSsr.description}
            </p>
          )}
        </div>
      </div>
      {isEditable && profileDataSsr && industries?.data && (
        <div className="absolute right-4 top-4">
          <button
            className="bg-white border-2 border-[#D9DBE9] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
            onClick={openEditModal}
          >
            <Change />
          </button>
        </div>
      )}
    </div>
  );
};
