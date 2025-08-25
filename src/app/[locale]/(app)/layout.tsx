import Header from '@/app/[locale]/(app)/components/header';
import Sidebar from '@/app/[locale]/(app)/components/sidebar';
import { AntdContent, AntdLayout } from '@/components/antd';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <AntdLayout hasSider className="min-h-screen">
      <Sidebar />
      <AntdLayout>
        <Header />
        <AntdContent>{children}</AntdContent>
      </AntdLayout>
    </AntdLayout>
  );
}
