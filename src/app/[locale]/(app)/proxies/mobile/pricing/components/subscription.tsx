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
import { Card, Divider } from 'antd';
import React from 'react';

const PlanItem = () => {
  return (
    <div className="border border-slate-100 rounded-xs cursor-pointer p-4 space-y-2 hover:border-(--ant-color-primary)">
      <h3 className="font-bold text-lg">10GB</h3>
      <p className="font-medium">
        <span className="text-(--ant-color-primary)">$3.5</span>
        <span>/GB</span>
      </p>
      <div>
        <span className="text-black/50">Total:</span>
        <span className="font-medium">$35.00</span>
      </div>
    </div>
  );
};

const Subscription: React.FC = () => {
  const [form] = AntdForm.useForm();
  return (
    <Card>
      <div className="flex items-center justify-between gap-2 mb-6">
        <AntdTitle level={5} className="m-0">
          Subscription
        </AntdTitle>
        <AntdText>
          Save 60% on 500GB+ Plans{' '}
          <a className="underline" href="">
            Contact us
          </a>
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
        >
          <AntdFormItem name="duration" label="Duration" initialValue={30}>
            <AntdRadioGroup className="flex flex-wrap gap-4">
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={30}
              >
                30 Days
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={90}
              >
                90 Days
              </AntdRadioButton>
              <AntdRadioButton
                className="border rounded-xs before:hidden px-6"
                value={120}
              >
                120 Days
              </AntdRadioButton>
            </AntdRadioGroup>
          </AntdFormItem>
        </AntdForm>
      </div>
      <Divider type="horizontal" dashed />
      <div>
        <AntdParagraph strong>Plans</AntdParagraph>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-4">
          {Array.from({ length: 10 }).map((_, j) => (
            <PlanItem key={j} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Subscription;
