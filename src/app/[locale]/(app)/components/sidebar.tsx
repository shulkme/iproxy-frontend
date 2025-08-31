import NavMenu from '@/app/[locale]/components/nav-menu';
import { AntdSider } from '@/components/antd';
import {
  RiExternalLinkLine,
  RiFileList3Line,
  RiGiftLine,
  RiHomeLine,
  RiHomeOfficeLine,
  RiPinDistanceLine,
  RiQuestionLine,
  RiServerLine,
  RiServiceLine,
  RiSettingsLine,
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
            darkItemHoverBg: 'rgba(255,255,255,0.1)',
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
          <div className="flex-none w-full h-16 flex items-center px-8">
            <h1 className="text-2xl font-bold text-white">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </h1>
          </div>
          <div className="flex-auto overflow-auto">
            <NavMenu
              className="[&_.ant-menu-item-group-title]:pl-8"
              selectable={false}
              inlineIndent={16}
              theme="dark"
              mode="inline"
              items={[
                {
                  label: 'Dashboard',
                  key: 'dashboard',
                  icon: <RiHomeLine size={18} />,
                  meta: {
                    href: '/dashboard',
                    group: '/dashboard',
                  },
                },
                {
                  label: 'Proxies',
                  key: 'proxies',
                  type: 'group',
                  children: [
                    {
                      label: 'Residential',
                      key: 'proxies:residential',
                      icon: <RiPinDistanceLine size={18} />,
                      meta: {
                        href: '/proxies/residential/pricing',
                        group: '/proxies/residential',
                      },
                    },
                    {
                      label: 'Static ISP',
                      key: 'proxies:static-isp',
                      icon: <RiHomeOfficeLine size={18} />,
                      meta: {
                        href: '/proxies/static-isp/pricing',
                        group: '/proxies/static-isp',
                      },
                    },
                    {
                      label: 'Datacenter',
                      key: 'proxies:datacenter',
                      icon: <RiServerLine size={18} />,
                      meta: {
                        href: '/proxies/datacenter/pricing',
                        group: '/proxies/datacenter',
                      },
                    },
                    {
                      label: 'Mobile',
                      key: 'proxies:mobile',
                      icon: <RiSmartphoneLine size={18} />,
                      meta: {
                        href: '/proxies/mobile/pricing',
                        group: '/proxies/mobile',
                      },
                    },
                    {
                      label: 'Settings',
                      key: 'proxies:settings',
                      icon: <RiSettingsLine size={18} />,
                      meta: {
                        href: '/proxies/settings/sub-account',
                        group: '/proxies/settings',
                      },
                    },
                  ],
                },
                {
                  label: 'Scarping',
                  key: 'scarping',
                  type: 'group',
                  children: [
                    {
                      label: 'SERP API',
                      key: 'scarping:serp-api',
                      icon: <RiWindowLine size={18} />,
                      meta: {
                        href: '/scarping/serp-api',
                        group: '/scarping/serp-api',
                      },
                    },
                  ],
                },
                {
                  label: 'Menu',
                  key: 'menu',
                  type: 'group',
                  children: [
                    {
                      label: 'My Account',
                      key: 'menu:settings',
                      icon: <RiUser6Line size={18} />,
                      meta: {
                        href: '/settings/my-account',
                        group: '/settings',
                      },
                    },
                    {
                      label: 'Wallet',
                      key: 'menu:wallet',
                      icon: <RiWalletLine size={18} />,
                      meta: {
                        href: '/wallet/recharge',
                        group: '/wallet',
                      },
                    },
                    {
                      label: 'Referral',
                      key: 'menu:referral',
                      icon: <RiGiftLine size={18} />,
                      meta: {
                        href: '/referral/program',
                        group: '/referral',
                      },
                    },
                  ],
                },
                {
                  label: 'Help',
                  key: 'help',
                  type: 'group',
                  children: [
                    {
                      label: 'Partners',
                      key: 'help:partners',
                      icon: <RiServiceLine size={18} />,
                      meta: {
                        href: '/partners',
                        group: '/partners',
                      },
                    },
                    {
                      label: 'Documentation',
                      key: 'help:documentation',
                      icon: <RiFileList3Line size={18} />,
                      extra: <RiExternalLinkLine size={14} />,
                      meta: {
                        href: 'https://documentation',
                        target: '_blank',
                      },
                    },
                    {
                      label: 'FAQ',
                      key: 'help:faq',
                      icon: <RiQuestionLine size={18} />,
                      extra: <RiExternalLinkLine size={14} />,
                      meta: {
                        href: 'https://xxxx',
                        target: '_blank',
                      },
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
