import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdInputPassword,
  AntdTitle,
} from '@/components/antd';
import { Link } from '@/i18n/navigation';
import Google from '@/icons/google';
import { Button, Divider } from 'antd';

export default function Page() {
  return (
    <>
      <AntdTitle level={2} className="mb-8 mt-0 text-center">
        Log in to your account
      </AntdTitle>
      <AntdForm layout="vertical">
        <AntdFormItem>
          <Button
            className="leading-none"
            size="large"
            block
            icon={<Google width={20} height={20} />}
          >
            Continue with Google
          </Button>
        </AntdFormItem>
        <Divider type="horizontal" plain>
          OR
        </Divider>
        <AntdFormItem label="Email">
          <AntdInput size="large" placeholder={'Email'} />
        </AntdFormItem>
        <AntdFormItem label="Password">
          <AntdInputPassword size="large" placeholder={'Password'} />
        </AntdFormItem>
        <AntdFormItem>
          <div className="flex justify-end">
            <Link
              className="text-black hover:text-(--ant-color-link)"
              href="/forgot-password"
            >
              Forgot your password?{' '}
            </Link>
          </div>
        </AntdFormItem>
        <AntdFormItem>
          <Button size="large" block type="primary">
            Log in
          </Button>
        </AntdFormItem>
        <AntdFormItem>
          <div className="text-center">
            <span>Don’t have an account yet? </span>
            <Link href="/signup">Sign Up</Link>
          </div>
        </AntdFormItem>
      </AntdForm>
    </>
  );
}
