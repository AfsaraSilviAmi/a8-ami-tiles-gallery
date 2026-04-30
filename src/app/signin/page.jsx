'use client'
import React from 'react';
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import {Icon} from "@iconify/react";
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const LogInPage = () => {
  const router = useRouter()
    const onSubmit = async(e) =>{
         e.preventDefault();

         const email = e.target.email.value;
         const password = e.target.password.value;

         const { data, error } = await authClient.signIn.email({
    email, // required
    password, // required
    rememberMe: true,
    
});
if(!error){
    toast("Login Successful!")
   setTimeout(() => {
    router.push("/")
  }, 1500) // 1.5 seconds
}
if(error){
    toast.error(error.message)
}
    }
    const handleGoogleSignIn = async()=>{
        const data = await authClient.signIn.social({
    provider: "google",
  });
  toast("Login Successful!")
    }
    return (
        <div className='flex justify-center items-center h-[80vh]'>
             <Form className="flex w-96 flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-xs" onSubmit={onSubmit}>
                <h1 className='font-semibold text-xl text-center'>Login Your Account</h1>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter Your email address" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit" className="bg-linear-to-r from-pink-500 via-purple-500 to-yellow-300 transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:border-blue-500">
          <Check />
          Login
        </Button>
        <Button type="reset" className="bg-gray-200 text-pink-500">
          Reset
        </Button>
      </div>
      <div className='flex justify-center font-semibold text-pink-400 text-xl'>OR</div>
      <div>
         <Button onClick={handleGoogleSignIn} className="w-full" variant="tertiary">
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      </div>
      <div>
        <p>Do not have an Account yet? Then, <Link href={"/signup"} className='text-blue-600'>Register</Link></p>
      </div>
    </Form> 
        </div>
    );
};

export default LogInPage;