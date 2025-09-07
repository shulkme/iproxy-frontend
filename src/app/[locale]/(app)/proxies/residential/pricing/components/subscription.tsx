'use client';
import { PackageRecord } from '@/apis/packages/types';
import { useCheckout } from '@/app/[locale]/(app)/proxies/residential/pricing/context';
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
import { Card, Divider, FormProps } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';

const PlanItem: React.FC<{
  readonly record: PackageRecord;
}> = ({ record }) => {
  const t = useTranslations('app.pages.residential.pricing.subscription');

  return (
    <AntdRadioButton
      value={record.id}
      className="block group/item h-auto border-[1px] before:hidden rounded-(--ant-border-radius) relative"
    >
      <div className="hidden group-[.ant-radio-button-wrapper-checked]/item:block absolute top-1 right-1 border-[5px] border-transparent border-t-(--ant-color-primary) border-r-(--ant-color-primary)" />
      <div className="cursor-pointer px-4 py-6 space-y-1 text-black/85">
        <h3 className="font-bold text-xl uppercase">{record.flow_name}</h3>
        <p className="font-medium m-0">
          <span>${record.price_per_gb.toLocaleString()}</span>
          <span>/GB</span>
        </p>
        <div>
          <span className="text-black/50">{t('plan.item.total')}</span>
          <span className="font-medium text-lg text-(--ant-color-primary)">
            ${record.flow_price.toLocaleString()}
          </span>
        </div>
      </div>
    </AntdRadioButton>
  );
};

const Subscription: React.FC = () => {
  const t = useTranslations('app.pages.residential.pricing.subscription');
  const [form] = AntdForm.useForm();
  const { openChatbot } = useChatbot();
  const { formData, packages, loading, setFormData } = useCheckout();

  const renderItems = useMemo(() => {
    return (packages || []).map((pg) => {
      return {
        ...pg,
      };
    });
  }, [packages]);

  const onFormValueChange: FormProps['onValuesChange'] = (_, values) => {
    setFormData(values);
  };

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
            ...formData,
          }}
          onValuesChange={onFormValueChange}
        >
          <AntdFormItem name="duration" label={t('filters.duration.label')}>
            <AntdRadioGroup className="flex flex-wrap gap-4">
              <AntdRadioButton
                className="border rounded-(--ant-border-radius) before:hidden px-6"
                value={30}
              >
                {t('filters.duration.unit', {
                  number: 30,
                })}
              </AntdRadioButton>
            </AntdRadioGroup>
          </AntdFormItem>
          <Divider type="horizontal" dashed />
          <AntdParagraph strong>{t('plan.title')}</AntdParagraph>
          {loading ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-4 animate-pulse">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="bg-slate-100 w-full h-40" />
              ))}
            </div>
          ) : (
            <AntdFormItem name="packageId">
              <AntdRadioGroup
                block
                className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-4"
              >
                {renderItems.map((item, j) => (
                  <PlanItem key={j} record={item} />
                ))}
              </AntdRadioGroup>
            </AntdFormItem>
          )}
        </AntdForm>
      </div>
    </Card>
  );
};

export default Subscription;
