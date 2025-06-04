"use client";

import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/UI";
import { yupResolver } from "@hookform/resolvers/yup";
import { setErrorsFields } from "@/utils/formErrors";
import { IVerifyForm } from "@/types/register";
import { ENDPOINTS_ENUM } from "@/constants";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { api } from "@/utils/api";
import classNames from "classnames";
import * as yup from "yup";

const formSchema = yup.object({
  code: yup
    .string()
    .length(6, "Կոդը պետք է լինի 6 նիշ")
    .required("Կոդը պարտադիր է"),
});

const Step2: React.FC = () => {
  const router = useRouter();

  const form = useForm<IVerifyForm>({
    resolver: yupResolver(formSchema),
    defaultValues: { code: "" },
    mode: "onChange",
  });

  const {
    formState: { isValid, errors },
    handleSubmit,
    register,
    setValue,
  } = form;

  const onSubmit = async (data: IVerifyForm) => {
    const res = await api.post(ENDPOINTS_ENUM.AUTH_VERIFY, {
      body: JSON.stringify(data),
    });

    if (res.status === "SUCCESS") {
      router.push("/auth/register?step=3");
      return;
    }

    setErrorsFields(form, res.error);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-title-active text-[32px] font-semibold leading-[43.58px]">
          Հաստատեք էլփոստի հասցեն
        </h1>
        <p className="font-medium text-body mt-1">
          Մենք ուղարկել ենք կոդը ձեր էլ.փոստի հասցեին
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex gap-2 flex-wrap gap-y-8"
      >
        <div className="w-full flex flex-col gap-2.5 relative">
          <label className="text-[#14142B] font-semibold text-[14px]">
            Թվային կոդ
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
                  className="w-[63px] h-[56px] !rounded-[16px] bg-[#EFF0F6] !border-none"
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

        <div className="flex flex-col gap-2 items-center w-full">
          <Button
            className={classNames("w-full h-[72px] font-semibold text-[18px]", {
              "opacity-50 cursor-default": !isValid,
            })}
            disabled={!isValid}
            type="submit"
          >
            Շարունակել
          </Button>
          <Button variant="border" type="button" className="w-full">
            Կրկին ուղարկել կոդը
          </Button>
        </div>
      </form>
    </>
  );
};

export { Step2 };
