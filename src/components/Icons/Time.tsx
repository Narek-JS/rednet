const Time: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    height="20"
    width="20"
    {...props}
  >
    <circle cx="10" cy="10" r="8.25" stroke="#4E4B66" strokeWidth="2" />
    <path
      d="M10 6.25V10.75L11.875 12.625"
      stroke="#4E4B66"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Time };
