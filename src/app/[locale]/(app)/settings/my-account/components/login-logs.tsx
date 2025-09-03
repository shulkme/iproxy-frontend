'use client';
import { getLoginLogList } from '@/apis/logs';
import { LoginLogRecord } from '@/apis/logs/types';
import { AntdTitle } from '@/components/antd';
import {
  RemixiconComponentType,
  RiComputerLine,
  RiQuestionMark,
  RiSmartphoneLine,
} from '@remixicon/react';
import { useAntdTable } from 'ahooks';
import { Avatar, Card, Col, Row, Table } from 'antd';
import React from 'react';

const DeviceIcon: React.FC<{
  type: string;
}> = ({ type }) => {
  let icon: RemixiconComponentType;
  switch (type) {
    case 'PC':
      icon = RiComputerLine;
      break;
    case 'iPhone':
      icon = RiSmartphoneLine;
      break;
    default:
      icon = RiQuestionMark;
  }
  return (
    <Avatar
      className="bg-(--ant-color-primary)"
      shape="square"
      size={40}
      icon={React.createElement(icon, {
        size: 20,
      })}
    />
  );
};

const LoginLogs: React.FC = () => {
  const { tableProps } = useAntdTable(async ({ current, pageSize }, params) => {
    return await getLoginLogList({
      page: current,
      size: pageSize,
      ...params,
    }).then((res) => ({
      list: res.data.items,
      total: res.data.total,
    }));
  });

  return (
    <Card>
      <AntdTitle level={5} className="mb-6">
        Login activity history
      </AntdTitle>
      <Table<LoginLogRecord>
        rowKey="id"
        scroll={{
          x: 1200,
        }}
        columns={[
          {
            title: 'Device',
            render: (_, record) => {
              return (
                <Row gutter={8} wrap={false}>
                  <Col flex="none">
                    <DeviceIcon type={record.device} />
                  </Col>
                  <Col flex="auto">
                    <div>{record.browser}</div>
                    <div className="text-xs text-black/50">{record.os}</div>
                  </Col>
                </Row>
              );
            },
          },
          {
            title: 'Location',
            render: (_, record) => {
              return (
                <>
                  {[record.country, record.region, record.city]
                    .filter(Boolean)
                    .join('/')}
                </>
              );
            },
          },
          {
            title: 'Login IP',
            dataIndex: 'ip',
          },
          {
            title: 'Login Time',
            dataIndex: 'login_time',
          },
        ]}
        {...tableProps}
        pagination={{
          hideOnSinglePage: true,
          ...tableProps.pagination,
        }}
      />
    </Card>
  );
};

export default LoginLogs;
