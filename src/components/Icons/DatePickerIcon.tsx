import { cn } from "@/utils/strings/cn";

const DatePickerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className={cn("h-5 w-5 text-[#4E4B66]", props.className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    height="24"
    width="24"
    {...props}
  >
    <rect
      stroke="#A0A3BD"
      strokeWidth="2"
      height="19"
      width="20"
      rx="3"
      x="2"
      y="3"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#A0A3BD"
      strokeWidth="2"
      d="M7 1V3"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#A0A3BD"
      strokeWidth="2"
      d="M17 1V3"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#A0A3BD"
      strokeWidth="2"
      d="M2 8H22"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#A0A3BD"
      d="M6.5 13H7.5"
      strokeWidth="2"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      d="M11.5 13H12.5"
      stroke="#A0A3BD"
      strokeWidth="2"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      d="M16.5 13H17.5"
      stroke="#A0A3BD"
      strokeWidth="2"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="#A0A3BD"
      d="M6.5 17H7.5"
      strokeWidth="2"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      d="M11.5 17H12.5"
      stroke="#A0A3BD"
      strokeWidth="2"
    />
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      d="M16.5 17H17.5"
      stroke="#A0A3BD"
      strokeWidth="2"
    />
  </svg>
);

export { DatePickerIcon };
