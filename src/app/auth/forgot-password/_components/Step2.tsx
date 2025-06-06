/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/UI";
import { useResetPasswordCheckMutation } from "@/store/auth/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IError } from "@/types/general";
import * as yup from "yup";

const schema = yup.object().shape({
  code: yup
    .string()
    .length(6, "Կոդը պետք է լինի 6 նիշ")
    .required("Թվային կոդը պարտադիր է"),
});

const Step2: React.FC<{ email: string }> = ({ email }) => {
  const router = useRouter();
  const [resetPasswordCheck] = useResetPasswordCheckMutation();

  const form = useForm<{ code: string }>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { handleSubmit, formState, setValue, watch } = form;

  const onSubmit = async (data: { code: string }) => {
    const res = await resetPasswordCheck({ email, code: data.code });

    if (res.data && "data" in res.data) {
      router.push(
        `/auth/forgot-password?step=3&email=${email}&code=${data.code}`
      );
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

  const code = watch("code");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex gap-2 flex-wrap gap-y-8"
    >
      <div className="w-full">
        <label className="block font-semibold mb-2">Թվային կոդ</label>
        <InputOTP
          maxLength={6}
          value={code || ""}
          onChange={(val) => setValue("code", val, { shouldValidate: true })}
          className="w-full"
        >
          <InputOTPGroup className="gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {formState.errors.code && (
          <p className="text-sm text-red-500 mt-1">
            {formState.errors.code.message}
          </p>
        )}
      </div>

      <Button
        className="w-full h-[72px] font-semibold text-[18px]"
        type="submit"
        disabled={!formState.isValid}
      >
        Հաստատել
      </Button>
    </form>
  );
};

export { Step2 };
