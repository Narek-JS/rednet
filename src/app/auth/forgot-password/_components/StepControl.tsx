import { TEXTS } from "@/constants/texts";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

interface Props {
  email?: string;
  code?: string;
  step: string;
}

const StepControl: React.FC<Props> = ({ step = "1", email, code }) => {
  const error = <div>{TEXTS.forgotPassword.invalid}</div>;

  const steps = {
    "1": <Step1 />,
    "2": email ? <Step2 email={email} /> : error,
    "3": email && code ? <Step3 email={email} code={code} /> : error,
  };

  return steps[step as keyof typeof steps] ?? <Step1 />;
};

export { StepControl };
