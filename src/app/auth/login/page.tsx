import { LoginForm } from "./_components/LoginForm";
import { TEXTS } from "@/constants/texts";
import Link from "next/link";
import React from "react";

const Login: React.FC = () => (
  <div className="container h-full w-full">
    <div className="mt-[46px] mb-[30px] flex justify-center">
      <div className="max-w-[560px] w-full bg-white rounded-[24px] p-[30px] sm:p-[60px]">
        <div className="mb-8">
          <h1 className="text-[32px] text-[#14142B] font-bold">
            {TEXTS.login.title}
          </h1>
          <p className="mt-1 flex items-center gap-2 text-[#14142B] font-semibold">
            {TEXTS.login.subtitle}
            <Link href="/auth/register" className="text-primary">
              {TEXTS.login.register}
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default Login;
