'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const UpdateProfileForm = () => {
     const router = useRouter();
    const onSubmit = async(e)=>{
        e.preventDefault();

         const name = e.target.name.value;
         const image = e.target.image.value;

         await authClient.updateUser(
            {
                name,
                image,
                
            }
         )
         toast("Profile updated sucessfully!")
         router.push("/profile")

    }
    return (
        
              <div className='flex justify-center items-center h-[80vh]'>
             <Form className="flex w-96 flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-xs" onSubmit={onSubmit}>
                <h1 className='text-xl font-bold text-center'>Update Your Profile</h1>
    <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your image URL" />
                  </TextField>
      <div>
      
              <Button type="submit" className="w-full bg-linear-to-r from-pink-500 via-purple-500 to-yellow-300 transition-all duration-300 hover:scale-110 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:border-blue-500">Update</Button>
     
      </div>
      
    </Form> 
        </div>
              
    );
};

export default UpdateProfileForm;