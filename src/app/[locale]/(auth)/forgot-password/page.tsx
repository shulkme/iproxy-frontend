import {
  AntdForm,
  AntdFormItem,
  AntdInput,
  AntdParagraph,
  AntdTitle,
} from '@/components/antd';
import { Link } from '@/i18n/navigation';
import { Button } from 'antd';

export default function Page() {
  return (
    <>
      <>
        <AntdTitle level={2} className="mb-8 mt-0 text-center">
          Forget Password
        </AntdTitle>
        <AntdParagraph>
          Please enter your registered email address and we will send you a link
          to reset your password
        </AntdParagraph>
        <AntdForm layout="vertical">
          <AntdFormItem label="Email">
            <AntdInput size="large" placeholder={'Email'} />
          </AntdFormItem>
          <AntdFormItem>
            <Button size="large" block type="primary">
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
    </>
  );
}
