'use client';
import { getAllPackages } from '@/apis/packages';
import {
  AntdForm,
  AntdFormItem,
  AntdParagraph,
  AntdRadioButton,
  AntdRadioGroup,
  AntdText,
  AntdTitle,
} from '@/components/antd';
import continents from '@/constants/continents';
import { useRequest } from 'ahooks';
import { Avatar, Card, Divider } from 'antd';
import { useTranslations } from 'next-intl';
import { group } from 'radash';
import React, { useState } from 'react';

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
  const t = useTranslations();
  const [continentOptions, setContinentOptions] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const { loading } = useRequest(getAllPackages, {
    onSuccess: (res) => {
      const list = group(res.data, (f) => f.continent);
      const continentKeys = Object.keys(list);
      setContinentOptions(
        continentKeys.map((key) => {
          const locale = continents.find((f) => f.code === key)?.locale;
          if (locale) {
            return {
              label: t(locale),
              value: key,
            };
          }
          return {
            label: key,
            value: key,
          };
        }),
      );
      console.log(list);
    },
  });

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
                value={7}
              >
                7 Days
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={30}
              >
                30 Days
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={60}
              >
                60 Days
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={90}
              >
                90 Days
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
              {continentOptions.map((option) => (
                <AntdRadioButton
                  key={option.value}
                  className="border rounded-xs before:hidden px-6"
                  value={option.value}
                >
                  {option.label}
                </AntdRadioButton>
              ))}
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
