import { LoginForm } from "./_components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <h1 className="text-title-active text-[32px] text-[#14142B] font-bold">
              Ողջույն!
            </h1>
            <p className="mt-1 flex items-center gap-2 text-[#14142B] font-semibold">
              Չունե՞ք հաշիվ
              <Link href={"/register"} className="text-primary">
                Գրանցվել
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
