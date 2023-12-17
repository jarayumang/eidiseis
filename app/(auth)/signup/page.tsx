// pages/signup.tsx
"use client"

import React, { useState, FormEvent } from "react"
import signUp from "@/firebase/auth/signup"
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Raleway } from 'next/font/google'

export const raleway = Raleway({
  subsets: ["latin"],
  weight: "500"
})


function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.error(error);
    }

    console.log(result);
    return router.push("/signin");
  };

  return (
    <div className={`${raleway.className} w-full h-full flex flex-row`}>
      <div className="w-1/2 bg-blackish"> a</div>
      <div className="w-1/2 p-10 flex flex-col justify-center">
        <form onSubmit={handleForm} className="form">
          <div className="w-1/2">
            <h1 className="text-3xl text-blackish mb-5">Create your account</h1>
            <p className="text-blueish mb-5">Created for developers by developers</p>
            <Input className="mb-5" type="name" placeholder="Name" />
            <Input id="email" className="mb-5" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <Input id="password" className="mb-5" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <div className="flex items-center space-x-2 mb-8">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <Button className="w-full mb-5">Create my account</Button>
            <p className="text-center text-sm">Already have an account? <Link href="/signin" className="text-blackish">Sign In</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;