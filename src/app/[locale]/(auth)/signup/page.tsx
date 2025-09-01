'use client';
import { getGoogleAuthLink } from '@/apis/auth';
import { registerUser } from '@/apis/user';
import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdInputPassword,
  AntdTitle,
} from '@/components/antd';
import { Link, useRouter } from '@/i18n/navigation';
import Google from '@/icons/google';
import { useIdentity } from '@/providers/identity';
import { setToken } from '@/utils/token';
import { useRequest } from 'ahooks';
import { Alert, Button, Checkbox, Divider, FormProps } from 'antd';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const { setUser } = useIdentity();
  const [form] = AntdForm.useForm();
  const [errMsg, setErrMsg] = useState<string>();
  const router = useRouter();

  const searchParams = useSearchParams();

  const redirect = searchParams.get('redirect') || '/dashboard';

  const { run: getGoogleAuth, loading: googleLoading } = useRequest(
    async () => {
      return await getGoogleAuthLink(window.location.hostname + redirect);
    },
    {
      manual: true,
      onSuccess: (res) => {
        window.location.href = res.data;
      },
      onError: (e) => {
        setErrMsg(e.message);
      },
    },
  );

  const { run: doSubmit, loading: submitting } = useRequest(registerUser, {
    manual: true,
    onSuccess: (res) => {
      const { access_token, user } = res.data;
      setUser(user);
      setToken(access_token);
      setErrMsg(undefined);
      form.resetFields();
      router.replace('/dashboard');
    },
    onError: (e) => {
      setErrMsg(e.message);
    },
  });

  const onFinish: FormProps['onFinish'] = (values) => {
    doSubmit(values);
  };
  return (
    <>
      <AntdTitle level={2} className="mb-8 mt-0 text-center">
        Create an account
      </AntdTitle>
      <AntdForm
        form={form}
        disabled={submitting}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        validateTrigger={['onBlur']}
      >
        <AntdFormItem>
          <Button
            loading={googleLoading}
            className="leading-none"
            size="large"
            block
            icon={<Google width={20} height={20} />}
            onClick={getGoogleAuth}
          >
            Continue with Google
          </Button>
        </AntdFormItem>
        <Divider type="horizontal" plain>
          OR
        </Divider>
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
        <AntdFormItem
          messageVariables={{
            label: 'Password',
          }}
          name="password"
          label="Password"
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
          <AntdInputPassword size="large" placeholder={'Password'} />
        </AntdFormItem>
        <AntdFormItem name="code" label={'Referral code'}>
          <AntdInput size="large" placeholder={'Optional'} />
        </AntdFormItem>
        <AntdFormItem
          name="agree"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message:
                'Please agree to the Service Agreement Privacy Policy and Refund Policy',
            },
          ]}
          validateTrigger={['onChange', 'onBlur']}
        >
          <Checkbox>
            <div className="space-x-2">
              <span>I agree to the</span>
              <Link href={'/'}>Terms of Service</Link>
              <span>and</span>
              <Link href={'/'}>Privacy Policy</Link>
            </div>
          </Checkbox>
        </AntdFormItem>
        <AntdFormItem>
          <Button
            loading={submitting}
            size="large"
            block
            type="primary"
            htmlType="submit"
          >
            Create account
          </Button>
        </AntdFormItem>
        <AntdFormItem>
          <div className="text-center">
            <span>Already have an account? </span>
            <Link href="/login">Log in</Link>
          </div>
        </AntdFormItem>
      </AntdForm>
    </>
  );
}
