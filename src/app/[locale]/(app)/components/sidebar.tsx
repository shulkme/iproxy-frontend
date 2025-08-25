import NavMenu from '@/app/[locale]/components/nav-menu';
import { AntdSider } from '@/components/antd';
import {
  RiFileList3Line,
  RiGroupLine,
  RiHomeLine,
  RiHomeOfficeLine,
  RiPinDistanceLine,
  RiQuestionLine,
  RiServerLine,
  RiServiceLine,
  RiSmartphoneLine,
  RiUser6Line,
  RiWalletLine,
  RiWindowLine,
} from '@remixicon/react';
import { ConfigProvider } from 'antd';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHeight: 40,
            itemMarginInline: 16,
            groupTitleFontSize: 12,
            iconMarginInlineEnd: 12,
            darkItemColor: '#fff',
          },
        },
      }}
    >
      <AntdSider width={240} trigger={null} className="invisible" />
      <AntdSider
        theme="dark"
        width={240}
        trigger={null}
        className="fixed top-0 left-0 bottom-0 z-50"
      >
        <div className="h-full flex flex-col">
          <div className="flex-none w-full h-16 flex items-center px-6">
            <h1 className="text-2xl font-bold text-white">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </h1>
          </div>
          <div className="flex-auto overflow-auto">
            <NavMenu
              selectable={false}
              inlineIndent={16}
              theme="dark"
              mode="inline"
              items={[
                {
                  label: 'Dashboard',
                  key: '/dashboard',
                  icon: <RiHomeLine size={18} />,
                },
                {
                  label: 'Proxies',
                  key: '/proxies',
                  type: 'group',
                  children: [
                    {
                      label: 'Residential',
                      key: '/proxies/residential',
                      icon: <RiPinDistanceLine size={18} />,
                    },
                    {
                      label: 'Static ISP',
                      key: '/proxies/static-isp',
                      icon: <RiHomeOfficeLine size={18} />,
                    },
                    {
                      label: 'Datacenter',
                      key: '/proxies/datacenter',
                      icon: <RiServerLine size={18} />,
                    },
                    {
                      label: 'Mobile',
                      key: '/proxies/mobile',
                      icon: <RiSmartphoneLine size={18} />,
                    },
                  ],
                },
                {
                  label: 'Scarping',
                  key: '/scarping',
                  type: 'group',
                  children: [
                    {
                      label: 'SERP API',
                      key: '/scarping/serp-api',
                      icon: <RiWindowLine size={18} />,
                    },
                  ],
                },
                {
                  label: 'Settings',
                  key: '/settings',
                  type: 'group',
                  children: [
                    {
                      label: 'My Account',
                      key: '/settings/my-account',
                      icon: <RiUser6Line size={18} />,
                    },
                    {
                      label: 'Sub Account',
                      key: '/settings/subaccount',
                      icon: <RiGroupLine size={18} />,
                    },
                    {
                      label: 'Wallet',
                      key: '/settings/wallet',
                      icon: <RiWalletLine size={18} />,
                    },
                  ],
                },
                {
                  label: 'Help',
                  key: '/help',
                  type: 'group',
                  children: [
                    {
                      label: 'Partners',
                      key: '/help/partners',
                      icon: <RiServiceLine size={18} />,
                    },
                    {
                      label: 'Documentation',
                      key: '/help/documentation',
                      icon: <RiFileList3Line size={18} />,
                    },
                    {
                      label: 'FAQ',
                      key: '/help/faq',
                      icon: <RiQuestionLine size={18} />,
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </AntdSider>
    </ConfigProvider>
  );
};

export default Sidebar;
