import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <polygon
        points="74.32 414.37 400.01 496.11 709.62 366.09 627.88 691.79 757.9 1001.39 1003.13 24.3 74.32 414.37"
        fill="#00f0ff"
      />
      <polygon
        points="25.11 263.84 334.18 395.13 660.21 314.72 528.92 623.79 609.33 949.82 1003.2 22.61 25.11 263.84"
        fill="#1062ff"
      />
    </svg>
  );
};

export default Logo;
