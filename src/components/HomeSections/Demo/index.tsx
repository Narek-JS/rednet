'use client';

import { Button } from '@/components/UI/Button';
import Image from 'next/image';

const checklist = [
  'Create an auction',
  'Create an tenders',
  'Publish',
];

const Demo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Get started in 5 minutes
          </h2>

          <div className="space-y-4 mb-10">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-base text-gray-600">
                    <Image
                      src="/svgs/checked.svg"
                      alt="checks"
                      width={18}
                      height={18}
                    />
                {item}
              </li>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="border" className="w-auto">
              View demo
            </Button>
            <Button variant="primery" className="w-auto">
              Get started
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-3xl">
          <Image
            src="/images/demo-photo.jpg"
            alt="Demo preview"
            width={1200}
            height={500}
            className="w-full h-auto rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export { Demo };
