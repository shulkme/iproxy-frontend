'use client';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import { getProxyList } from '@/apis/proxy';
import { PROXY_STATUS_ENUM } from '@/apis/proxy/enums';
import { ProxyRecord } from '@/apis/proxy/types';
import { statusDirt } from '@/app/[locale]/(app)/proxies/datacenter/mixins';
import { AntdForm, AntdFormItem, AntdInput, AntdText } from '@/components/antd';
import countries from '@/constants/countries';
import { RiEditBoxLine, RiSearchLine } from '@remixicon/react';
import { useAntdTable } from 'ahooks';
import {
  Avatar,
  Button,
  Card,
  FormProps,
  Select,
  Space,
  Switch,
  Table,
} from 'antd';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import React, { useCallback, useMemo } from 'react';

const Detail: React.FC = () => {
  const [form] = AntdForm.useForm();
  const t = useTranslations('app.pages.datacenter.ip-list.table');
  const g = useTranslations('global.ip');

  const statusOptions = useMemo(
    () =>
      statusDirt.map((f) => ({
        label: g(`status.${f.locale}`),
        value: f.value,
      })),
    [g],
  );

  const statusLabelFilter = useCallback(
    (status: PROXY_STATUS_ENUM) => {
      return statusOptions.find((f) => f.value === status)?.label;
    },
    [statusOptions],
  );

  const generateFlag = useCallback((country: string) => {
    const key = countries.find((f) => f.iso3 === country)?.iso2?.toLowerCase();
    return `https://flagicons.lipis.dev/flags/1x1/${key || 'xx'}.svg`;
  }, []);

  const { tableProps, refresh, search } = useAntdTable(
    async ({ current, pageSize }, params) => {
      return await getProxyList({
        package_type: PACKAGE_TYPE_ENUM.IDC,
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
                allowClear
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
              dataIndex: 'ip',
              width: 200,
              render: (value, record) => {
                return (
                  <div className="flex gap-2 items-center">
                    <div className="flex-none leading-none">
                      <Avatar
                        size={24}
                        shape="circle"
                        src={generateFlag(record.country)}
                      />
                    </div>
                    <div className="flex-auto">
                      <AntdText strong copyable>
                        {value}
                      </AntdText>
                    </div>
                  </div>
                );
              },
            },
            {
              title: t('columns.port'),
              width: 140,
              render: (_, record) => {
                return (
                  <div className="text-xs text-black/50">
                    <div>
                      HTTP/S:{' '}
                      <span className="font-medium text-black">
                        {record.port_http}
                      </span>
                    </div>
                    <div>
                      SOCKS5:{' '}
                      <span className="font-medium text-black">
                        {record.port_socks}
                      </span>
                    </div>
                  </div>
                );
              },
            },
            {
              title: t('columns.username'),
              dataIndex: 'username',
              width: 140,
            },
            {
              title: t('columns.password'),
              dataIndex: 'password',
              width: 140,
            },
            {
              title: t('columns.time-left'),
              dataIndex: 'expire_at',
              width: 140,
              render: (value, record) => {
                return record.status === PROXY_STATUS_ENUM.EXPIRED
                  ? statusLabelFilter(PROXY_STATUS_ENUM.EXPIRED)
                  : dayjs().to(value, true);
              },
            },
            {
              title: t('columns.expire-time'),
              dataIndex: 'expire_at',
              width: 140,
              render: (value) => {
                return dayjs(value).format('YYYY-MM-DD');
              },
            },
            {
              title: t('columns.status'),
              dataIndex: 'status',
              width: 140,
              render: (value) => {
                return statusLabelFilter(value);
              },
            },
            {
              title: t('columns.remark'),
              dataIndex: 'notes',
              width: 140,
              render: (value) => {
                return (
                  <>
                    {value}
                    <span className="cursor-pointer text-black/50 hover:text-(--ant-color-primary)">
                      <RiEditBoxLine size={14} />
                    </span>
                  </>
                );
              },
            },
            {
              title: t('columns.renewal'),
              width: 160,
              align: 'center',
              render: () => {
                return <Switch />;
              },
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
