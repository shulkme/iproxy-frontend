import Header from '@/app/[locale]/(app)/components/header';
import Sidebar from '@/app/[locale]/(app)/components/sidebar';
import { AntdContent, AntdLayout } from '@/components/antd';
import { AuthorizedProvider } from '@/providers/authorized';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <AuthorizedProvider>
      <AntdLayout hasSider className="min-h-screen bg-slate-100">
        <Sidebar />
        <AntdLayout>
          <Header />
          <AntdContent>{children}</AntdContent>
        </AntdLayout>
      </AntdLayout>
    </AuthorizedProvider>
  );
}
