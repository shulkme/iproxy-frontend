import { AntdTitle } from '@/components/antd';
import { RiCheckLine } from '@remixicon/react';
import { Card, Col, Row } from 'antd';
import React from 'react';

const Features: React.FC = () => {
  return (
    <Card>
      <div className="mb-6">
        <AntdTitle level={5} className="m-0">
          Features
        </AntdTitle>
      </div>
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={12} md={8} lg={8} xl={6}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>Real residential IP</span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>Real residential IP</span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>Real residential IP</span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>Real residential IP</span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>Real residential IP</span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">
                <RiCheckLine size={16} />
              </span>
              <span>Real residential IP</span>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default Features;
