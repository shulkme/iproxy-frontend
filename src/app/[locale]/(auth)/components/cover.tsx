import Logo from '@/icons/logo';
import { RiCheckLine } from '@remixicon/react';
import Image from 'next/image';
import React from 'react';

const Cover: React.FC = () => {
  return (
    <>
      <Image fill src="/images/sso.jpg" alt="" className="object-cover" />
      <div className="relative flex flex-col z-10 p-10 h-full">
        <div className="flex flex-none items-center gap-2 text-xl font-bold">
          <span className="text-(--ant-color-primary)">
            <Logo width={24} height={24} />
          </span>
          <span>{process.env.NEXT_PUBLIC_APP_NAME}</span>
        </div>
        <div className="pt-[30%] flex-auto">
          <h1 className="text-4xl font-medium mb-8">
            Global <br />
            Residential Proxy <br />
            Network
          </h1>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>More than 200 million IP pools in 195 countries</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>National and city-level positioning</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>Average uptime is 99.9%</span>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <p className="">Trusted by 5000+ business customers worldwide</p>
        </div>
      </div>
    </>
  );
};

export default Cover;
