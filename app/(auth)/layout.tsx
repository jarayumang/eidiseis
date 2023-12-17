import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <body>
      <main className='h-screen'>{children}</main>
    </body>
  );
}
