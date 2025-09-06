'use client';
import {
  AntdForm,
  AntdFormItem,
  AntdRadioButton,
  AntdRadioGroup,
  AntdTitle,
} from '@/components/antd';
import { Button, Card, Col, Row } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Material: React.FC = () => {
  const t = useTranslations('app.pages.referral.program.material');
  return (
    <>
      <Card>
        <AntdTitle level={5} className="mb-6">
          {t('title')}
        </AntdTitle>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <AntdForm
              layout="vertical"
              initialValues={{
                size: '160_600',
                variant: 'brand',
                language: 'html',
              }}
            >
              <AntdFormItem name="size" label={t('form.size.label')}>
                <AntdRadioGroup className="flex flex-wrap gap-4">
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="160_600"
                  >
                    160 x 600
                  </AntdRadioButton>
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="468_60"
                  >
                    468 x 60
                  </AntdRadioButton>
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="630_330"
                  >
                    630 x 330
                  </AntdRadioButton>
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="728_90"
                  >
                    728 x 90
                  </AntdRadioButton>
                </AntdRadioGroup>
              </AntdFormItem>
              <AntdFormItem name="variant" label={t('form.variant.label')}>
                <AntdRadioGroup className="flex flex-wrap gap-4">
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="brand"
                  >
                    {t('form.variant.options.brand')}
                  </AntdRadioButton>
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="residential"
                  >
                    {t('form.variant.options.residential')}
                  </AntdRadioButton>
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="ips"
                  >
                    {t('form.variant.options.ips')}
                  </AntdRadioButton>
                </AntdRadioGroup>
              </AntdFormItem>
              <AntdFormItem name="language" label={t('form.language.label')}>
                <AntdRadioGroup className="flex flex-wrap gap-4">
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="html"
                  >
                    {t('form.language.options.html')}
                  </AntdRadioButton>
                  <AntdRadioButton
                    className="border rounded-(--ant-border-radius) before:hidden px-6"
                    value="bbcode"
                  >
                    {t('form.language.options.bbcode')}
                  </AntdRadioButton>
                </AntdRadioGroup>
              </AntdFormItem>

              <AntdFormItem name="code" label={t('form.code.label')}>
                <div className="bg-slate-50 py-2 px-4 text-black/50">
                  {
                    '<a href=https://www.lunaproxy.com/register?Invitation_code=LK2JCA5M target=_blank><img src=https://wapi.lunaproxy.com/static/index/img/index/Downloads/728_90-3.png?Invitation_code=LK2JCA5M alt=https://www.lunaproxy.com><a/>'
                  }
                </div>
              </AntdFormItem>
              <AntdFormItem>
                <Button type="primary">{t('form.copy.label')}</Button>
              </AntdFormItem>
            </AntdForm>
          </Col>
          <Col xs={24} lg={12}>
            <div className="bg-slate-50 p-8 min-h-full flex flex-col justify-center items-center">
              <img
                width={630}
                height={330}
                alt=""
                src="https://wapi.lunaproxy.com/static/index/img/ucenter/630_330-3.png"
                className="max-w-full max-h-full"
              />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Material;
