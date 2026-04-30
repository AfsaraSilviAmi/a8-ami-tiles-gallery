'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
     const userData = authClient.useSession();
         const user = userData.data?.user;
         console.log(user);
    
    return (
        <div className='my-10'>
           
                <p className='font-bold text-3xl text-center text-pink-500 mb-5'>Welcome, <span className='text-black'>{user?.name}</span></p>
                 <Card className='flex flex-col justify-center items-center h-[50vh] shadow-2xl w-[40%] mx-auto'>
                <Avatar className='w-40 h-40'>
                        <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy='no-referrer' />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                      </Avatar>
                      <p className='font-semibold text-2xl'>{user?.name}</p>
                      <p className='text-lg text-gray-600'>{user?.email}</p>
            </Card>
        </div>
    );
};

export default ProfilePage;