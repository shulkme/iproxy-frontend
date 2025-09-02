'use client';
import { sendResetPasswordEmail } from '@/apis/user';
import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdParagraph,
  AntdTitle,
} from '@/components/antd';
import { Link } from '@/i18n/navigation';
import { useRequest } from 'ahooks';
import { Alert, Button, FormProps, Result } from 'antd';
import { useState } from 'react';

export default function Page() {
  const [form] = AntdForm.useForm();
  const [errMsg, setErrMsg] = useState<string>();
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState<string>();

  const { run: doSubmit, loading: submitting } = useRequest(
    sendResetPasswordEmail,
    {
      manual: true,
      onSuccess: () => {
        setErrMsg(undefined);
        form.resetFields();
        setShowResult(true);
      },
      onError: (e) => {
        setErrMsg(e.message);
      },
    },
  );

  const onFinish: FormProps['onFinish'] = (values) => {
    setEmail(values?.email);
    doSubmit(values);
  };

  return showResult ? (
    <>
      <Result
        status="success"
        title={'Verify Your Email'}
        subTitle={
          <div className="space-y-4">
            <div>We&#39;ve sent a confirmation link to</div>
            <div className="font-medium text-black text-base">{email}</div>
            <div>
              Please check your email to complete the final step to reset your
              password. Your link will be valid for 30 minutes.
            </div>
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
        Forget Password
      </AntdTitle>
      <AntdParagraph>
        Please enter your registered email address and we will send you a link
        to reset your password
      </AntdParagraph>
      <AntdForm
        form={form}
        disabled={submitting}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        validateTrigger={['onBlur']}
      >
        {errMsg && (
          <AntdFormItem>
            <Alert showIcon type="error" message={errMsg} />
          </AntdFormItem>
        )}
        <AntdFormItem
          name="email"
          messageVariables={{
            label: 'Email',
          }}
          label="Email"
          rules={[
            {
              required: true,
            },
            {
              type: 'email',
            },
          ]}
        >
          <AntdInput size="large" placeholder={'Email'} />
        </AntdFormItem>
        <AntdFormItem>
          <Button
            loading={submitting}
            size="large"
            block
            type="primary"
            htmlType="submit"
          >
            Send email
          </Button>
        </AntdFormItem>
        <AntdFormItem>
          <div className="text-center">
            <span>Remember your password? </span>
            <Link href="/login">Return to Log in</Link>
          </div>
        </AntdFormItem>
      </AntdForm>
    </>
  );
}
