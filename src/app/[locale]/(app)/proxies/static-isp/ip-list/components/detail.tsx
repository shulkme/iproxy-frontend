'use client';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import {
  getProxyList,
  setProxyAutoRenew,
  updateProxyNotes,
} from '@/apis/proxy';
import { PROXY_STATUS_ENUM } from '@/apis/proxy/enums';
import { ProxyRecord } from '@/apis/proxy/types';
import { statusDirt } from '@/app/[locale]/(app)/proxies/static-isp/mixins';
import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdText,
  AntdTextArea,
} from '@/components/antd';
import countries from '@/constants/countries';
import { RiEditBoxLine, RiSearchLine } from '@remixicon/react';
import { useAntdTable, useRequest } from 'ahooks';
import {
  App,
  Avatar,
  Button,
  Card,
  FormProps,
  Modal,
  Select,
  Space,
  Switch,
  Table,
} from 'antd';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const NoteModal: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  record?: ProxyRecord;
  afterClose?: () => void;
  afterSubmit?: () => void;
}> = ({ open, setOpen, record, afterClose, afterSubmit }) => {
  const t = useTranslations('app.pages.static-isp.ip-list.note');
  const g = useTranslations('global');
  const [form] = AntdForm.useForm();
  const { message } = App.useApp();

  const _afterClose = () => {
    form.resetFields();
    afterClose?.();
  };

  const { loading: submitting, run: doSubmit } = useRequest(updateProxyNotes, {
    manual: true,
    onSuccess: () => {
      message.success(g('response.success'));
      setOpen(false);
      afterSubmit?.();
    },
    onError: (e) => {
      message.error(e.message || g('response.error'));
    },
  });

  const onFormFinish: FormProps['onFinish'] = (values) => {
    doSubmit(record!.id, values);
  };

  useEffect(() => {
    if (open && record) {
      form.setFieldValue('notes', record.notes);
    }
  }, [form, open, record]);
  return (
    <Modal
      afterClose={_afterClose}
      title={t('title')}
      open={open}
      onCancel={() => setOpen(false)}
      okButtonProps={{
        loading: submitting,
      }}
      cancelButtonProps={{
        disabled: submitting,
      }}
      onOk={form.submit}
    >
      <AntdForm form={form} layout="vertical" onFinish={onFormFinish}>
        <AntdFormItem
          name="notes"
          messageVariables={{
            label: t('form.note.label'),
          }}
        >
          <AntdTextArea rows={5} placeholder={t('form.note.placeholder')} />
        </AntdFormItem>
      </AntdForm>
    </Modal>
  );
};

const Detail: React.FC = () => {
  const [form] = AntdForm.useForm();
  const { message } = App.useApp();
  const [noteEditOpen, setNoteEditOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<ProxyRecord>();
  const t = useTranslations('app.pages.static-isp.ip-list.table');
  const g = useTranslations('global');

  const statusOptions = useMemo(
    () =>
      statusDirt.map((f) => ({
        label: g(`ip.status.${f.locale}`),
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

  const { tableProps, refresh, search, mutate } = useAntdTable(
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

  const setAutoRenew = useCallback(
    async (id: number, checked: boolean) => {
      mutate((origin) => {
        const list = (origin?.list || []).map((f) => {
          if (f.id === id) {
            return {
              ...f,
              loading: true,
              auto_renew: checked,
            };
          }
          return f;
        });
        return {
          total: origin?.total || 0,
          list,
        };
      });
      try {
        await setProxyAutoRenew([id], checked);
        message.success(g('response.success'));
        mutate((origin) => {
          const list = (origin?.list || []).map((f) => {
            if (f.id === id) {
              return {
                ...f,
                loading: false,
              };
            }
            return f;
          });
          return {
            total: origin?.total || 0,
            list,
          };
        });
      } catch (e) {
        message.error((e as Error).message || g('response.error'));
        mutate((origin) => {
          const list = (origin?.list || []).map((f) => {
            if (f.id === id) {
              return {
                ...f,
                loading: false,
                auto_renew: !checked,
              };
            }
            return f;
          });
          return {
            total: origin?.total || 0,
            list,
          };
        });
      }
    },
    [g, message, mutate],
  );

  const { submit } = search;

  const onFormValuesChange: FormProps['onValuesChange'] = (changedValues) => {
    if (!Object.keys(changedValues).includes('ip')) submit();
  };

  const onNoteEdit = (record: ProxyRecord) => {
    setCurrentRecord(record);
    setNoteEditOpen(true);
  };

  return (
    <>
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
          <Table<ProxyRecord & { loading?: boolean }>
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
                render: (value, record) => {
                  return (
                    <>
                      <span className="inline">{value}</span>
                      <span
                        className="inline cursor-pointer text-black/50 hover:text-(--ant-color-primary)"
                        onClick={() => onNoteEdit(record)}
                      >
                        <RiEditBoxLine className="inline" size={14} />
                      </span>
                    </>
                  );
                },
              },
              {
                title: t('columns.renewal'),
                width: 160,
                align: 'center',
                dataIndex: 'auto_renew',
                render: (value, record) => {
                  return (
                    <Switch
                      loading={record?.loading}
                      checked={!!value}
                      onChange={(checked) => setAutoRenew(record.id, checked)}
                    />
                  );
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
      <NoteModal
        open={noteEditOpen}
        setOpen={setNoteEditOpen}
        record={currentRecord}
        afterClose={() => setCurrentRecord(undefined)}
        afterSubmit={refresh}
      />
    </>
  );
};

export default Detail;
