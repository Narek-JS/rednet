import { FC } from "react";
import Image from "next/image";

interface Props {
  text: string;
}

const EmptyItems: FC<Props> = ({ text }) => (
  <div className="w-full flex flex-col items-center justify-center">
    <Image
      src="/svgs/no-products.svg"
      alt="No Items"
      width={110}
      height={100}
    />
    <p className="text-[12px] sm:text-[16px]">{text}</p>
  </div>
);

export { EmptyItems };
