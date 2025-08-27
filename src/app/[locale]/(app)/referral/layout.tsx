import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Referral program'} />
      <Navbar
        items={[
          {
            label: 'Referral program',
            key: '/referral/program',
          },
          {
            label: 'Referral details',
            key: '/referral/details',
          },
          {
            label: 'Conversion Record',
            key: '/referral/conversion',
          },
        ]}
      />
      <div className="p-8">{children}</div>
    </>
  );
}
