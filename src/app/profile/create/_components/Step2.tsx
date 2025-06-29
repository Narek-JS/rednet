"use client";

import { useUpdateProfileMutation } from "@/store/profile/api";
import { setErrorsFields } from "@/utils/form/errorFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectState } from "@/store/auth/selectors";
import { Button, Input } from "@/components/UI";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import { useForm } from "react-hook-form";
import { IError } from "@/types/general";
import * as yup from "yup";

const schema = yup.object({
  region: yup.string().required(TEXTS.validation.required.region),
  phone_number: yup.string().required(TEXTS.validation.required.phone),
  public_email: yup
    .string()
    .email(TEXTS.validation.format.email)
    .required(TEXTS.validation.required.email),
  website_url: yup
    .string()
    .url(TEXTS.validation.format.website)
    .required(TEXTS.validation.required.website),
  headline: yup.string().required(TEXTS.validation.required.headline),
});

const Step2: React.FC = () => {
  const router = useRouter();
  const state = useAppSelector(selectState);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const form = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    if (!state?.profile?.id) return;

    const res = await updateProfile({ ...data, profileId: state.profile.id });

    if (!res.error) {
      router.push(`/profile/${state.profile.id}`);
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

      <Input
        placeholder={TEXTS.profileEdit.placeholders.headline}
        label={TEXTS.profileEdit.fields.headline}
        error={errors.headline?.message}
        {...register("headline")}
      />

      <Button
        className="w-full font-semibold"
        loading={isLoading}
        type="submit"
      >
        {TEXTS.createProfileStep2.continue}
      </Button>
      <Button
        onClick={() => router.push("/")}
        className="w-full text-primary"
        variant="text"
        type="button"
      >
        {TEXTS.createProfileStep2.skip}
      </Button>
    </form>
  );
};

export { Step2 };
