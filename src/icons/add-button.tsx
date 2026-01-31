import * as React from "react";
const AddButton = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <g filter="url(#b)">
        <path
          d="m24 0 16.973 7.027L48 24l-7.027 16.973L24 48 7.027 40.973 0 24 7.027 7.027z"
          fill="#fff"
          fillOpacity={0.8}
        />
        <path
          d="M7.41 7.41 24 .54l16.59 6.87L47.46 24l-6.87 16.59L24 47.46 7.41 40.59.54 24z"
          stroke="#50000b"
        />
      </g>
      <path
        d="M33 24H15m9-9v18"
        stroke="#50000b"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
      <filter
        id="b"
        x={-12}
        y={-12}
        width={72}
        height={72}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_142_1201"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_142_1201"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default AddButton;
