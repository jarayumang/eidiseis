'use client'

import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faBookOpen, faDatabase, faGear, faHouse, faInbox, faNoteSticky, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faHouse} className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/dashboard')} />
        <FontAwesomeIcon icon={faBookOpen} className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/library')} />
        <FontAwesomeIcon icon={faInbox} className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/messages')} />
        <FontAwesomeIcon icon={faNoteSticky} className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/notes')} />
        <FontAwesomeIcon icon={faDatabase} className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/project')} />
        <FontAwesomeIcon icon={faArrowTrendUp} className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/stocks')} />
        <FontAwesomeIcon icon={faGear} className='w-7 h-7 text-white m-5 cursor-pointer' type="button" onClick={() => router.push('/settings')} />
      </div>
      <div>
        <FontAwesomeIcon icon={faRightFromBracket} className='w-7 h-7 text-white m-5' />
      </div>
    </div>
  );
};

export default Sidebar;