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
        points="682.67 512 512 170.67 341.33 170.67 682.67 853.33 1024 170.67 853.33 170.67 682.67 512"
        fill="#b2d0f7"
      />
      <polygon
        points="341.33 512 512 853.33 682.67 853.33 341.33 170.67 0 853.33 170.67 853.33 341.33 512"
        fill="#1062ff"
      />
    </svg>
  );
};

export default Logo;
