import React from "react";

export const TenderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f35d74"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={18}
    width={18}
    {...props}
  >
    <rect x="4" y="3" width="16" height="18" rx="2" ry="2" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="12" y2="15" />
  </svg>
);
