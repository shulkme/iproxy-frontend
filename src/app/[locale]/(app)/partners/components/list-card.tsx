'use client';
import { RiBookOpenLine, RiGlobalLine } from '@remixicon/react';
import { Button, Card, ConfigProvider } from 'antd';
import React from 'react';

const ListCard: React.FC<{
  cover: string;
  title: string;
  guide: string;
  link: string;
}> = ({ cover }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            actionsLiMargin: '0',
            bodyPadding: 0,
          },
          Button: {
            borderRadius: 0,
          },
        },
      }}
    >
      <Card
        classNames={{
          cover: 'p-[1px]',
        }}
        cover={<img alt="" src={cover} />}
        actions={[
          <Button
            icon={<RiBookOpenLine size={14} />}
            type="text"
            block
            key="docs"
          >
            Use Guide
          </Button>,
          <Button icon={<RiGlobalLine size={14} />} type="text" block key="web">
            View Site
          </Button>,
        ]}
      ></Card>
    </ConfigProvider>
  );
};

export default ListCard;
