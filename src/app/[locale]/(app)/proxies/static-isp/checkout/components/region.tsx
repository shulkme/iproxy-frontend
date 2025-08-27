'use client';
import {
  AntdForm,
  AntdFormItem,
  AntdParagraph,
  AntdRadioButton,
  AntdRadioGroup,
  AntdText,
  AntdTitle,
} from '@/components/antd';
import { Avatar, Card, Divider } from 'antd';
import React from 'react';

const RegionItem = () => {
  return (
    <div className="border border-slate-100 rounded-xs cursor-pointer p-4 hover:border-(--ant-color-primary)">
      <div className="flex gap-4">
        <div className="flex-none">
          <Avatar src="https://flagicons.lipis.dev/flags/1x1/us.svg" />
        </div>
        <div className="flex-auto">
          <h3 className="font-bold">Miami, US</h3>
          <p className="font-medium">
            <span className="text-(--ant-color-primary)">$5</span>
            <span>/IP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Region: React.FC = () => {
  const [form] = AntdForm.useForm();
  return (
    <Card>
      <div className="flex items-center justify-between gap-2 mb-6">
        <AntdTitle level={5} className="m-0">
          Region List
        </AntdTitle>
        <AntdText>
          Haven&#39;t found the locations you need?{' '}
          <a className="underline" href="">
            Contact us
          </a>
        </AntdText>
      </div>

      <div>
        <AntdForm
          form={form}
          layout="horizontal"
          labelCol={{
            span: 3,
          }}
          labelAlign="left"
        >
          <AntdFormItem name="duration" label="Duration" initialValue={30}>
            <AntdRadioGroup className="flex flex-wrap gap-4">
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={30}
              >
                30 Days
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={7}
              >
                7 Days
              </AntdRadioButton>
            </AntdRadioGroup>
          </AntdFormItem>
          <AntdFormItem name="type" label="IP Type" initialValue={'all'}>
            <AntdRadioGroup className="flex flex-wrap gap-4">
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="all"
              >
                All
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="native"
              >
                Native IP
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="isp"
              >
                Residential IP
              </AntdRadioButton>
            </AntdRadioGroup>
          </AntdFormItem>
          <AntdFormItem name="continent" label="Continent" initialValue={'all'}>
            <AntdRadioGroup className="flex flex-wrap gap-4">
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="all"
              >
                All
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="america"
              >
                America
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="europe"
              >
                Europe
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="aisa"
              >
                Aisa
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="africa"
              >
                Africa
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value="oceania"
              >
                Oceania
              </AntdRadioButton>
            </AntdRadioGroup>
          </AntdFormItem>
        </AntdForm>
      </div>
      <Divider type="horizontal" dashed />
      <div className="space-y-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <AntdParagraph strong>America</AntdParagraph>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-4">
              {Array.from({ length: 10 }).map((_, j) => (
                <RegionItem key={j} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Region;
