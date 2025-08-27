import { AntdInput, AntdTitle } from '@/components/antd';
import { Button, Card } from 'antd';
import React from 'react';

const CDKey: React.FC = () => {
  return (
    <Card>
      <AntdTitle level={5} className="mt-0 mb-4">
        Exchange CDKey
      </AntdTitle>
      <div>
        <AntdInput
          placeholder="CDKey"
          size="small"
          suffix={
            <Button size="small" type="primary">
              Exchange
            </Button>
          }
        />
      </div>
    </Card>
  );
};

export default CDKey;
