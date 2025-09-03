'use client';
import { changePassword } from '@/apis/user';
import {
  AntdForm,
  AntdFormItem,
  AntdInputPassword,
  AntdTitle,
} from '@/components/antd';
import { useIdentity } from '@/providers/identity';
import { useRequest } from 'ahooks';
import { App, Card, Descriptions, FormProps, Modal } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';

const UserInfo: React.FC = () => {
  const { user, logout } = useIdentity();
  const [form] = AntdForm.useForm();
  const [open, setOpen] = useState(false);
  const { message } = App.useApp();

  const { run: doSubmit, loading: submitting } = useRequest(changePassword, {
    manual: true,
    onSuccess: () => {
      message.success('Success');
      setOpen(false);
      logout();
    },
    onError: (e) => {
      message.error(e.message || 'Change failed');
    },
  });

  const onFinish: FormProps['onFinish'] = (values) => {
    doSubmit(values);
  };

  return (
    <>
      <Card>
        <AntdTitle level={5} className="mb-6">
          Account Detail
        </AntdTitle>
        <div>
          <Descriptions
            layout="vertical"
            column={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            classNames={{
              content: 'font-medium text-base',
            }}
            items={[
              {
                label: 'Username',
                children: user?.username || '--',
              },
              {
                label: 'Email',
                children: user?.email || '--',
              },
              {
                label: 'Registration time',
                children: user?.created_time
                  ? dayjs(user.created_time).format('LLL')
                  : '--',
              },
              {
                label: 'Password',
                children: (
                  <div className="space-x-1">
                    <span>******</span>
                    <a
                      className="text-sm font-normal"
                      onClick={() => setOpen(true)}
                    >
                      Change Password
                    </a>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </Card>

      <Modal
        open={open}
        title={'Change Password'}
        onCancel={() => setOpen(false)}
        onOk={form.submit}
        okText={'Update'}
        afterClose={() => form.resetFields()}
        okButtonProps={{
          loading: submitting,
        }}
        cancelButtonProps={{
          disabled: submitting,
        }}
      >
        <AntdForm
          form={form}
          layout="vertical"
          requiredMark={false}
          validateTrigger={['onBlur']}
          disabled={submitting}
          onFinish={onFinish}
        >
          <AntdFormItem
            name="old_password"
            messageVariables={{
              label: 'Old Password',
            }}
            label="Old Password"
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
            <AntdInputPassword size="large" placeholder={'Old Password'} />
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
        </AntdForm>
      </Modal>
    </>
  );
};

export default UserInfo;
