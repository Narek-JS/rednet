"use client";

import { Button } from "@/components/UI/Button";
import Image from "next/image";

const Banner: React.FC = () => {
  const handleViewDemo = () => {
    console.log("handleViewDemo");
  };

  const handleGetStarted = () => {
    console.log("handleGetStarted");
  };

  return (
    <section className="relative w-full h-[450px] md:h-[600px] flex overflow-clip">
      <Image
        className="object-cover"
        src="/images/banner.jpg"
        alt="Banner background"
        priority
        fill
      />
      {/* bannerImage.png */}

      <div className="container relative mx-auto pt-20">
        <div className="max-w-[500px]">
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span>Rednet</span>
            <br />
            tiitle here
          </h1>
          <p className="mt-6 text-[#001D23]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              className="w-[180px] !rounded-full border-primary"
              onClick={handleViewDemo}
              variant="border"
            >
              View demo
            </Button>

            <Button
              onClick={handleGetStarted}
              className="w-[180px] !rounded-full"
              variant="primery"
            >
              Get started
            </Button>
          </div>
        </div>

        <div className="-hidden w-1/2 translate-y-4 lg:absolute -right-20 top-0 bottom-0 z-0 lg:flex overflow-clip">
          <div className="w-full h-full overflow-clip">
            <Image
              src="/images/bannerImage.png"
              className="object-cover"
              alt="Banner background"
              priority
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
