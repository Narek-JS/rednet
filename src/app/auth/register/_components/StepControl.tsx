// import { Pin } from "@/components/Register/Step2";
// import { Step3 } from "@/components/Register/Step3";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

const steps = {
  "1": <Step1 />,
  "2": <Step2 />,
  "3": <Step3 />,
};

export const StepControl = ({ step = "1" }: { step: string }) => {
  return steps[step as keyof typeof steps];
};
