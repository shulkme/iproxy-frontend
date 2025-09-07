'use client';
import { AntdForm, AntdFormItem, AntdInput } from '@/components/antd';
import { RiSearchLine } from '@remixicon/react';
import { Button, Card, Space, Table } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.pages.proxy-setting.whitelist');
  return (
    <div className="p-4 lg:p-8">
      <Card>
        <div className="flex items-center justify-between gap-2 mb-6">
          <div>
            <AntdForm layout="inline">
              <AntdFormItem>
                <AntdInput
                  placeholder={t('table.filters.ip.placeholder')}
                  suffix={<RiSearchLine size={16} />}
                />
              </AntdFormItem>
            </AntdForm>
          </div>
          <div>
            <Space size="middle">
              <Button type="primary">{t('table.actions.create')}</Button>
            </Space>
          </div>
        </div>
        <div>
          <Table
            scroll={{ x: 1200 }}
            columns={[
              {
                title: t('table.columns.ip'),
              },
              {
                title: t('table.columns.status'),
              },
              {
                title: t('table.columns.add-time'),
              },
              {
                title: t('table.columns.remark'),
              },
              {
                title: t('table.columns.operate'),
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
