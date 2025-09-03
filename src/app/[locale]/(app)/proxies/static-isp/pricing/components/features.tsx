'use client';
import { AntdTitle } from '@/components/antd';
import { RiCheckLine } from '@remixicon/react';
import { Card, Col, Row } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Features: React.FC = () => {
  const t = useTranslations('app.pages.static-isp.pricing.features');
  return (
    <Card>
      <div className="mb-6">
        <AntdTitle level={5} className="m-0">
          {t('title')}
        </AntdTitle>
      </div>
      <div>
        <Row gutter={[16, 16]}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Col key={i} xs={12} sm={12} md={8} lg={8}>
              <div className="flex items-center gap-2">
                <span className="text-green-500">
                  <RiCheckLine size={16} />
                </span>
                <span>{t(`items.${i}`)}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Card>
  );
};

export default Features;
