import { StepControl } from "./_components/StepControl";
import { Progress } from "@/components/UI/Progress";
import { Back } from "@/components/Icons";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ step?: string }>;
}

const Register: React.FC<Props> = async ({ searchParams }) => {
  const step = (await searchParams).step ?? "1";
  const progress = Number(step) * 25;

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <Progress value={progress} />
            <div className="mt-3 mb-[25px] flex items-center gap-3">
              <p className="text-[18px] text-[#4E4B66]">{step}/3</p>
              <p className="text-[14px] font-normal text-[#6E7191]">Done</p>
            </div>
            <div className="bg-[#DEE6F0] h-[1px] w-full mt-2.5" />
          </div>
          <StepControl step={step} />
          {step !== "1" ? (
            <Link
              className="flex mt-8 gap-2 font-semibold"
              href={`/auth/register?page=${Number(step) - 1}`}
            >
              <Back /> Back
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
