"use client";

import { useUpdateProfileMutation } from "@/store/profile/api";
import { setErrorsFields } from "@/utils/form/errorFields";
import { Button, Input, Select } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { selectState } from "@/store/auth/selectors";
import { SelectItem } from "@/components/UI/Select";
import { Industries } from "@/store/lookup/types";
import { Profile } from "@/store/profile/types";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import { X } from "lucide-react";
import * as yup from "yup";

interface Props {
  industries?: Array<Industries>;
  profileDataSsr?: Profile;
  closeModal: () => void;
}

const schema = yup.object({
  public_email: yup
    .string()
    .email(TEXTS.validation.format.email)
    .required(TEXTS.validation.required.email),
  website_url: yup
    .string()
    .url(TEXTS.validation.format.website)
    .required(TEXTS.validation.required.website),
  description: yup.string().required(TEXTS.validation.required.description),
  headline: yup.string().required(TEXTS.validation.required.headline),
  brand_name: yup.string().required(TEXTS.validation.required.brandName),
  industries: yup.string().required(TEXTS.validation.required.industry),
  phone_number: yup.string().required(TEXTS.validation.required.phone),
  region: yup.string().required(TEXTS.validation.required.region),
});

const ProfileEdit: React.FC<Props> = ({
  profileDataSsr,
  closeModal,
  industries,
}) => {
  const state = useAppSelector(selectState);
  const router = useRouter();

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const form = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: {
      industries: (profileDataSsr?.industries?.[0]?.id || "")?.toString(),
      phone_number: profileDataSsr?.phone_number || "",
      public_email: profileDataSsr?.public_email || "",
      description: profileDataSsr?.description || "",
      website_url: profileDataSsr?.website_url || "",
      brand_name: profileDataSsr?.brand_name || "",
      headline: profileDataSsr?.headline || "",
      region: profileDataSsr?.region || "",
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    if (!state?.profile?.id) return;

    try {
      const res = await updateProfile({
        ...data,
        profileId: state?.profile?.id,
        industries: [Number(data.industries)],
      });

      if (!res.error) {
        router.refresh();
        closeModal();
      } else if (res.error) {
        const errors = (res.error as any)?.data;
        if (errors) {
          setErrorsFields(form, errors as IError);
        } else {
          console.log("Unexpected error --> ", res);
        }
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center pt-8">
      <X
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={closeModal}
      />
      <h2 className="text-[28px] sm:text-[48px] font-bold">
        {TEXTS.profileEdit.title}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <Input
          placeholder={TEXTS.profileEdit.placeholders.brandName}
          label={TEXTS.profileEdit.fields.brandName}
          error={errors.brand_name?.message}
          {...register("brand_name")}
        />

        <Input
          placeholder={TEXTS.profileEdit.placeholders.description}
          label={TEXTS.profileEdit.fields.description}
          error={errors.description?.message}
          {...register("description")}
        />

        <Input
          placeholder={TEXTS.profileEdit.placeholders.headline}
          label={TEXTS.profileEdit.fields.headline}
          error={errors.headline?.message}
          {...register("headline")}
        />

        <Controller
          control={form.control}
          name="industries"
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              placeholder={TEXTS.profileEdit.placeholders.industry}
              label={TEXTS.profileEdit.fields.industry}
              error={errors.industries?.message}
            >
              {industries?.map((industry) => (
                <SelectItem key={industry.id} value={industry.id.toString()}>
                  {industry.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Input
          placeholder={TEXTS.profileEdit.placeholders.region}
          label={TEXTS.profileEdit.fields.region}
          error={errors.region?.message}
          {...register("region")}
        />

        <Input
          placeholder={TEXTS.profileEdit.placeholders.phone}
          label={TEXTS.profileEdit.fields.phone}
          error={errors.phone_number?.message}
          {...register("phone_number")}
        />

        <Input
          placeholder={TEXTS.profileEdit.placeholders.email}
          label={TEXTS.profileEdit.fields.email}
          error={errors.public_email?.message}
          {...register("public_email")}
        />

        <Input
          placeholder={TEXTS.profileEdit.placeholders.website}
          label={TEXTS.profileEdit.fields.website}
          error={errors.website_url?.message}
          {...register("website_url")}
        />

        <div className="bg-[#dee6f094] h-[1px] w-full mt-2.5" />

        <div className="w-full flex justify-end gap-3.5">
          <Button
            className="max-w-[150px]"
            loading={isLoading}
            variant="primery"
            type="submit"
          >
            {TEXTS.profileEdit.buttons.save}
          </Button>
          <Button
            className="max-w-[150px]"
            onClick={closeModal}
            variant="border"
            type="button"
          >
            {TEXTS.profileEdit.buttons.cancel}
          </Button>
        </div>
      </form>
    </div>
  );
};

export { ProfileEdit };
