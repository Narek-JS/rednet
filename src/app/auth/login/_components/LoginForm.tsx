/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MissingFieldsEnum } from "@/types/missingFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { useLoginMutation } from "@/store/auth/api";
import { LoginRequest } from "@/store/auth/types";
import { Button, Input } from "@/components/UI";
import { StorageEnum } from "@/types/storage";
import { setCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import Link from "next/link";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email(TEXTS.loginForm.validation.emailInvalid)
    .required(TEXTS.loginForm.validation.emailRequired),
  password: yup.string().required(TEXTS.loginForm.validation.passwordRequired),
});

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [login] = useLoginMutation();

  const form = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  const handleNavigateByMissingFields = (missingField: MissingFieldsEnum) => {
    switch (missingField) {
      case MissingFieldsEnum.ORGANIZATION_TYPE:
        router.push("/auth/register?step=3");
        break;
      default:
        return;
    }
  };

  const onSubmit = async (data: LoginRequest) => {
    const response = await login(data);

    if (response.data && "data" in response.data) {
      const accessToken = response.data.data.access_token;
      const isActivated = response.data.data.state.user.is_activated;

      await setCookie(StorageEnum.ACCESS_TOKEN, accessToken);

      if (!isActivated) {
        router.push("/auth/register?step=2");
        return;
      }

      const missingFields = response.data.data.state.missing_fields;
      if (missingFields.length) {
        missingFields.forEach(handleNavigateByMissingFields);
        return;
      }
      router.push("/");
    } else if (response.error) {
      const errors = (response.error as any)?.data;

      if (errors) {
        setErrorsFields(form, errors as IError);
      } else {
        console.log("Unexpected error --> ", response);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Input
        label={TEXTS.loginForm.fields.email}
        placeholder={TEXTS.loginForm.placeholders.email}
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label={TEXTS.loginForm.fields.password}
        placeholder={TEXTS.loginForm.placeholders.password}
        type="password"
        error={errors.password?.message}
        {...register("password")}
      />

      <Link
        className="flex justify-end text-primary text-[14px] -mt-2"
        href="/auth/forgot-password"
      >
        {TEXTS.loginForm.forgot}
      </Link>

      <Button type="submit">{TEXTS.loginForm.button}</Button>
    </form>
  );
};

export { LoginForm };
