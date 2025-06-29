"use client";

import { useRouter } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import { Button } from "@/components/UI";
import { Logo } from "@/components/UI";
import Link from "next/link";

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#EFF0F6] flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-[560px] w-full bg-white rounded-[24px] p-[30px] sm:p-[60px] text-center">
        <div className="mb-8 flex justify-center">
          <Logo className="w-[120px] h-[48px] sm:w-[138px] sm:h-[54px]" />
        </div>

        <div className="mb-6">
          <h1 className="text-[64px] sm:text-[80px] md:text-[96px] font-bold text-[#F35D74] leading-none">
            404
          </h1>
        </div>

        <div className="mb-4">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#14142B]">
            {TEXTS.notFound.title}
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-[16px] sm:text-[18px] text-[#4E4B66] leading-relaxed">
            {TEXTS.notFound.description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            variant="primery"
            className="w-full sm:w-auto"
            onClick={() => router.push("/")}
          >
            {TEXTS.notFound.backButton}
          </Button>

          <Link href="/" className="block sm:inline-block">
            <Button variant="border" className="w-full sm:w-auto">
              {TEXTS.notFound.homeButton}
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[#D6D8E7]">
          <p className="text-[14px] text-[#6E7191]">
            {TEXTS.notFound.helpText}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <span className="text-[14px] text-[#6E7191]">
          © Rednet {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default NotFound;
