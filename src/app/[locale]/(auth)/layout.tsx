'use client';
import Cover from '@/app/[locale]/(auth)/components/cover';
import {
  AntdContent,
  AntdFooter,
  AntdHeader,
  AntdLayout,
  AntdSider,
} from '@/components/antd';
import { RiGlobalLine } from '@remixicon/react';
import { useResponsive } from 'ahooks';
import { Select } from 'antd';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const responsive = useResponsive();

  return (
    <AntdLayout className="min-h-screen" hasSider={responsive.lg}>
      {responsive.lg && (
        <AntdSider
          collapsible
          breakpoint="lg"
          collapsedWidth={0}
          theme="light"
          width={'35%'}
          className="bg-gray-50 relative"
          trigger={null}
        >
          <Cover />
        </AntdSider>
      )}
      <AntdLayout>
        <AntdHeader>
          <div className="flex justify-end p-8 pb-0">
            <Select
              variant="borderless"
              prefix={<RiGlobalLine size={18} />}
              defaultValue="en"
              options={[
                {
                  label: 'English',
                  value: 'en',
                },
                {
                  label: '简体中文',
                  value: 'zh',
                },
                {
                  label: '繁體中文',
                  value: 'tw',
                },
              ]}
            />
          </div>
        </AntdHeader>
        <AntdContent className="flex flex-col items-center justify-center">
          <div className="max-w-lg w-full mx-auto p-6">{children}</div>
        </AntdContent>
        <AntdFooter>
          <div className="text-sm text-black/50 text-center p-4">
            © {process.env.NEXT_PUBLIC_COPYRIGHT} {new Date().getFullYear()}
          </div>
        </AntdFooter>
      </AntdLayout>
    </AntdLayout>
  );
}
