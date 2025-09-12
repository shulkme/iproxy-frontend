'use client';
import { useLocalStorageState } from 'ahooks';
import { Alert } from 'antd';
import { useLocale } from 'next-intl';
import React from 'react';

const Tips: React.FC = () => {
  const locale = useLocale();
  const [show, setShow] = useLocalStorageState('MAINLAND_CHINA_TIPS', {
    defaultValue: true,
  });

  return (
    locale === 'zh' &&
    show && (
      <Alert
        banner
        message={'注意：所有类型IP仅支持在境外网络环境下使用!'}
        closable={{
          closeIcon: <a>我已知晓</a>,
        }}
        onClose={() => setShow(false)}
      />
    )
  );
};

export default Tips;
