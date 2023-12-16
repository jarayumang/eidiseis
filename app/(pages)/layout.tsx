import React, { ReactNode } from 'react';
import Sidebar from '@/components/sidenav';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
