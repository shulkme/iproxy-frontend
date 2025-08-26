import { AntdTitle } from '@/components/antd';
import { Link } from '@/i18n/navigation';
import { RiFileCopyLine, RiGiftLine } from '@remixicon/react';
import { Avatar, Card, Divider, Input } from 'antd';
import React from 'react';

const Affiliate: React.FC = () => {
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
          Affiliate program
        </AntdTitle>
      </div>
      <div>
        <div>
          Invite friends and get{' '}
          <span className="text-orange-500 font-bold">10%</span> commission
        </div>
      </div>
      <Divider type="horizontal" />
      <div className="">
        <div className="font-medium mb-2">Withdrawable</div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">$1,234</div>
          <div>
            <Link href="/">Extract</Link>
          </div>
        </div>
      </div>
      <Divider type="horizontal" dashed />
      <div className="space-y-4">
        <div>
          <Input
            prefix={<span className="text-black/50">Invitation Code:</span>}
            value="xxxxxx"
            suffix={<RiFileCopyLine size={16} />}
          />
        </div>
        <div>
          <Input
            prefix={<span className="text-black/50">Invitation Link:</span>}
            value="https://www.example.com/inviteCode=xxxxxx"
            suffix={<RiFileCopyLine size={16} />}
          />
        </div>
      </div>
    </Card>
  );
};

export default Affiliate;
