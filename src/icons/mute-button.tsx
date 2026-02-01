import * as React from "react";
const MuteButton = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2591_34086)">
      <path
        d="M32 0L54.6306 9.36937L64 32L54.6306 54.6306L32 64L9.36937 54.6306L0 32L9.36937 9.36937L32 0Z"
        fill="white"
      />
      <path
        d="M41.333 32H46.6663"
        stroke="#50000B"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M39.5332 25.3332L44.1332 22.6665"
        stroke="#50000B"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M39.5332 38.6665L44.1332 41.3332"
        stroke="#50000B"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M35.9997 45.3332L25.9997 37.9998H19.9997C19.2924 37.9998 18.6142 37.7189 18.1141 37.2188C17.614 36.7187 17.333 36.0404 17.333 35.3332V28.6665C17.333 27.9593 17.614 27.281 18.1141 26.7809C18.6142 26.2808 19.2924 25.9998 19.9997 25.9998H25.9997L35.9997 18.6665V45.3332Z"
        stroke="#50000B"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="clip0_2591_34086">
        <rect width={64} height={64} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default MuteButton;
