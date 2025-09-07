'use client';
import {
  AntdForm,
  AntdFormItem,
  AntdParagraph,
  AntdRadioButton,
  AntdRadioGroup,
  AntdText,
  AntdTitle,
} from '@/components/antd';
import { useChatbot } from '@/providers/chatbot';
import { Card, Divider, Empty } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Subscription: React.FC = () => {
  const t = useTranslations('app.pages.mobile.pricing.subscription');
  const [form] = AntdForm.useForm();
  const { openChatbot } = useChatbot();
  return (
    <Card>
      <div className="flex items-center justify-between gap-2 mb-6">
        <AntdTitle level={5} className="m-0">
          {t('title')}
        </AntdTitle>
        <AntdText>
          {t.rich('tips', {
            link: (chunks) => <a onClick={openChatbot}>{chunks}</a>,
          })}
        </AntdText>
      </div>

      <div>
        <AntdForm
          form={form}
          layout="horizontal"
          labelCol={{
            span: 3,
          }}
          labelAlign="left"
          initialValues={{
            duration: 30,
          }}
        >
          <AntdFormItem name="duration" label={t('filters.duration.label')}>
            <AntdRadioGroup className="flex flex-wrap gap-4">
              <AntdRadioButton
                className="border rounded-(--ant-border-radius) before:hidden px-6"
                value={7}
              >
                {t('filters.duration.unit', {
                  number: 7,
                })}
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-(--ant-border-radius) before:hidden px-6"
                value={30}
              >
                {t('filters.duration.unit', {
                  number: 30,
                })}
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-(--ant-border-radius) before:hidden px-6"
                value={90}
              >
                {t('filters.duration.unit', {
                  number: 90,
                })}
              </AntdRadioButton>
            </AntdRadioGroup>
          </AntdFormItem>
        </AntdForm>
      </div>
      <Divider type="horizontal" dashed />
      <div>
        <AntdParagraph strong>{t('plan.title')}</AntdParagraph>
        <div className="">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      </div>
    </Card>
  );
};

export default Subscription;
