'use client';
import { resetPassword } from '@/apis/user';
import { ResetPasswordData } from '@/apis/user/types';
import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdInputPassword,
  AntdTitle,
} from '@/components/antd';
import { useRequest } from 'ahooks';
import { Alert, Button, FormProps, Result } from 'antd';
import { notFound, useSearchParams } from 'next/navigation';
import { omit } from 'radash';
import { useState } from 'react';

export default function Page() {
  const [form] = AntdForm.useForm();
  const [errMsg, setErrMsg] = useState<string>();
  const [showResult, setShowResult] = useState(false);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (!code) {
    notFound();
  }

  const { run: doSubmit, loading: submitting } = useRequest(resetPassword, {
    manual: true,
    onSuccess: () => {
      setErrMsg(undefined);
      form.resetFields();
      setShowResult(true);
    },
    onError: (e) => {
      setErrMsg(e.message);
    },
  });

  const onFinish: FormProps['onFinish'] = (values) => {
    doSubmit({
      ...(omit(values, ['confirm_password']) as ResetPasswordData),
    });
  };

  return showResult ? (
    <>
      <Result
        status="success"
        title={'Reset successful'}
        subTitle={
          <div>
            You can now log back into your account using your new password.
          </div>
        }
        extra={[
          <Button href="/login" block type="primary" key="back" size="large">
            Back to login
          </Button>,
        ]}
      />
    </>
  ) : (
    <>
      <AntdTitle level={2} className="mb-8 mt-0 text-center">
        Reset Password
      </AntdTitle>
      <AntdForm
        form={form}
        disabled={submitting}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        validateTrigger={['onBlur']}
        initialValues={{
          code,
        }}
      >
        {errMsg && (
          <AntdFormItem>
            <Alert showIcon type="error" message={errMsg} />
          </AntdFormItem>
        )}
        <AntdFormItem name="code" hidden>
          <AntdInput />
        </AntdFormItem>
        <AntdFormItem
          name="new_password"
          messageVariables={{
            label: 'New Password',
          }}
          label="New Password"
          rules={[
            {
              required: true,
            },
            {
              min: 6,
            },
            {
              max: 16,
            },
          ]}
        >
          <AntdInputPassword size="large" placeholder={'New Password'} />
        </AntdFormItem>
        <AntdFormItem
          name="confirm_password"
          messageVariables={{
            label: 'Confirm Password',
          }}
          label="Confirm Password"
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('new_password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('确认密码与新密码不一致'));
              },
            }),
          ]}
        >
          <AntdInputPassword size="large" placeholder={'Confirm Password'} />
        </AntdFormItem>
        <AntdFormItem>
          <Button
            loading={submitting}
            size="large"
            block
            type="primary"
            htmlType="submit"
          >
            Reset
          </Button>
        </AntdFormItem>
      </AntdForm>
    </>
  );
}
