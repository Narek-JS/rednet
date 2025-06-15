import { StepControl } from "./_components/StepControl";
import { Back } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ step?: string; email?: string; code?: string }>;
}

const ForgotPassword: React.FC<Props> = async ({ searchParams }) => {
  const searchParamsStream = await searchParams;

  const step = searchParamsStream.step ?? "1";

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full bg-white rounded-[24px] p-[30px] sm:p-[60px]">
          <div className="mb-8">
            <h1 className="text-title-active text-[32px] font-semibold">
              {step === "3"
                ? TEXTS.forgotPassword.titles.step3
                : TEXTS.forgotPassword.titles.step1}
            </h1>
            <p className="mt-1">
              {step === "1" && TEXTS.forgotPassword.descriptions.step1}
              {step === "2" && TEXTS.forgotPassword.descriptions.step2}
            </p>
          </div>

          <StepControl
            email={searchParamsStream.email}
            code={searchParamsStream.code}
            step={step}
          />

          {step !== "3" && (
            <Link
              className="flex mt-8 gap-2 font-semibold"
              href={
                +step - 1
                  ? `/auth/forgot-password?step=${+step - 1}`
                  : "/auth/login"
              }
            >
              <Back /> {TEXTS.forgotPassword.back}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
