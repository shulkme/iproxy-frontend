import { AntdForm, AntdFormItem, AntdTextArea } from '@/components/antd';
import { Button, Card, Col, InputNumber, Row, Select } from 'antd';
import React from 'react';

const Result: React.FC = () => {
  return (
    <div className="sticky bottom-0 xl:top-36 xl:bottom-auto">
      <Card
        title={'Result'}
        className="xl:h-[calc(100vh-144px)] xl:flex xl:flex-col"
        classNames={{
          header: 'flex-none',
          body: 'h-full flex-auto',
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-auto">
            <AntdForm layout="vertical">
              <AntdFormItem label="Output format">
                <Select />
              </AntdFormItem>
              <AntdFormItem label="Quantity">
                <InputNumber style={{ width: '100%' }} />
              </AntdFormItem>
              <AntdFormItem label="Output">
                <AntdTextArea rows={8} />
              </AntdFormItem>
            </AntdForm>
          </div>
          <div className="flex-none">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={12} lg={24} xl={12}>
                <Button type="primary" block>
                  Generate
                </Button>
              </Col>
              <Col xs={24} sm={12} md={12} lg={24} xl={12}>
                <Button block>Download</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Result;
