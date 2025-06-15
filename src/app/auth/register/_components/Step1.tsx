/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRegisterMutation } from "@/store/auth/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterRequest } from "@/store/auth/types";
import { setErrorsFields } from "@/utils/formErrors";
import { Button, Input } from "@/components/UI";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import Link from "next/link";
import * as yup from "yup";

const schema = yup.object({
  password_confirmation: yup
    .string()
    .required(TEXTS.registerStep1.validation.passwordConfirm),
  first_name: yup.string().required(TEXTS.registerStep1.validation.firstName),
  last_name: yup.string().required(TEXTS.registerStep1.validation.lastName),
  password: yup.string().required(TEXTS.registerStep1.validation.password),
  email: yup
    .string()
    .email(TEXTS.registerStep1.validation.emailInvalid)
    .required(TEXTS.registerStep1.validation.emailRequired),
});

const Step1: React.FC = () => {
  const router = useRouter();
  const [registerMutation] = useRegisterMutation();

  const form = useForm<RegisterRequest>({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = async (data: RegisterRequest) => {
    const res = await registerMutation(data);

    if (res.data && "data" in res.data) {
      if (!res.data.data.state.user.is_activated) {
        return router.push("/auth/register?step=2");
      } else {
        return router.push("/auth/register?step=3");
      }
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
    <>
      <div className="mb-8">
        <h1 className="text-[32px] text-[#14142B] font-bold">
          {TEXTS.registerStep1.title}
        </h1>
        <p className="mt-1 flex items-center gap-2 text-[#14142B] font-semibold">
          {TEXTS.registerStep1.subtitle}
          <Link href="/auth/login" className="text-primary">
            {TEXTS.registerStep1.login}
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 flex-wrap gap-y-8"
      >
        <div className="flex flex-col sm:flex-row gap-2.5 gap-y-8 w-full">
          <Input
            label={TEXTS.registerStep1.fields.firstName}
            placeholder={TEXTS.registerStep1.placeholders.firstName}
            error={formState.errors.first_name?.message}
            {...register("first_name")}
          />

          <Input
            label={TEXTS.registerStep1.fields.lastName}
            placeholder={TEXTS.registerStep1.placeholders.lastName}
            error={formState.errors.last_name?.message}
            {...register("last_name")}
          />
        </div>

        <Input
          label={TEXTS.registerStep1.fields.email}
          placeholder={TEXTS.registerStep1.placeholders.email}
          error={formState.errors.email?.message}
          {...register("email")}
        />

        <div className="flex flex-col sm:flex-row gap-2.5 gap-y-8 w-full">
          <Input
            label={TEXTS.registerStep1.fields.password}
            placeholder={TEXTS.registerStep1.placeholders.password}
            type="password"
            error={formState.errors.password?.message}
            {...register("password")}
          />

          <Input
            label={TEXTS.registerStep1.fields.passwordConfirm}
            placeholder={TEXTS.registerStep1.placeholders.passwordConfirm}
            type="password"
            error={formState.errors.password_confirmation?.message}
            {...register("password_confirmation")}
          />
        </div>

        <Button className="w-full font-semibold text-[18px]" type="submit">
          {TEXTS.registerStep1.button}
        </Button>
      </form>
    </>
  );
};

export { Step1 };
