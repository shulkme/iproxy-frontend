'use client';
import { AntdForm, AntdFormItem, AntdTextArea } from '@/components/antd';
import { Button, Card, Col, InputNumber, Row, Select } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Result: React.FC = () => {
  const t = useTranslations('app.pages.residential.setup.result');
  return (
    <div className="sticky bottom-0 xl:top-36 xl:bottom-auto">
      <Card
        title={t('title')}
        className="xl:h-[calc(100vh-144px)] xl:flex xl:flex-col"
        classNames={{
          header: 'flex-none',
          body: 'h-full flex-auto',
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-auto">
            <AntdForm layout="vertical">
              <AntdFormItem label={t('form.format.label')}>
                <Select placeholder={t('form.format.placeholder')} />
              </AntdFormItem>
              <AntdFormItem label={t('form.quantity.label')}>
                <InputNumber
                  style={{ width: '100%' }}
                  placeholder={t('form.quantity.placeholder')}
                />
              </AntdFormItem>
              <AntdFormItem label={t('form.output.label')}>
                <AntdTextArea
                  rows={8}
                  placeholder={t('form.output.placeholder')}
                />
              </AntdFormItem>
            </AntdForm>
          </div>
          <div className="flex-none">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={12} lg={24} xl={12}>
                <Button type="primary" block>
                  {t('actions.generate')}
                </Button>
              </Col>
              <Col xs={24} sm={12} md={12} lg={24} xl={12}>
                <Button block>{t('actions.download')}</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Result;
