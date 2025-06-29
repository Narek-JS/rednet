type Props = React.SVGProps<SVGSVGElement>;

const BackArrow: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    height="24"
    width="24"
    {...props}
  >
    <path
      d="M9.71729 5L3.00021 12L9.71729 19"
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#F35D74"
      strokeWidth="2"
    />
    <line
      transform="matrix(1 0 0 -1 3.26709 11.0312)"
      strokeLinecap="round"
      stroke="#F35D74"
      strokeWidth="2"
      x2="16.7331"
      y1="-1"
      y2="-1"
      x1="1"
    />
  </svg>
);

export { BackArrow };
