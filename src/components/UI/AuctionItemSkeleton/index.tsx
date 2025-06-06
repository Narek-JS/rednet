export const AuctionItemSkeleton = () => {
    return (
      <div className="w-[calc(50%-12px)] h-[274px] rounded-[8px] border border-[#D6D8E7] bg-white p-4 animate-pulse space-y-3">
        <div className="w-full h-[130px] bg-gray-300 rounded-[6px]" />
  
        <div className="space-y-2 pt-2">
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-2/3 bg-gray-300 rounded" />
          <div className="h-4 w-1/3 bg-gray-300 rounded" />
        </div>
      </div>
    );
  };
