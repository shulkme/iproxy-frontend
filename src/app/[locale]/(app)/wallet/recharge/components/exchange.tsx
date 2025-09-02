import { AntdParagraph, AntdText, AntdTitle } from '@/components/antd';
import InputNumber from '@/components/antd/input-number';
import { Link } from '@/i18n/navigation';
import WalletIcon from '@/icons/wallet-icon';
import { Button, Card, ConfigProvider, Space } from 'antd';
import React from 'react';

const Exchange: React.FC = () => {
  return (
    <>
      <Card>
        <div className="w-full overflow-hidden bg-blue-500/5 rounded-xs p-6 relative">
          <div className="absolute bottom-0 right-0 h-full w-1/3 bg-linear-[190deg] from-blue-200/50 to-transparent to-90% -skew-x-45 translate-x-1/2"></div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="flex-none text-(--ant-color-primary)">
              <WalletIcon width={32} height={32} />
            </div>
            <div className="flex-auto">
              <AntdParagraph strong className="m-0">
                Current Balance
              </AntdParagraph>
              <AntdTitle level={3} className="m-0">
                $1,234
              </AntdTitle>
            </div>
            <div className="flex-none">
              <Link href="/transactions">Transaction Details</Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <AntdTitle level={5} className="mb-8">
            Amount
          </AntdTitle>
          <ConfigProvider
            theme={{
              components: {
                InputNumber: {
                  inputFontSizeLG: 32,
                },
              },
            }}
          >
            <div>
              <InputNumber
                style={{ width: 200 }}
                defaultValue={100}
                size="large"
                variant="underlined"
                prefix={<span className="text-3xl">$</span>}
                min={100}
                max={10000}
                step={1}
              />
            </div>
            <div className="mt-8">
              <Space size="middle">
                <Button>+$10</Button>
                <Button>+$50</Button>
                <Button>+$100</Button>
                <Button>+$500</Button>
                <Button>+$1000</Button>
              </Space>
            </div>
            <div className="mt-4">
              <AntdText type="secondary">Minimum mount is 100 USD</AntdText>
            </div>
          </ConfigProvider>
        </div>
      </Card>
    </>
  );
};

export default Exchange;
