'use client';
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
  const t = useTranslations();

  const statusOptions = useMemo(
    () =>
      statusDirt.map((f) => ({
        label: t(f.locale),
        value: f.value,
      })),
    [t],
  );

  const { tableProps, refresh, search } = useAntdTable(
    async ({ current, pageSize }, params) => {
      return await getProxyList({
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
                placeholder="IP Address"
                suffix={<RiSearchLine size={16} />}
                allowClear
                onClear={submit}
                onPressEnter={submit}
              />
            </AntdFormItem>
            <AntdFormItem name="status">
              <Select
                options={statusOptions}
                placeholder="Status"
                style={{ width: 220 }}
              />
            </AntdFormItem>
          </AntdForm>
        </div>
        <div>
          <Space>
            <Button onClick={refresh}>Refresh</Button>
            <Button type="primary">Renewal</Button>
          </Space>
        </div>
      </div>
      <div>
        <Table<ProxyRecord>
          rowKey="id"
          rowSelection={{}}
          columns={[
            {
              title: 'IP Address',
              fixed: 'left',
              width: 200,
            },
            {
              title: 'Port',
              width: 200,
            },
            {
              title: 'Username',
              width: 200,
            },
            {
              title: 'Password',
              width: 200,
            },
            {
              title: 'Region',
              width: 200,
            },
            {
              title: 'Time Left',
              width: 200,
            },
            {
              title: 'Expire Time',
              width: 200,
            },
            {
              title: 'Status',
              width: 200,
            },
            {
              title: 'Remark',
              width: 200,
            },
            {
              title: 'Operate',
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
