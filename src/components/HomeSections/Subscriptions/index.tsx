import { Subscriptions as SubscriptionsShared } from "@/components/shared/Subscriptions";

const Subscriptions: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
          Plans for all sizes
        </h2>
        <p className="text-gray-500 mb-5">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
        <SubscriptionsShared />
      </div>
    </section>
  );
};

export { Subscriptions };
