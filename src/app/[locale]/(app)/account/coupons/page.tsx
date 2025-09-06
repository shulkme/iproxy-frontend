'use client';
import { AntdForm, AntdFormItem, AntdInput } from '@/components/antd';
import { RiSearchLine } from '@remixicon/react';
import { Card, Segmented, Table } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.pages.account.coupons');
  return (
    <div className="p-8">
      <Card>
        <div className="mb-6">
          <AntdForm layout="inline">
            <AntdFormItem>
              <Segmented
                options={[
                  {
                    label: t('table.filters.status.options.unused'),
                    value: '1',
                  },
                  {
                    label: t('table.filters.status.options.used'),
                    value: '2',
                  },
                  {
                    label: t('table.filters.status.options.expired'),
                    value: '3',
                  },
                ]}
              />
            </AntdFormItem>
            <AntdFormItem>
              <AntdInput
                placeholder={t('table.filters.name.placeholder')}
                suffix={<RiSearchLine size={16} />}
              />
            </AntdFormItem>
          </AntdForm>
        </div>
        <Table
          scroll={{
            x: 1200,
          }}
          columns={[
            {
              title: t('table.columns.name'),
            },
            {
              title: t('table.columns.code'),
            },
            {
              title: t('table.columns.type'),
            },
            {
              title: t('table.columns.value'),
            },
            {
              title: t('table.columns.usage-threshold'),
            },
            {
              title: t('table.columns.expires'),
            },
          ]}
        />
      </Card>
    </div>
  );
}
