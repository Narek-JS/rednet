"use client";

import {
  useLazySignProfilePhotoUploadQuery,
  useUpdateProfileMutation,
} from "@/store/profile/api";
import { Link as LinkIcon, Message, Change, Phone } from "@/components/Icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useUploadFileMutation } from "@/store/uploader/api";
import { useGetIndustriesQuery } from "@/store/lookup/api";
import { cutEmail, cutWordToEtc } from "@/utils/strings";
import { selectState } from "@/store/auth/selectors";
import { Badge, Skeleton } from "@/components/UI";
import { Profile } from "@/store/profile/types";
import { openModal } from "@/store/modal/slice";
import { ChangeEvent, Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface IProfileInfoProps {
  profileDataSsr: Profile | null;
  isEditable?: boolean;
  seeProfile?: boolean;
}

export const ProfileInfo: React.FC<IProfileInfoProps> = ({
  profileDataSsr,
  isEditable,
  seeProfile,
}) => {
  const state = useAppSelector(selectState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [signProfilePhotoUpload] = useLazySignProfilePhotoUploadQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [uploadFile] = useUploadFileMutation();

  const [profileImageLoad, setProfileImageLoad] = useState(false);

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

        if (!res.error) {
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
    <Fragment>
      <div className="w-full h-full flex gap-2.5 sm:gap-[40px] relative">
        <div className="relative w-[112px] sm:w-[192px] sm:min-w-[192px] min-w-[112px] min-h-[112px] h-[112px] sm:min-h-[192px] sm:h-[192px] border-[8px] sm:border-[12px] border-[#FFE2E7] rounded-[8px] group overflow-hidden">
          {!profileImageLoad && <Skeleton className="w-full h-full" />}
          <Image
            src={
              profileDataSsr?.profile_photo_url || "/images/profile-photo.jpg"
            }
            onLoad={() => setProfileImageLoad(true)}
            className={classNames("rounded-[4px] object-cover", {
              "opacity-0": !profileImageLoad,
              "opacity-100": profileImageLoad,
            })}
            alt={TEXTS.profileInfo.alt}
            priority={true}
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
            </h2>
            {!!profileDataSsr?.industries?.length && (
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
      {seeProfile && (
        <div className="absolute right-0.5 sm:right-4 -top-1 sm:top-4">
          <Link
            href={"/profile/" + state?.profile?.id}
            className="text-primary text-[11px] sm:text-[18px] font-semibold"
          >
            See profile
          </Link>
        </div>
      )}
      {!seeProfile && isEditable && profileDataSsr && industries?.data && (
        <div className="absolute right-4 top-4">
          <button
            className="bg-white border-2 border-[#D9DBE9] rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
            onClick={openEditModal}
          >
            <Change />
          </button>
        </div>
      )}
    </Fragment>
  );
};
