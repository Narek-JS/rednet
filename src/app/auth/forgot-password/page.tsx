import { StepControl } from "./_components/StepControl";
import { Back } from "@/components/Icons";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ step?: string; email?: string; code?: string }>;
}

const ForgotPassword: React.FC<Props> = async ({ searchParams }) => {
  const searchParamsStream = await searchParams;

  const step = searchParamsStream.step ?? "1";
  const email = searchParamsStream.email;
  const code = searchParamsStream.code;

  const heading =
    step === "3" ? "Ստեղծել նոր գաղտնաբառ" : "Վերականգնել գաղտնաբառը";

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <h1 className="text-title-active text-[32px] font-semibold">
              {heading}
            </h1>
            <p className="mt-1">
              {step === "1" &&
                "Խնդրում ենք մուտքագրել ձեր էլ. փոստը, որով գրանցվել եք համակարգ"}
              {step === "2" && "Մենք ուղարկել ենք կոդը ձեր էլ.փոստի հասցեին"}
            </p>
          </div>
          <StepControl step={step} email={email} code={code} />
          {step !== "3" && (
            <Link
              className="flex mt-8 gap-2 font-semibold"
              href={
                +step - 1
                  ? `/auth/forgot-password?step=${+step - 1}`
                  : "/auth/login"
              }
            >
              <Back /> Վերադառնալ
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
