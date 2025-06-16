"use client";

import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/UI";
import { useResetPasswordCheckMutation } from "@/store/auth/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import * as yup from "yup";

const schema = yup.object().shape({
  code: yup.string().required(TEXTS.forgotPasswordStep2.validation.required),
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
        <label className="block font-semibold mb-2">
          {TEXTS.forgotPasswordStep2.label}
        </label>
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
                className="w-[40px] sm:w-[63px] h-[40px] sm:h-[56px] !rounded-[10px] sm:!rounded-[16px] bg-[#EFF0F6] !border-none"
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
        className="w-full font-semibold"
        disabled={!formState.isValid}
        type="submit"
      >
        {TEXTS.forgotPasswordStep2.confirm}
      </Button>
    </form>
  );
};

export { Step2 };
