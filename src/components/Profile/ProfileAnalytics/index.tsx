import { Graph, Views } from "@/components/Icons";
import { TEXTS } from "@/constants/texts";

const ProfileAnalytics: React.FC = () => (
  <div className="mt-[154px] bg-white p-2.5 sm:p-6 flex flex-col gap-3 rounded-[8px]">
    <h3 className="text-[#002366] text-[18px] sm:text-[24px] font-semibold">
      {TEXTS.profileAnalytics.title}
    </h3>
    <div className="h-[1px] bg-[#dee6f094]" />
    <div className="flex items-center justify-between">
      <div className="min-w-[200px] flex items-center gap-3 sm:gap-6">
        <div className="min-h-[52px] h-[52px] min-w-[52px] w-[52px] rounded-full bg-[#EFF0F6] flex items-center justify-center">
          <Views />
        </div>
        <div className="flex flex-col justify-between">
          <h6 className="text-[#000D26] text-[16px] sm:text-[22px]">
            {TEXTS.profileAnalytics.viewsLabel}
          </h6>
          <span className="font-medium text-[12px] text-body">
            {TEXTS.profileAnalytics.viewsSubtext}
          </span>
        </div>
      </div>
      <Graph />
    </div>
  </div>
);

export { ProfileAnalytics };
