"use client";

import Image from "next/image";

const logoList = [
  "/images/logo1.jpg",
  "/images/logo2.jpg",
  "/images/logo1.jpg",
  "/images/logo2.jpg",
  "/images/logo1.jpg",
];

const Partners: React.FC = () => {
  return (
    <section className="bg-[#F6F9FC] py-12 sm:block hidden">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-base mb-10">
          Trusted by 4,000+ companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {logoList.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={120}
              height={40}
              loading="eager"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Partners };
