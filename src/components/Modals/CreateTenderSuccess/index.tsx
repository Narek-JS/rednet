import { useRouter, useSearchParams } from "next/navigation";
import { TEXTS } from "@/constants/texts";
import { Button } from "@/components/UI";
import { X } from "lucide-react";
import Image from "next/image";

interface Props {
  closeModal: () => void;
}

const CreateTenderSuccess: React.FC<Props> = ({ closeModal }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectToCreateTender = () => {
    closeModal();
    router.push("/tenders/create");
  };

  const redirectToTender = () => {
    closeModal();
    router.push("/tenders/" + searchParams.get("tenderId"));
  };

  return (
    <div className="relative">
      <X
        className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background cursor-pointer"
        onClick={closeModal}
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
          {TEXTS.createTenderSuccess.title}
        </h2>
        <p className="text-body font-normal">
          {TEXTS.createTenderSuccess.description}
        </p>
        <Button className="mt-4 px-10 max-w-[309px]" onClick={redirectToTender}>
          {TEXTS.createTenderSuccess.seeTender}
        </Button>
        <Button
          variant="text"
          className="text-primary font-bold"
          onClick={redirectToCreateTender}
        >
          {TEXTS.createTenderSuccess.addTender}
        </Button>
      </div>
    </div>
  );
};

export { CreateTenderSuccess };
