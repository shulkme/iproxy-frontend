'use client';
import { AntdInput, AntdTitle } from '@/components/antd';
import { Link } from '@/i18n/navigation';
import { RiFileCopyLine, RiGiftLine } from '@remixicon/react';
import { Avatar, Card, Divider } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Referral: React.FC = () => {
  const t = useTranslations('app.pages.dashboard.referral');
  return (
    <Card
      className="bg-linear-to-b from-orange-50 to-transparent to-30%"
      classNames={{
        body: 'bg-transparent',
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar
          shape="square"
          className="bg-orange-50 text-orange-500 border border-orange-100"
        >
          <RiGiftLine size={24} />
        </Avatar>
        <AntdTitle level={5} className="m-0">
          {t('title')}
        </AntdTitle>
      </div>
      <div>
        {t.rich('subtitle', {
          strong: (chunks) => (
            <span className="text-orange-500 font-bold">{chunks}</span>
          ),
        })}
      </div>
      <Divider type="horizontal" />
      <div>
        <div className="font-medium mb-2">{t('withdrawable')}</div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">$0.00</div>
          <div>
            <Link href="/">{t('extract')}</Link>
          </div>
        </div>
      </div>
      <Divider type="horizontal" dashed />
      <div className="space-y-4">
        <div>
          <AntdInput
            prefix={<span className="text-black/50">{t('code')}</span>}
            value="xxxxxx"
            suffix={<RiFileCopyLine size={16} />}
          />
        </div>
        <div>
          <AntdInput
            prefix={<span className="text-black/50">{t('link')}</span>}
            value="https://www.example.com/inviteCode=xxxxxx"
            suffix={<RiFileCopyLine size={16} />}
          />
        </div>
      </div>
    </Card>
  );
};

export default Referral;
