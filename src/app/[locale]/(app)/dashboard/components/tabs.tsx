import {
  AntdRadioButton,
  AntdRadioGroup,
  AntdText,
  AntdTitle,
} from '@/components/antd';
import {
  RiHomeOfficeLine,
  RiPinDistanceLine,
  RiServerLine,
  RiSmartphoneLine,
} from '@remixicon/react';
import { Avatar, Card } from 'antd';
import React from 'react';

const Tabs: React.FC = () => {
  return (
    <Card>
      <AntdRadioGroup
        defaultValue="1"
        block
        className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4"
      >
        <AntdRadioButton
          value="1"
          className="h-auto border border-transparent rounded-sm leading-none p-4 before:hidden hover:bg-slate-50 [&.ant-radio-button-wrapper-checked]:border-slate-200 [&.ant-radio-button-wrapper-checked]:bg-slate-50"
        >
          <div className="w-full text-left space-y-2">
            <div>
              <Avatar
                shape="square"
                className="bg-white border border-slate-200 text-(--ant-color-primary)"
              >
                <RiPinDistanceLine size={24} />
              </Avatar>
            </div>
            <div>
              <AntdTitle level={5} className="m-0">
                Residential Proxies
              </AntdTitle>
            </div>
            <div>
              <AntdText type="secondary">
                From <span className="text-black font-medium">$0.5</span> / GB
              </AntdText>
            </div>
          </div>
        </AntdRadioButton>
        <AntdRadioButton
          value="2"
          className="h-auto border border-transparent rounded-sm leading-none p-4 before:hidden hover:bg-slate-50 [&.ant-radio-button-wrapper-checked]:border-slate-200 [&.ant-radio-button-wrapper-checked]:bg-slate-50"
        >
          <div className="w-full text-left space-y-2">
            <div>
              <Avatar
                shape="square"
                className="bg-white border border-slate-200 text-(--ant-color-primary)"
              >
                <RiHomeOfficeLine size={24} />
              </Avatar>
            </div>
            <div>
              <AntdTitle level={5} className="m-0">
                ISP Proxies
              </AntdTitle>
            </div>
            <div>
              <AntdText type="secondary">
                From <span className="text-black font-medium">$0.15</span> / IP
                / Day
              </AntdText>
            </div>
          </div>
        </AntdRadioButton>
        <AntdRadioButton
          value="3"
          className="h-auto border border-transparent rounded-sm leading-none p-4 before:hidden hover:bg-slate-50 [&.ant-radio-button-wrapper-checked]:border-slate-200 [&.ant-radio-button-wrapper-checked]:bg-slate-50"
        >
          <div className="w-full text-left space-y-2">
            <div>
              <Avatar
                shape="square"
                className="bg-white border border-slate-200 text-(--ant-color-primary)"
              >
                <RiServerLine size={24} />
              </Avatar>
            </div>
            <div>
              <AntdTitle level={5} className="m-0">
                Datacenter Proxies
              </AntdTitle>
            </div>
            <div>
              <AntdText type="secondary">
                From <span className="text-black font-medium">$0.11</span> / IP
                / Day
              </AntdText>
            </div>
          </div>
        </AntdRadioButton>
        <AntdRadioButton
          value="4"
          className="h-auto border border-transparent rounded-sm leading-none p-4 before:hidden hover:bg-slate-50 [&.ant-radio-button-wrapper-checked]:border-slate-200 [&.ant-radio-button-wrapper-checked]:bg-slate-50"
        >
          <div className="w-full text-left space-y-2">
            <div>
              <Avatar
                shape="square"
                className="bg-white border border-slate-200 text-(--ant-color-primary)"
              >
                <RiSmartphoneLine size={24} />
              </Avatar>
            </div>
            <div>
              <AntdTitle level={5} className="m-0">
                Mobile Proxies
              </AntdTitle>
            </div>
            <div>
              <AntdText type="secondary">
                From <span className="text-black font-medium">$5</span> / GB
              </AntdText>
            </div>
          </div>
        </AntdRadioButton>
      </AntdRadioGroup>
    </Card>
  );
};

export default Tabs;
