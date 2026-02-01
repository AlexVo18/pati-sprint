import * as React from "react";
const PlayButton = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="play_icon"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: "block",
    }}
    {...props}
  >
    <circle cx={11.75} cy={12.25} r={9.25} fill="#50000B" />
    <g clipPath="url(#clip0_779_10354)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4865 3.51351L12 0L3.51351 3.51351L0 12L3.51351 20.4865L12 24L20.4865 20.4865L24 12L20.4865 3.51351ZM9.75 15.8971L16.5 12L9.75 8.10289V15.8971Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_779_10354">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default PlayButton;
