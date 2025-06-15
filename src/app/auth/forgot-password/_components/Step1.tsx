"use client";

import { useResetPasswordMutation } from "@/store/auth/api";
import { ResetPasswordRequest } from "@/store/auth/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { Input, Button } from "@/components/UI";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email(TEXTS.forgotPasswordStep1.validation.invalid)
    .required(TEXTS.forgotPasswordStep1.validation.required),
});

const Step1: React.FC = () => {
  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation({});

  const form = useForm<ResetPasswordRequest>({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = async (data: ResetPasswordRequest) => {
    const res = await resetPassword({ email: data.email });
    if (res.data && "data" in res.data) {
      return router.push(`/auth/forgot-password?step=2&email=${data.email}`);
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
      <Input
        label={TEXTS.forgotPasswordStep1.field}
        placeholder={TEXTS.forgotPasswordStep1.placeholder}
        error={formState.errors.email?.message}
        {...register("email")}
      />

      <Button className="w-full font-semibold" type="submit">
        {TEXTS.forgotPasswordStep1.button}
      </Button>
    </form>
  );
};

export { Step1 };
