import {
  AntdForm,
  AntdFormItem,
  AntdInputPassword,
  AntdTitle,
} from '@/components/antd';
import { Button } from 'antd';

export default function Page() {
  return (
    <>
      <>
        <AntdTitle level={2} className="mb-8 mt-0 text-center">
          Reset Password
        </AntdTitle>
        <AntdForm layout="vertical">
          <AntdFormItem label="New password">
            <AntdInputPassword size="large" placeholder={'Password'} />
          </AntdFormItem>
          <AntdFormItem label="Confim password">
            <AntdInputPassword size="large" placeholder={'Password'} />
          </AntdFormItem>
          <AntdFormItem>
            <Button size="large" block type="primary">
              Reset
            </Button>
          </AntdFormItem>
        </AntdForm>
      </>
    </>
  );
}
