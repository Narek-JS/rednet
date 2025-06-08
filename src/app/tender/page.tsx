import Step1 from "./[id]/_componenets/Step1";
import Step2 from "./[id]/_componenets/Step2";

export default async function TenderPage({searchParams}: {
  searchParams: Promise<{ step?: string; email?: string; code?: string }>;
}) {
  const params = await searchParams;
  const step = params?.step ?? "1";

  console.log(step, 'minminminminminmin ')
  return (
    <div className="min-h-screen w-full px-4 py-8 flex justify-center">
      <div className="max-w-xl w-full">
        {step === "1" && <Step1 />}
        {step === "2" && <Step2 />}
      </div>
    </div>
  );
}
