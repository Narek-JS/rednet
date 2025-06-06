/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSetNewPasswordMutation } from "@/store/auth/api";
import { SetNewPasswordRequest } from "@/store/auth/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { Button, Input } from "@/components/UI";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IError } from "@/types/general";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup.string().required("Գաղտնաբառը պարտադիր է"),
  password_confirmation: yup
    .string()
    .required("Կրկնեք գաղտնաբառը պարտադիր է")
    .oneOf([yup.ref("password")], "Գաղտնաբառերը չեն համընկնում"),
});

const Step3: React.FC<{ email: string; code: string }> = ({ email, code }) => {
  const router = useRouter();
  const [setNewPassword] = useSetNewPasswordMutation();

  const form = useForm<Omit<SetNewPasswordRequest, "email" | "code">>({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = async (
    data: Omit<SetNewPasswordRequest, "email" | "code">
  ) => {
    const res = await setNewPassword({ ...data, email, code });

    if (res.data && "data" in res.data) {
      router.push("/");
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
        label="Նոր գաղտնաբառը"
        type="password"
        placeholder="********"
        error={formState.errors.password?.message}
        {...register("password")}
      />

      <Input
        label="Կրկնեք նոր գաղտնաբառը"
        type="password"
        placeholder="********"
        error={formState.errors.password_confirmation?.message}
        {...register("password_confirmation")}
      />

      <Button
        className="w-full h-[72px] font-semibold text-[18px]"
        type="submit"
      >
        Հաստատել
      </Button>
    </form>
  );
};

export { Step3 };
