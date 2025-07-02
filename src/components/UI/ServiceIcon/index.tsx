import React from "react";

export const ServiceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M21 12.79A9 9 0 1 1 11.21 3" />
    <path d="M22 2 12 12" />
  </svg>
);
