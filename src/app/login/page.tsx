import Link from "next/link";
// import { LoginForm } from "./_components/LoginForm";

export default function Login() {
  return (
    <div className="container h-full w-full">
      <div className="mt-[46px] mb-[30px] flex justify-center">
        <div className="max-w-[560px] w-full min-h-[600px] bg-white rounded-[24px] p-[60px]">
          <div className="mb-8">
            <h1 className="text-title-active text-[32px] font-semibold">
              Ողջույն!
            </h1>
            <p className="mt-1 flex items-center gap-2">
              Չունե՞ք հաշիվ
              <Link href={"/register"} className="text-primary-main">
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
