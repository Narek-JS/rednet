"use client";

import type { Variant } from "@/components/UI/Button";
import { Button } from "@/components/UI/Button";

const plans = [
  {
    title: "Startup",
    subtitle: "Starting at $0",
    button: "Buy now",
    buttonVariant: "primery",
    data: {
      firstLine: ["10", "300", "3000 AMD", "0%"],
      secondLine: ["10", "100", "1000 AMD", "0%"],
    },
  },
  {
    title: "Professional",
    subtitle: "Starting at $40 / mo",
    button: "Buy now",
    buttonVariant: "primery",
    data: {
      firstLine: ["10", "300", "3000 AMD", "20%"],
      secondLine: ["10", "100", "1000 AMD", "20%"],
    },
  },
  {
    title: "Growth",
    subtitle: "Starting at $40 / mo",
    button: "Buy now",
    buttonVariant: "primery",
    data: {
      firstLine: ["10", "300", "3000 AMD", "50%"],
      secondLine: ["10", "100", "1000 AMD", "50%"],
    },
  },
  {
    title: "Scale",
    subtitle: "Starting at $40 / mo",
    button: "Buy now",
    buttonVariant: "primery",
    data: {
      firstLine: ["10", "300", "3000 AMD", "60%"],
      secondLine: ["10", "100", "1000 AMD", "60%"],
    },
  },
  {
    title: "Custom",
    subtitle: "Starting at $40 / mo",
    button: "Get in touch",
    buttonVariant: "border",
    data: {
      firstLine: ["10", "300", "3000 AMD", "70%"],
      secondLine: ["10", "100", "1000 AMD", "70%"],
    },
  },
];

const rowLabels = ["Ներբեռնված", "Միջին արժեք", "Արժեք", "Զեղչ"];
const columns = ["Հաշվարկել", "Մուտքագրել"];

const renderDataRows = (type: "firstLine" | "secondLine") => {
  return rowLabels.map((_, rowIdx) =>
    plans.map((plan, idx) => (
      <div
        key={`${type}-${rowIdx}-${idx}`}
        className="h-[48px] flex items-center justify-center text-sm font-semibold text-[#101828]"
      >
        {plan.data[type][rowIdx]}
      </div>
    ))
  );
};

export const Subscriptions: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full">
        <div className="sm:min-w-[130px] min-w-[60px] flex-shrink-0 pr-4">
          <div className="h-[96px]" />

          {columns.map((sectionTitle) => (
            <div key={sectionTitle} className="mt-7">
              <div className="text-primary font-semibold sm:text-base text-[14px] mb-2">
                {sectionTitle}
              </div>
              {rowLabels.map((label, idx) => (
                <div
                  key={`${sectionTitle}-${idx}`}
                  className="h-[48px] flex items-center sm:text-sm text-[14px] font-semibold"
                >
                  {label}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="overflow-x-auto subscriptions-scrollbar w-full">
          <div className="min-w-[745px] sm:min-w-[900px] grid grid-cols-5">
            {plans.map((plan, idx) => (
              <div key={idx} className="text-center py-6 px-2 bg-white">
                <h3 className="text-lg font-semibold text-[#101828]">
                  {plan.title}
                </h3>
                <p className="text-sm text-[#667085] mb-3">{plan.subtitle}</p>
                <Button
                  variant={plan.buttonVariant as Variant}
                  className="max-w-[142px] !h-[42px] !rounded-full mx-auto"
                >
                  {plan.button}
                </Button>
              </div>
            ))}

            {renderDataRows("firstLine")}
            <div className="col-span-5 h-13" />
            {renderDataRows("secondLine")}
          </div>
        </div>
      </div>
    </div>
  );
};
