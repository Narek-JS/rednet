'use client';

import { Button } from '@/components/UI/Button';
import Image from 'next/image';

const Banner: React.FC = () => {
  const handleViewDemo = () => {
    console.log('handleViewDemo')
  };

  const handleGetStarted = () => {
    console.log('handleGetStarted')
  };

  return (
    <section className="relative w-full h-[600px] flex">
      <Image
        src="/images/banner.jpg"
        alt="Banner background"
        fill
        className="object-cover"
        priority
      />

      <div className="container relative mx-auto mt-20">
        <div className="max-w-[500px]">
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span >Rednet</span>< br />
            tiitle here
          </h1>
          <p className="mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the
          </p>
          <div className="mt-8 flex gap-4">
            <Button
               onClick={handleViewDemo}
               variant="border"
               className="w-auto text-primary border-primary"
               >
                View demo
            </Button>

            <Button
               onClick={handleGetStarted}
               variant="primery"
               className="w-auto"
               >
                Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
