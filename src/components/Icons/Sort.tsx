type Props = React.SVGProps<SVGSVGElement>;

const Sort: React.FC<Props> = (props) => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
          d='M5.5 11.1667V11.5H2.5V11.1667H5.5ZM13.5 4.83333H2.5V4.5H13.5V4.83333ZM9.5 8.16667H2.5V7.83333H9.5V8.16667Z'
          fill='black'
          fillOpacity='0.54'
          stroke='#F35D74'
        />
      </svg>
    );
}

export { Sort };
