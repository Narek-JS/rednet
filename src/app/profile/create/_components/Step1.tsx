"use client";

import {
  useLazySignProfilePhotoUploadQuery,
  useLazySignCoverPhotoUploadQuery,
  useUpdateProfileMutation,
} from "@/store/profile/api";
import { useUploadFileMutation } from "@/store/uploader/api";
import { setErrorsFields } from "@/utils/form/errorFields";
import { useGetIndustriesQuery } from "@/store/lookup/api";
import { Button, Input, Select } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { selectState } from "@/store/auth/selectors";
import { SelectItem } from "@/components/UI/Select";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { Plus } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import { useRef, useState } from "react";
import { IError } from "@/types/general";
import classNames from "classnames";
import Image from "next/image";
import * as yup from "yup";

interface FormValues {
  description: string;
  industry: string;
}

const schema = yup.object({
  description: yup
    .string()
    .required(TEXTS.createProfileStep1.validation.description),
  industry: yup.string().required(TEXTS.createProfileStep1.validation.industry),
});

const Step1: React.FC = () => {
  const state = useAppSelector(selectState);
  const router = useRouter();

  const [profileFileName, setProfileFileName] = useState<string | null>(null);
  const [coverFileName, setCoverFileName] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const profileRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  const [signProfilePhotoUpload] = useLazySignProfilePhotoUploadQuery();
  const [signCoverPhotoUpload] = useLazySignCoverPhotoUploadQuery();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [uploadFile] = useUploadFileMutation();

  const { data: industries } = useGetIndustriesQuery();

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file || !state?.profile?.id) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (event.target.name === "profile") {
        setProfileImage(reader.result as string);
      }
      if (event.target.name === "cover") {
        setCoverImage(reader.result as string);
      }
    };
    reader.readAsDataURL(file);

    // Upload logic
    if (event.target.name === "cover") {
      const resUpload = await signCoverPhotoUpload({ file_name: file.name });
      if (resUpload.isSuccess) {
        await uploadFile({ url: resUpload.data.data.upload_url, file });
        setCoverFileName(resUpload.data.data.file_name);
      }
    }

    if (event.target.name === "profile") {
      const resUpload = await signProfilePhotoUpload({ file_name: file.name });
      if (resUpload.isSuccess) {
        await uploadFile({ url: resUpload.data.data.upload_url, file });
        setProfileFileName(resUpload.data.data.file_name);
      }
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!coverFileName || !profileFileName) return;
    if (!state?.profile?.id) return;

    const res = await updateProfile({
      ...data,
      profileId: state?.profile?.id,
      cover_photo_name: coverFileName,
      profile_photo_name: profileFileName,
      industries: [Number(data.industry)],
    });

    if (!res.error) {
      router.push("/profile/create?step=2");
    } else if (res.error) {
      const errors = (res.error as any)?.data;
      if (errors) {
        setErrorsFields(form, errors as IError);
      } else {
        console.log("Unexpected error --> ", res);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <input
        onChange={handleImageUpload}
        className="hidden"
        ref={coverRef}
        name="cover"
        type="file"
      />
      <input
        onChange={handleImageUpload}
        className="hidden"
        ref={profileRef}
        name="profile"
        type="file"
      />

      <div
        className="relative w-full h-[104px] border border-dotted border-[#D9D9D9] bg-[#FAFAFA] flex items-center justify-center cursor-pointer mb-20"
        onClick={() => coverRef.current?.click()}
      >
        {coverImage ? (
          <Image src={coverImage} alt="Cover" fill className="object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <Plus />
            <p className="text-sm">{TEXTS.createProfileStep1.uploadCover}</p>
          </div>
        )}
        <div
          className="absolute w-[104px] h-[104px] border border-dotted border-[#D9D9D9] bg-[#FAFAFA] rounded-full top-[75px] left-1/2 transform -translate-x-1/2"
          onClick={(e) => {
            e.stopPropagation();
            profileRef.current?.click();
          }}
        >
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 h-full">
              <Plus />
              <p className="text-sm text-center">
                {TEXTS.createProfileStep1.uploadProfile}
              </p>
            </div>
          )}
        </div>
      </div>

      <Input
        label={TEXTS.createProfileStep1.descriptionLabel}
        placeholder={TEXTS.createProfileStep1.descriptionPlaceholder}
        error={errors.description?.message}
        {...register("description")}
      />

      <Controller
        name="industry"
        control={form.control}
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={field.onChange}
            placeholder={TEXTS.createProfileStep1.industryPlaceholder}
            label={TEXTS.createProfileStep1.industryLabel}
            error={errors.industry?.message}
          >
            {industries?.data?.map((industry) => (
              <SelectItem key={industry.id} value={industry.id.toString()}>
                {industry.name}
              </SelectItem>
            ))}
          </Select>
        )}
      />

      <Button
        className={classNames("w-full font-semibold", {
          "opacity-50 cursor-default": !isValid || !coverImage || !profileImage,
        })}
        disabled={!isValid || !coverImage || !profileImage}
        loading={isLoading}
        type="submit"
      >
        {TEXTS.createProfileStep1.continue}
      </Button>
      <Button
        onClick={() => router.push("/")}
        className="w-full text-primary"
        variant="text"
        type="button"
      >
        {TEXTS.createProfileStep1.skip}
      </Button>
    </form>
  );
};

export { Step1 };
