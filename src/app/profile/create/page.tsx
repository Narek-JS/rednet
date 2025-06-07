import { StepControl } from "./_components/StepControl";
import { Progress } from "@/components/UI/Progress";

interface Props {
  searchParams: Promise<{ step?: string }>;
}

const CreateProfile: React.FC<Props> = async ({ searchParams }) => {
  const step = (await searchParams).step ?? "1";
  const progress = Number(step) * 50;

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <Progress value={progress} />
            <div className="mt-3 flex items-center gap-3">
              <p className="text-[18px] text-[#4E4B66]">{step}/2</p>
              <p className="text-[14px] font-normal text-[#6E7191]">Done</p>
            </div>
            <div className="bg-[#DEE6F0] h-[1px] w-full my-[25px]" />
            <h1 className="text-[32px] font-semibold mb-8">
              Պրոֆայլի ստեղծում
            </h1>

            <StepControl step={step} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
