'use client';
import { RiBookOpenLine, RiGlobalLine } from '@remixicon/react';
import { Button, Card, ConfigProvider } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const ListCard: React.FC<{
  cover: string;
  title: string;
  guide: string;
  link: string;
}> = ({ cover, link, title, guide }) => {
  const t = useTranslations('app.pages.partners.actions');
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
        cover={<img alt={title} src={cover} />}
        actions={[
          <Button
            className="flex items-center text-inherit"
            target="_blank"
            href={link}
            icon={<RiGlobalLine size={14} />}
            type="text"
            block
            key="web"
          >
            {t('view')}
          </Button>,
          <Button
            className="flex items-center text-inherit"
            target="_blank"
            href={guide}
            icon={<RiBookOpenLine size={14} />}
            type="text"
            block
            key="docs"
          >
            {t('guide')}
          </Button>,
        ]}
      ></Card>
    </ConfigProvider>
  );
};

export default ListCard;
