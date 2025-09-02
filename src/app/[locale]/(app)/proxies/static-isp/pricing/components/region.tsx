'use client';
import { getAllPackages } from '@/apis/packages';
import { PackageRecord } from '@/apis/packages/types';
import {
  AntdForm,
  AntdFormItem,
  AntdParagraph,
  AntdRadioButton,
  AntdRadioGroup,
  AntdText,
  AntdTitle,
} from '@/components/antd';
import InputNumber from '@/components/antd/input-number';
import continents from '@/constants/continents';
import countries from '@/constants/countries';
import { useRequest } from 'ahooks';
import { Avatar, Card, ConfigProvider, Divider } from 'antd';
import { useTranslations } from 'next-intl';
import { group } from 'radash';
import React, { useMemo, useState } from 'react';

const RegionItem: React.FC<{
  readonly record: PackageRecord & { title: string; flag?: string };
}> = ({ record }) => {
  return (
    <div className="border border-slate-100 rounded-xs cursor-pointer p-4 hover:border-(--ant-color-primary)">
      <div className="flex gap-4 items-center">
        <div className="flex-none">
          <Avatar
            src={`https://flagicons.lipis.dev/flags/1x1/${record.flag || 'xx'}.svg`}
          />
        </div>
        <div className="flex-auto">
          <h3 className="font-bold">{record.title}</h3>
          <p className="font-medium">
            <span className="text-(--ant-color-primary)">$5</span>
            <span>/IP</span>
          </p>
        </div>
        <div className="flex-none">
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  controlHeightXS: 24,
                  controlHeightSM: 24,
                  controlHeight: 32,
                  controlHeightLG: 40,
                  contentFontSizeSM: 12,
                },
                InputNumber: {
                  controlHeightXS: 24,
                  controlHeightSM: 24,
                  controlHeight: 32,
                  controlHeightLG: 40,
                },
              },
            }}
          >
            <InputNumber
              min={0}
              max={10000}
              size="small"
              style={{
                width: 48,
              }}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

const Region: React.FC = () => {
  const [form] = AntdForm.useForm();
  const [packages, setPackages] = useState<PackageRecord[]>([]);
  const t = useTranslations();

  useRequest(getAllPackages, {
    onSuccess: (res) => {
      setPackages(res.data);
    },
  });

  const data = useMemo(() => {
    const groups = group(packages, (f) => f.continent);
    return Object.entries(groups).map(([continentCode, packageItems]) => {
      const continent = continents.find((f) => f.code === continentCode);
      const title = continent ? t(continent.locale) : continentCode;
      return {
        title,
        key: continentCode,
        items: (packageItems || []).map((pg) => {
          const country = countries.find((f) => f.iso === pg.country);
          const title = country ? t(country.locale) : pg.country;
          return {
            title,
            flag: country?.iso2.toLowerCase(),
            ...pg,
          };
        }),
      };
    });
  }, [packages, t]);

  const continentOptions = useMemo(() => {
    return data.map((d) => {
      return {
        label: d.title,
        value: d.key,
      };
    });
  }, [data]);

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
        {data.map((group) => (
          <div key={group.key}>
            <AntdParagraph strong>{group.title}</AntdParagraph>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] gap-4">
              {group.items.map((record) => (
                <RegionItem key={record.id} record={record} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Region;
