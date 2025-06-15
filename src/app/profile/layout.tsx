"use client";

import { selectState } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

const ProfileLayout: React.FC<Props> = ({ children }) => {
  const state = useAppSelector(selectState);
  const router = useRouter();

  useEffect(() => {
    if (!state?.profile) {
      router.push("/");
    }
  }, [router, state]);

  return children;
};

export default ProfileLayout;
