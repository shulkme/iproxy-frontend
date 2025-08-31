import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdInputPassword,
  AntdTitle,
} from '@/components/antd';
import { Link } from '@/i18n/navigation';
import Google from '@/icons/google';
import { Button, Checkbox, Divider } from 'antd';

export default function Page() {
  return (
    <>
      <>
        <AntdTitle level={2} className="mb-8 mt-0 text-center">
          Create an account
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
          <AntdFormItem label={'Referral code'}>
            <AntdInput placeholder={'Optional'} />
          </AntdFormItem>
          <AntdFormItem>
            <div className="space-x-2">
              <Checkbox />
              <span>I agree to the</span>
              <Link href={'/'}>Terms of Service</Link>
              <span>and</span>
              <Link href={'/'}>Privacy Policy</Link>
            </div>
          </AntdFormItem>
          <AntdFormItem>
            <Button size="large" block type="primary">
              Create account
            </Button>
          </AntdFormItem>
          <AntdFormItem>
            <div className="text-center">
              <span>Already have an account?</span>
              <Link href="/login">Log in</Link>
            </div>
          </AntdFormItem>
        </AntdForm>
      </>
    </>
  );
}
