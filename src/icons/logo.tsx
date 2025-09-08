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
        points="1024 767.4 1024 1023.41 512.01 767.4 768 639.4 1024 767.4"
        fill="#b2d0f7"
      />
      <polygon
        points="1024 -.59 1024 255.41 768 383.41 512.01 511.41 256 639.4 0 511.41 512.01 255.41 1024 -.59"
        fill="#b2d0f7"
      />
      <polygon
        points="512.01 255.41 256 383.41 0 255.41 0 -.59 512.01 255.41"
        fill="#1062ff"
      />
      <polygon
        points="1024 511.41 768 639.4 512.01 767.4 0 1023.41 0 767.4 256 639.4 512.01 511.41 768 383.41 1024 511.41"
        fill="#1062ff"
      />
    </svg>
  );
};

export default Logo;
