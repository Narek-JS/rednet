"use client";

import { selectState } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const CreateTendersLayout: React.FC<Props> = ({ children }) => {
  const state = useAppSelector(selectState);
  const router = useRouter();

  useEffect(() => {
    if (!state?.profile) {
      router.push("/");
    }
  }, [router, state]);

  return (
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
};

export default CreateTendersLayout;
