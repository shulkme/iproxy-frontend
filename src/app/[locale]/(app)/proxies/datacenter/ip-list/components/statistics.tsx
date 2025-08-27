import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';

const Statistics: React.FC = () => {
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic title="Remaining IPs" value={1234} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic title="Extractable IPs" value={1234} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic title="Expiring Soon" value={1234} />
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
