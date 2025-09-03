'use client';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import { getProxyList } from '@/apis/proxy';
import { ProxyRecord } from '@/apis/proxy/types';
import { statusDirt } from '@/app/[locale]/(app)/proxies/static-isp/mixins';
import { AntdForm, AntdFormItem, AntdInput } from '@/components/antd';
import { RiSearchLine } from '@remixicon/react';
import { useAntdTable } from 'ahooks';
import { Button, Card, FormProps, Select, Space, Table } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';

const Detail: React.FC = () => {
  const [form] = AntdForm.useForm();
  const t = useTranslations('app.pages.static-isp.ip-list.table');
  const g = useTranslations('global.ip');

  const statusOptions = useMemo(
    () =>
      statusDirt.map((f) => ({
        label: g(`status.${f.locale}`),
        value: f.value,
      })),
    [g],
  );

  const { tableProps, refresh, search } = useAntdTable(
    async ({ current, pageSize }, params) => {
      return await getProxyList({
        package_type: PACKAGE_TYPE_ENUM.ISP,
        page: current,
        size: pageSize,
        ...params,
      }).then((res) => {
        return {
          list: res.data.items,
          total: res.data.total,
        };
      });
    },
    {
      form,
    },
  );

  const { submit } = search;

  const onFormValuesChange: FormProps['onValuesChange'] = (changedValues) => {
    if (!Object.keys(changedValues).includes('ip')) submit();
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <AntdForm
            form={form}
            layout="inline"
            onValuesChange={onFormValuesChange}
          >
            <AntdFormItem name="ip">
              <AntdInput
                placeholder={t('filters.ip.placeholder')}
                suffix={<RiSearchLine size={16} />}
                allowClear
                onClear={submit}
                onPressEnter={submit}
              />
            </AntdFormItem>
            <AntdFormItem name="status">
              <Select
                options={statusOptions}
                placeholder={t('filters.status.placeholder')}
                style={{ width: 220 }}
              />
            </AntdFormItem>
          </AntdForm>
        </div>
        <div>
          <Space>
            <Button onClick={refresh}>{t('actions.refresh')}</Button>
            <Button type="primary">{t('actions.renewal')}</Button>
          </Space>
        </div>
      </div>
      <div>
        <Table<ProxyRecord>
          rowKey="id"
          rowSelection={{}}
          columns={[
            {
              title: t('columns.ip'),
              fixed: 'left',
              width: 200,
            },
            {
              title: t('columns.port'),
              width: 200,
            },
            {
              title: t('columns.username'),
              width: 200,
            },
            {
              title: t('columns.password'),
              width: 200,
            },
            {
              title: t('columns.region'),
              width: 200,
            },
            {
              title: t('columns.time-left'),
              width: 200,
            },
            {
              title: t('columns.expire-time'),
              width: 200,
            },
            {
              title: t('columns.status'),
              width: 200,
            },
            {
              title: t('columns.remark'),
              width: 200,
            },
            {
              title: t('columns.operate'),
              width: 200,
            },
          ]}
          scroll={{
            x: 1200,
          }}
          {...tableProps}
        />
      </div>
    </Card>
  );
};

export default Detail;
