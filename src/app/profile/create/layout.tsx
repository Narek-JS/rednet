import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const CreateProfileLayout: React.FC<Props> = ({ children }) => (
  <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
    {/* Background image */}
    <Image
      className="object-cover object-center -z-10"
      src="/images/bg-main.png"
      alt="Background"
      priority
      fill
    />

    {/* Content */}
    <div className="relative z-10">{children}</div>
  </div>
);

export default CreateProfileLayout;
