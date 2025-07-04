type Props = React.SVGProps<SVGSVGElement>;

const Back: React.FC<Props> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.9634 5L9.00021 11.9632L15.9634 18.9263"
      stroke="#F35D74"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Back };
