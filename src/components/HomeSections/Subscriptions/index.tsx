import { Subscriptions as SubscriptionsShared } from '@/components/shared/Subscriptions';

const Subscriptions: React.FC = () => {
  return (
    <section className="py-16 bg-white container">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
          Plans for all sizes
        </h2>
        <p className="text-gray-500">
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </p>
      </div>
      <SubscriptionsShared />
    </section>
  );
};

export { Subscriptions };
