import { AntdParagraph, AntdTitle } from '@/components/antd';
import { RiWalletLine } from '@remixicon/react';
import { Avatar, Button, Card } from 'antd';
import React from 'react';

const Wallet: React.FC = () => {
  return (
    <Card>
      <div className="flex items-center gap-4 mb-4">
        <Avatar
          shape="square"
          className="bg-blue-50 text-blue-500 border border-blue-100"
        >
          <RiWalletLine size={24} />
        </Avatar>
        <AntdTitle level={5} className="m-0">
          My Wallet
        </AntdTitle>
      </div>
      <div className="w-full overflow-hidden bg-blue-500/5 rounded-xs p-6 relative">
        <div className="absolute bottom-0 right-0 h-full w-1/3 bg-linear-[190deg] from-blue-200/50 to-transparent to-90% -skew-x-45 translate-x-1/2"></div>
        <div className="relative z-10">
          <AntdParagraph className="mb-2" type="secondary">
            Current balance
          </AntdParagraph>
          <div className="flex justify-between items-center">
            <AntdTitle level={3} className="m-0">
              $1,234
            </AntdTitle>
            <Button shape="round" size="small" type="primary">
              Recharge
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Wallet;
