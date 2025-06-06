import { useRouter } from "next/navigation";
import { Button } from "@/components/UI";
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
    <>
      <div className="flex w-full items-center justify-center">
        <Image
          src="/images/welcome.webp"
          alt="welcome image"
          height={135}
          width={229}
        />
      </div>
      <div className="text-center flex items-center gap-6 flex-col">
        <h2 className="text-title-active text-[48px] font-bold">
          Բարի գալուստ
          <br /> Rednet
        </h2>
        <p className="text-body font-normal">
          See all the new features we’ve added
          <br /> through our tutorial.
        </p>
        <Button className="mt-4 px-10" onClick={redirectToProfile}>
          Պրոֆայլի ստեղծում
        </Button>
        <Button variant="text" onClick={redirectToHome}>
          Բաց թողնել
        </Button>
      </div>
    </>
  );
};

export { RegisterSuccess };
