import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

const steps = {
  "1": <Step1 />,
  "2": <Step2 />,
};

interface Props {
  step: string;
}

const StepControl: React.FC<Props> = ({ step }) => {
  return steps[step as keyof typeof steps];
};

export { StepControl };
