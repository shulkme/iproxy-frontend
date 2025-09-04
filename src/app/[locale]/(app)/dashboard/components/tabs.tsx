import { useDashboard } from '@/app/[locale]/(app)/dashboard/context';
import {
  AntdRadioButton,
  AntdRadioGroup,
  AntdText,
  AntdTitle,
} from '@/components/antd';
import {
  RemixiconComponentType,
  RiHomeOfficeLine,
  RiPinDistanceLine,
  RiServerLine,
  RiSmartphoneLine,
} from '@remixicon/react';
import { Avatar, Card } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const RadioTab: React.FC<{
  icon: RemixiconComponentType;
  value: string;
  title: string;
  desc: React.ReactNode;
}> = ({ icon, title, desc, value }) => {
  return (
    <AntdRadioButton
      value={value}
      className="h-auto border border-transparent rounded-sm leading-none p-4 before:hidden hover:bg-slate-50 [&.ant-radio-button-wrapper-checked]:border-slate-200 [&.ant-radio-button-wrapper-checked]:bg-slate-50"
    >
      <div className="w-full text-left space-y-2">
        <div>
          <Avatar
            shape="square"
            className="bg-white border border-slate-200 text-(--ant-color-primary)"
          >
            {React.createElement(icon, {
              size: 24,
            })}
          </Avatar>
        </div>
        <div>
          <AntdTitle level={5} className="m-0">
            {title}
          </AntdTitle>
        </div>
        <div>
          <AntdText type="secondary">{desc}</AntdText>
        </div>
      </div>
    </AntdRadioButton>
  );
};

const Tabs: React.FC = () => {
  const t = useTranslations('app.pages.dashboard.tabs');
  const { currentTab, setCurrentTab } = useDashboard();
  return (
    <Card>
      <AntdRadioGroup
        defaultValue={currentTab}
        block
        className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4"
        onChange={(e) => setCurrentTab(e.target.value)}
      >
        <RadioTab
          icon={RiHomeOfficeLine}
          title={t('isp.title')}
          value="isp"
          desc={t.rich('isp.desc', {
            strong: () => <span className="text-black font-medium">$0.15</span>,
          })}
        />
        <RadioTab
          icon={RiServerLine}
          title={t('datacenter.title')}
          value="datacenter"
          desc={t.rich('datacenter.desc', {
            strong: () => <span className="text-black font-medium">$0.15</span>,
          })}
        />
        <RadioTab
          icon={RiPinDistanceLine}
          title={t('residential.title')}
          value="residential"
          desc={t.rich('residential.desc', {
            strong: () => <span className="text-black font-medium">$0.15</span>,
          })}
        />
        <RadioTab
          icon={RiSmartphoneLine}
          title={t('mobile.title')}
          value="mobile"
          desc={t.rich('mobile.desc', {
            strong: () => <span className="text-black font-medium">$0.15</span>,
          })}
        />
      </AntdRadioGroup>
    </Card>
  );
};

export default Tabs;
