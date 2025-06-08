import React from "react";
import clsx from "clsx";

export const TenderSkeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx("border rounded-lg p-4 w-full animate-pulse bg-white", className)}>
      <div className="h-4 w-1/3 bg-gray-300 rounded mb-3"></div>
      <div className="h-28 w-full bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
    </div>
  );
};
