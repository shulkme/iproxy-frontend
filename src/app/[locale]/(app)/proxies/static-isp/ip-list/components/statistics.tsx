'use client';
import { Card, Col, Row, Statistic } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Statistics: React.FC = () => {
  const t = useTranslations('app.pages.static-isp.ip-list.statistics');
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic title={t('remaining')} value={1234} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic title={t('extractable')} value={1234} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic title={t('expiring')} value={1234} />
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
