import Image from "next/image";

const Logo: React.FC = () => (
  <Image
    alt="Logo"
    src="/images/logo.png"
    className="object-contain"
    height={54}
    width={138}
  />
);

export { Logo };
