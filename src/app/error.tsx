"use client";

import { TEXTS } from "@/constants/texts";
import { Button } from "@/components/UI";
import { Logo } from "@/components/UI";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => (
  <div className="min-h-screen bg-[#EFF0F6] flex flex-col items-center justify-center px-4 py-8">
    <div className="max-w-[560px] w-full bg-white rounded-[24px] p-[30px] sm:p-[60px] text-center">
      <div className="mb-8 flex justify-center">
        <Logo className="w-[120px] h-[48px] sm:w-[138px] sm:h-[54px]" />
      </div>

      <div className="mb-6 flex justify-center">
        <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] bg-[#F35D74] rounded-full flex items-center justify-center">
          <svg
            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#14142B]">
          {TEXTS.error.title}
        </h1>
      </div>

      <div className="mb-8">
        <p className="text-[16px] sm:text-[18px] text-[#4E4B66] leading-relaxed">
          {TEXTS.error.description}
        </p>
      </div>

      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <Button variant="primery" className="w-full sm:w-auto" onClick={reset}>
          {TEXTS.error.retryButton}
        </Button>

        <Link href="/" className="block sm:inline-block">
          <Button variant="border" className="w-full sm:w-auto">
            {TEXTS.error.homeButton}
          </Button>
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-[#D6D8E7]">
        <p className="text-[14px] text-[#6E7191]">{TEXTS.error.helpText}</p>
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="mt-6 p-4 bg-[#F8F9FA] rounded-[12px] text-left">
          <h3 className="text-[14px] font-semibold text-[#14142B] mb-2">
            Error Details (Development):
          </h3>
          <p className="text-[12px] text-[#6E7191] font-mono break-all">
            {error.message}
          </p>
          {error.digest && (
            <p className="text-[12px] text-[#6E7191] font-mono mt-1">
              Digest: {error.digest}
            </p>
          )}
        </div>
      )}
    </div>

    <div className="mt-8 text-center">
      <span className="text-[14px] text-[#6E7191]">
        © Rednet {new Date().getFullYear()}
      </span>
    </div>
  </div>
);

export default ErrorPage;
