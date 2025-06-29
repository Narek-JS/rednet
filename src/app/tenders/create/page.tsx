import { Step1 } from "./_components/Step1";
import { Step2 } from "./_components/Step2";
import { Progress } from "@/components/UI";
import { TEXTS } from "@/constants/texts";

interface Props {
  searchParams: Promise<{ step?: string; tenderId?: string }>;
}

const CreateTender: React.FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;
  const step = params.step ?? "1";
  const tenderId = params.tenderId;
  const progress = Number(step) * 50;

  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[640px] w-full min-h-[600px] bg-white rounded-[24px] p-[30px] pt-[40px]">
          <div className="mb-8">
            <Progress value={progress} />
            <div className="mt-3 flex items-center gap-3">
              <p className="text-[18px] text-[#4E4B66]">{step}/2</p>
              <p className="text-[14px] font-normal text-[#6E7191]">
                {TEXTS.createTender.done}
              </p>
            </div>
            <div className="bg-[#dee6f094] h-[1px] w-full my-[25px]" />
            <h1 className="text-[32px] font-semibold mb-8">
              {TEXTS.createTender.title}
            </h1>

            {step === "1" && <Step1 />}
            {step === "2" && tenderId && <Step2 tenderId={Number(tenderId)} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTender;
