// pages/signin.tsx
"use client"

import React, { useState, FormEvent } from "react";
import signIn from "@/firebase/auth/signin";
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Raleway } from 'next/font/google'

export const raleway = Raleway({
  subsets: ["latin"],
  weight: "500"
})

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const { error } = await signIn(email, password);

    if (error) {
      return console.error(error);
    }

    return router.push("/dashboard");
  };

  return (
    <div className={`${raleway.className} w-full h-full flex flex-col justify-center items-center`}>
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className="mb-5"
        width={100}
        height={100}
        priority
      />
      <div className="w-1/4 p-10 flex flex-col justify-center bg-greyish rounded-3xl">
        <form onSubmit={handleForm} className="form">
          <div className="">
            <h1 className="text-3xl text-blackish mb-5">Sign In</h1>
            <p className="text-blueish mb-5">Login to manage your account</p>
            <Input id="email" className="mb-5" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <Input id="password" className="mb-5" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <Button className="w-full mb-5">Sign in</Button>
          </div>
        </form>
      </div>
      <div className="mt-5 text-center">
        <p className="text-center text-sm mb-3">Don't have an account? <Link href="/signin" className="text-blackish">Sign Up</Link></p>
        <Link href="/forgot-password" className="text-blackish text-sm">Forgot Password</Link>
      </div>
    </div>
  );
}

export default SignInPage;
