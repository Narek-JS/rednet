"use client";

import {
  useActivationResendMutation,
  useVerifyMutation,
} from "@/store/auth/api";
import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { VerifyRequest } from "@/store/auth/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TEXTS } from "@/constants/texts";
import { IError } from "@/types/general";
import { useToast } from "@/hooks";
import classNames from "classnames";
import * as yup from "yup";

const formSchema = yup.object({
  code: yup.string().required(TEXTS.registerStep2.validation.required),
});

const Step2: React.FC = () => {
  const router = useRouter();
  const [verify] = useVerifyMutation();
  const [activationResend] = useActivationResendMutation();
  const { showToast } = useToast();

  const form = useForm<VerifyRequest>({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const {
    formState: { isValid, errors },
    handleSubmit,
    register,
    setValue,
  } = form;

  const onSubmit = async (data: VerifyRequest) => {
    const res = await verify(data);

    if (
      !res.error &&
      "data" in res.data &&
      res.data.data.state.user.is_activated
    ) {
      return router.push("/auth/register?step=3");
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

  const resend = async () => {
    const res = await activationResend();
    if (res.data?.activation_code_resent) {
      showToast(TEXTS.registerStep2.resendSuccess);
    }
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-title-active text-[32px] font-semibold leading-[43.58px]">
          {TEXTS.registerStep2.title}
        </h1>
        <p className="font-medium text-body mt-1">
          {TEXTS.registerStep2.subtitle}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex gap-2 flex-wrap gap-y-8"
      >
        <div className="flex flex-col mx-auto mx:0 gap-2.5 relative">
          <label className="text-[#14142B] font-semibold text-[14px]">
            {TEXTS.registerStep2.label}
          </label>

          <InputOTP
            maxLength={6}
            className="w-full"
            {...register("code")}
            onChange={(value) =>
              setValue("code", value, { shouldValidate: true })
            }
          >
            <InputOTPGroup className="gap-3">
              {[...Array(6)].map((_, index) => (
                <InputOTPSlot
                  className="w-[40px] sm:w-[63px] h-[40px] sm:h-[56px] !rounded-[10px] sm:!rounded-[16px] bg-[#EFF0F6] !border-none"
                  index={index}
                  key={index}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          {errors.code?.message && (
            <p className="absolute left-0 -bottom-[22px] text-[#C30052] text-sm font-semibold">
              {errors.code.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 items-center w-full">
          <Button
            className={classNames("w-full font-semibold", {
              "opacity-50 cursor-default": !isValid,
            })}
            disabled={!isValid}
            type="submit"
          >
            {TEXTS.registerStep2.continue}
          </Button>
          <Button
            className="w-fit hover:text-primary"
            onClick={resend}
            variant="text"
            type="button"
          >
            {TEXTS.registerStep2.resend}
          </Button>
        </div>
      </form>
    </>
  );
};

export { Step2 };
