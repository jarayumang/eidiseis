"use client"

import React from "react";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"

function LandingPage() {
  const router = useRouter();

  const getRandomColor = () => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500', 'bg-indigo-500', 'bg-pink-500', 'bg-gray-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };  

  const getRandomRoundedCorner = () => {
    const corners = ['rounded-tl-full', 'rounded-tr-full', 'rounded-bl-full', 'rounded-br-full', 'rounded-full'];
    return corners[Math.floor(Math.random() * corners.length)];
  };

  const getRandomStyle = () => {
    const backgroundColor = getRandomColor();
    const borderRadius = getRandomRoundedCorner();
  
    return {
      backgroundColor,
      borderRadius,
    };
  };

  const GridItem = () => {
    const styles = getRandomStyle();
  
    return (
      <div className={`${styles.backgroundColor} ${styles.borderRadius}`}>
      </div>
    );
  };

  const gridItems = Array.from({ length: 12 }, (_, index) => <GridItem key={index} />);

  return (
    <div className="w-full h-full flex flex-row p-10">
      <div className="w-2/5 flex flex-col justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            className="mx-3"
            width={40}
            height={40}
            priority
          />
          <div className="w-2/3 flex flex-row justify-evenly items-center">
            <Button variant="link" className="text-white uppercase">Solutions</Button>
            <Button variant="link" className="text-white uppercase">Pricing</Button>
            <Button variant="link" className="text-white uppercase">About us</Button>
          </div>
        </div>
        <div>
          <h1 className="text-white text-8xl py-5">Get your work done together</h1>
          <p className="text-white text-3xl py-5">All in one application for all of your needs</p>
          <Button className="my-5" onClick={() => router.push('/signup')}>Sign up</Button>
        </div>
      </div>
      <div className="w-3/5 grid grid-cols-4 grid-rows-3">
        {gridItems}
      </div>
    </div>
  );
}

export default LandingPage;