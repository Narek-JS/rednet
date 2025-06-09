"use client";

import {
  useLazySignProfilePhotoUploadQuery,
  useUpdateProfilePhotoNameMutation,
} from "@/store/profile/api";
import { Message, Change, Verify, Phone, Dots, Link } from "@/components/Icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useUploadFileMutation } from "@/store/uploader/api";
import { selectState } from "@/store/auth/selectors";
import { Profile } from "@/store/profile/types";
import { Badge, Button } from "@/components/UI";
import { openModal } from "@/store/modal/slice";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import Image from "next/image";

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
  const [updateProfilePhotoName] = useUpdateProfilePhotoNameMutation();
  const [uploadFile] = useUploadFileMutation();

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
          await updateProfilePhotoName({
            imageName: resUpload.data.data.file_name,
            profileId: state?.profile?.id,
          });
          router.refresh();
        }
      }
    }
  };

  return (
    <div className="absolute w-[90%] h-[240px] bg-[#ffffff] rounded-[8px] top-[256px] z-20 py-6 px-4">
      <div className="w-full h-full flex gap-[40px] relative">
        <div className="relative w-[192px] h-[192px] border-[12px] border-[#FFE2E7] rounded-[8px] group overflow-hidden">
          <Image
            src={
              profileDataSsr?.profile_photo_url || "/images/profile-photo.jpg"
            }
            alt="The image selected by the user."
            className="rounded-[4px] object-cover"
            fill
          />

          {isEditable && (
            <>
              <label
                htmlFor="file-profile"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              >
                <span className="text-white text-[14px] font-medium">
                  Edit profile picture
                </span>
              </label>
              <input
                type="file"
                id="file-profile"
                hidden
                onChange={handleChangePhoto}
              />
            </>
          )}
        </div>

        <div className="flex-1 h-full flex flex-col gap-[10px]">
          <div className="flex gap-[11px] items-center">
            <h2 className="text-[#000D26] font-bold text-[32px]">
              {profileDataSsr?.brand_name}
            </h2>
            <Verify />
            <Badge
              variant="outline"
              className="py-[6px] px-[12px] rounded-[8px] bg-[#D4D3FF] border-none text-[15px] font-normal"
            >
              Software Development
            </Badge>
          </div>
          <div className="flex items-center gap-1 font-semibold text-[14px] text-body">
            <span className="border-r-2 border-body pr-1.5 ">Marz</span>
            <span> 1500 Employee</span>
          </div>
          <div className="text-title-active font-normal flex items-center gap-4">
            <p className="flex items-center gap-[6px] font-normal">
              <Phone /> {profileDataSsr?.phone_number || "+1 (855) 635-7754"}
            </p>
            <p className="flex items-center gap-[6px] font-normal">
              <Message /> {profileDataSsr?.public_email || "support@airbnb.com"}
            </p>
            <Button className="bg-white border-2 rounded-full h-[40px] w-[40px] p-0 ">
              <Link />
            </Button>
            <Button variant="text" className="no-underline px-0">
              <Dots />
            </Button>
          </div>
          <p className="text-body font-semibold">
            Software Development San Francisco, CA
          </p>
          <p className="font-medium text-body text-[12px]">
            Airbnb is a community based on connection and belonging.
          </p>
        </div>
      </div>
      {isEditable && (
        <div className="absolute right-4 top-4">
          <Button
            className="inline-flex items-center justify-center bg-white border-2 rounded-full h-[40px] w-[40px] p-0"
            onClick={() => {
              dispatch(openModal({ type: "profileEdit" }));
            }}
          >
            <Change />
          </Button>
        </div>
      )}
    </div>
  );
};
