'use client';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import { PackageRecord } from '@/apis/packages/types';
import { getDurationPrice } from '@/app/[locale]/(app)/proxies/datacenter/mixins';
import {
  CheckoutRecord,
  useCheckout,
} from '@/app/[locale]/(app)/proxies/datacenter/pricing/context';
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
import { cn } from '@/utils/classname';
import { useRequest } from 'ahooks';
import {
  Avatar,
  Card,
  ConfigProvider,
  Divider,
  FormProps,
  InputNumberProps,
} from 'antd';
import { useTranslations } from 'next-intl';
import { group } from 'radash';
import React, { useEffect, useMemo, useState } from 'react';

const RegionItem: React.FC<{
  readonly record: CheckoutRecord;
  readonly duration: number;
}> = ({ record, duration }) => {
  const { setSku, hasSku, skus } = useCheckout();
  const [value, setValue] = useState(0);

  const price = useMemo(() => {
    return getDurationPrice(record, duration);
  }, [duration, record]);

  const handleCountChange: InputNumberProps['onChange'] = (val) => {
    if (typeof val === 'number') {
      const key = record.id.toString();
      setSku(key, {
        product: record,
        count: val,
      });
      setValue(val);
    }
  };

  useEffect(() => {
    if (skus.size === 0) {
      setValue(0);
    }
  }, [skus]);

  return (
    <div
      className={cn(
        'border border-slate-100 rounded-xs cursor-pointer p-4 hover:border-(--ant-color-primary)',
        hasSku(record.id.toString()) && 'border-(--ant-color-primary)',
      )}
    >
      <div className="flex gap-4 items-center">
        <div className="flex-none">
          <Avatar
            src={`https://flagicons.lipis.dev/flags/1x1/${record.flag || 'xx'}.svg`}
          />
        </div>
        <div className="flex-auto">
          <h3 className="font-bold">{record.title}</h3>
          <p className="font-medium">
            <span className="text-(--ant-color-primary)">${price}</span>
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
              value={value}
              min={0}
              max={10000}
              size="small"
              style={{
                width: 48,
              }}
              onChange={handleCountChange}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

const Region: React.FC = () => {
  const t = useTranslations();
  const [form] = AntdForm.useForm();
  const { formData, setFormData } = useCheckout();
  const { data: packages, loading } = useRequest(async () => {
    // return await getAllPackages({
    //   type: PACKAGE_TYPE_ENUM.ISP,
    // }).then((res) => res.data);
    return [
      {
        id: '1',
        continent: 'NA',
        country: 'USA',
        price_week: 3,
        price_month: 5,
        price_year: 60,
        price_quarter: 15,
        currency: 'USD',
        status: 1,
        sort: 0,
        type: PACKAGE_TYPE_ENUM.ISP,
      },
      {
        id: '2',
        continent: 'AS',
        country: 'HKN',
        price_week: 3,
        price_month: 5,
        price_year: 60,
        price_quarter: 15,
        currency: 'USD',
        status: 1,
        sort: 0,
        type: PACKAGE_TYPE_ENUM.ISP,
      },
    ] as PackageRecord[];
  });

  const duration = useMemo(() => {
    return Number(formData?.duration) || 0;
  }, [formData]);

  const renderItems = useMemo(() => {
    const type = formData?.continent || 'all';
    const items =
      type === 'all'
        ? packages || []
        : (packages || []).filter((f) => f.continent === type);
    const groups = group(items, (f) => f.continent);
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
  }, [packages, t, formData]);

  const continentOptions = useMemo(() => {
    const items = Object.keys(group(packages || [], (f) => f.continent));
    return items.map((key) => {
      const continent = continents.find((f) => f.code === key);
      const title = continent ? t(continent.locale) : key;
      return {
        label: title,
        value: key,
      };
    });
  }, [packages, t]);

  const onFormValueChange: FormProps['onValuesChange'] = (_, values) => {
    setFormData(values);
  };

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
          initialValues={{
            ...formData,
          }}
          onValuesChange={onFormValueChange}
        >
          <AntdFormItem name="duration" label="Duration">
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
                value={90}
              >
                90 Days
              </AntdRadioButton>
            </AntdRadioGroup>
          </AntdFormItem>
          <AntdFormItem name="continent" label="Continent">
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
        {loading ? (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div>
                  <div className="w-16 h-5 bg-slate-100 mb-4" />
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] gap-4">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="bg-slate-100 w-full h-19" />
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {renderItems.map((group) => (
              <div key={group.key}>
                <AntdParagraph strong>{group.title}</AntdParagraph>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] gap-4">
                  {group.items.map((record) => (
                    <RegionItem
                      key={record.id}
                      record={record}
                      duration={duration}
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Card>
  );
};

export default Region;
