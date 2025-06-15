/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSetNewPasswordMutation } from "@/store/auth/api";
import { SetNewPasswordRequest } from "@/store/auth/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { selectState } from "@/store/auth/selectors";
import { Button, Input } from "@/components/UI";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup
    .string()
    .required(TEXTS.forgotPasswordStep3.validation.passwordRequired),
  password_confirmation: yup
    .string()
    .required(TEXTS.forgotPasswordStep3.validation.confirmRequired)
    .oneOf(
      [yup.ref("password")],
      TEXTS.forgotPasswordStep3.validation.mismatch
    ),
});

const Step3: React.FC<{ email: string; code: string }> = ({ email, code }) => {
  const router = useRouter();
  const state = useAppSelector(selectState);
  const [setNewPassword] = useSetNewPasswordMutation();

  const form = useForm<Omit<SetNewPasswordRequest, "email" | "code">>({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const getLinkToDoneAuth = () => {
    if (!state?.user) return "/auth/login";
    if (!state.user.is_activated) return "/auth/register?step=2";
    if (state?.missing_fields?.length) return "/auth/register?step=3";
    return "/";
  };

  const onSubmit = async (
    data: Omit<SetNewPasswordRequest, "email" | "code">
  ) => {
    const res = await setNewPassword({ ...data, email, code });

    if (res.data && "data" in res.data) {
      router.push(getLinkToDoneAuth());
    }

    if (res.error) {
      const errors = (res.error as any)?.data;

      if (errors) {
        setErrorsFields(form, errors as IError);
      } else {
        console.log("Unexpected error --> ", res);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 flex-col gap-y-8"
    >
      <Input
        label={TEXTS.forgotPasswordStep3.fields.password}
        type="password"
        placeholder={TEXTS.forgotPasswordStep3.placeholders.password}
        error={formState.errors.password?.message}
        {...register("password")}
      />

      <Input
        label={TEXTS.forgotPasswordStep3.fields.passwordConfirm}
        type="password"
        placeholder={TEXTS.forgotPasswordStep3.placeholders.passwordConfirm}
        error={formState.errors.password_confirmation?.message}
        {...register("password_confirmation")}
      />

      <Button className="w-full font-semibold text-[18px]" type="submit">
        {TEXTS.forgotPasswordStep3.button}
      </Button>
    </form>
  );
};

export { Step3 };
