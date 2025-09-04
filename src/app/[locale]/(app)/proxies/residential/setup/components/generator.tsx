'use client';
import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdParagraph,
  AntdRadioButton,
  AntdRadioGroup,
} from '@/components/antd';
import { RiAddLine } from '@remixicon/react';
import { Button, Card, Col, Divider, InputNumber, Row, Select } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const AccountPane = () => {
  const t = useTranslations('app.pages.residential.setup.generator.form');
  return (
    <>
      <Col span={24}>
        <AntdFormItem label={t('account.items.sub-account.label')}>
          <Row gutter={[24, 0]}>
            <Col xs={24} lg={12}>
              <AntdFormItem noStyle>
                <Select
                  placeholder={t('account.items.sub-account.placeholder')}
                />
              </AntdFormItem>
            </Col>
            <Col xs={24} lg={12}>
              <Button icon={<RiAddLine size={14} />}>
                {t('account.items.sub-account.extra.add')}
              </Button>
            </Col>
          </Row>
        </AntdFormItem>
      </Col>
      <Col span={24}>
        <Divider type="horizontal" dashed />
      </Col>
      <Col span={24}>
        <AntdParagraph strong>{t('proxy.title')}</AntdParagraph>
      </Col>
      <Col span={24}>
        <AntdFormItem label={t('proxy.items.region.label')}>
          <Row gutter={[24, 0]}>
            <Col xs={24} lg={12}>
              <AntdFormItem noStyle>
                <Select placeholder={t('proxy.items.region.placeholder')} />
              </AntdFormItem>
            </Col>
            <Col xs={24} lg={12}>
              <Button type="link">{t('proxy.items.region.extra.code')}</Button>
            </Col>
          </Row>
        </AntdFormItem>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.host.label')}>
          <Select placeholder={t('proxy.items.host.placeholder')} />
        </AntdFormItem>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.continent.label')}>
          <Select placeholder={t('proxy.items.continent.placeholder')} />
        </AntdFormItem>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.state.label')}>
          <Select placeholder={t('proxy.items.state.placeholder')} />
        </AntdFormItem>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.city.label')}>
          <Select placeholder={t('proxy.items.city.placeholder')} />
        </AntdFormItem>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.username.label')}>
          <AntdInput placeholder={t('proxy.items.username.placeholder')} />
        </AntdFormItem>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.password.label')}>
          <AntdInput placeholder={t('proxy.items.password.placeholder')} />
        </AntdFormItem>
      </Col>
    </>
  );
};

const WhitelistPane = () => {
  const t = useTranslations('app.pages.residential.setup.generator.form');
  return (
    <>
      <Col span={24}>
        <AntdParagraph strong>{t('proxy.title')}</AntdParagraph>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.endpoint-type.label')}>
          <AntdRadioGroup defaultValue={'country'} block className="flex gap-4">
            <AntdRadioButton
              value="country"
              className="before:hidden border rounded-(--ant-border-radius) after:block after:absolute after:top-1 after:right-1 after:border-[5px] after:rounded-xs after:border-transparent [&.ant-radio-button-wrapper-checked]:after:border-t-(--ant-color-primary) [&.ant-radio-button-wrapper-checked]:after:border-r-(--ant-color-primary)"
            >
              {t('proxy.items.endpoint-type.options.country')}
            </AntdRadioButton>
            <AntdRadioButton
              value="api"
              className="before:hidden border rounded-(--ant-border-radius) after:block after:absolute after:top-1 after:right-1 after:border-[5px] after:rounded-xs after:border-transparent [&.ant-radio-button-wrapper-checked]:after:border-t-(--ant-color-primary) [&.ant-radio-button-wrapper-checked]:after:border-r-(--ant-color-primary)"
            >
              {t('proxy.items.endpoint-type.options.api')}
            </AntdRadioButton>
          </AntdRadioGroup>
        </AntdFormItem>
      </Col>
      <Col span={24}>
        <AntdFormItem label={t('proxy.items.region.label')}>
          <Row gutter={[24, 0]}>
            <Col xs={24} lg={12}>
              <AntdFormItem noStyle>
                <Select placeholder={t('proxy.items.region.placeholder')} />
              </AntdFormItem>
            </Col>
            <Col xs={24} lg={12}>
              <Button type="link">{t('proxy.items.region.extra.code')}</Button>
            </Col>
          </Row>
        </AntdFormItem>
      </Col>
      <Col xs={24} lg={12}>
        <AntdFormItem label={t('proxy.items.number.label')}>
          <InputNumber
            style={{ width: '100%' }}
            placeholder={t('proxy.items.number.placeholder')}
          />
        </AntdFormItem>
      </Col>
    </>
  );
};

const Generator: React.FC = () => {
  const t = useTranslations('app.pages.residential.setup.generator');
  const [mode, setMode] = useState('username-password');
  return (
    <Card
      activeTabKey={mode}
      onTabChange={setMode}
      tabList={[
        {
          key: 'username-password',
          label: t('tabs.pwd'),
        },
        {
          key: 'whitelist',
          label: t('tabs.whitelist'),
        },
      ]}
    >
      <AntdForm layout="vertical">
        <Row gutter={[24, 0]}>
          {mode === 'username-password' && <AccountPane />}
          {mode === 'whitelist' && <WhitelistPane />}
          <Col span={24}>
            <Divider type="horizontal" dashed />
          </Col>
          <Col span={24}>
            <AntdParagraph strong>{t('form.session.title')}</AntdParagraph>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={t('form.session.items.type.label')}>
              <Select placeholder={t('form.session.items.type.placeholder')} />
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={t('form.session.items.duration.label')}>
              <AntdInput
                suffix={t('form.session.items.duration.suffix')}
                placeholder={t('form.session.items.duration.placeholder')}
              />
            </AntdFormItem>
          </Col>
        </Row>
      </AntdForm>
    </Card>
  );
};

export default Generator;
