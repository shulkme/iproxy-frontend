'use client';
import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdParagraph,
} from '@/components/antd';
import { RiAddLine } from '@remixicon/react';
import { Button, Card, Col, Divider, Row, Select } from 'antd';
import React, { useState } from 'react';

const AccountPane = () => {
  return (
    <>
      <AntdForm layout="vertical">
        <Row gutter={[24, 0]}>
          <Col span={24}>
            <AntdFormItem label="Select Account">
              <Row gutter={[24, 0]}>
                <Col xs={24} lg={12}>
                  <AntdFormItem noStyle>
                    <Select placeholder={'select'} />
                  </AntdFormItem>
                </Col>
                <Col xs={24} lg={12}>
                  <Button icon={<RiAddLine size={14} />}>
                    Add sub-account
                  </Button>
                </Col>
              </Row>
            </AntdFormItem>
          </Col>
          <Col span={24}>
            <Divider type="horizontal" dashed />
          </Col>
          <Col span={24}>
            <AntdParagraph strong>Proxy generator</AntdParagraph>
          </Col>
          <Col span={24}>
            <AntdFormItem label="Country/Region">
              <Row gutter={[24, 0]}>
                <Col xs={24} lg={12}>
                  <AntdFormItem noStyle>
                    <Select placeholder={'Random'} />
                  </AntdFormItem>
                </Col>
                <Col xs={24} lg={12}>
                  <Button type="link">View country code</Button>
                </Col>
              </Row>
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'Host'}>
              <Select placeholder={'Random'} />
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'Continent'}>
              <Select placeholder={'Random'} />
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'Country/Region'}>
              <Select placeholder={'Random'} />
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'State'}>
              <Select placeholder={'Random'} />
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'City'}>
              <Select placeholder={'Random'} />
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'ASN'}>
              <Select placeholder={'Random'} />
            </AntdFormItem>
          </Col>
          <Col span={24}>
            <Divider type="horizontal" dashed />
          </Col>
          <Col span={24}>
            <AntdParagraph strong>Session settings</AntdParagraph>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'Session type'}>
              <Select placeholder={'Random'} />
            </AntdFormItem>
          </Col>
          <Col xs={24} lg={12}>
            <AntdFormItem label={'Duration'}>
              <AntdInput suffix={'Mins'} placeholder={'0'} />
            </AntdFormItem>
          </Col>
        </Row>
      </AntdForm>
    </>
  );
};

const WhitelistPane = () => {
  return <></>;
};

const Generator: React.FC = () => {
  const [mode, setMode] = useState('username-password');
  return (
    <Card
      activeTabKey={mode}
      onTabChange={setMode}
      tabList={[
        {
          key: 'username-password',
          label: 'Username/Password',
        },
        {
          key: 'whitelist',
          label: 'Whitelist',
        },
      ]}
    >
      {mode === 'username-password' && <AccountPane />}
      {mode === 'whitelist' && <WhitelistPane />}
    </Card>
  );
};

export default Generator;
