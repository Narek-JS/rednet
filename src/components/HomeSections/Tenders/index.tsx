'use client';

import { Button } from '@/components/UI/Button';

const Tenders: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between  gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Tenders</h2>
          <p className="text-gray-500 mt-1">
            Hear from some of our amazing customers who are automating their finances.
          </p>
        </div>

        <Button
          onClick={()=>{}}
          variant="border"
          className="w-auto border-primary px-6"
        >
          See all
        </Button>
      </div>
    </section>
  );
};

export { Tenders };
