type Props = {} & React.SVGProps<SVGSVGElement>;

const X = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={6}
    viewBox="0 0 6 6"
    fill="none"
    {...props}
  >
    <path
      d="M1 5.5.5 5l2-2-2-2L1 .5l2 2 2-2 .5.5-2 2 2 2-.5.5-2-2z"
      fill="#212121"
    />
  </svg>
);
export default X;
