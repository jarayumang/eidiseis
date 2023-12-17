'use client'

import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CandlestickChart, Kanban, LayoutPanelLeft, Library, LogOut, MessageCircle, Settings, StickyNote } from 'lucide-react';

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-[5%] bg-blackground flex flex-col justify-between items-center my-5 border-r border-r-[#1f1e30]">
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={50}
        height={50}
        priority
      />
      <div className='flex flex-col'>
        <LayoutPanelLeft  className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/dashboard')} />
        <Library className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/library')} />
        <MessageCircle className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/messages')} />
        <StickyNote className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/notes')} />
        <Kanban className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/project')} />
        <CandlestickChart className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/stocks')} />
        <Settings className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/settings')} />
      </div>
      <div>
        <LogOut className='w-7 h-7 text-white m-5' />
      </div>
    </div>
  );
};

export default Sidebar;