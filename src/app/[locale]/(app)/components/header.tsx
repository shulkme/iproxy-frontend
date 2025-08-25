import { AntdHeader } from '@/components/antd';
import {
  RiArrowDownSLine,
  RiNotification3Line,
  RiTranslate2,
  RiWalletLine,
} from '@remixicon/react';
import { Avatar, Button } from 'antd';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <AntdHeader className="h-16 invisible" />
      <AntdHeader className="fixed top-0 right-0 left-[240px] z-50 h-16 border-b border-slate-200 bg-white">
        <div className="h-full flex items-center justify-between pl-8">
          <div className="text-sm font-bold">
            <span>Dashboard</span>
          </div>
          <div className="flex h-full items-center">
            <Button
              type="text"
              className="leading-none rounded-none h-full px-4"
            >
              <RiNotification3Line size={20} />
            </Button>
            <div className="border-r w-0 h-full border-slate-100"></div>
            <Button
              type="text"
              className="leading-none font-bold rounded-none h-full px-4"
              icon={<RiWalletLine size={20} />}
            >
              $1,234
            </Button>
            <div className="border-r w-0 h-full border-slate-100"></div>
            <Button
              type="text"
              className="leading-none rounded-none h-full px-4"
              icon={<RiTranslate2 size={20} />}
            >
              <span>English</span>
              <RiArrowDownSLine size={16} />
            </Button>
            <div className="border-r border-slate-100 h-full"></div>
            <Button
              type="text"
              className="leading-none rounded-none h-full px-4"
              icon={<RiArrowDownSLine size={16} />}
              iconPosition="end"
            >
              <Avatar
                gap={8}
                className="bg-(--ant-color-primary) leading-none"
                size={32}
              >
                Na
              </Avatar>
            </Button>
          </div>
        </div>
      </AntdHeader>
    </>
  );
};

export default Header;
