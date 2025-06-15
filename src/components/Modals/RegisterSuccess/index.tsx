import { useRouter } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import { Button } from "@/components/UI";
import { X } from "lucide-react";
import Image from "next/image";

interface Props {
  closeModal: () => void;
}

const RegisterSuccess: React.FC<Props> = ({ closeModal }) => {
  const router = useRouter();

  const redirectToHome = () => {
    closeModal();
    router.push("/");
  };

  const redirectToProfile = () => {
    closeModal();
    router.push("/profile/create");
  };

  return (
    <div className="relative">
      <X
        className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={redirectToHome}
      />
      <div className="w-full flex items-center justify-center">
        <Image
          src="/images/welcome.webp"
          alt="welcome image"
          height={135}
          width={229}
        />
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-[32px] sm:text-[48px] font-bold text-center max-w-[500px]">
          {TEXTS.registerSuccess.title}
        </h2>
        <p className="text-body font-normal">
          {TEXTS.registerSuccess.description}
        </p>
        <Button
          className="mt-4 px-10 max-w-[309px]"
          onClick={redirectToProfile}
        >
          {TEXTS.registerSuccess.createProfile}
        </Button>
        <Button
          variant="text"
          className="text-body font-bold"
          onClick={redirectToHome}
        >
          {TEXTS.registerSuccess.skip}
        </Button>
      </div>
    </div>
  );
};

export { RegisterSuccess };
