import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <div className="sticky top-0 h-16 bg-yellow-300"></div>
      {children}
    </div>
  );
}
