'use client';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import { getProxyStatistics } from '@/apis/proxy';
import { useRequest } from 'ahooks';
import { Card, Col, Row, Statistic } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Statistics: React.FC = () => {
  const t = useTranslations('app.pages.datacenter.ip-list.statistics');

  const { loading, data } = useRequest(async () => {
    return await getProxyStatistics(PACKAGE_TYPE_ENUM.IDC).then(
      (res) => res.data,
    );
  });

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic
            loading={loading}
            title={t('available')}
            value={data?.available}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic
            loading={loading}
            title={t('expiring')}
            value={data?.expiring_soon}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic
            loading={loading}
            title={t('renewal')}
            value={data?.auto_renew}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Statistic
            loading={loading}
            title={t('expired')}
            value={data?.expired}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
