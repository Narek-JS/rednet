import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

const steps = {
  "1": <Step1 />,
  "2": <Step2 />,
  "3": <Step3 />,
};

interface Props {
  step: string;
}

const StepControl: React.FC<Props> = ({ step = "1" }) => {
  return steps[step as keyof typeof steps];
};

export { StepControl };
